import React from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import nameSquare from '../../assets/initialism_name_square-bg-w500.png';

const Overview = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ pt: 3, display: 'flex', justifyContent: 'center' }}>
        <Avatar
          sx={{ width: 100, height: 100, padding: '1px' }}
          src={nameSquare}
          alt="color logo"
        />
      </Box>

      <Typography
        variant="h3"
        component="div"
        p="20px 10px"
        textAlign="center"
      >
        簡介
      </Typography>

      <Box
        sx={{
          bgcolor: '#33648f',
          color: 'white',
          p: '30px',
          align: 'center',
          borderRadius: 3,
        }}
      >
        <Typography variant="h6">
          記錄 React 常見的運用方法
        </Typography>
        <Typography variant="h6">
          React 版本: 18.2.0
        </Typography>
      </Box>

    </Container>
  )
}

export default Overview;
