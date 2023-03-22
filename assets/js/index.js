var container = document.getElementById("container");

var images = ["./assets/imgs/family/1.jpg","./assets/imgs/family/2.jpg","./assets/imgs/family/4.jpg","./assets/imgs/family/5.jpg","./assets/imgs/family/6.jpg","./assets/imgs/family/7.jpg","./assets/imgs/family/8.jpg","./assets/imgs/family/3.jpg","./assets/imgs/family/9.jpeg","./assets/imgs/family/10.jpeg"];

for (var i = 0; i < images.length; i++) {
  var img = document.createElement("img");
  img.src = images[i];
  container.appendChild(img);
  moveImage(img);
}

function moveImage(img) {
  var maxX = container.offsetWidth - img.width;
  var maxY = container.offsetHeight - img.height;
  var posX = Math.floor(Math.random() * maxX);
  var posY = Math.floor(Math.random() * maxY);
  var dirX = Math.random() < 0.5 ? -1 : 1;
  var dirY = Math.random() < 0.5 ? -1 : 1;
  var speedX = Math.floor(Math.random() * 1.5) + 1;
  var speedY = Math.floor(Math.random() * 1.5) + 1;
  setInterval(function() {
    posX += speedX * dirX;
    posY += speedY * dirY;
    if (posX < 0 || posX > maxX) {
      dirX = -dirX;
    }
    if (posY < 0 || posY > maxY) {
      dirY = -dirY;
    }
    img.style.left = posX + "px";
    img.style.top = posY + "px";
  }, 20);
}
