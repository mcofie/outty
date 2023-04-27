import moment from "moment";

export const format = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


export const reverseTimeFormat = (date) => {
    const newTime = new Date(date)
    return {hours: newTime.getHours(), minutes: newTime.getMinutes()};
}

export const formatTime = (timeObj) => {
    if (timeObj instanceof Date) {
        return reverseTimeFormat(timeObj)
    } else if (typeof timeObj === "object") {
        const time = new Date();
        time.setHours(timeObj.hours);
        time.setMinutes(timeObj.minutes);
        return time
    }
}


export const todaysTime = () => {
    const time = new Date();
    time.setHours(time.getHours());
    time.setMinutes(time.getMinutes());
    // time.setSeconds(0);
    return time
}

export const diffs = ({startTIme: startTime, endTime: endTime}) => {
// Get the current time
    const currentTime = moment();

// Check if the current time is between the start time and end time
    return currentTime.isBetween(startTime, endTime);
}

export const checkIfArrayHasValues = (val) => {
    if (val === null) {
        return false
    }
    return val.length !== 0
}

// export const function

export const getUrlParameters = (parameter, staticURL, decode) => {
    let currLocation = (staticURL.length) ? staticURL : window.location.search,
        parArr = currLocation.split("?")[1].split("&"),
        returnBool = true;

    for (let i = 0; i < parArr.length; i++) {
        let parr = parArr[i].split("=");
        if (parr[0] === parameter) {
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        } else {
            returnBool = false;
        }
    }

    if (!returnBool) return false;
}

