import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { errorToast } from "@/common/utils/errorToast.ts"

export const handleErrors = (error: FetchBaseQueryError) => {
  if (error) {
    switch (error.status) {
      case "FETCH_ERROR":
      case "PARSING_ERROR":
      case "CUSTOM_ERROR":
      case "TIMEOUT_ERROR":
        errorToast(error.status)
        break
      case 401:
      case 404:
        console.log(error.data)
        errorToast((error.data as { status_message: string }).status_message)
        break
      default:
        errorToast("Some error occurred")
    }
  }
}
