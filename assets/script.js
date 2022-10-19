//current time

//console.log(dayJsObject.format("h:mm A"));
//header date
let currentDate = document.getElementById('currentDate').innerHTML = dayjs().format("M/D/YYYY h:mm A");

let dayJsObject = dayjs().format("hh");
console.log(dayJsObject);

var whatTodoToday = [
  {
      id: "0",
      hour: "08",
      time: "08",
      meridiem: "am",
      todo: ""
  },
  {
    id: "1",
    hour: "09",
    time: "09",
    meridiem: "am",
    todo: ""
},
  {
      id: "2",
      hour: "10",
      time: "10",
      meridiem: "am",
      todo: ""
  },
  {
      id: "3",
      hour: "11",
      time: "11",
      meridiem: "am",
      todo: ""
  },
  {
      id: "4",
      hour: "12",
      time: "12",
      meridiem: "pm",
      todo: ""
  },
  {
      id: "5",
      hour: "01",
      time: "13",
      meridiem: "pm",
      todo: ""
  },
  {
      id: "6",
      hour: "02",
      time: "14",
      meridiem: "pm",
      todo: ""
  },
  {
      id: "7",
      hour: "03",
      time: "15",
      meridiem: "pm",
      todo: ""
  },
  {
      id: "8",
      hour: "04",
      time: "16",
      meridiem: "pm",
      todo: ""
  },
  {
      id: "9",
      hour: "05",
      time: "17",
      meridiem: "pm",
      todo: ""
  },
  {
    id: "10",
    hour: "06",
    time: "18",
    meridiem: "pm",
    todo: ""
  },
  {
    id: "11",
    hour: "07",
    time: "19",
    meridiem: "pm",
    todo: ""
  },
  {
    id: "12",
    hour: "08",
    time: "20",
    meridiem: "pm",
    todo: ""
  },
  {
    id: "13",
    hour: "09",
    time: "21",
    meridiem: "pm",
    todo: ""
  },
]

function storeTodo() {
    localStorage.setItem("whatTodoToday", JSON.stringify(whatTodoToday));
    //adds on data from time array to localStorage
}

function showTodo() {
  whatTodoToday.forEach(function (_thisHour) {
      $(`#${_thisHour.id}`).val(_thisHour.todo);
  })
  //any stored data will appear on planner
}

function init() {
  var storedTodo = JSON.parse(localStorage.getItem("whatTodoToday"));
  if (storedTodo) {
    whatTodoToday = storedTodo;
  }
  storeTodo();
  showTodo();
}

whatTodoToday.forEach(function(thisHour) {
  //create new DOM elements for timeBlocks
  var timeRow = $("<form>").attr({
    "class": "row"
  });
  $(".container").append(timeRow);

  //concat time value to am/pm
  var timeContent = $("<div>").text(`${thisHour.hour} ${thisHour.meridiem}`).attr({
    "class": "col-2 hour"
  });

 //
 var hourPlan = $("<div>").attr({
    "class": "col-8 description p-0"
 });

  var todoText = $("<textarea>");
  hourPlan.append(todoText);
  todoText.attr("id", thisHour.id);
  if (thisHour.time < dayJsObject) {
  todoText.attr ({
      "class": "past col-12",
  })
  } else if (thisHour.time === dayJsObject) {
  todoText.attr({
      "class": "present col-12"
  })
  } else if (thisHour.time > dayJsObject) {
  todoText.attr({
      "class": "future col-12"
  })
  }

// creates save button
var saveButton = $("<i class='far fa-save fa-lg'></i>")
var saveTodo = $("<button>")
 .attr({
     "class": "col-2 saveBtn"
});
saveTodo.append(saveButton);
timeRow.append(timeContent, hourPlan, saveTodo);
})

//call init function here to show the stored data once page is loaded
init();

// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
  event.preventDefault();
  var saveDataIndex = $(this).siblings(".description").children(".future").attr("id");
  whatTodoToday[saveDataIndex].todo = $(this).siblings(".description").children(".future").val();
  console.log(saveDataIndex);
  storeTodo();
  showTodo();
})