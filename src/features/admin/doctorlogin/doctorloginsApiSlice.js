import {
    createSelector,
    createEntityAdapter
} from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const doctorloginsAdapter = createEntityAdapter({}); //get normalised state, ids ans entity. Use ids to get data from entity
const initialState = doctorloginsAdapter.getInitialState() ;

export const doctorloginsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDoctors: builder.query({
            query: () => ({
                url: '/doctorlogins',
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
                return doctorloginsAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Doctorlogin', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Doctorlogin', id }))
                    ]
                } else return [{ type: 'Doctorlogin', id: 'LIST' }]
            }
        }),
        addNewDoctor: builder.mutation({
            query: initialUserData => ({
                url: '/doctorlogins',
                method: 'POST',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: [
                { type: 'Doctorlogin', id: "LIST" }
            ]
        }),
        updateDoctor: builder.mutation({
            query: initialUserData => ({
                url: '/doctorlogins',
                method: 'PATCH',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Doctorlogin', id: arg.id }
            ]
        }),
        deleteDoctor: builder.mutation({
            query: ({ id }) => ({
                url: `/doctorlogins`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Doctorlogin', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetDoctorsQuery,
    useAddNewDoctorMutation,
    useUpdateDoctorMutation,
    useDeleteDoctorMutation,
} = doctorloginsApiSlice

// returns the query result object
export const selectDoctorsResult = doctorloginsApiSlice.endpoints.getDoctors.select()

// creates memoized selector
const selectDoctorsData = createSelector(
    selectDoctorsResult,
    usersResult => usersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllDoctors,
    selectById: selectDoctorById,
    selectIds: selectDoctorIds
    // Pass in a selector that returns the users slice of state
} = doctorloginsAdapter.getSelectors(state => selectDoctorsData(state) ?? initialState)