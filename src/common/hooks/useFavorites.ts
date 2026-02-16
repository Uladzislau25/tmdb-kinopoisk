import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectFavorites } from "@/app/app-slice.ts"

export const useFavorites = () => useAppSelector(selectFavorites)
