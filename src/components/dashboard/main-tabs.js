import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { setSelectedMainTab, setSelectedMainTabIndex } from '@/src/features/selected-main-tab/selectedMainTabSlice';

function LinkTab(props) {
  const dispatch = useDispatch();
  // console.log(props);
  return (
    <Tab
      component="a"
      onClick={(e) => dispatch(setSelectedMainTab({newTab: props.label}, e))}
      {...props}
    />
  );
}

export default function NavTabs() {
  const dispatch = useDispatch();
  const selectedMainTab = useSelector((state) => state.selectedMainTab.value);
  const selectedMainTabIndex = useSelector((state) => state.selectedMainTab.index);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    event.preventDefault();
    dispatch(setSelectedMainTabIndex(newValue))
  };

  return (
    <Tabs value={selectedMainTabIndex} onChange={handleChange} aria-label="nav tabs example">
      <LinkTab label="Trend" />
      <LinkTab label="Price To MA" />
      <LinkTab label="MA Cross" />
      <LinkTab label="RSI" />
      <LinkTab label="FSR" />
      <LinkTab label="Stochastic" />
      <LinkTab label="MACD" />
    </Tabs>
  );
}
