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
  "WROGN",
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
  "Sneakers",
  "Striped Round Neck T-shirt",
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
  "Rs.1199",
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
  "L XL XXL",
];

const insert_similar = () => {
  x = document.getElementById("similar_prod").innerHTML;
  for (let i = 0; i < 12; i++) {
    x += `<a href="./detail.html"><div class="template" id="home_${
      i + 1
    }"><div class="img_box">
            <img src="../pics/images/men${i + 1}.jpg" class="tmp_image" />
          </div>
          <h4 class="brand">${brand1[i]}</h4>
          <p class="type">${type1[i]}</p>
          <p class="size">Size: ${size1[i]}</p>
          <p class="price">${price1[i]}</p></div></a>`;
  }
  document.getElementById("similar_prod").innerHTML = x;
};
insert_similar();

const addselected = (e) => {
  let arr = [
    "shirt1.webp",
    "shirt2.webp",
    "shirt3.webp",
    "shirt4.webp",
    "shirt5.webp",
    "shirt6.webp",
  ];
  let header = document.getElementById("all_img_div");
  let btns = header.getElementsByClassName("selected");
  console.log(btns);
  btns[0].className = btns[0].className.replace(" selected", "");
  e.target.parentNode.className += " selected";
  let i = parseInt(e.target.parentNode.id);
  console.log(e.target.parentNode.id);
  document.getElementById("selct_image").src = `../pics/${arr[i - 1]}`;
};

const sizeselected = (e) => {
  let header = document.getElementById("size_div");
  let btns = header.getElementsByClassName("active");
  console.log(btns);
  btns[0].className = btns[0].className.replace(" active", "");
  e.target.className += " active";
};

const insert_reviews = () => {
  x = document.getElementById("reviewbox").innerHTML;
  for (let i = 0; i < 12; i++) {
    x += `<div class="review_div">
    <p>
      <span
        >4 <i class="fas fa-star" style="font-size: 14px"></i></span
      >&nbsp;&nbsp; The product appears same as given in pictures.
      Quality of cloth is good. It fitted me perfectly but I did not
      look good in this. So I had to return it. Else there's no
      problem with the product.
    </p>
    <h6>Rahul Pandit3 | Nov 2020</h6>
  </div>`;
  }
  document.getElementById("reviewbox").innerHTML = x;
};
insert_reviews();

const bookmark = (e) => {
  let x = e.target.childNodes[0].className;
  if (x === "fa fa-heart") {
    e.target.innerHTML = `<i
    class="fa fa-heart-o"
    style="font-size: 24px"
    ></i
    > WISHLIST`;
    e.target.style.backgroundColor = "burlywood";
    e.target.style.color = "rgb(255, 255, 255)";
  } else {
    e.target.innerHTML = `<i
    class="fa fa-heart"
    style="font-size: 24px"
  ></i
  > WISHLISTED`;
    e.target.style.backgroundColor = "rgb(250, 65, 105)";
    e.target.style.color = "white";
  }
};
