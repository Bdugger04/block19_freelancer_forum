

const freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 },
]


function averageStartPrice() {

    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalPrices / freelancers.length;
    return averagePrice

}
console.log('average starting price', averageStartPrice())





function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
   
    for (let i = 0; i < 3; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(freelancers);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  
  generateTable()
// message displays the average price of freelancers 

//new freelancers are added and average price is updated

// `document.querySelector` is correctly used to select existing DOM elements.

