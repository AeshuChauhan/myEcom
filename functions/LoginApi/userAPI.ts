import axios from "axios";

const domain = "https://61cd-103-226-202-71.ngrok-free.app";
const config = {
  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": "69420"
  }
};

const handleApiError = (error: any) => {
  console.error("API Error:", error);
  return { error: error?.message };
};

export async function userLogin(data: any) {
  try {
    const response = await axios.post(`${domain}/users/signin`, data, config);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function userSignup(Signupdata: any) {
  try {
    const response = await axios.post(`${domain}/users/signup`, Signupdata, config);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
}

export const saveMandapDetails = async (formData: any) => {
  try {
    const response = await axios.post(`${domain}/mandap/insert`, formData, config);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error saving mandap details:', error.response?.data || error.message);
    return { error: error?.message };
  }
};


export async function getMandapDetails() {
  try {
    const response = await axios.get(`${domain}/mandap/`, config);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
        console.warn("Resource not found:", error.response.data);
        return [];
    }
    else {
        console.error("Error fetching mandap details:", error.response?.data || error.message);
        return { error: error?.message };
      }

  }
}
































































































































































































// import axios from "axios";

// const domain = "https://ee34-103-226-203-41.ngrok-free.app";
// const config = {headers: {
//     'Content-Type': 'application/json',
//     "ngrok-skip-browser-warning": "69420"
//   }
// };

// export async function userLogin(data:any){
//     let returnData;
//     try{
//         const response = await axios.post(`${domain}/users/signin`, data,config);
//         returnData = response.data
//     }
//     catch (error) {
//         console.error("Login API Error:", error);
//         returnData = { error: error?.message };
//       }
//       return returnData;
//  }

// export async function userSignup(Signupdata:any){
//     console.log("inside the user function")
//     let returnData;
//     try{
//         const response = await axios.post(`${domain}/users/signup`, Signupdata,config);

//         console.log("Signup Response:", response);
//         returnData = response.data
//     }
//     catch(error){
//         console.log("signUp error", error);
//         returnData={error:error?.message}
//     }
//     return returnData;
// }

// export async function mandapDetails(mandapData:any){
//     console.log('Inside mandapDetails function');
//     let returnmandapData;
//     try{
//         const response = await axios.post(`${domain}/mandap/insert`, mandapData,config);

//         console.log("mandap insert:", response);
//         // return {data: response.data, error:null};
//         return  response.data;

//     }
//     catch(error){
//         console.log("mandap insert error:", error.response?.data || error.message);
//         returnmandapData={error:error?.message}
//         // return {data:null, error:error.response?.data || error.message};
//     }
//     return returnmandapData;
// }

// export async function getMandapDetails() {
//     console.log('Inside getMandapDetails function');
//     try {
//         const response = await axios.get(`${domain}/mandap/details`, config); 

//         console.log("mandap details:", response);
//         return response.data;
//     } catch (error) {
//         console.error("mandap details error:", error.response?.data || error.message);
//         return { error: error?.message };
//     }
// }