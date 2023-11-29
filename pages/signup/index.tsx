import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { userLogin, userSignup } from '@/functions/LoginApi/userAPI';

export default function signup() {
    
    const router = useRouter() 
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '', 
  });

  const [error, setError] = useState<string | null> (null);

  const [signedUpUsername, setSignedUpUsername] = useState<string | null>(null) ;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async() =>{

    let signupData = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password : password
    }

    let response = await userSignup(signupData);
    userLogin(response.data);
    console.log(response);

    if(response.error){
        setError(response.error);
    }
    else{
        const loginData ={
            email:email,
            password:password,
        };

        const loginResponse = await userLogin(loginData);

        if(loginResponse.error){
            setError("Signup Successful, but login failed, Please try again. ");
        }
        else{
            console.log('Signup Successful');
            router.push('/Login');
        }
    }
    
}

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    
    if(name === "phoneNumber" && !/^\d+$/.test(value)){
        alert("Phone number should contain only numeric digits");
        return;
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogout = () => {
    setSignedUpUsername(null);
    setIsLoggedIn(false);
  };


    
  return (
      <div className='mx-5'>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
                    <strong className="font-bold">Error:</strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            )}

        {isLoggedIn ? (
        <div>
            <p>Welcome, {signedUpUsername}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (

        
<section className="bg-white dark:bg-gray-900">
    <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: "url('https://images.pexels.com/photos/8326791/pexels-photo-8326791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Get your free account now.
                </h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>

                <div className="mt-6">
                    <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>

                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                        <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <span className="mx-2">
                                Guest
                            </span>
                        </button>

                        <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>

                            <span className="mx-2">
                                Owner
                            </span>
                        </button>
                    </div>
                </div>

                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={(e) => {e.preventDefault();handleSubmit();}}>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                        <input type="text" placeholder="First Name" name="firstName" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e) => setFirstName(e.target.value)} required/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                        <input type="text" placeholder="Last Name" name="lastName" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                        <input type="text" placeholder="XXX-XX-XXXX-XXX" name="phoneNumber" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} required/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="123@example.com" name="email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <input type="password" placeholder="Enter your password" name="password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                        <input type="password" placeholder="Enter your password" name="confirmPassword" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" onChange={handleChange} required/>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>{signedUpUsername ? signedUpUsername : 'Sign Up'} </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </form>

                {signedUpUsername && (
                    <div className="mt-4 text-green-600">
                    Signed up successfully! Welcome, {signedUpUsername}.
                    </div>
                )}
            </div>
        </div>
    </div>
</section>
        )}
      </div>
  );
}
