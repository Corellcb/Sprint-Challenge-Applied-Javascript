/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const carouselEntry = document.querySelector('.carousel-container');

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
counter = 1;
function createCarousel() {
  const carousel = document.createElement('div'),
  leftBtn = document.createElement('div'),
  img1 = document.createElement('img'),
  img2 = document.createElement('img'),
  img3 = document.createElement('img'),
  img4 = document.createElement('img'),
  rightBtn = document.createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  img1.setAttribute('src', "../assets/carousel/mountains.jpeg");
  img1.style.display = 'inline-block';
  img2.setAttribute('src', "../assets/carousel/computer.jpeg");
  img3.setAttribute('src', "../assets/carousel/trees.jpeg");
  img4.setAttribute('src', "../assets/carousel/turntable.jpeg");

  leftBtn.textContent = "\u2B9C";
  rightBtn.textContent = "\u2B9E";

  carousel.appendChild(leftBtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightBtn);

  leftBtn.addEventListener('click', (event) => {
    if(counter === 1){
      img1.style.display = 'none';
      img4.style.display = 'inline-block';
      counter = 4;
    } 
    else if (counter === 2) {
      img2.style.display = 'none';
      img1.style.display = 'inline-block';
      counter = 1;
    } 
    else if (counter === 3) {
      img3.style.display = 'none';
      img2.style.display = 'inline-block';
      counter = 2;
    }
    else if (counter === 4) {
      img4.style.display = 'none';
      img3.style.display = 'inline-block';
      counter = 3;
    }
  })

  rightBtn.addEventListener('click', (event) => {
    if(counter === 1){
      img1.style.display = 'none';
      img2.style.display = 'inline-block';
      counter = 2;
    } 
    else if (counter === 2) {
      img2.style.display = 'none';
      img3.style.display = 'inline-block';
      counter = 3;
    } 
    else if (counter === 3) {
      img3.style.display = 'none';
      img4.style.display = 'inline-block';
      counter = 4;
    }
    else if (counter === 4) {
      img4.style.display = 'none';
      img1.style.display = 'inline-block';
      counter = 1;
    }
  })

  carouselEntry.appendChild(carousel);
}

createCarousel();

