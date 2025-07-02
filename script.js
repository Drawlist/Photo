function generateImage() {
  const text = document.getElementById('textInput').value || "Без текста";
  const bgColor = document.getElementById('bgColorInput').value;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Очищаем перед рисованием
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Фон
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Текст
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Проверка, текст точно строка
  if (typeof text === "string") {
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }
}
