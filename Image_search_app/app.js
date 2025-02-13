let Acces_key = "iNuA9jQ2D7DJoh1rsFVRheTBegzY97KyOgzbNDiNNI0";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let showData = document.querySelector(".showData");
let moreBtn = document.getElementById("moreBtn");

let page = 1;
const getData = async (searchValue, pageno) => {
   let fetching = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=10&P=${pageno}age&client_id=${Acces_key}`
   );

   let jsonData = await fetching.json();
   console.log(jsonData.results);
   if (pageno === 1) {
      showData.innerHTML = " ";
   }
   if (searchInput.value == "") {
      showData.innerHTML = `
      <h1 style="text-align:center">Please Search</h1>`;
   } else {
      document.querySelector(".loadMore").style.display = "block";
   }

   jsonData.results.forEach(function (data) {
      console.log(data.urls.small);
      let div = document.createElement("div");
      div.classList.add("card");
      showData.appendChild(div);
      div.innerHTML = `
        <img src=${data.urls.small} alt=""> 
        <a href=${data.links.html} target="_blank">${data.alt_description}</a> `;
   });
};

searchBtn.addEventListener("click", function () {
   let searchValue = searchInput.value;
   getData(searchValue, 1);
});

moreBtn.addEventListener("click", function () {
   let moreImages = searchInput.value;
   getData(moreImages, page++);
});
