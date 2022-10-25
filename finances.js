let prompt = require("prompt-sync")();

// example data:
// before the day of 2022-09-31, the balance is 1000
// after the transactions on that day, the balance
// is 2970.66
let bankAccount = {
  startBalance: 1000,
  transactions: [
    {id: 1, date: "2022-09-31", amount: 2000, title: "salary" },
    {id: 2, date: "2022-09-31", amount: -29.34, title: "supermarket" },
    {id: 3, date: "2022-10-29", amount: -200.34, title: "supermarket" }
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
  console.log("Please insert the date (year-month-day) ");
  let userInputDate = prompt();
  let balanceOfSpecificDate = bankAccount.startBalance;
  for (let i = 0; i < bankAccount.transactions.length; i++) {
    if (bankAccount.transactions[i].date <= userInputDate) {
      balanceOfSpecificDate += bankAccount.transactions[i].amount;
    }
  }
  console.log(balanceOfSpecificDate);
}

function showAllTransactions() {
  for (let i = 0; i < bankAccount.transactions.length; i++) {
    bankAccount.transactions[i].id = i+1;
    console.log(bankAccount.transactions[i]);
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
  bankAccount.transactions.splice(userInput - 1, 1);
   
}

main();
