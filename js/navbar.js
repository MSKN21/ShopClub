document.getElementById("navbar").innerHTML = `<a href="./index.html">
<div id="comp_logo_div">
  <img src="../pics/sitelogo3.png" alt="" id="comp_logo" />
  <img src="../pics/sitename.png" id="comp_name" />
</div>
</a>
<div id="cats_sec">
  <div class="catg_links men" onclick="type(event)" id="men" >
  <i class='fas fa-male' style='font-size:28px'></i> Men
  </div>
  <div class="catg_links women"  onclick="type(event)" id="women">
  <i class='fas fa-female' style='font-size:28px'></i> Women
  </div>
  <div onclick="type(event)" id="kid" class="catg_links kid">
  <i class='fas fa-child' style='font-size:28px'></i> Kids
  </div>
  <div onclick="type(event)" id="home" class="catg_links home">
  <i class='	fas fa-house-user' style='font-size:28px'></i> Home & Living
  </div>
</div>
<div>
<div id="search_bar_div">
  <span
    ><i class="fa fa-search" style="font-size: 30px; padding: 5px"></i
  ></span>
  <input
    type="text"
    placeholder="Search for product, brands and more"
    id="search_bar"
  />
</div>
</div>
<div id="site_sec">
<a class="catg_links" href="./profile.html">
  <div><i class='fas fa-user-alt' style='font-size:28px'></i> Profile</div>
</a>
<a class="catg_links" href="./about.html">
  <div><i class='	fas fa-users' style='font-size:28px'></i> AboutUs</div>
</a>
<a class="catg_links" href="./contact.html">
  <div><i class='fa fa-question-circle' style='font-size:32px'></i> Help</div>
</a>
</div>`;

function type(event) {
  let p = event.target.id;
  console.log(p);
  localStorage.setItem("key", p);
  window.location.href = "./category.html";
}
