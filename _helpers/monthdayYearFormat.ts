export const formattedDate = (date: any) => {
    let today = new Date(date);
    let day = ("0" + today.getDate()).slice(-2); // typeof = number
    let month = ("0" + (today.getMonth() + 1)).slice(-2); // typeof = number
    let year = today.getFullYear(); // typeof = number
    let currentDate = `${year}-${month}-${day}`; // typeof = string;
    return currentDate
};
