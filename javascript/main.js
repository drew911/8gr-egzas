/*
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau.
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/

getAllAnswers();



function getAllAnswers(){
  countAll();
  countCafeShopsInTown("Kaunas");
  countMenuItemsInCafeShop(0);
  countDifferentDishesInTown("Kaunas");
  countAveragePrice();
}



function countAll(){
    let allCafeShops = data.length;
    document.getElementById('kiek_kaviniu').innerHTML = allCafeShops;
}


function countCafeShopsInTown(town){
  let kaunasShops = 0;
  data.forEach(item => {
    // extra: visa stringa paversti didziosiomis arba mazosomis ir tada lyginti
    if (item.adresas.includes(town)) {
      kaunasShops++;
    }
  });
  document.getElementById('kiek_kaviniu_kaune').innerHTML = kaunasShops;
}

function countMenuItemsInCafeShop(shop){
  let menuItemsInShop = data[shop].menu.length;
  document.getElementById('patiekalai_1_kav').innerHTML = menuItemsInShop;
}

function countDifferentDishesInTown(town){
  let dishesInTown = [];
  data.forEach((cafeShop, i) => {
    if (cafeShop.adresas.includes(town)) {
      cafeShop.menu.forEach((dish, i) => {
        if (!dishesInTown.includes(Object.keys(dish)[0])) {
          dishesInTown.push(Object.keys(dish)[0]);
        }
      });
    }
  });
  let differentDishesNumber = dishesInTown.length;
  document.getElementById('skirtingi_pat_viename_mieste').innerHTML = differentDishesNumber;
}


function countAveragePrice(){
  let allPrices=[];
  let sum = 0;
  let avgPrice;
  data.forEach((shop, i) => {
    shop.menu.forEach((menuItem, i) => {
      allPrices.push(Object.values(menuItem)[0]);
    });
  });
  console.log(allPrices);
  allPrices.forEach((price, i) => {
    sum = sum + price;
  });
  avgPrice = sum/allPrices.length;
  document.getElementById('vidutine').innerHTML = Math.round(avgPrice * 100) / 100;
}
