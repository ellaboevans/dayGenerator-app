const date = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const getDay = document.querySelector("#getDay");
const result = document.querySelector("#result");

getDay.addEventListener("click", () => {
  let dateObj = new Date(`${date.value} ${month.value} ${year.value}`);
  //   console.log(dateObj);

  let day = dateObj.toString();
  day = day.slice(0, 3);
  result.innerHTML = `The day is ${day}`;
});

