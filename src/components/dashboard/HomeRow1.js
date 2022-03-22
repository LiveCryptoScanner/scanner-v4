import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card1 from '@/src/components/dashboard/Card1';
import Card2 from '@/src/components/dashboard/Card2';
import Card3 from '@/src/components/dashboard/Card3';

import Posts from '@/src/features/posts/Posts';

import TopBullCoins from '@/src/features/top-bull-coins/topBullCoins';
import TopBullCoinsAsync from '@/src/features/top-bull-coins/topBullCoinsAsync';
import { getTopBullCoinsAsync } from '@/src/features/top-bull-coins/topBullCoinsAsyncSlice';


import TrendingCoinsAsync from '@/src/features/trending-coins/trendingCoinsAsync';
import { getTrendingCoinsAsync } from '@/src/features/trending-coins/trendingCoinsAsyncSlice';

// const Item = styled(Paper)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? '' : '',
//   // ...theme.typography.body2,
//   // padding: theme.spacing(0),
//   // textAlign: 'center',
//   // color: theme.palette.text.secondary,
// }));

export default function HomeRow1() {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getTrendingCoinsAsync());
    dispatch(getTopBullCoinsAsync());
  }, [dispatch]);

  return (
    <Box sx={[{ border: 0 }]}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} md={6} lg={4} sx={{border: 0}}>
          <TopBullCoinsAsync />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TrendingCoinsAsync />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TopBullCoinsAsync />
        </Grid>
      </Grid>
    </Box>
  );
}
