function checkCashRegister(price, cash, cid) {
  let currVal = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
  };
  let cashTotal = cid.reduce((sum, subArray) => sum + subArray[1], 0);
  let amountOwed = cash - price;
  let change = [];
  if (amountOwed === cashTotal) {
    return { status: 'CLOSED', change: cid };
  }
  cid.reverse();
  cid.forEach((tender) => {
    if (amountOwed / currVal[tender[0]] > 1) {
      let subtracted =
        Math.floor(amountOwed / currVal[tender[0]]) * currVal[tender[0]];
      if (subtracted > tender[1]) {
        amountOwed = (amountOwed - tender[1]).toFixed(2);
        change.push([tender[0], tender[1]]);
      } else {
        change.push([tender[0], subtracted]);
        amountOwed = (amountOwed - subtracted).toFixed(2);
      }
    }
  });
  if (amountOwed > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return { status: 'OPEN', change };
}
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
