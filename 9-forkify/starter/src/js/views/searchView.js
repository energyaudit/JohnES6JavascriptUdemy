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

//////////////////////////////////////version6,Rendering an AJAX Loading Spinner
import { elements } from "./base";
export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = "";
};
export const clearResults = () => {
  elements.searchResList.innerHTML = "";
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
    const newTitle=[];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {//acc-accumulator, cur-current
if(acc+cur.length<=limit){
   newTitle.push(cur);
}
return acc+cur.length;
    }, 0); //split title by space
    return `${newTitle.join(' ')}...`
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

export const renderResults = recipes => {
  recipes.forEach(renderRecipe); ////better to divide each function do one thing,so go out define a independeant function enderRecipe
};

