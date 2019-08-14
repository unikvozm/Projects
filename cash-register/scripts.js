document.getElementById("calc").addEventListener("click", function() {
  // collecting inputs
  let inputs1 = document.getElementById("container1").elements;
  let price = parseFloat(inputs1[0].value).toFixed(2);
  let cash = parseFloat(inputs1[1].value).toFixed(2);
  let changeDue = Math.round((cash - price) * 100) / 100; // Round change to the nearest hundredth to deal with precision errors;
  inputs1[2].value = changeDue;

  let drawer = document.getElementById("drawer").elements;
  let cashValues = [];
  for (let i = 0; i < drawer.length; i++) {
    cashValues[i] = parseFloat(drawer[i].value).toFixed(2);
  }

  let change = [];
  let status;
  const cashNames = [
    "PENNY: ",
    "NICKEL: ",
    "DIME: ",
    "QUARTER: ",
    "HALF: ",
    "ONE: ",
    "FIVE: ",
    "TEN: ",
    "TWENTY: ",
    "HALF: ",
    "FIFTY: ",
    "ONE HUNDRED: "
  ];
  const amount = [0.01, 0.05, 0.1, 0.25, 0.5, 1, 5, 10, 20, 50, 100];

  //calculating cash in drawer
  let cash_in_drawer = 0;
  for (let i = 0; i < cashValues.length; i++) {
    cash_in_drawer += cashValues[i];
  }

  //if cash-in-drawer is less than the change due
  if (cash_in_drawer < changeDue) {
    status = "INSUFFICIENT_FUNDS";
  }

  // if cash-in-drawer is equal to the change due
  else if (cash_in_drawer === changeDue) {
    status = "CLOSED";
  }
  // When you need to give some change
  else {
    for (let c = cashValues.length - 1; c >= 0; c--) {
      //starting with the highest order
      if (changeDue >= amount[c] && cashValues[c] >= amount[c]) {
        let subChange = [];
        subChange[0] = cashNames[c];
        subChange[1] = amount[c];
        changeDue = Math.round((changeDue - amount[c]) * 100) / 100; // Round change to the nearest hundreth to deal with precision errors
        cashValues[c] = Math.round((cashValues[c] - amount[c]) * 100) / 100; // Round change to the nearest hundreth to deal with precision errors
        while (
          changeDue > 0 &&
          changeDue >= amount[c] &&
          cashValues[c] >= amount[c]
        ) {
          subChange[1] = Math.round((subChange[1] + amount[c]) * 100) / 100; // Round change to the nearest hundreth to deal with precision errors
          cashValues[c] = Math.round((cashValues[c] - amount[c]) * 100) / 100; // Round change to the nearest hundreth to deal with precision errors
          changeDue = Math.round((changeDue - amount[c]) * 100) / 100; // Round change to the nearest hundreth to deal with precision errors
        }
        let string = subChange[0] + '$ ' + subChange[1].toFixed(2);
        change.push(string);
      }
    }
    if (changeDue !== 0) {
      //if you cannot return the exact change
      status = "INSUFFICIENT FUNDS";
      change = [];
    } else {
      status = "OPEN";
    }
  }
	// Showing the status and the change that needs to give
	if (status === "OPEN") {
		document.getElementById("status").innerHTML = `STATUS: <span class="green">${status}</span>`;
	}
	else if (status === "CLOSED") {
		document.getElementById("status").innerHTML = `STATUS: ${status}`;
	}
	else {
		document.getElementById("status").innerHTML = `STATUS: <span class="red">${status}</span>`;
	}
  
  if (status === "OPEN") {
    let changeText = "";
    for (let c = 0; c < change.length; c++) {
      changeText += change[c] + "<br>";
    }
    document.getElementById(
      "change"
    ).innerHTML = `<span class="blue">CHANGE:</span><br><br>${changeText}`;

    //Changing cash available in the drawer
    for (let i = 0; i < cashValues.length; i++) {
      drawer[i].value = cashValues[i];
    }
  } else {
    document.getElementById("change").innerHTML = "";
  }
});