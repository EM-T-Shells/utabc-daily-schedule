var today = document.getElementById('currentDay');
var timeBlocks = document.getElementById('timeBlocks');

if (today){
  today.textContent = moment().format('MM/DD/YYYY');
}

//?insert momentjs time format into timeToDo or html?
//allow user input into whatToDo
//allow user to save whatToDo in saveToDo
/*saveToDo button needs event listener -> store saved whatToDo in local storage*/
//different block colors for past, next up, future whatToDo's


//extra fun: reminder modal


/*<tbody class="plannerBody">
<tr class="plannerRow">
<td class="timeToDo">0600</td>
<td class="whatToDo">Otto</td>
<td class="saveToDo">
  <button class="btn saveItBtn">[]</button>
</td>
</tr>
</tbody>
*/