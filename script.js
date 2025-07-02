function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomText() {
  const phrases = [
    "Привет, мир!",
    "Твое изображение готово!",
    "Генератор работает!",
    "Случайный текст",
    "GitHub.io мощь!"
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function generateImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Заливка фона случайным цветом
  const bgColor = getRandomColor();
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Текст по центру
  ctx.fillStyle = "#ffffff";
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.fillText(getRandomText(), canvas.width / 2, canvas.height / 2);
}

function downloadImage() {
  const canvas = document.getElementById('canvas');
  const link = document.createElement('a');
  link.download = 'image.png';
  link.href = canvas.toDataURL();
  link.click();
}

