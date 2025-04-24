// js.js
document.querySelector('.cta-button').addEventListener('click', function() {
  const phrases = [
    "Тестирование — это не поиск ошибок, а создание качества.",
    "Хороший тестировщик знает, что идеального кода не существует.",
    "Будь круче остальных 🗣🔥"
  ];
  
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  alert(randomPhrase);
});