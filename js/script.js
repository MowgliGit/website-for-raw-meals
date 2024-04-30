// ********** //
// NAVIGATION
// ********** //
const randomColorNav = () => `rgb(84, 38, 38)`;


document.querySelector('.header').addEventListener('click', function(e){
    e.preventDefault;
    this.style.backgroundColor = randomColorNav();
})
// ********** //
//    MENU
// ********** //
const firstSlide = document.querySelector('.first-slide');
const secondSlide = document.querySelector('.second-slide');
const btnFill = document.querySelector('.btn-dot');

document.querySelectorAll('.btn-dot').forEach(function (el){
    el.addEventListener('click', function(e){
        // e.preventDefault;
        firstSlide.classList.toggle('hidden');
        secondSlide.classList.toggle('hidden');
        btnFill.classList.toggle('btn-dot-fill')
    
       
    })
})
// ********** //
//    CTA
// ********** //


const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btn = document.querySelector('.btn-form');
const small = document.querySelector('.small');


//Show input error message
const showError = function(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show input success outline
const showSuccess = function(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
//Check email is valid
function isValidEmail(email) {
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase())
}



form.addEventListener('click', function(e) {
  e.preventDefault;
  if (username.value === ''){
    showError(username, 'Username is required')
  }else{
    showSuccess(username)
  }

  if (email.value === ''){
    showError(email, 'Email is required')
  }else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid')
  }
  else{
    showSuccess(email)
  }

  if (password.value === ''){
    showError(password, 'Password is required')
  }
    else {
    showSuccess(password)
  }
})

// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerNavEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
  headerNavEl.classList.toggle('nav-open')
})



// footer year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear
















