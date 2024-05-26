//console.log('connected');

document.getElementById("phone-plus").addEventListener('click', () => {
  let phoneNumberInput = document.getElementById('phone-number')
  //console.log(phoneNumber);
  let phoneQuantity = phoneNumberInput.value;
  let newPhoneQuantity = parseInt(phoneQuantity) + 1;
  phoneNumberInput.value = newPhoneQuantity;
  //console.log(newPhoneQuantity);

  let phonePrice = document.getElementById("phone-total");

  let previousPhoneValue = parseInt(phonePrice.innerHTML);
  let newPhoneValue = previousPhoneValue * newPhoneQuantity;
  previousPhoneValue = newPhoneValue;
  
  //phonePrice.innerHTML =newPhoneValue;
  
  console.log(newPhoneValue);

})

document.getElementById("phone-minus").addEventListener('click', () => {
  let phoneNumberInput = document.getElementById('phone-number')
  //console.log(phoneNumber);
  let phoneQuantity = phoneNumberInput.value;
  let newPhoneQuantity = parseInt(phoneQuantity) - 1;
  if (newPhoneQuantity >= 1) {
    phoneNumberInput.value = newPhoneQuantity;
  }
  //console.log(newPhoneQuantity);

})

