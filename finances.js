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
    } else if (choice === "bd") {
      showBalanceForSpecificDate();
    } else if (choice === "t") {
      showAllTransactions();
    } else if (choice === "a") {
      addATransaction();
    } else if (choice === "d") {
      deleteATransaction();
    }
  }
}

function showCurrentBalance() {
  let sum = bankAccount.startBalance;
  for (let allTransactions of bankAccount.transactions) {
    sum += allTransactions.amount;
  }
  console.log(`Current balance: ${sum}`);
}

function showBalanceForSpecificDate() {
  console.log("Please insert the date (e.g 2022-09-31) ");
  let balanceOfSpecificDate = 0;
  let userInputDate = prompt();
  for (let allTransactions of bankAccount.transactions) {
    if (allTransactions.date === userInputDate) {
      balanceOfSpecificDate += allTransactions.amount;
    }
  }
  console.log(balanceOfSpecificDate);
}

function showAllTransactions() {
  for (let showTransactions of bankAccount.transactions) {
    console.log(showTransactions);
  }
}

function addATransaction() {
  let dateOfNewTransaction = prompt("Please insert the date, on which the transaction was made.(year-month-day) ");
  let amountOfNewTransaction = prompt("Please insert how much money you spent or have received. (+/- number) " );
  let titleOfNewTransaction = prompt("Please insert on what you spent your money on ");
  let newTransaction = {
    id: bankAccount.transactions.length + 1,
    date: dateOfNewTransaction,
    amount: parseInt(amountOfNewTransaction),
    title: titleOfNewTransaction
  };
  bankAccount.transactions.push(newTransaction);
}

function deleteATransaction() {
  console.log("Delete a transaction by writing a number starting with 1 for the following transaction:  ");
  for (let i = 0; i < bankAccount.transactions.length; i++) {
    console.log("Press " + (i + 1) + " to delete  ");
    console.log(bankAccount.transactions[i]);
  }
  let userInput = prompt();
  parseInt(userInput);
  bankAccount.transactions.splice(userInput - 1, 1);
  for (let j = 0; j < bankAccount.transactions.length; j++) {
    bankAccount.transactions[j].id = bankAccount.transactions[j].id - 1;
  }
  if (bankAccount.transactions.id === 0 && bankAccount.transactions.length === 1) {
    bankAccount.transactions[0].id += 1;
  }
  if (bankAccount.transactions.length === 0) {
    console.log("There are no transactions.");
  }
}

main();
