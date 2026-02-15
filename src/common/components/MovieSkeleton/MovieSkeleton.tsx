import { Skeleton, Box, Stack } from "@mui/material"

export const MovieSkeleton = ({ count = 5 }) => (
  <Stack direction="row" spacing={2} flexWrap="wrap">
    {Array.from({ length: count }).map((_, index) => (
      <Box key={index} sx={{ width: 200, mb: 2 }}>
        <Skeleton variant="rectangular" height={300} />
        <Skeleton variant="text" height={30} sx={{ mt: 1 }} />
        <Skeleton variant="text" width="80%" />
      </Box>
    ))}
  </Stack>
)
