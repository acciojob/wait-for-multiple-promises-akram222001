//your JS code here. If required.
// Function to simulate a promise with given time
function runPromise(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time });
    }, time * 1000);
  });
}

// Function to display result in table
function addToTable(result) {
  const tbody = document.getElementById("output");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${result.name}</td>
    <td>${result.time}</td>
  `;

  tbody.appendChild(row);
}

// Add total row
function addTotalRow(total) {
  const tbody = document.getElementById("output");
  const row = document.createElement("tr");
  row.style.fontWeight = "bold";
  row.style.backgroundColor = "#f8f9fa";

  row.innerHTML = `
    <td>Total</td>
    <td>${total}</td>
  `;

  tbody.appendChild(row);
}

// Run multiple promises
async function executePromises() {
  const promises = [
    runPromise("Promise 1", 2),
    runPromise("Promise 2", 4),
    runPromise("Promise 3", 1),
  ];

  let total = 0;

  for (let p of promises) {
    const res = await p;
    addToTable(res);
    total += res.time;
  }

  // Add total after all promises complete
  addTotalRow(total);
}

// Start executing after page load
window.onload = executePromises;
