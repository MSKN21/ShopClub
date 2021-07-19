const sliderright = (e) => {
  let x = e.target.parentNode.parentNode.parentNode;
  x.scrollBy({ left: 350, behaviour: "smooth" });
};

const sliderleft = (e) => {
  let x = e.target.parentNode.parentNode.parentNode;
  x.scrollBy({ left: -350, behaviour: "smooth" });
};

let brand1 = [
  "Mast & Harbour",
  "HIGHLANDER",
  "WROGN",
  "Mr Bowerbird",
  "Moda Rapido",
  "Roadster",
  "Campus Sutra",
  "Mast & Harbour",
  "H&M",
  "Puma",
  "M7 Metronaut",
];
let type1 = [
  "Blazer",
  "Casual Shirt",
  "Strechable Jeans",
  "Trouser",
  "Cotton T-shirt",
  "Round Neck Tshirt",
  "Hooded Sweatshirt",
  "Joggers",
  "Sweatshirt Shorts",
  "Running Shoes",
  " Sneakers",
];
let price1 = [
  "Rs.1999",
  "Rs.724",
  "Rs.999",
  "Rs.899",
  "Rs.629",
  "Rs.479",
  "Rs.899",
  "Rs.899",
  "Rs.799",
  "Rs.2999",
  "Rs.749",
];
let size1 = [
  "40,42,44",
  "40,42,44",
  "32,34,36",
  "34,36,38",
  "M,L",
  "L,Xl",
  "M,L,XL",
  "L,XL",
  "33,37,41",
  "9,10,11",
  "7,8,9,10",
];

let brand2 = [
  "SASSAFRAS",
  "Inddus",
  "SASSAFRAS",
  "HERE&NOW",
  "Harpa",
  "SASSAFRAS",
  "FabAlley",
  "Castle",
  "DressBerry",
  "Lavie",
];
let type2 = [
  "Off-Shoulder Midi Dress",
  "Embellished Top",
  "Maxi Dress",
  "Angrakha Kurta with Trousers",
  "Top",
  "Printed Top",
  "Midi Skirt",
  "Dhoti Salwar",
  "Mules with Bow Detail",
  "Handheld Bag",
];
let price2 = [
  "Rs.845",
  "Rs.799",
  "Rs.850",
  "Rs.1499",
  "Rs.549",
  "Rs.599",
  "Rs.739",
  "Rs.699",
  "Rs.749",
  "Rs.1999",
];
let size2 = [
  "M,L,XL",
  "S,M,L",
  "L,XL",
  "S,M,L",
  "L,XL",
  "S,M,L,XL",
  "28,30,32",
  "M,L",
  "36,37,38,39",
  "Onesize",
];

let brand3 = [
  "YK Disney",
  "Indian Terrain",
  "Pantaloons Junior",
  "Nauti Nati",
  "SG YUVRAJ",
  "max",
  "Aarika",
  "Cutiekins",
  "YK",
  "shoexpress",
];
let type3 = [
  " Round Neck T-shirt",
  "Casual Shirt",
  "Regular Shorts",
  "Shirt with Shorts",
  "Sherwani Set",
  "Camouflage Printed Joggers",
  "Palazzos With Dupatta",
  "Printed Top",
  "Sneakers",
  "Sandals",
];
let price3 = [
  "Rs.484",
  "Rs.539",
  "Rs.499",
  "Rs.449",
  "Rs.999",
  "Rs.589",
  "Rs.699",
  "Rs.548",
  "Rs.650",
  "Rs.450",
];
let size3 = [
  "7-8Y,8-9Y",
  "4-5Y,6-7Y,8-9Y",
  "8-9Y",
  "1Y,2Y",
  "2-3Y,4-5Y",
  "3-4Y",
  "2-3Y,4-5Y",
  "4-5Y",
  "7Y,8Y",
  "5Y,6Y",
];

let brand4 = [
  "Home Sizzler",
  "Divine Casa",
  "RUGSMITH",
  "NEUDIS",
  "SANDED EDGE",
  "999Store",
  "RANDOM",
  "TIED RIBBONS",
  "Laopala",
  "Clasiko",
];
let type4 = [
  "Bedsheet with 2 Pillow Covers",
  "Double Bed Dohar",
  "Anti-Skid Birch Rug",
  "Woven Floor Mat",
  "Lamp with Shade",
  "Buddha Canvas Wall Art",
  "Wall Clock",
  "Ladies Showpieces",
  "Cups and Saucers Set",
  "Table Cover",
];
let price4 = [
  "Rs.599",
  "Rs.945",
  "Rs.999",
  "Rs.399",
  "Rs.1999",
  "Rs.2999",
  "Rs.599",
  "Rs.1999",
  "Rs.860",
  "Rs.599",
];
let size4 = [
  "Double Queen",
  "Double Queen",
  "3X5",
  "Onesize",
  "Onesize",
  "Onesize",
  "Onesize",
  "Onesize",
  "Onesize",
  "Onesize",
];

const insertinfo = () => {
  let x = document.getElementById("men_info").innerHTML;
  for (let i = 0; i < 10; i++) {
    x += `<a href="./detail.html"><div class="template" id="mens_${
      i + 1
    }"><div class="img_box">
            <img src="../pics/images/men${i + 1}.jpg" class="tmp_image" />
          </div>
          <h4 class="brand">${brand1[i]}</h4>
          <p class="type">${type1[i]}</p>
          <p class="size">Size: ${size1[i]}</p>
          <p class="price">${price1[i]}</p></div></a>`;
  }
  document.getElementById("men_info").innerHTML = x;

  x = document.getElementById("women_info").innerHTML;
  for (let i = 0; i < 10; i++) {
    x += `<a href="./detail.html"><div class="template" id="women_${i + 1}">
          <div class="img_box">
            <img src="../pics/images/women${i + 1}.jpg" class="tmp_image" />
          </div>
          <h4 class="brand">${brand2[i]}</h4>
          <p class="type">${type2[i]}</p>
          <p class="size">Size: ${size2[i]}</p>
          <p class="price">${price2[i]}</p></div></a>`;
  }
  document.getElementById("women_info").innerHTML = x;

  x = document.getElementById("kids_info").innerHTML;
  for (let i = 0; i < 10; i++) {
    x += `<a href="./detail.html"><div class="template" id="kid_${
      i + 1
    }"><div class="img_box">
            <img src="../pics/images/kid${i + 1}.jpg" class="tmp_image" />
          </div>
          <h4 class="brand">${brand3[i]}</h4>
          <p class="type">${type3[i]}</p>
          <p class="size">Size: ${size3[i]}</p>
          <p class="price">${price3[i]}</p></div></a>`;
  }
  document.getElementById("kids_info").innerHTML = x;

  x = document.getElementById("home_info").innerHTML;
  for (let i = 0; i < 10; i++) {
    x += `<a href="./detail.html"><div class="template" id="home_${
      i + 1
    }"><div class="img_box">
            <img src="../pics/images/home${i + 1}.jpg" class="tmp_image" />
          </div>
          <h4 class="brand">${brand4[i]}</h4>
          <p class="type">${type4[i]}</p>
          <p class="size">Size: ${size4[i]}</p>
          <p class="price">${price4[i]}</p></div></a>`;
  }
  document.getElementById("home_info").innerHTML = x;
};

insertinfo();
