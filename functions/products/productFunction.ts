export async function productFunction  (){ 
    let response1 = "";
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        response1 = data;
    }
    catch (error){
        console.error('Error fetching data:', error);
    }
    return response1;
}
