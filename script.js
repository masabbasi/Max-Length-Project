let input = document.querySelector('input')
let counter = document.querySelector('.counter')
input.addEventListener('keyup',function(){
let maxLength = input.getAttribute('maxlength')
counter.innerHTML=maxLength-input.value.length;
})