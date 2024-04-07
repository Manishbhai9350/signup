const form = document.querySelector('form')
const btn = document.querySelector('.btn')
var email = localStorage.getItem('email') || ''
var isValid = localStorage.getItem('isValid') || 'no'




if (email.length <=  0 ||  isValid == 'no') {
    subMition()
}

document.querySelector('.email').innerHTML = email
function  subMition() {
    localStorage.setItem('isValid','no')
    localStorage.setItem('email','')
    form.submit()
}

btn.addEventListener('click',function (){
    subMition()
} )