import { apiSlice } from "../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

export const doctorAuthApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        doctorSignup: builder.mutation({
            query: credentials => ({
                url: '/doctor-auth/signup',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        doctorSignin: builder.mutation({
            query: credentials => ({
                url: '/doctor-auth/signin',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        doctorSendLogout: builder.mutation({
            query: () => ({
                url: '/doctor-auth/signout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
    })
})

export const {
    useDoctorSignupMutation,
    useDoctorSigninMutation,
    useDoctorSendLogoutMutation,
    useRefreshMutation,
} = doctorAuthApiSlice 