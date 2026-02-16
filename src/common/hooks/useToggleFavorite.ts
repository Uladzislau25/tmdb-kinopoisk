import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import { type FavoriteMovie, toggleFavoriteAC } from "@/app/app-slice.ts"

export const useToggleFavorite = () => {
  const dispatch = useAppDispatch()

  return (movie: FavoriteMovie) => {
    dispatch(toggleFavoriteAC({ movie }))
  }
}
