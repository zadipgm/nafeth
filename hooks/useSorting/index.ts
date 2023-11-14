export const HandleDescending = (key: any, setSearchvalue: any, data: any) => {
    if (key === "id") {
        const numDescending = [...data].sort((a, b) => b.id - a.id);

        setSearchvalue(numDescending);
    } else {
        const strDescending = [...data].sort((a, b) => (a[key] > b[key] ? -1 : 1));
        setSearchvalue(strDescending);
    }
};

export const HandleAscending = (key: any, setSearchvalue: any, data: any) => {
    if (key === "id") {
        const numAscending = [...data].sort((a, b) => a.id - b.id);
        setSearchvalue(numAscending);
    } else {
        const strAscending = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1));
        setSearchvalue(strAscending);
    }
};

export const RequestSearch = (
    searchedVal: string,
    filterKey: string,
    currentRecords: any[],
    setSearchvalue: (arg0: any) => void
) => {
    const filteredRows = currentRecords.filter(row => {
        if (row[filterKey].name_en) {
            return row[filterKey].name_en.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
        } else {
            return row[filterKey].toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
        }

    })
    if (searchedVal.length < 1) {
        setSearchvalue(currentRecords);
    } else {
        setSearchvalue(filteredRows);
    }
};
