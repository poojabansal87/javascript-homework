// from data.js
var tableData = [];

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// intial load
tableData = data;
populateTable(tableData);

function populateTable(tableDataArr) {

    tbody.html("");

    tableDataArr.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}

function filterData() {
    var datetimeInput = document.getElementById('datetime').value;

    // we will manipulate table data
    tempData = data;

    if(datetimeInput === '') {
        filteredData = tempData;
    } else {
        var filteredData = tempData.filter(function(item) {
            return datetimeInput == item.datetime;
        });
    }
    
    // repopulate table with new Data
    populateTable(filteredData);
}
