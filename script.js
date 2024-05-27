// Function for plus button

function increment(incDec,prc,item){
  let count = document.getElementById(incDec);
  let price = document.getElementById(prc);
  let itemTotal = document.getElementById(item);
  let subTotal = document.getElementById("sub-total");
  let taxAmount = document.getElementById("tax-ammount");
  let totalPrice = document.getElementById("total-price");

  if(count.value >=10){
    count.value = 10;
    alert("Only Ten products are allowed")
  } else {
    count.value ++;

    //item total 
    let result = parseInt(price.innerHTML) + parseInt(itemTotal.innerHTML);
    itemTotal.innerHTML = result;

    //sub total
    let subTotalResult = parseInt(subTotal.innerHTML) + parseInt(price.innerHTML);
    subTotal.innerHTML = subTotalResult;

    //tax amount
    let taxTotal = parseInt(subTotal.innerHTML) * 0.1;
    let newTaxTotal = +taxTotal.toFixed(3);
    taxAmount.innerHTML = newTaxTotal;

    //total price
    let total = subTotalResult + newTaxTotal;
    totalPrice.innerHTML = total;
  }
}

// Function for minus button

function decrement(incDec,prc,item){
  let count = document.getElementById(incDec);
  let price = document.getElementById(prc);
  let itemTotal = document.getElementById(item);
  let subTotal = document.getElementById("sub-total");
  let taxAmount = document.getElementById("tax-ammount");
  let totalPrice = document.getElementById("total-price");

    if(count.value <=0){
      count.value = 0;
      alert("Minimum One product should be ordered")
    } else {
      count.value --;

      //item total 
      let result = parseInt(itemTotal.innerHTML) - parseInt(price.innerHTML);
    itemTotal.innerHTML = result;

    //sub total
    let subTotalResult = parseInt(subTotal.innerHTML) - parseInt(price.innerHTML);
    subTotal.innerHTML = subTotalResult;

    //tax amount
    let taxTotal = parseInt(subTotal.innerHTML) * 0.1;
    let newTaxTotal = +taxTotal.toFixed(3);
    taxAmount.innerHTML = newTaxTotal;

    //total price
    let total = subTotalResult + newTaxTotal;
    totalPrice.innerHTML = total;
    }
}

