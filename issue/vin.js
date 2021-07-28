const checkVin = (vin) => {
  
    let invalidVinReg = new RegExp('[I, O, Q]', 'gi');
    
    if (vin.length != 17) {
      return false;
    }
    
    if (invalidVinReg.test(vin)) {
      return false;
    }
    
    let transform_obj = {
      A: 1,
      B: 2,
      С: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      J: 1,
      K: 2,
      L: 3,
      M: 4,
      N: 5,
      P: 7,
      R: 9,
      S: 2,
      T: 3,
      U: 4,
      V: 5,
      W: 6,
      X: 7,
      Y: 8,
      Z: 9,
    };
    
    let regexp_transform = new RegExp('[a-z]', 'gi');
    
    let multipliers = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
    
    let decoded_vin = Array.from(vin.replace(regexp_transform, (match) => transform_obj[match])).map((item) => +item);
    
    let multiplier_vin = decoded_vin.map((item, index) => item * multipliers[index]);
    
    let sum_vin = multiplier_vin.reduce((previous_item, item) => previous_item + item );
    
    if (sum_vin % 11 == 7 || sum_vin % 11 == 10){
      if (+vin[8] === 7  || vin[8] === 'X') {
        return true;
      }
      return false;
    }
    return false;
}

alert(checkVin('5YJ3E1EAXHF000347'));