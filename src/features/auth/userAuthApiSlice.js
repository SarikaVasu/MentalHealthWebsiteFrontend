import { apiSlice } from "../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

export const userAuthApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        userSignup: builder.mutation({
            query: credentials => ({
                url: '/user-auth/signup',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        userSignin: builder.mutation({
            query: credentials => ({
                url: '/user-auth/signin',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        userSendLogout: builder.mutation({
            query: () => ({
                url: '/user-auth/signout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000) //check if unmount 
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
    useUserSignupMutation,
    useUserSigninMutation,
    useUserSendLogoutMutation,
    useRefreshMutation,
} = userAuthApiSlice 