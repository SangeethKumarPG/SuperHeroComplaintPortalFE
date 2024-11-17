import axios from "axios";

export const commnAPI = async (httpMethod, url, requestBody) => {
  const requestConfig = {
    method: httpMethod,
    url: url,
    data: requestBody,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(requestConfig).then((result) => {
    return result;
  }).catch((err)=>{
    return err;
  });
};
