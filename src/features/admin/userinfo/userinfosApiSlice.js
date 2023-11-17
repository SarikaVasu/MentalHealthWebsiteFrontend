import {
    createSelector,
    createEntityAdapter
} from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const userinfosAdapter = createEntityAdapter({}); //get normalised state, ids ans entity. Use ids to get data from entity
const initialState = userinfosAdapter.getInitialState() ;

export const userinfosApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserinfos: builder.query({
            query: () => ({
                url: '/userinfos',
                validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
                },
            }),
                // keepUnusedDataFor: 60,
            transformResponse: responseData => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id  //normalised data
                    return user
                });
                return userinfosAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (result, error, arg) => [
                { type: 'Userinfo', id: 'LIST'},
                ...result?.ids.map(id => ({ type: 'Userinfo', id }))
            ]
        
        }),
        addNewUserinfo: builder.mutation({
            query: initialUserData => ({
                url: '/userinfos',
                method: 'POST',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: [
                { type: 'Userinfo', id: "LIST" }
            ]
        }),
        updateAllUserinfo: builder.mutation({
            query: initialUserData => ({
                url: '/userinfos',
                method: 'PUT',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Userinfo', id: arg.id }
            ]
        }),
        updateUserinfo: builder.mutation({
            query: initialUserData => ({
                url: '/userinfos',
                method: 'PATCH',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Userinfo', id: arg.id }
            ]
        }),
        deleteUserinfo: builder.mutation({
            query: ({ id }) => ({
                url: `/userinfos`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Userinfo', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetUserinfosQuery,
    useAddNewUserinfoMutation,
    useUpdateAllUserinfoMutation,
    useUpdateUserinfoMutation,
    useDeleteUserinfoMutation,
} = userinfosApiSlice

// returns the query result object
export const selectUsersResult = userinfosApiSlice.endpoints.getUserinfos.select()

// creates memoized selector
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // Pass in a selector that returns the users slice of state
} = userinfosAdapter.getSelectors(state => selectUsersData(state) ?? initialState)