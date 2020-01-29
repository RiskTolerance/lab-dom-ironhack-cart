var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $del = document.getElementsByClassName('btn btn-delete');

function updateSubtot($product) {
  let cartLength = document.body.getElementsByClassName('pu');
  let totalReduce = [];
  for (let i = 1; i <= cartLength.length; i++) {
    let price = (document.querySelector(`tr.product:nth-child(${i}) > td:nth-child(2) > span:nth-child(1)`).innerHTML);
    let quantity = (document.querySelector(`tr.product:nth-child(${i}) > td:nth-child(3) > label:nth-child(1) > input:nth-child(1)`).value);
    let tempTotal = price * quantity;
    document.querySelector(`tr.product:nth-child(${i}) > td:nth-child(4) > span:nth-child(1)`).innerHTML = tempTotal;
    totalReduce.push(tempTotal);
    document.querySelector(`body > h2:nth-child(4) > span:nth-child(1)`).innerHTML = totalReduce.reduce((a,b) => a + b);
  }
}

function delet() {
  console.log('delet!'); //why tf won't this fire >:(((
}

function calcAll() {
  updateSubtot();
}
$del.onclick = delet;
$calc.onclick = calcAll;