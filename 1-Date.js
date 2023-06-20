/*
a. Here's a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date using the Date object:
*/

function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
}

/*
b. To display the day of the week for the current date using this function
*/

// Get the current date
const currentDate = new Date();
const currentDateString = currentDate.toISOString().slice(0, 10);

// Get the day of the week for the current date
const currentDayOfWeek = getDayOfWeek(currentDateString);
console.log(currentDayOfWeek);
