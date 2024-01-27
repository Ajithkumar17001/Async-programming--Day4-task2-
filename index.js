let box = document.querySelector(".container");
let qns = document.createElement("h2");
let ans = document.createElement("p");

box.append(qns, ans);

const getrandom = async () => {
  await fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then((res) => res.json())
    // .then((res) => console.log(res.json()))
    .then((msg) => {
      qns.innerHTML = msg[0].setup;
      ans.innerHTML = msg[0].punchline;
    });
};
getrandom();
