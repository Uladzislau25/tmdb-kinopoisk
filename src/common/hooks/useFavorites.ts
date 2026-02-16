import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectFavorites } from "@/app/store/slices/app-slice.ts"

export const useFavorites = () => useAppSelector(selectFavorites)
