const day__work__name = document.querySelector(".day__card .work__name");

const night__work__name = document.querySelector(".night__card .work__name");

const day__name = document.querySelector(".day__name");
const month__name = document.querySelector(".month__name");
const year = document.querySelector(".year");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const DaysubjectName = ["html/css", "javascript"];
const NightsubjectName = ["node js", "react js"];

const date = new Date();

const dayName = days[date.getUTCDay()];
const monthName = monthNames[date.getMonth()];

if (dayName == "Saturday" || dayName == "Sunday") {
    day__work__name.innerHTML = DaysubjectName[0];

    night__work__name.innerHTML = NightsubjectName[0];
} else if (dayName == "Monday" || dayName == "Tuesday") {
    day__work__name.innerHTML = DaysubjectName[1];

    night__work__name.innerHTML = NightsubjectName[1];
} else if (dayName == "Wednesday" || dayName == "Thursday") {
    day__work__name.innerHTML = DaysubjectName[0];

    night__work__name.innerHTML = NightsubjectName[0];
} else {
    day__work__name.innerHTML = "js library";
    night__work__name.innerHTML = "self project";
}

day__name.innerHTML = dayName;
month__name.innerHTML = monthName;
year.innerHTML = date.getFullYear();
