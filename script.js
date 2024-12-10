document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date");
    const currentDate = new Date();
    dateElement.textContent = `Today's Date: ${currentDate.toDateString()}`;
});
