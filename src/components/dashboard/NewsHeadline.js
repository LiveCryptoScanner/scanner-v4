import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, Box } from '@mui/material';

const NewsHeadline = (props) => {
  return (
    <Box sx={[{ flexGrow: 1 }]}>
      <Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <h2>asdfsadf</h2>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default NewsHeadline;
