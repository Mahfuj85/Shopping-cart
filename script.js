//console.log('connected');

// document.getElementById("phone-plus").addEventListener('click', () => {
//   let phoneNumberInput = document.getElementById('phone-number')
//   //console.log(phoneNumber);
//   let phoneQuantity = phoneNumberInput.value;
//   let newPhoneQuantity = parseInt(phoneQuantity) + 1;
//   phoneNumberInput.value = newPhoneQuantity;
//   //console.log(newPhoneQuantity);

//   let phonePrice = document.getElementById("phone-total");

//   let previousPhoneValue = parseInt(phonePrice.innerHTML);
//   let newPhoneValue = previousPhoneValue * newPhoneQuantity;
//   //previousPhoneValue = newPhoneValue;
  
//   phonePrice.innerHTML =newPhoneValue;
  
//   console.log(newPhoneValue);

// })

// document.getElementById("phone-minus").addEventListener('click', () => {
//   let phoneNumberInput = document.getElementById('phone-number')
//   //console.log(phoneNumber);
//   let phoneQuantity = phoneNumberInput.value;
//   let newPhoneQuantity = parseInt(phoneQuantity) - 1;
//   if (newPhoneQuantity >= 1) {
//     phoneNumberInput.value = newPhoneQuantity;
//   }
//   //console.log(newPhoneQuantity);

//   let phonePrice = document.getElementById("phone-total");

//   let previousPhoneValue = parseInt(phonePrice.innerHTML);
//   let newPhoneValue = previousPhoneValue / newPhoneQuantity;
//   previousPhoneValue = newPhoneValue;
  
//   phonePrice.innerHTML =newPhoneValue;
  
//   //console.log(newPhoneValue);

// })

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

    //item total for plus button
    let result = parseInt(price.innerHTML) + parseInt(itemTotal.innerHTML);
    itemTotal.innerHTML = result;

    //sub total
    let subTotalResult = parseInt(subTotal.innerHTML) + parseInt(price.innerHTML);
    subTotal.innerHTML = subTotalResult;

    //tax amount
    let taxTotal = parseInt(subTotal.innerHTML) * 0.1;
    taxAmount.innerHTML = taxTotal;

    //total price
    let total = subTotalResult + taxTotal;
    totalPrice.innerHTML = total;
  }
}

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

      //item total for minus button
      let result = parseInt(itemTotal.innerHTML) - parseInt(price.innerHTML);
    itemTotal.innerHTML = result;

    //sub total
    let subTotalResult = parseInt(subTotal.innerHTML) - parseInt(price.innerHTML);
    subTotal.innerHTML = subTotalResult;

    //tax amount
    let taxTotal = parseInt(subTotal.innerHTML) * 0.1;
    taxAmount.innerHTML = taxTotal;

    //total price
    let total = subTotalResult + taxTotal;
    totalPrice.innerHTML = total;
    }
}

