import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AUTH_TOKEN, BASE_URL } from "@/common/constants"
import { handleErrors } from "@/common/utils/henldeErrors.ts"

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: async (args, api, extraOptions) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    const result = await fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${AUTH_TOKEN}`)
        return headers
      },
    })(args, api, extraOptions)
    if (result.error) {
      handleErrors(result.error)
    }
    return result
  },
  endpoints: () => ({}),
})
