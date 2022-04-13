// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

function validatePIN (pin) {
    let pattern = /^[0-9]+$/
    return ((pin.length == 4 || pin.length == 6) && pattern.test(pin)) 
  }