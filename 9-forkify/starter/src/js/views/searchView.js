//////////////////////////////////////version1,beginning test
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// export const ID = 23;
//////////////////////////////////////version2,put all elements in base where all documents in one place
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;
// //////////////////////////////////////version3,display output to webpage
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;

// const renderRecipe = recipe => {
//   const markup = `<li>
// <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//     <figure class="results__fig">
//         <img src="${recipe.image_url}" alt="Test">
//     </figure>
//     <div class="results__data">
//         <h4 class="results__name">${recipe.title}</h4>
//         <p class="results__author">${recipe.publisher}</p>
//     </div>
// </a>
// </li>`;
// elements.searchResList.insertAdjacentHTML('beforeend',markup);
// };

// export const renderResults = recipes => {
//   recipes.forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
// };
// //////////////////////////////////////version4,display output to webpage
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;
// export const clearInput=()=>{
//     elements.searchInput.value='';
// };
// export const clearResults=()=>{
//     elements.searchResList.innerHTML='';
// }
// const renderRecipe = recipe => {
//   const markup = `<li>
// <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//     <figure class="results__fig">
//         <img src="${recipe.image_url}" alt="Test">
//     </figure>
//     <div class="results__data">
//         <h4 class="results__name">${recipe.title}</h4>
//         <p class="results__author">${recipe.publisher}</p>
//     </div>
// </a>
// </li>`;
// elements.searchResList.insertAdjacentHTML('beforeend',markup);
// };

// export const renderResults = recipes => {
//   recipes.forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
// };

// //////////////////////////////////////version4,display output to webpage
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;
// export const clearInput=()=>{
//     elements.searchInput.value='';
// };
// export const clearResults=()=>{
//     elements.searchResList.innerHTML='';
// }
// const renderRecipe = recipe => {
//   const markup = `<li>
// <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//     <figure class="results__fig">
//         <img src="${recipe.image_url}" alt="Test">
//     </figure>
//     <div class="results__data">
//         <h4 class="results__name">${recipe.title}</h4>
//         <p class="results__author">${recipe.publisher}</p>
//     </div>
// </a>
// </li>`;
// elements.searchResList.insertAdjacentHTML('beforeend',markup);
// };

// export const renderResults = recipes => {
//   recipes.forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
// };
// //////////////////////////////////////version5,Building the Search View - Part 2
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;
// export const clearInput = () => {
//   elements.searchInput.value = "";
// };
// export const clearResults = () => {
//   elements.searchResList.innerHTML = "";
// };
// /*
// // 'Pasta with tomato and spinach'
// acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
// acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
// acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
// */
// const limitReceipeTitle = (title, limit = 17) => {
//     const newTitle=[];
//   if (title.length > limit) {
//     title.split(" ").reduce((acc, cur) => {//acc-accumulator, cur-current
// if(acc+cur.length<=limit){
//    newTitle.push(cur);
// }
// return acc+cur.length;
//     }, 0); //split title by space
//     return `${newTitle.join(' ')}...`
//   }
//   return title;
// };
// const renderRecipe = recipe => {
//   const markup = `<li>
// <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//     <figure class="results__fig">
//         <img src="${recipe.image_url}" alt="Test">
//     </figure>
//     <div class="results__data">
//         <h4 class="results__name">${limitReceipeTitle(recipe.title)}</h4>
//         <p class="results__author">${recipe.publisher}</p>
//     </div>
// </a>
// </li>`;
//   elements.searchResList.insertAdjacentHTML("beforeend", markup);
// };

// export const renderResults = recipes => {
//   recipes.forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
// };

