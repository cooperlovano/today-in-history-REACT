import React from 'react';

function GetCurrentDate(props) {

    var monthNumber = new Date().getMonth();
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"]
    var currentMonth = monthNames[monthNumber];
    var dayNumber = new Date().getDate();
    if (dayNumber >= 4) {
        dayNumber = dayNumber + "th";
    }
    return (
        <div>
            <h1 className="month">{currentMonth}</h1>
            <hr />
            <h1 className="day">{dayNumber}</h1>
            <hr />
        </div>
    )
}
export default GetCurrentDate;