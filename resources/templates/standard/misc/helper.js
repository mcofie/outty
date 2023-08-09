export const persistRegisteredUser = (eventId) => {
    if (localStorage.getItem('registered') !== null) {
        if (!isIdPresent(eventId)) {
            const getIds = JSON.parse(localStorage.getItem('registered'))
            getIds.push(eventId)
        }
    } else {
        localStorage.setItem('registered', JSON.stringify([eventId]))
    }
}

export const checkedIfUserRegistration = () => {

}

export const isIdPresent = (eventId) => {
    const getIds = JSON.parse(localStorage.getItem('registered'))
    return !!getIds.includes(eventId);
}
