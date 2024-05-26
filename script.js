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

  if(count.value >=10){
    count.value = 10;
    alert("Only Ten products are allowed")
  } else {
    count.value ++;

    let result = parseInt(price.innerHTML) + parseInt(itemTotal.innerHTML);
    itemTotal.innerHTML = result;
  }
}

function decrement(incDec,prc,item){
  let count = document.getElementById(incDec);
  let price = document.getElementById(prc);
  let itemTotal = document.getElementById(item);
    if(count.value <=0){
      count.value = 0;
      alert("Minimum One product should be ordered")
    } else {
      count.value --;

      let result = parseInt(itemTotal.innerHTML) - parseInt(price.innerHTML);
    itemTotal.innerHTML = result;
    }
}

