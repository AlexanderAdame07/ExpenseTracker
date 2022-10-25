tableID = "my-table"
let tableRef = document.getElementById(tableID);

function formdata() {
  var expense1 = document.getElementById("expense").value; 
  var amount1 = document.getElementById("amount").value;
  var select = document.getElementById("type");
  var option = select.options [select.selectedIndex];
  var currency1 = document.getElementById("type").value = option.value;
  var date1 = document.getElementById("date").value;
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML= "Delete";
  deleteButton.onclick = function(){
    parent=this.parentElement.parentElement
    index = parent.rowIndex
    tableRef.deleteRow(index);
  }

return {currency1 , expense1 , date1 , amount1 , deleteButton}
}

function addRow() {

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);
  
  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);
  let newCell1= newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  let newCell3 = newRow.insertCell(3);
  let newCell4 = newRow.insertCell(4);

  let formData1 = formdata()
  // Append a text node to the cell
  let newText = document.createTextNode(formData1.currency1);
  let newText1 = document.createTextNode(formData1.expense1);
  let newText2 = document.createTextNode(formData1.date1);
  let newText3 = document.createTextNode(formData1.amount1);
  let newText4 = formData1.deleteButton;

  newCell.appendChild(newText);
  newCell1.appendChild(newText1);
  newCell2.appendChild(newText2);
  newCell3.appendChild(newText3);
  newCell4.appendChild(newText4);

  //currentRow++;
}

