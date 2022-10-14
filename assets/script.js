var today = document.getElementById('currentDay');
var timeBlocks = document.getElementById('timeBlocks');

if (today){
  today.textContent = moment().format('MM/DD/YYYY');
}

