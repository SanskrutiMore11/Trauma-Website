let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.account-form .login-form').classList.remove('active');
  document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () =>{
  registerBtn.classList.remove('active');
  loginBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () =>{
  accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
  accountForm.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  loop:true,
  grabCursor:true,
});

var swiper = new Swiper(".home-courses-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
  acco.onclick = () =>{
    accordion.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

document.querySelector('.load-more .btn').onclick = () =>{
  document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
};


/*
const quizDB = [
  {
    question: "Q1: I am: (they can choose only one)",
    a: "The victim",
    b: "A teacher",
    c: "A caregiver",
    d: "A neighbor/ acquaintance",
    e: "Not related, but I care",
    f: "The perpetrator",
    g: "Other",
    
  },

  {
      question: "Q2: I am: (they can choose only one)",
      a: "The victim",
      b: "A teacher",
      c: "A caregiver",
      d: "A neighbor/ acquaintance",
      e: "Not related, but I care",
      f: "The perpetrator",
      g: "Other",
      
    },

    {
      question: "Q3: I am: (they can choose only one)",
      a: "The victim",
      b: "A teacher",
      c: "A caregiver",
      d: "A neighbor/ acquaintance",
      e: "Not related, but I care",
      f: "The perpetrator",
      g: "Other",
      
    },

    {
      question: "Q4: I am: (they can choose only one)",
      a: "The victim",
      b: "A teacher",
      c: "A caregiver",
      d: "A neighbor/ acquaintance",
      e: "Not related, but I care",
      f: "The perpetrator",
      g: "Other"
      
    }
  
];

const question = document.querySelector(' .question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option5 = document.querySelector('#option5');
const option6 = document.querySelector('#option6');
const option7 = document.querySelector('#option7');
const submit = document.querySelector('#submit');


const loadQuestion = () => {
  console.log(quizDB[0]);
}

loadQuestion();*/
/*
// Get references to the HTML elements
const ageSection = document.querySelector('#age');
const ageInput = document.querySelector('#age-input');
const ageButton = document.querySelector('#age-button');

const genderSection = document.querySelector('#gender');
const genderButton = document.querySelector('#gender-button');

const otherSection = document.querySelector('#other');
const submitButton = document.querySelector('button[type="submit"]');

const resultSection = document.querySelector('#result');

// Add an event listener to the age button
ageButton.addEventListener('click', () => {
// Show the gender section and hide the age section
genderSection.style.display = 'block';
ageSection.style.display = 'none';
});

// Add an event listener to the gender button
genderButton.addEventListener('click', () => {
// Show the other section and hide the gender section
otherSection.style.display = 'block';
genderSection.style.display = 'none';
});

// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
event.preventDefault(); // Prevent the form from submitting

// Show the result section and hide the other section
resultSection.style.display = 'block';
otherSection.style.display = 'none';

// Log the user's responses to the console
console.log('Age:', ageInput.value);
console.log('Gender:', document.querySelector('input[name="gender"]:checked').value);
console.log('Question 1:', document.querySelector('input[name="q1"]').value);
console.log('Question 2:', document.querySelector('select[name="q2"]').value);
});
*/



