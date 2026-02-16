import { selectIsFavorite } from "@/app/store/slices/app-slice.ts"
import { useAppSelector } from "@/common/hooks/useAppSelector.ts"

export const useIsFavorite = (movieId: number) => useAppSelector((state) => selectIsFavorite(state, movieId))
