// Bazadan habarlarni olish uchun import qilish
import { DATA } from '../server/db.js';
const form = document.querySelector('.form');
const input = document.querySelector('.form input');
const content = document.querySelector('.content');
const headerStatus = document.querySelector('.header__status');
const contentImage = document.querySelector('.content__image');

form.addEventListener('submit', (event) => {
  // Page refresh bo'lishini oldini olish
  event.preventDefault();
  let val = input.value;
  if (val.trim() === '') return null;

  // Habar yozganda stiker yo'q bo'lishi
  contentImage.style.display = 'none';

  //  Habarni soat nechida jo'natilganini ko'rsatish uchun
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  // Habar yoza olishi uchun yangi div hosil qiladi
  let div = document.createElement('div');
  div.className = 'message my-message';
  div.innerHTML = `
    <p>${val}</p>
    <span>${hour}:${minute}</span>
    `;
  content.appendChild(div);
  // Inputni tozalaydi habar jo'natilganidan so'ng
  input.value = '';

  // Partnyorni chaqirish
  partnerSendMessage();
});

// Bot yoza olish uchun
function partnerSendMessage() {
  setTimeout(() => {
    //  Habarni soat nechida jo'natilganini ko'rsatish uchun
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    // Random habar yozish
    let index = Math.floor(Math.random() * DATA.length);

    // Bot habar yoza olishi uchun yangi div hosil qiladi
    let div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `
            <p>${DATA[index]}</p>
            <span>${hour}:${minute}</span>
        `;
    // Qaysi elementga bo'glanishi
    content.appendChild(div);
  }, 1000);
}
