var currentScroll;
//current date object
var objToday = new Date(),
    domEnder = (function () {
        var a = objToday;
        if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
        a = parseInt((a + "").charAt(1));
        return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
        console.log(a);
    })(),
    dayOfMonth =
        today + (objToday.getDate() < 10)
            ? "0" + objToday.getDate() + domEnder
            : objToday.getDate() + domEnder,
    months = new Array(
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
        "Dec"
    ),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear(),
    curHour =
        objToday.getHours() > 12
            ? objToday.getHours() - 12
            : objToday.getHours() < 10
                ? "0" + objToday.getHours()
                : objToday.getHours(),
    curMinute =
        objToday.getMinutes() < 10
            ? "0" + objToday.getMinutes()
            : objToday.getMinutes(),
    curSeconds =
        objToday.getSeconds() < 10
            ? "0" + objToday.getSeconds()
            : objToday.getSeconds(),
    curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curMonth + " " + dayOfMonth + ", " + curYear;

document.getElementById("month_holder").textContent = curMonth;
document.getElementById("day_holder").textContent = dayOfMonth;