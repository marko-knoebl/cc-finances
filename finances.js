let prompt = require("prompt-sync")();

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
    let choice = prompt(
      "What do you want to do?\n" +
        "[b] show current balance\n" +
        "[t] show all transactions\n" +
        "[a] add a transaction\n" +
        "[d] delete a transaction\n" +
        "[s] show statistics\n" +
        "[q] quit"
    );
    if (choice === "q") {
      break;
    } else if (choice === "b") {
      showCurrentBalance();
    }
  }
}

main();
