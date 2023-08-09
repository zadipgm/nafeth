import { encode as base64_encode } from 'base-64';
import Cookies from 'js-cookie';
export const handleLogin = async (userName: string, userPassword: string, url: string, company: string) => {
    let auth = base64_encode(`${userName}:${userPassword}`);
    try {
        const res = await fetch(`https://appapi.nafeth.sa/api${url}`, {
            headers: {
                Authorization: `Basic ${auth}`,
                company: company
            }
        });
        const data = await res.json();
        Cookies.set('userName', userName);
        Cookies.set('userPassword', userPassword)
        Cookies.set('company', company)

        return data
    } catch (err) {
        console.log(err);

    }
};
