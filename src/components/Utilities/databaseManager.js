const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser;
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}

const getDataId = () => {
    const userId = getUser();
    return `ultraNet/bookingLists/${userId}`
}

const getDatabseBookingList = () => {
    const dataId = getDataId();
    const data = localStorage.getItem(dataId) || "{}";
    return JSON.parse(data);
}

const addToDatabseBookingList = (_id, count) => {
    const currentBookingList = getDatabseBookingList();
    currentBookingList[_id] = count;
    localStorage.setItem(getDataId(), JSON.stringify(currentBookingList));
}

const removeFromDatabseBookingList = _id => {
    const currentBookingList = getDatabseBookingList();
    delete currentBookingList[_id];
    localStorage.setItem(getDataId(), JSON.stringify(currentBookingList));
}

const processBooking = (bookingList)=>{
    localStorage.removeItem(getDataId());
}

export { addToDatabseBookingList, getDatabseBookingList, removeFromDatabseBookingList, processBooking}