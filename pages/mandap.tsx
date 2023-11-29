import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import { mandapDetails } from '@/functions/LoginApi/userAPI';
import { useRouter } from 'next/router';
import Card1 from '@/components/ProductCard/Card';

interface MandapPageProps {
  mandapToUpdate?: {
    hotelName?: string;
    location?: string;
    price?: string;
    mobileNumber?: string;
    hotelCode?: string;
    image?:string;
    djAvailable?: boolean;
    alcoholServed?: boolean;
  };
}

const MandapPage: React.FC<MandapPageProps> = ({ mandapToUpdate }) => {
  const router = useRouter();
  const [hotelName, setHotelName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [hotelCode, setHotelCode] = useState('');
  const [image, setImage] = useState('');
  const [djAvailable, setDjAvailable] = useState(false);
  const [alcoholServed, setAlcoholServed] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [articleData, setArticleData] = useState<{
    hotelName: string;
    location: string;
    price: string;
    mobileNumber: string;
    hotelCode: string;
    image: string;
    djAvailable: boolean;
    alcoholServed: boolean;
  } | null>(null);

  useEffect(() => {
    if (mandapToUpdate) {
      setHotelName(mandapToUpdate.hotelName || '');
      setLocation(mandapToUpdate.location || '');
      setPrice(mandapToUpdate.price || '');
      setMobileNumber(mandapToUpdate.mobileNumber || '');
      setHotelCode(mandapToUpdate.hotelCode || '');
      setImage(mandapToUpdate.image || '');
      setDjAvailable(mandapToUpdate.djAvailable || false);
      setAlcoholServed(mandapToUpdate.alcoholServed || false);
    }
  }, [mandapToUpdate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      hotelName,
      location,
      price,
      mobileNumber,
      hotelCode,
      image,
      djAvailable,
      alcoholServed,
    };

    try {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      console.log('Stored FormData:', sessionStorage.getItem('formData'));
      const response = await mandapDetails(formData);
      console.log('API Response:', response);

      setArticleData(formData);
      setHotelName('');
      setLocation('');
      setPrice('');
      setMobileNumber('');
      setHotelCode('');
      setImage('');
      setDjAvailable(false);
      setAlcoholServed(false);
      
      console.log("Article Data:", articleData);
      router.push('/');
    } catch (error) {
      console.error('API Error:', error);
      setError('Error submitting form. Please try again.');
    }
  };
  useEffect(() => {
    console.log('Article Data:', articleData);
  }, [articleData]);

  return (
    <div>
      <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5874691/pexels-photo-5874691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        style={{
          padding: '20px',
          maxWidth: '400px',
          // backgroundColor: 'rgba(238, 130, 130, 0.8)',
          // boxShadow:
          //   '20px 20px 60px #00000041, inset -20px -20px 60px #ffffff40',
        }}
        elevation={3}
      >
        <Typography
          variant="h4"
          align="center"
          style={{
            color: '#007FFF',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
          }}
          gutterBottom
        >
          {mandapToUpdate ? 'Update Mandap' : 'Add new Mandap'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Mandap Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Location"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Price"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            label="Mobile number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <TextField
            label="Hotel code"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={hotelCode}
            onChange={(e) => setHotelCode(e.target.value)}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            margin="normal"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Dj Available"
            checked={djAvailable}
            onChange={(e) => setDjAvailable(e.target.checked)}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Alcohol Served"
            checked={alcoholServed}
            onChange={(e) => setAlcoholServed(e.target.checked)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: '#007FFF', 
              color: 'white', 
              borderRadius: '8px', 
              padding: '10px 20px', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)', 
              transition: 'background-color 0.3s, color 0.3s', 
            }}
          >
            {mandapToUpdate ? 'Update Mandap' : 'Submit'}
          </Button>
        </form>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      </Paper>
      {articleData &&<Card1 url={'https://images.pexels.com/photos/5473224/pexels-photo-5473224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} formData={articleData} />}
    </div>
  </div>
  );
};

export default MandapPage;
