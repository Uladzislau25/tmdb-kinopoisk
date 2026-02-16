import type { RootState } from "@/app/store/store.ts"
import { useSelector } from "react-redux"

export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    const queries = Object.values(state.baseApi.queries || {})
    return queries.some((q: any) => q?.status === "pending")
  })
}
