import {
    Button,
    Checkbox,
    Container,
    Grid,
    TextField,
    Typography,
  } from '@mui/material';
  import { Facebook, Twitter } from '@mui/icons-material';
  import { userLogin } from '@/functions/LoginApi/userAPI';
  import React, { useState, useEffect } from 'react';
  import { useRouter } from 'next/router';
  
  function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [error, setError] = useState<string | null>(null);

    const router = useRouter()
  
    const handleSignIn = async () => {
      if (!email || !password) {
        setError("Please fill in all required fields");
        return;
      }
    
      let data = {
        // name:"Manish",
        email: email,
        password: password,
      };
    
      try {
        let response = await userLogin(data);
      
        if (!response.error) {
          const userData = response.result[0] || {};
          const { id, email, firstName, lastName } = userData;
      
          if (id && email && firstName) {
            console.log("Login Successful. Storing data in session storage:", userData);
            sessionStorage.setItem('userData', JSON.stringify(userData));
            setLoggedIn(true);
            setUserName(firstName); 
            setError(null);
            router.push('/');
          } else {
            console.error("Invalid user data received from the API.");
            setError("Invalid userId & Password");
          }
        } else {
          console.log("Login unsuccessful", response.error);
          setError("Invalid email or password");
        }
      } catch (error) {
        console.error("Error during login:", error);
        setError("An error occurred during login");
      }
    };
    
    useEffect(() => {
      if (loggedIn && userName) {
        router.push('/');
      }
    }, [loggedIn, userName, router]);
    

    const handleLogout = () => {
        console.log("Logging out...");
        setLoggedIn(false);
        setUserName('');
        setError(null);
        sessionStorage.removeItem('userData');
        router.push('/');
    };

    return (
        <div
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',  
          justifyContent: 'flex-start',  
          padding: '20px',
        }}
      >
        <Container maxWidth="sm">
         {loggedIn ?(
            <div>
                <Typography variant="h6" align="center" gutterBottom>
                    Welcome, {userName}!
                </Typography>
                <Button
                    variant="contained" 
                    // align ="left"
                    style={{
                        backgroundColor: "#ff0000",
                        color:"#fff",
                        marginTop:"0px",
                        alignContent:"center",
                    }}
                    onClick={handleLogout}
                    // fullWidth
                >
                    Logout
                </Button>
            </div>
         ):(
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn();
              }}>

         
            {/* <Typography variant="h4" align="center" gutterBottom>
              Sign In
            </Typography> */}
            <TextField
              label="Email Address"
              fullWidth
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
              <Grid item>
                <Checkbox defaultChecked />
                <Typography variant="body2">Remember me</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <a href="#!" style={{ textDecoration: 'none' }}>
                    Forgot password?
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: '#3b71ca',
                color: '#fff',
                marginTop: '16px',
                paddingTop: '10px',
                paddingBottom: '10px',
                fontSize: '1rem',
              }}
              fullWidth
            >
              Sign in
            </Button>
            <div style={{ marginTop: '16px' }}>
              <Typography variant="subtitle2" align="center" gutterBottom>
                OR
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: '#3b5998', color: 'white', marginRight: '8px' }}
                startIcon={<Facebook />}
                fullWidth
              >
                Continue with Facebook
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: '#55acee', color: 'white' }}
                startIcon={<Twitter />}
                fullWidth
              >
                Continue with Twitter
              </Button>
            </div>
            {error && (
                <div style={{color:'red', marginTop:'16px'}}>
                    {error}
                </div>
            )}
          </form>
        )}
        </Container>
      </div>
    );
  }
  
  export default Login;
  