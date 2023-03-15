export const format = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


export const formatTime = (timeObj) => {
    const time = new Date();
    time.setHours(timeObj.hours);
    time.setMinutes(timeObj.minutes);
    // time.setSeconds(0);
    return time
}


export const todaysTime = () => {
    const time = new Date();
    time.setHours(time.getHours());
    time.setMinutes(time.getMinutes());
    // time.setSeconds(0);
    return time
}

export const diffs = () => {
    let x = new moment()
    let y = new moment()
    let duration = moment.duration(x.diff(y))
}
