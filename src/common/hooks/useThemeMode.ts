import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectThemeMode } from "@/app/app-slice.ts"

export const useThemeMode = () => useAppSelector(selectThemeMode)
