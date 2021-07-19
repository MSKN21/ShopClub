const sliderright = (e) => {
  let x = e.target.parentNode.parentNode;
  x.childNodes[3].scrollBy({ left: 50, behaviour: "smooth" });
};

const sliderleft = (e) => {
  let x = e.target.parentNode.parentNode;
  x.childNodes[3].scrollBy({ left: -50, behaviour: "smooth" });
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
  "Angrakha Kurta",
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
  "Bedsheet with 2 Pillows",
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

const insertmen = (val) => {
  let x;
  if (val == 0) x = document.getElementById("catg_templates").innerHTML;
  else x = "";
  for (let i = 0; i < 10; i++) {
    x += `<div class="catg_tmplt" id="tmplts_id${
      i + 1
    }"><a href="./detail.html">
            <div class="catg_tmpimg_div">
              <img src="../pics/images/men${i + 1}.jpg" />
            </div></a>
            <div class="catg_tmptxt1">
              <h4>${brand1[i]}</h4>
              <p>${type1[i]}</p>
              <h4>${price1[i]}</h4>
            </div>
            <div class="catg_tmptxt2">
              <h5 onclick="bookmark(event)"><i
                  class="fa fa-heart-o"
                  style="font-size: 20px; padding-right: 5px"
                ></i
                >WISHLIST
              </h5><a href="./detail.html">
              <p>Size: ${size1[i]}</p>
              <h4>${price1[i]}</h4></a>
            </div>
          </div>`;
  }
  document.getElementById("catg_templates").innerHTML = x;
};

const insertwomen = (val) => {
  let x;
  if (val == 0) x = document.getElementById("catg_templates").innerHTML;
  else x = "";
  for (let i = 0; i < 10; i++) {
    x += `<div class="catg_tmplt" id="tmplts_id${
      i + 1
    }"><a href="./detail.html">
            <div class="catg_tmpimg_div">
              <img src="../pics/images/women${i + 1}.jpg" />
            </div></a>
            <div class="catg_tmptxt1">
              <h4>${brand2[i]}</h4>
              <p>${type2[i]}</p>
              <h4>${price2[i]}</h4>
            </div>
            <div class="catg_tmptxt2">
              <h5 onclick="bookmark(event)"><i
                  class="fa fa-heart-o"
                  style="font-size: 20px; padding-right: 5px"
                ></i
                >WISHLIST
              </h5><a href="./detail.html">
              <p>Size: ${size2[i]}</p>
              <h4>${price2[i]}</h4></a>
            </div>
          </div>`;
  }
  document.getElementById("catg_templates").innerHTML = x;
};

const insertkids = (val) => {
  let x;
  if (val == 0) x = document.getElementById("catg_templates").innerHTML;
  else x = "";
  for (let i = 0; i < 10; i++) {
    x += `<div class="catg_tmplt" id="tmplts_id${
      i + 1
    }"><a href="./detail.html">
            <div class="catg_tmpimg_div">
              <img src="../pics/images/kid${i + 1}.jpg" />
            </div></a>
            <div class="catg_tmptxt1">
              <h4>${brand3[i]}</h4>
              <p>${type3[i]}</p>
              <h4>${price3[i]}</h4>
            </div>
            <div class="catg_tmptxt2">
              <h5 onclick="bookmark(event)"><i
                  class="fa fa-heart-o"
                  style="font-size: 20px; padding-right: 5px"
                ></i
                >WISHLIST
              </h5><a href="./detail.html">
              <p>Size: ${size3[i]}</p>
              <h4>${price3[i]}</h4></a>
            </div>
          </div>`;
  }
  document.getElementById("catg_templates").innerHTML = x;
};

const insertliving = (val) => {
  let x;
  if (val == 0) x = document.getElementById("catg_templates").innerHTML;
  else x = "";
  for (let i = 0; i < 10; i++) {
    x += `<div class="catg_tmplt" id="tmplts_id${
      i + 1
    }"><a href="./detail.html">
            <div class="catg_tmpimg_div">
              <img src="../pics/images/home${i + 1}.jpg" />
            </div></a>
            <div class="catg_tmptxt1">
              <h4>${brand4[i]}</h4>
              <p>${type4[i]}</p>
              <h4>${price4[i]}</h4>
            </div>
            <div class="catg_tmptxt2">
              <h5 onclick="bookmark(event)"><i
                  class="fa fa-heart-o"
                  style="font-size: 20px; padding-right: 5px"
                ></i
                >WISHLIST
              </h5><a href="./detail.html">
              <p>Size: ${size4[i]}</p>
              <h4>${price4[i]}</h4></a>
            </div>
          </div>`;
  }
  document.getElementById("catg_templates").innerHTML = x;
};
function insertinfo() {
  document.getElementById("catg_templates").innerHTML = "";
  insertmen(0);
  insertwomen(0);
  insertkids(0);
  insertliving(0);
}

const addactiv = (e) => {
  let header = document.getElementById("numbers_div");
  let btns = header.getElementsByClassName("activ");
  btns[0].className = btns[0].className.replace(" activ", "");
  e.target.className += " activ";
};

const insertnums = () => {
  let x = document.getElementById("numbers_div").innerHTML;
  for (let i = 0; i < 10; i++) {
    if (i == 0) {
      x += `<div onclick="addactiv(event)" class="nums activ" id="num_${
        i + 1
      }">${i + 1}</div>`;
    } else {
      x += `<div onclick="addactiv(event)" class="nums" id="num_${i + 1}">${
        i + 1
      }</div>`;
    }
  }
  document.getElementById("numbers_div").innerHTML = x;
};
insertnums();

let result = document.querySelector("#fltr_types");
result.addEventListener("change", function (e) {
  let target = e.target;
  switch (target.id) {
    case "all":
      insertinfo();
      break;
    case "men":
      insertmen(1);
      break;
    case "women":
      insertwomen(1);
      break;
    case "kid":
      insertkids(1);
      break;
    case "home":
      insertliving(1);
      break;
  }
});

const redirecttype = () => {
  let x = localStorage.getItem("key");
  // console.log(x);
  switch (x) {
    case "men":
      document.getElementById("men").checked = "true";
      insertmen(1);
      break;
    case "women":
      document.getElementById("women").checked = "true";
      insertwomen(1);
      break;
    case "kid":
      document.getElementById("kid").checked = "true";
      insertkids(1);
      break;
    case "home":
      document.getElementById("home").checked = "true";
      insertliving(1);
      break;
    default:
      insertinfo();
      break;
  }
};
redirecttype();

const bookmark = (e) => {
  let x = e.target.childNodes[0].className;
  if (x === "fa fa-heart-o") {
    e.target.innerHTML = `<i
    class="fa fa-heart"
    style="font-size: 20px; padding-right: 5px"
  ></i
  >WISHLISTED`;
    e.target.style.backgroundColor = "rgb(250, 65, 105)";
    e.target.style.color = "white";
  } else {
    e.target.innerHTML = `<i
      class="fa fa-heart-o"
      style="font-size: 20px; padding-right: 5px"
    ></i
    >WISHLIST`;
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "black";
  }
};
