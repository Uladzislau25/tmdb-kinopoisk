import { Box, Skeleton } from "@mui/material"

type MovieSkeletonProps = {
  columns?: number
  rows?: number
  width?: number | string
  height?: number | string
  borderRadius?: number | string
}

export const MovieSkeleton = ({
  columns = 5,
  rows = 1,
  width = 200,
  height = 300,
  borderRadius = 15,
}: MovieSkeletonProps) => {
  const count = columns * rows

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, ${typeof width === "number" ? `${width}px` : width})`,
        gap: 2.7,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index} sx={{ width }}>
          <Skeleton variant="rectangular" width={width} height={height} sx={{ borderRadius: `${borderRadius}px` }} />

          <Skeleton
            variant="text"
            width="80%"
            height={24}
            sx={{
              mt: 1,
              borderRadius: `${borderRadius}px`,
            }}
          />
        </Box>
      ))}
    </Box>
  )
}
