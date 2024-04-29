import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({

        baseUrl: 'http://localhost/',
        prepareHeaders: (headers, { getState }) => {

            const token = getState().userAuth.userToken
            console.log(token)

            if (token) {

                headers.set('authorization', `Bearer ${token}`)
                console.log(headers.get('authorization'))
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: 'api/blog',
                method: 'GET',
            }),
        }),
    }),
})


export const { useGetUserDetailsQuery } = authApi
