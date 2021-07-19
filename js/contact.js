let comment,
  starcheck,
  starcnt = 0;

const countselected = (num) => {
  for (let i = 1; i <= num; i++) {
    document.getElementById(`str${i}`).style.color = "yellow";
  }
  for (let i = num + 1; i <= 5; i++) {
    document.getElementById(`str${i}`).style.color = "rgb(255, 255, 255)";
  }
  document.getElementById("starinfo").innerText = `Your rating: ${num}/5`;
  starcnt = num;
};

const hideit = () => {
  document.getElementById("starerrmsg").style.display = "none";
};
// hideit();

const setcomment = (e) => {
  let cmt = e.target.value;
  comment = cmt;
};

const feedbacksubmit = (e) => {
  e.preventDefault();
  if (starcnt !== 0) {
    const feedback = { comment, rating: starcnt };
    console.log(feedback);
  } else {
    document.getElementById("starerrmsg").style.display = "block";
    setTimeout(hideit, 2000);
  }
};
