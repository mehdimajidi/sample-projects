function load(mydata) {
  var mydata = JSON.parse(data);

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.id = "members";

  //Add the header row.
  var row = table.insertRow(-1);
  for (var key in mydata[0]) {
    if (mydata[0].hasOwnProperty(key)) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = key;
      row.appendChild(headerCell);
    }
  }

  //Add the data rows.
  for (var i = 1; i < mydata.length; i++) {
    row = table.insertRow(-1);
    for (var key in mydata[i]) {
      if (mydata[i].hasOwnProperty(key)) {
        var cell = row.insertCell(-1);
        cell.innerHTML = mydata[i][key];
      }
    }
  }

  var dvTable = document.getElementById("memberTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}
