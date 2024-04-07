const input = document.querySelector('.inputField');
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
const form = document.querySelector(".form");
const redirectForm = document.querySelector('form')

var isTyping = false;
var id 


localStorage.setItem('isValid',"no")
localStorage.setItem('email','')


const setInitial = ()  => {
    input.classList.remove('invalid-inp');
    msg.classList.remove('invalid');
}
function ValidateEmail(value) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setInitial()
        return true
    }
    else {
        input.classList.add('invalid-inp');
        msg.classList.add('invalid');
      return false
    }
  }
btn.addEventListener('click', function() {
  const value = input.value
  var res = ValidateEmail(value.toLowerCase())
  if (res) {
    localStorage.setItem('isValid',"yes")
    localStorage.setItem('email',value)
    redirectForm.submit()
  }
})
// form.addEventListener("submit", (e) => {

//   var value = input.value.toLowerCase();
//   var res = ValidateEmail(value)
//   if (res) {
//     alert(res)
//     // formValidated()
//     // form.submit()
//   }
// });

input.addEventListener("keydown", (e) => {
    clearTimeout(id)
    setInitial()
    id = setTimeout(() => {
        ValidateEmail(e.target.value.toLowerCase())
    },600)
})


