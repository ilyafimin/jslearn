function validPhoneNumber(phoneNumber){
  return /\(\d{3}\)\s+\d{3}\-\d{4}/g.test(phoneNumber);
}