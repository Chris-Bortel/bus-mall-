'use strict';

//global variable
var allProducts = []; // array for the products
var imagesOnScreen = 3;
var target = document.getElementById('product');

function Product(productName, imageSrc){
  this.productName = productName;
  this.imageSrc = imageSrc;
  this.clickCount = 0;

  allProducts.push(this);// take the object that I am building and put it where I want it
}

new Product('bag', 'assets/bag.jpg' );
new Product('banana', 'assets/banana.jpg');
new Product('bathroom', 'assets/bathroom.jpg');
new Product('boots', 'assets/boots.jpg');
new Product('breakfast', 'assets/breakfast.jpg');
new Product('bubblegum', 'assets/bubblegum.jpg');
new Product('chair', 'assets/chair.jpg');
new Product('cthulhu', 'assets/cthulhu.jpg');
new Product('dog-duck', 'assets/dog-duck.jpg');
new Product('scissors', 'assets/scissors.jpg');
new Product('shark', 'assets/shark.jpg');
new Product('pet-sweep', 'assets/sweep.jpg');
new Product('tauntaun', 'assets/tauntaun.jpg');
new Product('unicorn', 'assets/unicorn.jpg');
new Product('unicorn', 'assets/unicorn.jpg');
// new Product('usb', 'assets/usb.jpg');
new Product('water-can', 'assets/water-can.jpg');
new Product('wine-glass', 'assets/wine-glass.jpg');

Product.prototype.render = function(){
  var newLi = document.createElement('li');
  newLi.id = this.name;//makes id
  var newP = document.createElement('p');
  newP.textContent = 'clicks: ' + this.clickCount;
  newP.color = '#bada55';
  var newImg = document.createElement('img');
  newImg.src = this.imageSrc;
  newImg.id = this.imageSrc;

  newImg.height = '400';

  newLi.appendChild(newImg);
  newLi.appendChild(newP);
  target.appendChild(newLi);
};

// 2. Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

function getRandomNumbers(){
  var randNumberArray=[];
  for(var i =0 ; i < imagesOnScreen; i++){
    var randProduct = Math.floor(Math.random() * allProducts.length);
    randNumberArray.push(randProduct);
  }
  return randNumberArray;
}

function renderAll(){
  var randNumbsNewArray = getRandomNumbers();
  for(var i = 0; i < randNumbsNewArray.length ; i++){

    allProducts[randNumbsNewArray[i]].render();//nexting indexes
  }
}
renderAll();

// Attach an event listener to the section of the HTML page where the images are going to be displayed
//tracks number of times clicked

var clicks = 0;

function handleClicks(eventClick){
  if (clicks < 25) {
    // console.log(allProducts);
    clicks++;
    for(var i = 0; i < allProducts.length; i++){
      // console.log('x');
      if (eventClick.target.id === allProducts[i].imageSrc){
        allProducts[i].clickCount++;
        console.log(allProducts);
      }
    }
    target.innerHTML = '';
    renderAll();
  } else if (clicks === 25){
    target.innerHTML = '';
    for(i = 0; i < allProducts.length; i++){
      var newLiEl = document.createElement('li');
      newLiEl.textContent = allProducts[i].productName + ' had ' + allProducts[i].clickCount;
      target.appendChild(newLiEl);
    }
  }
}
var ulEl = document.getElementById('product');
ulEl.addEventListener('click', handleClicks);

// var newLiEl = document.createElement('li');
// newLiEl. textContent = allProducts[i].productName + 'shown' + 
//TODO: make new variable that tracks the number of times that the image was shown.
//this.times[0]=
//need an if 

// As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.

// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds have been completed, remove the event listeners on the product.

// TODO:Display the list of all the products followed by the votes received and number of times seen for each. Example: Banana Slicer had 3 votes and was shown 5 times