// //////////////////////////////////////version6,Rendering an AJAX Loading Spinner
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;
// export const clearInput = () => {
//   elements.searchInput.value = "";
// };
// export const clearResults = () => {
//   elements.searchResList.innerHTML = "";
// };
// /*
// // 'Pasta with tomato and spinach'
// acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
// acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
// acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
// */
// const limitReceipeTitle = (title, limit = 17) => {
//     const newTitle=[];
//   if (title.length > limit) {
//     title.split(" ").reduce((acc, cur) => {//acc-accumulator, cur-current
// if(acc+cur.length<=limit){
//    newTitle.push(cur);
// }
// return acc+cur.length;
//     }, 0); //split title by space
//     return `${newTitle.join(' ')}...`
//   }
//   return title;
// };
// const renderRecipe = recipe => {
//   const markup = `<li>
// <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//     <figure class="results__fig">
//         <img src="${recipe.image_url}" alt="Test">
//     </figure>
//     <div class="results__data">
//         <h4 class="results__name">${limitReceipeTitle(recipe.title)}</h4>
//         <p class="results__author">${recipe.publisher}</p>
//     </div>
// </a>
// </li>`;
//   elements.searchResList.insertAdjacentHTML("beforeend", markup);
// };

// export const renderResults = recipes => {
//   recipes.forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
// };

// //////////////////////////////////////version7,Implementing Search Results Pagination step1
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;
// export const clearInput = () => {
//   elements.searchInput.value = "";
// };
// export const clearResults = () => {
//   elements.searchResList.innerHTML = "";
// };
// /*
// // 'Pasta with tomato and spinach'
// acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
// acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
// acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
// */
// const limitReceipeTitle = (title, limit = 17) => {
//     const newTitle=[];
//   if (title.length > limit) {
//     title.split(" ").reduce((acc, cur) => {//acc-accumulator, cur-current
// if(acc+cur.length<=limit){
//    newTitle.push(cur);
// }
// return acc+cur.length;
//     }, 0); //split title by space
//     return `${newTitle.join(' ')}...`
//   }
//   return title;
// };
// const renderRecipe = recipe => {
//   const markup = `<li>
// <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//     <figure class="results__fig">
//         <img src="${recipe.image_url}" alt="Test">
//     </figure>
//     <div class="results__data">
//         <h4 class="results__name">${limitReceipeTitle(recipe.title)}</h4>
//         <p class="results__author">${recipe.publisher}</p>
//     </div>
// </a>
// </li>`;
//   elements.searchResList.insertAdjacentHTML("beforeend", markup);
// };
// const renderButtons=(page,numResuls,resPerPage)=>{
// const pages=Math.ceil(numResuls/resPerPage);
// if(page===1&& pages> 1){
//   //Only button to go next page
// }else if (page< pages){
//   //both buttons
// }else if (page===pages&& pages> 1){
//   //only button to goto previous page
// }
// };
// export const renderResults =(recipes,page=1,resPerPage=10)  => {
//   const start=(page-1) * resPerPage;
//   const end=page *resPerPage;
//   recipes.slice(start,end).forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
// };

// //////////////////////////////////////version8,Implementing Search Results Pagination step2
// import { elements } from "./base";
// export const getInput = () => elements.searchInput.value;
// export const clearInput = () => {
//   elements.searchInput.value = "";
// };
// export const clearResults = () => {
//   elements.searchResList.innerHTML = "";
//   elements.searchResPages.innerHTML="";//clear the page buttons
// };
// /*
// // 'Pasta with tomato and spinach'
// acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
// acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
// acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
// acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
// */
// const limitReceipeTitle = (title, limit = 17) => {
//   const newTitle = [];
//   if (title.length > limit) {
//     title.split(" ").reduce((acc, cur) => {
//       //acc-accumulator, cur-current
//       if (acc + cur.length <= limit) {
//         newTitle.push(cur);
//       }
//       return acc + cur.length;
//     }, 0); //split title by space
//     return `${newTitle.join(" ")}...`;
//   }
//   return title;
// };
// const renderRecipe = recipe => {
//   const markup = `<li>
// <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//     <figure class="results__fig">
//         <img src="${recipe.image_url}" alt="Test">
//     </figure>
//     <div class="results__data">
//         <h4 class="results__name">${limitReceipeTitle(recipe.title)}</h4>
//         <p class="results__author">${recipe.publisher}</p>
//     </div>
// </a>
// </li>`;
//   elements.searchResList.insertAdjacentHTML("beforeend", markup);
// };
// //type:'prev' or 'next'
// const createButton = (page, type) => 
//   `
// <button class="btn-inline results__btn--${type}" data-goto=${
//     type === "prev" ? page - 1 : page + 1
//   }>
// <span>Page${type === "prev" ? page - 1 : page + 1}</span>
// <svg class="search__icon">
//     <use href="img/icons.svg#icon-triangle-${type === "prev" ? "left" : "right"}"></use>
// </svg>
// </button>
// `;

