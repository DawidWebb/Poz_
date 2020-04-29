const btn1 = document.querySelector('.arrow1');
const btn2 = document.querySelector('.arrow2');
const boxMenu = document.querySelector('aside');

btn1.addEventListener('click', function () {
  boxMenu.classList.toggle('active');
  btn1.classList.toggle('active');
  btn2.classList.toggle('active');

})
btn2.addEventListener('click', function () {
  boxMenu.classList.toggle('active');
  btn1.classList.toggle('active');
  btn2.classList.toggle('active');

})