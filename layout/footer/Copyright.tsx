import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Box
      sx={{
        bgcolor: 'text.secondary',
        color: 'white',
        py: 4,
        mt: 8,
        display: 'grid',
        gap: 20,
        gridTemplateColumns: '.5fr 2.5fr 2.5fr',
        alignItems: 'center', 
      }}
    >
      <Box sx={{ padding: '0 20px' }}>
        <Typography 
          variant="h4"
          fontWeight="bold"
          align="left"
          sx={{
            fontFamily: 'Arial, sans-serif', 
            fontSize: '24px', 
          }}
        >
          Brand Icon
        </Typography>
      </Box>
      
      <Box sx={{ padding: '0 20px' }}>
        <Typography 
          variant="h4"
          fontWeight="bold"
          align="left"
          sx={{
            fontFamily: 'Arial, sans-serif', 
            fontSize: '24px', 
          }}
        >
          World's leading chain of hotels and homes
        </Typography>
      </Box>
      <Box sx={{ padding: '0 20px' }}>
        <Typography
         variant="h4"
         fontWeight="bold"
         align="right"
         sx={{
          fontFamily: 'Arial, sans-serif', 
          fontSize: '24px', 
        }}
        >
          Join our network and grow your business!
        </Typography>
      </Box>
    </Box>
  );
}
