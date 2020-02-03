//place all document elements in one object to easy control and maintian
// //////////////////////////////////////version1
// export const elements = {
//   searchForm: document.querySelector(".search"),
//   searchInput: document.querySelector(".search__field"),
//   searchResList: document.querySelector(".results__list")
// };
// //////////////////////////////////////version2,Rendering an AJAX Loading Spinner
// export const elements = {
//   searchForm: document.querySelector(".search"),
//   searchInput: document.querySelector(".search__field"),
//   searchRes: document.querySelector(".results"),
//   searchResList: document.querySelector(".results__list")
// };
// export const elementStrings = { loader: "loader" };//this is for element not on page all the time
// export const renderLoader = parent => {
// //   const loader = `<div class="loader">
// const loader = `<div class="${elementStrings.loader}">
//     <svg>
//     <use href="img/icons.svg#icon-cw"></use>
// </svg>
// </div>
// `;
//   parent.insertAdjacentHTML("afterbegin", loader);
// };
// export const clearLoader = () => {
//   // const loader=document.querySelector();//same as elements,it is mess if querySelector hard coded,so go to up/top declare elementStrings
// const loader = document.querySelector(`.${elementStrings.loader}`);
// if(loader) loader.parentElement.removeChild(loader);
// };

//////////////////////////////////////version2,Rendering an AJAX Loading Spinner
export const elements = {
    searchForm: document.querySelector(".search"),
    searchInput: document.querySelector(".search__field"),
    searchRes: document.querySelector(".results"),
    searchResList: document.querySelector(".results__list"),
    searchResPages: document.querySelector(".results__pages")
  };
  export const elementStrings = { loader: "loader" };//this is for element not on page all the time
  export const renderLoader = parent => {
  //   const loader = `<div class="loader">
  const loader = `<div class="${elementStrings.loader}">
      <svg>
      <use href="img/icons.svg#icon-cw"></use>
  </svg>
  </div>
  `;
    parent.insertAdjacentHTML("afterbegin", loader);
  };
  export const clearLoader = () => {
    // const loader=document.querySelector();//same as elements,it is mess if querySelector hard coded,so go to up/top declare elementStrings
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if(loader) loader.parentElement.removeChild(loader);
  };
  
