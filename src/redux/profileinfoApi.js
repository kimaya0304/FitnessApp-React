import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileinfoApi = createApi({
    reducerPath: "profileinfoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/profileinfo" }),
    tagTypes: ["profileinfoApi"],
    endpoints: (builder) => {
        return {
            getInfo: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET",
                        params: {
                            _start: start * limit,
                            _limit: limit
                        }
                    }
                },
                transformResponse: (data, { response }) => {
                    return {
                        profileinfo: data,
                        total: response.headers.get("X-Total-Count")
                    }
                },
            }),
            addInfo: builder.mutation({
                query: userData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: userData
                    }
                },

            }),

        }
    }
})

export const {
    useGetInfoQuery, useAddInfoMutation
} = profileinfoApi
