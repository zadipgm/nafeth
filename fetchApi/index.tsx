export const getBranches = async () => {
  try {
    const response = await fetch("https://appapi.nafeth.sa/api/branches/beta", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
