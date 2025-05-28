// pipelines are the typical use case for functional programming.

// a pipeline is a series of data transformations where the output of 
// one transformation is the input of the next one

// pipelines enable us to write data transformations in a more expressive way.
// consider the next code:

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function shortenText(text) {
  return text.substring(0, 8).trim();
}

const shortText = shortenText(capitalize("this is a long text"));

console.log(shortText);
// -> 'This is'

/* Chaining */ 
// Chaining is a more common form of defining a pipeline. It requires to work with an object

// Consider the following list of debts.
const debts = [
  {
    contractNo: 1,
    daysSinceLastPayment: 91,
    currency: 'EUR'
  },
  {
    contractNo: 2,
    daysSinceLastPayment: 35,
    currency: 'USD'
  },
  {
    contractNo: 3,
    daysSinceLastPayment: 45,
    currency: 'USD'
  }
];

// here is how we can define a pipeline of transformations using chaining.
const newDebts = debts
  .filter(isEur)
  .map(toDebtView);

function isEur(debt) {
  return debt.currency === "EUR";
}

function toDebtView(debt) {
  return {
    ...debt,
    priority: getPriority(debt)
  }
}

function getPriority(debt) {
  const days = debt.daysSinceLastPayment;
  return days > 90
    ? 1
    : days > 60
      ? 2
      : 3;
}

// first, the debt list is filtered using isEur predicare function. Then the result of
// this operation is transformed using the toDebtView mapping function

console.log(newDebts);
// log:
// ->
/*
  [
    {
      contractNo: 1,
      daysSinceLastPayment: 91,
      currency: 'EUR',
      priority: 1
    }
  ]
*/ 