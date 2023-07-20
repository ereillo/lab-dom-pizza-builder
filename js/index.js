// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = "visible";
    } else {
      oneGreen.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach((element) => {
    if (state.whiteSauce) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach((element2) => {
    if (state.glutenFreeCrust) {
      element2.style.visibility = "visible";
    } else {
      element2.style.visibility = "hidden";
    }
  });
}

function renderButtons() {
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
  const whiteSauceButton = document.querySelector(".btn.btn-sauce");
  const greenPepperButton = document.querySelector(".btn.btn-green-peppers");
  const crustButton = document.querySelector(".btn.btn-crust")

  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  if (state.mushrooms) {
    mushroomsButton.classList.add('active');
  } else {
    mushroomsButton.classList.remove('active');
  }

  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  }

  if (state.greenPeppers) {
    greenPepperButton.classList.add('active');
  } else {
    greenPepperButton.classList.remove('active');
  }

  if (state.greenPeppers) {
    greenPepperButton.classList.add('active');
  } else {
    greenPepperButton.classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    crustButton.classList.add('active');
  } else {
    crustButton.classList.remove('active');
  }
}


function renderPrice() {
let realUl = document.querySelector(".price ul");
let ulNode = document.querySelectorAll(".price li")
let price = document.querySelector(".price strong")

console.log(price)

ulNode.forEach((elem) => {
  if (state.pepperoni === false && elem.innerText === "$1 pepperoni") {
    elem.remove();
    price.innerText--
  } else if (state.pepperoni === true && !realUl.innerText.includes("$1 pepperoni")) {
    let liNode1 = document.createElement("li");
    liNode1.innerText = "$1 pepperoni";
    price.innerText++
    return realUl.append(liNode1);
  }

  if (state.mushrooms === false && elem.innerText === "$1 mushrooms") {
    elem.remove();
  } else if (state.mushrooms === true && !realUl.innerText.includes("$1 mushrooms")){
  let liNode2 = document.createElement("li");
    liNode2.innerText = "$1 mushrooms";
     price.innerText++
     return realUl.append(liNode2); // me da Nan, no soy capaz de saber por qué
}})


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function() {
  state.mushrooms = !state.mushrooms;
  renderEverything()
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
});}
