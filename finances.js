let prompt = require("prompt-sync")();

// example data:
// before the day of 2022-09-31, the balance is 1000
// after the transactions on that day, the balance
// is 2970.66
let bankAccount = {
  startBalance: 1000,
  transactions: [
    { id: 1, date: "2022-09-31", amount: 2000, title: "salary" },
    { id: 2, date: "2022-09-31", amount: -29.34, title: "supermarket" },
  ],
};

function main() {
  console.log("Welcome to your personal finance manager");
  while (true) {
    console.log(
      "What do you want to do?\n" +
      "[b] show latest balance\n" +
      "[bd]show balance for a specific date\n" +
      "[t] show all transactions\n" +
      "[a] add a transaction\n" +
      "[d] delete a transaction\n" +
      "[s] show statistics\n" +
      "[q] quit"
    );
    let choice = prompt();
    if (choice === "q") {
      break;
    } else if (choice === "b") {
      showCurrentBalance();
    }
  }
}

main();
