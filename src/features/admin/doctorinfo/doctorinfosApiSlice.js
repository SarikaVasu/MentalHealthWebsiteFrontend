import {
    createSelector,
    createEntityAdapter
} from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';

const doctorinfosAdapter = createEntityAdapter({}); //get normalised state, ids ans entity. Use ids to get data from entity

const initialState = doctorinfosAdapter.getInitialState()

export const doctorinfosApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDoctorinfos: builder.query({
            query: () => ({
                url: '/doctorinfos',
                validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
                },
            }),
                // keepUnusedDataFor: 60,
            transformResponse: responseData => {
                const loadedDoctors = responseData.map(doctor => {
                    doctor.id = doctor._id  //normalised data
                    return doctor
                });
                return doctorinfosAdapter.setAll(initialState, loadedDoctors)
            },
            providesTags: (result, error, arg) => [
                { type: 'Doctorinfo', id: 'LIST'},
                ...result?.ids.map(id => ({ type: 'Doctorinfo', id }))
            ]
        
        }),
        addNewDoctorinfo: builder.mutation({
            query: initialUserData => ({
                url: '/doctorinfos',
                method: 'POST',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: [
                { type: 'Doctorinfo', id: "LIST" }
            ]
        }),
        updateAllDoctorinfo: builder.mutation({
            query: initialUserData => ({
                url: '/doctorinfos',
                method: 'PUT',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Doctorinfo', id: arg.id }
            ]
        }),
        updateDoctorinfo: builder.mutation({
            query: initialUserData => ({
                url: '/doctorinfos',
                method: 'PATCH',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Doctorinfo', id: arg.id }
            ]
        }),
        deleteDoctorinfo: builder.mutation({
            query: ({ id }) => ({
                url: `/doctorinfos`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Doctorinfo', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetDoctorinfosQuery,
    useAddNewDoctorinfoMutation,
    useUpdateAllDoctorinfoMutation,
    useUpdateDoctorinfoMutation,
    useDeleteDoctorinfoMutation,
} = doctorinfosApiSlice

// returns the query result object
export const selectDoctorsResult = doctorinfosApiSlice.endpoints.getDoctorinfos.select()

// creates memoized selector
const selectDoctorsData = createSelector(
    selectDoctorsResult,
    doctorsResult => doctorsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllDoctors,
    selectById: selectDoctorById,
    selectIds: selectDoctorIds
    // Pass in a selector that returns the doctors slice of state
} = doctorinfosAdapter.getSelectors(state => selectDoctorsData(state) ?? initialState)