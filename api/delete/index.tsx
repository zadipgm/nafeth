import axios from "axios";
import { encode as base64_encode } from "base-64";
export const Delete = async (
  userName: string,
  userPassword: string,
  url: string,
  company: string
) => {
  let auth = base64_encode(`${userName}:${userPassword}`);
  const headers = {
    Authorization: `Basic ${auth}`,
    company: company,
  };
  try {
    const res = await axios.delete(`https://appapi.nafeth.sa/api/${url}`, {
      headers: headers,
    });
    return res;
  } catch (err) {
    return err;
  }
};
