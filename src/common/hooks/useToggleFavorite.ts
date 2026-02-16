import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import { toggleFavoriteAC } from "@/app/store/slices/app-slice.ts"
import type { FavoriteMovie } from "@/app/type/types.ts"

export const useToggleFavorite = () => {
  const dispatch = useAppDispatch()

  return (movie: FavoriteMovie) => {
    dispatch(toggleFavoriteAC({ movie }))
  }
}
