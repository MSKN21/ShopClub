let mail = "";
let pass = "";

const inpmail = (e) => {
  mail = e.target.value;
  console.log(mail);
};
const inppass = (e) => {
  pass = e.target.value;
};

const hideerr = () => {
  document.getElementById("err").style.display = "none";
  setTimeout();
};

const showerr = () => {
  document.getElementById("err").style.display = "block";
  setTimeout(hideerr, 2000);
};

const signin = (e) => {
  e.preventDefault();
  if (mail === "name54@gmail.com" && pass === "1234567") {
    window.location.href = "./index.html";
  } else {
    showerr();
  }
};
