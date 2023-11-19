import {
    createSelector,
    createEntityAdapter
} from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const appAdapter = createEntityAdapter({}); //get normalised state, ids ans entity. Use ids to get data from entity
const initialState = appAdapter.getInitialState() ;

export const appApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getApps: builder.query({
            query: () => ({
                url: '/appointments/:id',
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
                return appAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (result, error, arg) => [
                { type: 'Appointment', id: 'LIST'},
                ...result?.ids.map(id => ({ type: 'Appointment', id }))
            ]
        
        }),
        addNewApp: builder.mutation({
            query: initialUserData => ({
                url: '/appointments',
                method: 'POST',
                body: {
                    ...initialUserData
                }
            }),
            invalidatesTags: [
                { type: 'Appointment', id: "LIST" }
            ]
        }),
        updateAllApp: builder.mutation({
            query: initialUserData => ({
                url: '/appointments',
                method: 'PUT',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Appointment', id: arg.id }
            ]
        }),
        updateApp: builder.mutation({
            query: initialUserData => ({
                url: '/appointments',
                method: 'PATCH',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Appointment', id: arg.id }
            ]
        }),
        deleteApp: builder.mutation({
            query: ({ id }) => ({
                url: `/appointments`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Appointment', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetAppsQuery,
    useAddNewAppMutation,
    useUpdateAllAppMutation,
    useUpdateAppMutation,
    useDeleteAppMutation,
} = appApiSlice

// returns the query result object
export const selectUsersResult = appApiSlice.endpoints.getApps.select()

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
} = appAdapter.getSelectors(state => selectUsersData(state) ?? initialState)