const addactiv = (e) => {
  let header = document.getElementById("user_qry_type");
  let btns = header.getElementsByClassName("active");
  btns[0].firstElementChild.style.display = "none";
  btns[0].className = btns[0].className.replace(" active", "");
  e.target.className += " active";
  e.target.firstElementChild.style.display = "inline";
};

const insert_orders = (e, type) => {
  if (type === 0) addactiv(e);
  let x = "";
  for (let i = 0; i < 4; i++) {
    x += `<div id="order_box">
    <div id="delvr_box">
      <div style="text-align: center">
        <i
          class="fas fa-dolly-flatbed"
          style="
            font-size: 32px;
            color: rgb(0, 83, 0);
            padding-top: 10px;
          "
        ></i>
      </div>
      <div id="delvr_info">
        <h4>Order Delivered</h4>
        <p>On Sat, 4 Jan 2020</p>
      </div>
    </div>
    <div id="order_info_box">
      <div id="order_image">
        <img src="../pics/shirt1.jpg" alt="" />
      </div>
      <div id="order_info">
        <h3>HIGHLANDER</h3>
        <p>Men Grey Slim Fit Solid Casual Shirt</p>
        <p>Size: 44</p>
        <p>Item Price <b>₹445.00</b></p>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("other_dets").innerHTML = x;
};
insert_orders(1, 1);

const insert_returns = (e) => {
  addactiv(e);
  let x = "";
  for (let i = 0; i < 4; i++) {
    x += `<div id="order_box">
    <div id="delvr_box">
      <div style="text-align: center">
        <i
          class="fa fa-close icon"
          style="font-size: 40px; color: red"
        ></i>
      </div>
      <div id="delvr_info">
        <h4 style="color: brown">Returned</h4>
        <p>On Wed, 25 Dec as per your request.</p>
      </div>
    </div>
    <div id="order_info_box">
      <div id="order_image">
        <img src="../pics/menshirt.jpg" alt="" />
      </div>
      <div id="order_info">
        <h3>HIGHLANDER</h3>
        <p>Men Grey Slim Fit Solid Casual Shirt</p>
        <p>Size: 44</p>
        <p>Item Price <b>₹445.00</b></p>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("other_dets").innerHTML = x;
};

const insert_adrs = (e) => {
  addactiv(e);
  let x = "";
  for (let i = 0; i < 1; i++) {
    x += `<div id="adrs_box">
    <h4>
      Saved Addresses
      <div class="add_adrs">+ ADD NEW ADDRESS</div>
    </h4>
    <h6>Default Address</h6>
    <div id="adrs_box1">
      <h5>M Saikrupananda</h5>
      <p>
        23-256,annapurna Nagar,Baglur cross,Yelahanka<br />
        Banglore<br />
        Banglore - 560064<br />
        Karnataka
      </p>
      <p>Mobile: 8688554605</p>
      <div id="adrs_box2">
        <p style="border-right: 1px solid rgba(0, 0, 0, 0.329)">EDIT</p>
        <p>REMOVE</p>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("other_dets").innerHTML = x;
};

const insert_coupons = (e) => {
  addactiv(e);
  let x = "";
  for (let i = 0; i < 5; i++) {
    x += `<div id="copn_box">
    <div id="copn_div">
      <div id="copn_sub_div1">
        <h4>75%</h4>
        <h4>OFF</h4>
      </div>
      <div id="copn_sub_div2">
        <p>On minimum purchase of <b>Rs. 800</b></p>
        <p>Code: <b>WFEXTRA150</b></p>
      </div>
    </div>
    <p>Expiry: <b>JUL 31 2021</b> | 11:59:00 P.M</p>
    <li>Rs. 150 off on minimum purchase of Rs. 800</li>
  </div>`;
  }
  document.getElementById("other_dets").innerHTML = x;
};
