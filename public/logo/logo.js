let logo = "";
async function Logo() {
  let data = await fetch("https://my-json-server.typicode.com/Mohammad02120/battlenet-json-part-3");
  let res = await data.json();
  logo = res.map((elem) => {
  return `
  
  <img src="${elem.logo}" class="img"/>
  </div>
  `

  });
  document.querySelector("#games").innerHTML += logo.join("");
}
export default Logo;
