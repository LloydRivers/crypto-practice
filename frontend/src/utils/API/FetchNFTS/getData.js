import axios from "axios";

export const getData = async () => {
  const { REACT_APP_API_KEY, REACT_APP_API_HOST, REACT_APP_API_ENPOINT } =
    process.env;

  const options = {
    method: "GET",
    url: `${REACT_APP_API_ENPOINT}`,
    params: {
      collection_slug: "cryptopunks",
      order_direction: "desc",
      limit: "20",
      include_orders: "false",
    },
    headers: {
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": `${REACT_APP_API_HOST}`,
    },
  };

  try {
    const response = await axios(options);
    return response.data.assets;
  } catch (error) {
    console.log(error);
  }
};
