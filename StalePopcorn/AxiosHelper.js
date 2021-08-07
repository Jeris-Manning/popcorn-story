import React, { useEffect } from "react";
import { apikey } from "../utilities/keys.sensitive";

const AxiosHelper = (props) => {
  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?s=titanic&apikey=${apikey}&type=movie&page=3`
      )
      .then((res) => {});
  }, []);
};
