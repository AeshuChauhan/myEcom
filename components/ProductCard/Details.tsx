import { Grid, Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Icon, Button, FormControlLabel, Checkbox, Tabs, Tab, Box } from '@mui/material';
import Slider from 'react-slick';
import React, {useState, useEffect} from 'react';
// import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import TextField from '@mui/material/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import { ImageList, ImageListItem } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ReviewsIcon from '@mui/icons-material/Reviews';



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BuildingStorefrontIcon, CameraIcon, PhoneIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { PersonPinCircleOutlined } from '@mui/icons-material';


// const taxRate = 0.18;
export default function Details() {

    const imageUrls = [
        'https://cdn.venuelook.com/uploads/space_36435/1689661504_595x400.png',
        'https://cdn.venuelook.com/uploads/space_36435/1689661507_595x400.png',
        'https://cdn.venuelook.com/uploads/space_36435/1689661509_595x400.png',
        'https://cdn.venuelook.com/uploads/space_36435/1689661514_595x400.png',
        'https://cdn.venuelook.com/uploads/space_25398/1696319650_595x400.png',
        'https://cdn.venuelook.com/uploads/space_2477/1672388935_595x400.png'

      ];

      const [ currentSlide, setCurrentSlide] = useState(0);
    //   const [imageLoading, setImageLoading] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current:number, next:number) => setCurrentSlide(next),

    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % imageUrls.length);
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, []);


      const ContactNumber = '+91-9876543210';

      const handleContactClick = () => {
        console.log('Initiate call to:', contactNumber);
      };

      const [weddingType, setWeddingType] = useState('');
      const [occasionDate, setOccasionDate] = useState('');
      const [numberOfGuests, setNumberOfGuests] = useState('');
      const [budgetRange, setBudgetRange] = useState('');
      const [foodPreference, setFoodPreference] = useState('');
      const [drinksSelection, setDrinksSelection] = useState('');
      const [yourName, setYourName] = useState('');
      const [contactNumber, setContactNumber] = useState('');
      const [email, setEmail] = useState('');
      const [sendOnWhatsApp, setSendOnWhatsApp] = useState<boolean | undefined>(false);
      

    
      const handleCheckAvailability = () => {
        console.log('Wedding Type:', weddingType);
        console.log('Occasion Date:', occasionDate);
        console.log('Number of Guests:', numberOfGuests);
        console.log('Budget Range:', budgetRange);
        console.log('Food Preference:', foodPreference);
        console.log('Drinks Selection:', drinksSelection);
        console.log('Your Name:', yourName);
        console.log('Contact Number:', contactNumber);
        console.log('Email:', email);
        console.log('Send on WhatsApp:', sendOnWhatsApp);
      };
    

      const [value, setValue] = React.useState(0);

    
    
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event:any, newValue:any) => {
      setTabValue(newValue);
    };
      
  return (
    <Grid container spacing={2} sx={{marginTop:0}}>

      {/* Left Column */}
      <Grid item xs={12} sm={6}  sx={{marginLeft:15}} >
        <Paper>
            <Slider {...settings}>
                {imageUrls.map((url, index) => (
                    <div key={index}>
                        <img src={url} alt={`Image ${index+1}`} style={{width:'100%', height:'auto'}} />
                    </div>
                ))}
            </Slider>

        </Paper>
        <Grid container spacing={0} sx={{marginTop:2}}>

          
          <Grid container spacing={3}>
            {/* <Paper> */}
            <Grid item xs={12}>
              <Paper style={{marginTop:"30px"}}>
                <Grid container spacing={3}>
                  {/* Left Section */}
                  <Grid item xs={6}>
                    <Typography  style={{textAlign:"left", paddingRight:"20px", paddingLeft:"15px", fontSize:"30px", marginTop:"0"}}>
                    The Florence Banquet

                    </Typography>

                    <span style={{color:'gray', paddingLeft:"15px"}}> Space: Ground Floor</span><br/>
                    <span style={{color:'gray', paddingLeft:"15px"}}> Mayapuri, Delhi (📍view on map)</span><br/>
                    <span style={{color:'gray', paddingLeft:"15px"}}> C-146,Mayapuri Industrial Area, Delhi,110064</span><br/>

                  </Grid>

                  {/* Right Section */}
                  <Grid item xs={6} >
                  <Typography variant='h6' style={{textAlign:"right", paddingRight:"20px"}}>
                  ⭐️⭐️⭐️⭐️⭐️ <span style={{fontSize:"20px"}}>4.6</span><br/>
                  <span style={{color:"gray", textAlign:"right", fontSize:"15px"}}>1 Reviews</span><br/>

                  <span>
                    <button className="header-button1" style={{ fontSize: "15px", fontWeight: "bold", margin: "10px", alignSelf: 'center', paddingLeft:"10px"  }}>
                    👍Get Best Deal
                    </button>
                  </span>

                  
                  </Typography>
                  </Grid>

                </Grid>
              </Paper>

            </Grid>
            {/* </Paper> */}
         </Grid>

        </Grid>

        <Grid container spacing={0} sx={{marginTop:2, marginboot:2}}>
          <Paper>

          </Paper>
        </Grid>
        

        <Grid container spacing={0} sx={{marginTop:2 }}>
        <Paper sx={{ width: '100%', overflow:'visible', height: '100%' }}>
            <Tabs value={tabValue} onChange={handleChange} indicatorColor="primary" sx={{ fontSize:24, position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1}}>
              <Tab label="Overview"  icon={<CameraAltIcon />} />
              <Tab label="Photos" icon={<PhotoSizeSelectActualIcon />}/>
              <Tab label="Packages|Menu" icon={<RestaurantIcon />} />
              <Tab label="Reviews" icon={<ReviewsIcon />}/>
            </Tabs>
            <Box border={1} borderColor="#ddd">
            </Box>
          </Paper>
        </Grid>






        <Grid container spacing={0} sx={{marginTop:2}}>
          <Paper>
            <Box border={2} borderColor="#ddd" p={2}>
            <Typography variant="h6" style={{padding:"1px", fontWeight:"bold"}}>
            🎥 Photos of Ground Floor at The Florence Banquet
            </Typography>
            </Box>

            <ImageList sx={{ width: 736, height: 500, gap: 16 }} cols={3} rowHeight={200}>
              {imageUrls.map((imageUrl, index) => (
                <ImageListItem key={index}>
                  <img
                    srcSet={`${imageUrl}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                    src={`${imageUrl}?w=400&h=400&fit=crop&auto=format`}
                    alt={`Image ${index}`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Paper>
        </Grid>

      </Grid>





      {/* Right Column */}
      <Grid item xs={12} sm={4} sx={{marginRight:15}}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '0px' }} >
      <div style={{ marginBottom: '20px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <span style={{fontWeight:'bold'}}>Veg Price</span><br/>
                  <span >₹ 1300 / Pax+GST</span>
                 
                </TableCell>
                <TableCell>
                <ReduceCapacityIcon fontSize="small" style={{ color: 'blue-indigo-600', marginLeft: '10px', marginRight: '5px'}} />
                 <span style={{fontWeight:'bold'}}>Capacity</span><br/>
                 <span>80-400 Guests</span>
              
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span style={{fontWeight:'bold'}}> NonVeg Price</span><br/>
                  <span >₹ 1400 / Pax+GST</span>
                 
                </TableCell>
                <TableCell>
                <ReduceCapacityIcon fontSize="small" style={{ color: 'blue-indigo-600', marginLeft: '10px', marginRight: '5px'}} />
                 <span style={{fontWeight:'bold'}}>Capacity</span><br/>
                 <span>80-400 Guests</span>
              
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>

        <button className="header-button1" style={{ fontSize: "18px", fontWeight: "bold", margin: "20px", alignSelf: 'center'  }}>
            Request For Quote 
        </button>
      </div>


      </Paper>

  {/* 2 */}

      <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
      <Typography style={{fontSize:"20px"}} gutterBottom>
        More Information & Pricing
      </Typography>
      <Grid container spacing={2} >

        {/* Left side: Dj Available */}
        <Grid item xs={6}>
          <Typography style={{fontSize:"17px", color:"GrayText"}}>
            Dj Available
          </Typography>
          <Typography style={{fontSize:"17px", color:"GrayText"}}>
            Alcohol Served
          </Typography>
        </Grid>

        {/* Right side: Yes */}
        <Grid item xs={6} container direction="column" justifyContent="flex-end">
          <Typography  align="right" style={{ fontSize:"17px", marginRight: '16px', fontStyle:"italic", color:"red" }}>
            Yes
          </Typography>
          <Typography  align="right" style={{ fontSize:"17px", marginRight: '16px', fontStyle:"italic", color:"red" }}>
            Yes
          </Typography>
        </Grid>
      </Grid>
      </Paper>

      

      <Paper elevation={2} style={{ marginTop: '20px', padding: '20px' }}>
        <Typography style={{fontWeight:"bold", fontSize:"20px"}}>
        📞Call to The Florence Banquet
        </Typography>
      {/* </Paper> */}
      <Typography  style={{ marginTop: '10px', fontSize:"20px", fontStyle:"-moz-initial"}}>
       <a href={`tel:${ContactNumber}`} onClick={handleContactClick}>{ContactNumber}</a>
      </Typography>
      </Paper>
      

      <Paper elevation={3} style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', backgroundColor:"white" }}>
      <Typography  style={{ fontWeight: 'bold', textAlign:"center" , fontSize:"20px"}}>
        📅 Check Availability & Prices
        
      </Typography>
      <Typography style={{textAlign:"center", color:"gray"}}>
      <span style={{textAlign:"center"}}>The Florence Benquet</span>
      </Typography>
      <form>
        <TextField
          select
          label="Wedding Type"
          variant="outlined"
          fullWidth
          margin="normal"
          value={weddingType}
          onChange={(e) => setWeddingType(e.target.value)}
        >
          <MenuItem value="wedding">Wedding</MenuItem>
        </TextField>
        <TextField
          type="text"
          label="Occasion Date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={occasionDate}
          onChange={(e) => setOccasionDate(e.target.value)}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="number"
              label="Number of Guests"
              variant="outlined"
              fullWidth
              margin="normal"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Budget Range"
              variant="outlined"
              fullWidth
              margin="normal"
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              select
              label="Food Preference"
              variant="outlined"
              fullWidth
              margin="normal"
              value={foodPreference}
              onChange={(e) => setFoodPreference(e.target.value)}
            >
              <MenuItem value="veg">Vegetarian</MenuItem>
              <MenuItem value="nonveg">Non-Vegetarian</MenuItem>
              <MenuItem value="both">Both</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Drinks Selection"
              variant="outlined"
              fullWidth
              margin="normal"
              value={drinksSelection}
              onChange={(e) => setDrinksSelection(e.target.value)}
            >
              <MenuItem value="soft">Soft Drinks</MenuItem>
              <MenuItem value="alcohol">Alcoholic Beverages</MenuItem>
              <MenuItem value="both">Both</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sendOnWhatsApp ?? false}
              onChange={(e) => setSendOnWhatsApp(e.target.checked)}
              color="primary"
            />
          }
          label={
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              Send You Venue Details on WhatsApp
            </Typography>
          }
        />



   <button className="header-button1" style={{ fontSize: "18px", fontWeight: "bold", margin: "20px", alignSelf: 'center', width:"90%"  }} onClick={handleCheckAvailability}>
            Check Availability
        </button>
    


      </form>
    </Paper>


      </Grid>
    </Grid>
  );
}
