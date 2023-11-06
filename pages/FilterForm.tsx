import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function FilterForm() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ratingRange, setRatingRange] = useState([1, 5]); 
  const [selectedCity, setSelectedCity] = useState('All Cities'); 
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]); 


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

  

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setRatingRange([1, 5]);
    setSelectedCity('All Cities');
    setSelectedFacilities([]);
    // Add logic to clear other filters if needed
  };

  const FACILITIES = ['Wi-Fi', 'Parking', 'Pool', 'Gym', 'Restaurant'];

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        {/* Price Range Slider */}
        <Typography id="price-range-slider" variant="subtitle1">
          Price
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}k`}
          min={0}
          max={1000}
          aria-labelledby="price-range-slider"
        />
        <Typography
          variant="subtitle2"
          display="block"
          style={{ color: 'green' }}
        >
          {priceRange[0]}k - {priceRange[1]}k
        </Typography>

        {/* Rating Slider */}
        <Box pt={3}>
          <Typography id="rating-range-slider" variant="subtitle1">
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
        </Box>

        {/* City Selection Dropdown */}
        <Box pt={3}>
          <Typography variant="subtitle1">City</Typography>
          <TextField
            select
            label="Select City"
            value={selectedCity}
            onChange={handleCityChange}
            variant="outlined"
          >
            <MenuItem value="All Cities">All Cities</MenuItem>
            <MenuItem value="City 1">City 1</MenuItem>
            <MenuItem value="City 2">City 2</MenuItem>
            <MenuItem value="City 3">City 3</MenuItem>
          </TextField>
        </Box>

          {/* Hotel Facilities */}
        <Box pt={3}>
          <Typography variant="subtitle1">Hotel Facilities</Typography>
          <TextField
            select
            label="Select Facilities"
            value={selectedFacilities}
            onChange={handleFacilitiesChange}
            SelectProps={{
              multiple: true,
            }}
            variant="outlined"
          >
            {FACILITIES.map((facility) => (
              <MenuItem key={facility} value={facility}>
                {facility}
              </MenuItem>
            ))}
          </TextField>
      </Box>

        
      </Grid>

      


      <Grid item xs={12} sm={2} md={4} lg={6}>
        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Typography
            variant="h5"
            style={{ fontWeight: 'bold', color: '#ab003c', marginLeft: '10px' }}
            gutterBottom
            onClick={clearFilters}
          >
            Clear All
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
