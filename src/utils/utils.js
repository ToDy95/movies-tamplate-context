import axios from 'axios';
export const fetchData = async (urlLink) => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}${urlLink}`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_HOST
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response.data.results)
    return response.data.results
  } catch (error) {
    throw new Error("Something is wrong!!!!")
  }
}
