function generateImage() {
  const text = document.getElementById('textInput').value || "Без текста";
  const bgColor = document.getElementById('bgColorInput').value;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Фон
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Текст
  ctx.fillStyle = "#ffffff";
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

function downloadImage() {
  const canvas = document.getElementById('canvas');
  const link = document.createElement('a');
  link.download = 'my_image.png';
  link.href = canvas.toDataURL();
  link.click();
}
