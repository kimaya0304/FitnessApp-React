import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dailyinfoApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/dailyinfo" }),
    tagTypes: ["dailyinfoApi"],
    endpoints: (builder) => {
        return {
            getInfo: builder.query({
                query: () => {
                    return {
                        url: "/dailyinfo",
                        method: "GET",
                        params: {
                            _start: start * limit,
                            _limit: limit
                        }
                    }
                },
                transformResponse: (data, { response }) => {
                    return {
                        dailyinfo: data,
                        total: response.headers.get("X-Total-Count")
                    }
                },
            }),
            addInfo: builder.mutation({
                query: userData => {
                    return {
                        url: "/dailyinfo",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const {

    useGetInfoQuery,
    useAddInfoMutation
} = dailyinfoApi
