import Cookies from "js-cookie";

export const getName = () => {
    if (typeof window !== 'undefined') {

        let name = Cookies.get('userName');
        return name
    }
}
export const getPassword = () => {
    if (typeof window !== 'undefined') {
        let password = Cookies.get('userPassword');
        return password

    }
}
export const getCompany = () => {
    if (typeof window !== 'undefined') {
        let company = Cookies.get('company');
        return company

    }
}