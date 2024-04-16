import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    // tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            login: builder.query({
                query: userData => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: data => data[0]
            }),
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/users",
                        method: "POST",
                        body: userData
                    }
                },
                // invalidatesTags: ["tagName"]
            }),

        }
    }
})

export const {
    useLazyLoginQuery,
    useRegisterMutation
} = authApi

