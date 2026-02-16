import { selectIsFavorite } from "@/app/app-slice.ts"
import { useAppSelector } from "@/common/hooks/useAppSelector.ts"

export const useIsFavorite = (movieId: number) => useAppSelector((state) => selectIsFavorite(state, movieId))
