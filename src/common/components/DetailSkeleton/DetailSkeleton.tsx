import {
  Box,
  Grid,
  Skeleton,
  Stack,
 } from "@mui/material";


export const DetailSkeleton = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={420}
            sx={{ borderRadius: 3 }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <Stack spacing={2}>
            <Skeleton width="50%" height={42} />

            <Stack direction="row" spacing={2}>
              <Skeleton width={120} height={24} />
              <Skeleton width={80} height={24} />
              <Skeleton width={100} height={24} />
            </Stack>

            <Skeleton width="95%" />
            <Skeleton width="90%" />
            <Skeleton width="85%" />

            <Stack direction="row" spacing={1}>
              <Skeleton width={100} height={36} sx={{ borderRadius: 5 }} />
              <Skeleton width={100} height={36} sx={{ borderRadius: 5 }} />
              <Skeleton width={100} height={36} sx={{ borderRadius: 5 }} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>

    </Box>
  );
}
