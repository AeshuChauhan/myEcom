import axios from "axios";

const domain = "https://e5f8-103-226-203-41.ngrok-free.app";
const config = {headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": "69420"
  }
};

export async function userLogin(data:any){
    let returnData;
    try{
        const response = await axios.post(`${domain}/users/signin`, data,config);
        returnData = response.data
    }
    catch (error) {
        console.error("Login API Error:", error);
        returnData = { error: error?.message };
      }
      return returnData;
 }

export async function userSignup(Signupdata:any){
    console.log("inside the user function")
    let returnData;
    try{
        const response = await axios.post(`${domain}/users/signup`, Signupdata,config);

        console.log("Signup Response:", response);
        returnData = response.data
    }
    catch(error){
        console.log("signUp error", error);
        returnData={error:error?.message}
    }
    return returnData;
}

export async function mandapDetails(mandapData:any){
    console.log('Inside mandapDetails function');
    let returnmandapData;
    try{
        const response = await axios.post(`${domain}/mandap/insert`, mandapData,config);

        console.log("mandap insert:", response);
        // return {data: response.data, error:null};
        return  response.data;

    }
    catch(error){
        console.log("mandap insert error:", error.response?.data || error.message);
        returnmandapData={error:error?.message}
        // return {data:null, error:error.response?.data || error.message};
    }
    return returnmandapData;
}


// export async function mandapDetails(mandapData: any) {
//     console.log('Inside mandapDetails function');
//     let returnmandapData;
//     try {
//       const response = await axios.get(`${domain}/mandap/insert`, {
//         params: mandapData,
//         headers: config.headers, 
//       });
  
//       console.log('mandap details:', response);
//       return response.data;
//     } catch (error) {
//       console.log('mandap details error:', error.response?.data || error.message);
//       returnmandapData = { error: error?.message };
//     }
//     return returnmandapData;
//   }
  