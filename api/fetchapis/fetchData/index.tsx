import { encode as base64_encode } from "base-64";
export const fetchData = async (
  userName: string,
  userPassword: string,
  url: string,
  company: string
) => {
  let auth = base64_encode(`${userName}:${userPassword}`);
  try {
    const res = await fetch(`https://appapi.nafeth.sa/api${url}`, {
      cache: "force-cache",
      headers: {
        Authorization: `Basic ${auth}`,
        company: company,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
