import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Rating,
} from '@mui/material';
import { FaStar } from 'react-icons/fa';
import {  saveMandapDetails } from '@/functions/LoginApi/userAPI';
import { useRouter } from 'next/router';

interface MandapPageProps {
  mandapToUpdate?: {
    userId?:string;
    hotelName?: string;
    location?: string;
    price?: string;
    mobileNumber?: string;
    hotelCode?: string;
    img?: string;
    djAvailable?: boolean;
    alcoholAvailable?: boolean;
    rating?: number;
    description?: string;
  };
}

const MandapPage: React.FC<MandapPageProps> = ({ mandapToUpdate }) => {
  const router = useRouter();
  const [userId, setUserId]=useState('');
  const [hotelName, setHotelName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [img, setImg] = useState('');
  const [djAvailable, setDjAvailable] = useState(false);
  const [alcoholAvailable, setalcoholAvailable] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (mandapToUpdate) {
      setUserId(mandapToUpdate.userId || '');
      setHotelName(mandapToUpdate.hotelName || '');
      setLocation(mandapToUpdate.location || '');
      setPrice(mandapToUpdate.price || '');
      setMobileNumber(mandapToUpdate.mobileNumber || '');
      // setHotelCode(mandapToUpdate.hotelCode || '');
      setImg(mandapToUpdate.img || '');
      setDjAvailable(mandapToUpdate.djAvailable || false);
      setalcoholAvailable(mandapToUpdate.alcoholAvailable || false);
      setRating(mandapToUpdate.rating || null);
      setDescription(mandapToUpdate.description || '');
    }
  }, [mandapToUpdate]);

  const handleRatingChange = (newValue: number | null) => {
    setRating(newValue);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      userId,
      hotelName,
      location,
      price,
      mobileNumber,
      // hotelCode,
      img,
      djAvailable,
      alcoholAvailable,
      rating,
      description,
    };
    console.log('Form Data:', formData);

    try {
      sessionStorage.setItem('formData', JSON.stringify(formData));
      const response = await saveMandapDetails(formData);
      console.log('API Response:', response);

      setUserId('');
      setHotelName('');
      setLocation('');
      setPrice('');
      setMobileNumber('');
      // setHotelCode('');
      setImg('');
      setDjAvailable(false);
      setalcoholAvailable(false);
      setRating(null);
      setDescription('');
      router.push('/');
    } catch (error) {
      console.error('API Error:', error);
      setError(`Error submitting form. Please try again. Details: ${error.message}`);
    }
  };

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
              label="userId"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <TextField
              label="Img URL"
              variant="outlined"
              margin="normal"
              fullWidth
              value={img}
              onChange={(e) => setImg(e.target.value)}
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
              checked={alcoholAvailable}
              onChange={(e) => setalcoholAvailable(e.target.checked)}
            />
            <TextField
              label="Description"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Rating
              </Typography>
              <Rating
                name="rating"
                value={rating}
                precision={0.5}
                onChange={(event, newValue) => handleRatingChange(newValue)}
                emptyIcon={<FaStar style={{ color: '#ddd' }} />}
                icon={<FaStar style={{ color: '#007FFF' }} />}
              />
            </Grid>
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
          {error && (
            <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
          )}
        </Paper>
      </div>
    </div>
  );
};

export default MandapPage;
