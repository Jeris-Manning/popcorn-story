import { queryKey, url } from "./keys.sensitive";

const axios = require("axios").default;

export const axiosHelper = (title) => {
  const params = {
    apikey: queryKey,
    s: title,
    type: "movie",
  };

  const results = axios.get(url, { params }).then((res) => {
    return res.data.Search;
  });

  return results;
};
