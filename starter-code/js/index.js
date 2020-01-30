let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');
let $createBtn = document.getElementById('create');
let $cartClone = document.querySelector('tr.product:nth-child(1)').cloneNode(true);
//let cartClone = document.querySelector('tr.product:nth-child(1)').cloneNode([true]);

//look for all the delete buttons
let $delSelect = document.getElementsByClassName('btn btn-delete');
let deletButtons = [];
for (let i = 1; i <= $delSelect.length; i++) {
  document.querySelector(`tr.product:nth-child(${i}) > td:nth-child(5) > button:nth-child(1)`).onclick = delet;
  deletButtons.push(document.querySelector(`tr.product:nth-child(${i}) > td:nth-child(5) > button:nth-child(1)`));
  //console.log(deletButtons);
};

//do all the 
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

function delet(event) {
  event.target.parentElement.parentElement.remove();
  console.log(event.target.parentElement.parentElement);
  //console.log('delet!', event); //why tf won't this fire >:(((
}

function calcAll() {
  updateSubtot();
}

function clone() {
  //
  //capture the user input
  //
  let productNameInput = document.querySelector('#ProductNameInput').value;
  let productPriceInput = document.querySelector('#ProductPriceInput').value;
  console.log(productNameInput);
  console.log(productPriceInput);
  //
  //clone the top element
  //
  let cartLength = document.body.getElementsByClassName('pu');
  clone.id = cartLength.length + 1;
  document.body.querySelector('#cart > tbody').appendChild($cartClone);
  for (let i = 1; i <= $delSelect.length; i++) {
    document.querySelector(`tr.product:nth-child(${i}) > td:nth-child(5) > button:nth-child(1)`).onclick = delet;
    deletButtons.push(document.querySelector(`tr.product:nth-child(${i}) > td:nth-child(5) > button:nth-child(1)`));
  };
  //
  //replace the clone's info with new info
  //first select the new id
  // O________O

}

//$del.onclick = delet;
$calc.onclick = calcAll;
$createBtn.onclick = clone;
