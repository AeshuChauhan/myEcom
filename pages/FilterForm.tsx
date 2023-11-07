import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

const SliderContainer = styled('div')({
  width: '100%', 
});

export default function FilterForm() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ratingRange, setRatingRange] = useState([1, 5]); 
  const [selectedCity, setSelectedCity] = useState('All Cities'); 
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]); 
  const [selectedCheckinFeatures, setSelectedCheckinFeatures] = useState<string[]>([]);


  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  const handleRatingChange = (event: Event, newValue: number | number[]) => {
    setRatingRange(newValue as [number, number]);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleFacilitiesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedFacilities(event.target.value as string[]);
  };

  const handleCheckinFeaturesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCheckinFeatures(event.target.value as string[]);
  }

  

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setRatingRange([1, 5]);
    setSelectedCity('All Cities');
    setSelectedFacilities([]);
    setSelectedCheckinFeatures([]);
  };

  const FACILITIES = ['Wi-Fi', 'Parking', 'Pool', 'Gym', 'Restaurant'];
  const CHECKIN_FEATURES = ['Early Check-in', 'Late Check-out', 'Express Check-in', 'Luggage Storage'];


  return (
    <Paper style={{ position: 'sticky', top: 10, padding: 16 }}>
    <Grid container justifyContent="Left" style={{ paddingLeft: '15px' }}>
      <Grid item xs={12} sm={2} md={4} lg={6}>
            <Typography
              variant="h4"
              style={{
                fontWeight: 'bold',
                color: 'indigo-600', 
              }}
            >
              Filters
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={4} lg={6}>
          <Box display="flex" justifyContent="flex-end" mt={1} style={{ paddingLeft: '20px' }}>
            <Typography
              variant="h6"
              style={{
                // fontWeight: 'bold',
                color: 'red',
                marginLeft: '10px',
                cursor: 'pointer',
              }}
              gutterBottom
              onClick={clearFilters}
            >
              Clear All
            </Typography>
          </Box>
        </Grid>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        {/* Price Range Slider */}
        <Typography id="price-range-slider" 
          variant="subtitle1"
          style={{
            color:'black',
            fontWeight:'bold',
          }}

        >
          Price
        </Typography>
        <Slider
          // className={classes.slider}
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}k`}
          min={0}
          max={1000}
          aria-labelledby="price-range-slider"
          // sx={{ width: '100%', '& .MuiSlider-thumb': { height: 20, width: 40 } }}
          
        />
        <Typography
          variant="subtitle2"
          display="block"
          style={{ color: 'green' }}
        >
          {priceRange[0]}k - {priceRange[1]}k
        </Typography>

        <Divider style={{height: 8, marginTop: 1 }} />

        {/* Rating Slider */}
        <Box pt={3}>
          <Typography id="rating-range-slider" variant="subtitle1" 
            style={{
              color:'black',
              fontWeight:'bold',
            }}
          >
            Rating
          </Typography>
          <Slider
            value={ratingRange}
            onChange={handleRatingChange}
            valueLabelDisplay="auto"
            min={1}
            max={5}
            aria-labelledby="rating-range-slider"
          />
          <Typography
            variant="subtitle2"
            display="block"
            style={{ color: 'blue' }}
          >
            {ratingRange[0]} stars - {ratingRange[1]} stars
          </Typography>
          <Divider style={{height: 8, marginTop: 1 }} />
        </Box>

        

        {/* City Selection Dropdown */}
        <Box pt={3}>
          <Typography variant="subtitle1" 
            style={{
              color:'black',
              fontWeight:'bold',
            }}
          >
            City
          </Typography>
          
          
          <TextField
            select
            label="Select City"
            value={selectedCity}
            onChange={handleCityChange}
            variant="outlined"
            sx={{ marginTop: 1.5, width: '100%', height: '48px' }}
          >
            <MenuItem value="All Cities">All Cities</MenuItem>
            <MenuItem value="City 1">Noida </MenuItem>
            <MenuItem value="City 2">Gurugram</MenuItem>
            <MenuItem value="City 3">Delhi</MenuItem>
          </TextField>
          <Divider style={{height: 8, marginTop: 1 }} />
        </Box>
        <Divider style={{height: 8, marginTop:1 }} />

        

        

          {/* Hotel Facilities */}
        <Box pt={3}>
          <Typography variant="subtitle1" 
            style={{
              color:'black',
              fontWeight:'bold',
            }}
          >
            Hotel Facilities
          </Typography>
          <TextField
            select
            label="Select Facilities"
            value={selectedFacilities}
            onChange={handleFacilitiesChange}
            SelectProps={{
              multiple: true,
            }}
            variant="outlined"
            sx={{ marginTop: 1.5, width: '100%', height: '48px' }}
          >
            {FACILITIES.map((facility) => (
              <MenuItem key={facility} value={facility}>
                {facility}
              </MenuItem>
            ))}
          </TextField>
          <Divider style={{height: 8, marginTop: 1 }} />
      </Box>
      <Divider style={{height: 8, marginTop:1 }} />
      <Box pt={3}>
            <Typography variant="subtitle1" 
              style={{
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Check-in Features
            </Typography>
            <TextField
              select
              label="Select Features"
              value={selectedCheckinFeatures}
              onChange={handleCheckinFeaturesChange}
              SelectProps={{
                multiple: true,
              }}
              variant="outlined"
              sx={{ marginTop: 1.5, width: '100%', height: '48px' }}
            >
              {CHECKIN_FEATURES.map((feature) => (
                <MenuItem key={feature} value={feature}>
                  {feature}
                </MenuItem>
              ))}
            </TextField>
          </Box>

        
      </Grid>

      

    </Grid>
    </Paper>
  );
}