// const renderButtons = (page, numResults, resPerPage) => {
//   const pages = Math.ceil(numResults / resPerPage);
//   let button;
//   if (page === 1 && pages > 1) {
//     //Only button to go next page
//     button = createButton(page, "next"); //this need saved into a variable,but not declare here because java script block scoped tha it only valid in this iframe
//     //so go above the if esle block and use let, because it will re-assign
//   } else if (page < pages) {
//     //both buttons
//     button = `${createButton(page, "prev")}
//    ${createButton(page, "next")}`;
//   } else if (page === pages && pages > 1) {
//     //only button to goto previous page
//     button = createButton(page, "prev"); //next step insert button to result page,so go base.js elements add result page
//   }
//   elements.searchResPages.insertAdjacentHTML("afterbegin", button);
// };
// export const renderResults = (recipes, page = 2, resPerPage = 10) => {
//   // render results of current page

//   const start = (page - 1) * resPerPage;
//   const end = page * resPerPage;
//   recipes.slice(start, end).forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
//   renderButtons(page, recipes.length, resPerPage);
// };

//////////////////////////////////////version 9,Building the Recipe Model - Part 1
import { elements } from "./base";
export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = "";
};
export const clearResults = () => {
  elements.searchResList.innerHTML = "";
  elements.searchResPages.innerHTML="";//clear the page buttons
};
/*
// 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
*/
const limitReceipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      //acc-accumulator, cur-current
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0); //split title by space
    return `${newTitle.join(" ")}...`;
  }
  return title;
};
const renderRecipe = recipe => {
  const markup = `<li>
<a class="results__link results__link--active" href="#${recipe.recipe_id}">
    <figure class="results__fig">
        <img src="${recipe.image_url}" alt="Test">
    </figure>
    <div class="results__data">
        <h4 class="results__name">${limitReceipeTitle(recipe.title)}</h4>
        <p class="results__author">${recipe.publisher}</p>
    </div>
</a>
</li>`;
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};
//type:'prev' or 'next'
const createButton = (page, type) => 
  `
<button class="btn-inline results__btn--${type}" data-goto=${
    type === "prev" ? page - 1 : page + 1
  }>
  <span>Page${type === "prev" ? page - 1 : page + 1}</span>
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${type === "prev" ? "left" : "right"}"></use>
</svg>
</button>
`;

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);
  let button;
  if (page === 1 && pages > 1) {
    //Only button to go next page
    button = createButton(page, "next"); //this need saved into a variable,but not declare here because java script block scoped tha it only valid in this iframe
    //so go above the if esle block and use let, because it will re-assign
  } else if (page < pages) {
    //both buttons
    button = `${createButton(page, "prev")}
   ${createButton(page, "next")}`;
  } else if (page === pages && pages > 1) {
    //only button to goto previous page
    button = createButton(page, "prev"); //next step insert button to result page,so go base.js elements add result page
  }
  elements.searchResPages.insertAdjacentHTML("afterbegin", button);
};
export const renderResults = (recipes, page = 2, resPerPage = 10) => {
  // render results of current page

  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  recipes.slice(start, end).forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
  renderButtons(page, recipes.length, resPerPage);
};

