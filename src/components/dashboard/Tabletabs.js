import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Dashboard, Settings, Person } from '@mui/icons-material';

import PairMenu from '@/src/components/dashboard/pair-menu';
import Exchange from '@/src/components/dashboard/exchange';
import MainTabs from '@/src/components/dashboard/main-tabs';
import SelectMA from '@/src/components/dashboard/select-ma-type';
import SelectLength1 from '@/src/components/dashboard/select-length-1';
import SelectLength2 from '@/src/components/dashboard/select-length-2';
import CustomizeStepper from '@/src/features/customize/CustomizeStepper';

import Scannertable from './Scannertable';

import { setMainHomeButton } from '@/src/features/mainHomeButtonSlice';
import { selectedMainTab } from '@/src/features/selected-main-tab/selectedMainTabSlice';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';

function IndicatorSettings({ selectedMainTab }) {
  if (selectedMainTab === 'Price To MA') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, mt: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
          <SelectLength2 />
        </Box>
      </Paper>
    );
  } else if (selectedMainTab === 'MA Cross') {
    return (
      <Paper>
        <Box sx={{border: 0, ml: 1, mt: 1, textAlign: 'left'}}>
          <SelectMA />
          <SelectLength1 />
          <SelectLength2 />
        </Box>
      </Paper>
    )
  }
  return <></>;
}

function HomeSteppersView({ selectedMainHomeButton }) {
  if (selectedMainHomeButton.value === 'Standard') {
    return (
      <Box sx={{flexGrow: 1}}>
        <Grid container direction="row">
          <Grid item xs={12} md={8}>
            <MainTabs />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container direction="row" justifyContent="flex-end" alignItems="center">
              <PairMenu />
              <Exchange />
              <DownloadIcon />
              <ShareIcon />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  } else if (selectedMainHomeButton.value === 'Customize') {
    return (
      <Box sx={{border: 0, ml: 1, mt: 1}}>
        <Paper>
          <CustomizeStepper />
        </Paper>
      </Box>
    )
  } else if (selectedMainHomeButton.value === 'Profile') {
    return (
      <Box sx={{border: 0, ml: 1, mt: 1}}>
        <Paper>
          <h2>Profile</h2>
          <CustomizeStepper />
        </Paper>
      </Box>
    )
  }
  return <></>;
}


export default function IconTabs() {
  const dispatch = useDispatch();
  const selectedMainHomeButton = useSelector((state) => state.mainHomeButton.selectedMainHomeButton);
  const selectedMainTab = useSelector((state) => state.selectedMainTab.value);
  const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // console.log(selectedMainTab);

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={12}>
        <Box sx={{border: 0, ml: 1}}>
          <Box component="span" mt={2}>
            <Typography variant="overline" sx={{fontSize: '1.3rem', mr: 5}}>
              Scanner
            </Typography>
          </Box>
          <Button variant={selectedMainHomeButton.value === 'Standard' ? 'contained' : 'outlined'} startIcon={<Dashboard />} sx={{ marginRight: 3, width: 144 }}
            onClick={() => dispatch(setMainHomeButton( {name: 'Standard', value: 'Standard'} ))}>
            Standard
          </Button>
          <Button variant={selectedMainHomeButton.value === 'Customize' ? 'contained' : 'outlined'} startIcon={<Settings />} sx={{ marginRight: 3, width: 144 }}
            onClick={() => dispatch(setMainHomeButton( {name: 'Customize', value: 'Customize'} ))}>
            Customize
          </Button>
          <Button variant={selectedMainHomeButton.value === 'Profile' ? 'contained' : 'outlined'} startIcon={<Person />} sx={{ marginRight: 3, width: 144 }}
            onClick={() => dispatch(setMainHomeButton( {name: 'Profile', value: 'Profile'} ))}>
            Profile
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Paper><HomeSteppersView selectedMainHomeButton={selectedMainHomeButton} /></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              {selectedMainHomeButton.value === 'Standard' ? <IndicatorSettings selectedMainTab={selectedMainTab} /> : (<div></div>)}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              {selectedMainHomeButton.value === 'Standard' ? (<Box><Scannertable /></Box>) : (<div></div>)}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
