export default function validateEmail(email) {
    const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.test(String(email).toLowerCase());
  }
  
  // export function checkPassword(input) {
  //   const passw = /^[A-Za-z]\w{7,14}$/;
  //   if (input.match(passw)) {
  //     return true;
  //   }
  //   return false;
  // }
  
    