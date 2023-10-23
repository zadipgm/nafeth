export const NumOfDays = (issueDate: any, returnDate: any) => {

    // To calculate the time difference of two dates
    let Difference_In_Time =
        new Date(returnDate).getTime() - new Date(issueDate).getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days
}