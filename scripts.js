let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

if (next) {
  next.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });
}

if (prev) {
  prev.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });
}

// Auto slide every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
}); 


function checkcontet(){
  const name = document.getElementById("name").value;
  const telefone = document.getElementById("phone_number").value
  const email = document.getElementById("email").value
  if (email.trim() == '' || telefone.trim() == '' || name.trim() == ''){
    alert('Os campos devem ser preenchidos')
  }else{
    alert('Está tudo ok')
  }
}

function toggleMenu() {
  const menuList = document.getElementById('menuList');
  menuList.classList.toggle('show');
}

function hideMenu() {
  const menuList = document.getElementById('menuList');
  menuList.classList.remove('show');
}