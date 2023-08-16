import axios from "axios";
import { encode as base64_encode } from "base-64";
export const Update = async (
  userName: string,
  userPassword: string,
  url: string,
  company: string,
  body: any
) => {
  let auth = base64_encode(`${userName}:${userPassword}`);
  const headers = {
    Authorization: `Basic ${auth}`,
    company: company,
  };
  try {
    const res = await axios.put(`https://appapi.nafeth.sa/api/${url}`, body, {
      headers: headers,
    });
    return res;
  } catch (err) {
    return err;
  }
};
