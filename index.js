window.onload = () => {
  const canvas = document.getElementById('cnv');
  const imgPath = 'img.jpg';

  const draw = (canvas, imgPath) => {
    const img = new Image();
    img.addEventListener('load', () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
    });
    img.src = imgPath;
  }

  draw(canvas, imgPath);
}

