const date = new Date();
const day = date.getDate();
const month = date.getMonth(); +1
const year = date.getFullYear();

const showDate = `${date}/${date}/${month}/${year}`;
const timeElement = document.getElementById("time");
timeElement.innerHTML = showDate
console.log( new Date().toLocaleDateString() );

