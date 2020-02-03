// Global app controller

//////////////////////////////////////version1
//  import str from './models/Search';
// import {add,multiply,ID} from './views/searchView';
// console.log(`${add(ID,2)}and ${multiply(3,5)}. ${str}`);
//////////////////////////////////////version2
//  import str from './models/Search';
// import {add as a,multiply as m,ID} from './views/searchView';
// console.log(`${a(ID,2)}and ${m(3,5)}. ${str}`);
//////////////////////////////////////version3
//  import str from './models/Search';
// import * as searchView from './views/searchView';
// console.log(`${searchView.add(searchView.ID,2)}and ${searchView.multiply(3,5)}. ${str}`);
// //////////////////////////////////////versin4,api works
// import axios from "axios";
// async function getResults(query) {
//   const res = await axios(
//     `https://forkify-api.herokuapp.com/api/search?&q=${query}`
//   );
// //   async function getResults(query) {
// //       const proxy='https://cors-anywhere.herokuapp.com/';
// //     const res = await axios(
// //       `${proxy}https://forkify-api.herokuapp.com/api/search?&q=${query}`
// //     );
//   console.log(res);
// const recipes=res.data.recipes;
// console.log(recipes);
// }
// getResults("pizza");
// //////////////////////////////////////version4,api works then add error handing of 403 etc
// import axios from "axios";

// async function getResults(query) {
//   try {
//     const res = await axios(
//       `https://forkify-api.herokuapp.com/api/search?&q=${query}`
//     );
//     console.log(res);
//     const recipes = res.data.recipes;
//     console.log(recipes);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getResults("pizza");
// getResults("sweet potato");
// getResults('tomato pasta');
// //////////////////////////////////////version5,Building the Search Model
// import axios from "axios";
// async function getResults(query) {
//   try {
//     const res = await axios(
//       `https://forkify-api.herokuapp.com/api/search?&q=${query}`
//     );
//     console.log(res);
//     const recipes = res.data.recipes;
//     console.log(recipes);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getResults("pizza");
// getResults('sweet potato');
// //////////////////////////////////////version6,Building the Search Model,move function into class method then import

// import Search from "./models/Search";
// const search = new Search("pizza");
// console.log(search);
// search.getResults();

// //////////////////////////////////////version7,Building the Search Model,add event listener and put all states in place

// import Search from "./models/Search";
// /** Global state of the app
//  * - Search object
//  * - Current recipe object
//  * - Shopping list object
//  * - Liked recipes
//  * - put all states in one place to easy remember and control
//  */
// const controlSearch=async ()=>{
// //1) get query from view
// const query='pizza'//

// if(query){
//    // 2)New search object and add to state
//   state.Search = new Search(query);
//   //3)prepare UIfor results

//   //4)search for receipes
//   await state.Search.getResults();
//   //5)render result onUI
//   console.log(state.Search.recipes);
// }

// }
// const state = {};
// document.querySelector('.search').addEventListener('submit',e=>{
//     e.preventDefault();//prevent empty reload
//     controlSearch()
// })
// //const search = new Search("pizza");delete and move into contrl Search:New search object and add to state
// //console.log(search);
// //search.getResults();//movie into controlSearch=()
// //////////////////////////////////////versin8,Building the Search Model,display result at webpage

// import Search from "./models/Search";
// import * as searchView from "./views/searchView";
// import { elements } from "./views/base"; //use {elements} curly brace

// /** Global state of the app
//  * - Search object
//  * - Current recipe object
//  * - Shopping list object
//  * - Liked recipes
//  * - put all states in one place to easy remember and control
//  */
// const controlSearch = async () => {
//   //1) get query from view
//   const query = searchView.getInput(); //

//   if (query) {
//     // 2)New search object and add to state
//     state.search = new Search(query);
//     console.log(query);
//     //3)prepare UI for results

//     //4)search for receipes
//     await state.search.getResults();
//     //5)render result onUI
//     //console.log(state.Search.result);
//     searchView.renderResults(state.search.result);
//   }
// };
// const state = {};
// elements.searchForm.addEventListener("submit", e => {
//   e.preventDefault(); //prevent empty reload
//   controlSearch();
// });

// //////////////////////////////////////versin9,Building the Search Model,display result at webpage
// /////////////////////////////index.js is controller
// import Search from "./models/Search";
// import * as searchView from "./views/searchView";
// import { elements } from "./views/base"; //use {elements} curly brace

// /** Global state of the app
//  * - Search object
//  * - Current recipe object
//  * - Shopping list object
//  * - Liked recipes
//  */
// const controlSearch = async () => {
//   //1) get query from view
//   const query = searchView.getInput(); //

//   if (query) {
//     // 2)New search object and add to state
//     state.search = new Search(query);
//     console.log(query);
//     //3)prepare UI for results
//     searchView.clearInput();
//     searchView.clearResults();
//     //4)search for receipes
//     await state.search.getResults();
//     //5)render result onUI
//     //console.log(state.Search.result);
//     searchView.renderResults(state.search.result);
//   }
// };
// const state = {};
// elements.searchForm.addEventListener("submit", e => {
//   e.preventDefault(); //prevent empty reload
//   controlSearch();
// });
// // //////////////////////////////////////versin9,Building the Search Model,display result at webpage
// // /////////////////////////////index.js is controller
// import Search from "./models/Search";
// import * as searchView from "./views/searchView";
// import { elements } from "./views/base"; //use {elements} curly brace

// /** Global state of the app
//  * - Search object
//  * - Current recipe object
//  * - Shopping list object
//  * - Liked recipes
//  */
// const controlSearch = async () => {
//   //1) get query from view
//   const query = searchView.getInput(); //

//   if (query) {
//     // 2)New search object and add to state
//     state.search = new Search(query);
//     console.log(query);
//     //3)prepare UI for results
//     searchView.clearInput();
//     searchView.clearResults();
//     //4)search for receipes
//     await state.search.getResults();
//     //5)render result onUI
//     //console.log(state.Search.result);
//     searchView.renderResults(state.search.result);
//   }
// };
// const state = {};
// elements.searchForm.addEventListener("submit", e => {
//   e.preventDefault(); //prevent empty reload
//   controlSearch();
// });

// // //////////////////////////////////////versin10,Rendering an AJAX Loading Spinner
// // /////////////////////////////index.js is controller
// import Search from "./models/Search";
// import * as searchView from "./views/searchView";
// import { elements, renderLoader, clearLoader} from "./views/base"; //use {elements} curly brace

// /** Global state of the app
//  * - Search object
//  * - Current recipe object
//  * - Shopping list object
//  * - Liked recipes
//  */
// const controlSearch = async () => {
//   //1) get query from view
//   const query = searchView.getInput(); //

//   if (query) {
//     // 2)New search object and add to state
//     state.search = new Search(query);
//     console.log(query);
//     //3)prepare UI for results
//     searchView.clearInput();
//     searchView.clearResults();
//     renderLoader(elements.searchRes);
//     //4)search for receipes
//     await state.search.getResults();
//     //5)render result onUI
//     //console.log(state.Search.result);
//     clearLoader();
//     searchView.renderResults(state.search.result);
//   }
// };
// const state = {};
// elements.searchForm.addEventListener("submit", e => {
//   e.preventDefault(); //prevent empty reload
//   controlSearch();
// });
// // //////////////////////////////////////versin11, Implementing Search Results Pagination
// // /////////////////////////////index.js is controller
// import Search from "./models/Search";
// import * as searchView from "./views/searchView";
// import { elements, renderLoader, clearLoader} from "./views/base"; //use {elements} curly brace

// /** Global state of the app
//  * - Search object
//  * - Current recipe object
//  * - Shopping list object
//  * - Liked recipes
//  */
// const controlSearch = async () => {
//   //1) get query from view
//   const query = searchView.getInput(); //

//   if (query) {
//     // 2)New search object and add to state
//     state.search = new Search(query);
//     console.log(query);
//     //3)prepare UI for results
//     searchView.clearInput();
//     searchView.clearResults();
//     renderLoader(elements.searchRes);
//     //4)search for receipes
//     await state.search.getResults();
//     //5)render result onUI
//     //console.log(state.Search.result);
//     clearLoader();
//     searchView.renderResults(state.search.result);
//   }
// };
// const state = {};
// elements.searchForm.addEventListener("submit", e => {
//   e.preventDefault(); //prevent empty reload
//   controlSearch();
// });
// elements.searchResPages.addEventListener("click", e => {
//   const btn=e.target.closest('.btn-inline');
//   console.log(btn);
//   if (btn){
//     const goToPage=parseInt(btn.dataset.goto,10);
//     searchView.clearResults();
//     searchView.renderResults(state.search.result,goToPage);
//     console.log(goToPage);
//   }

// });

// //////////////////////////////////////versin12, Building the Recipe Model - Part 1
// /////////////////////////////index.js is controller
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader} from "./views/base"; //use {elements} curly brace

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};
/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
  //1) get query from view
  const query = searchView.getInput(); //

  if (query) {
    // 2)New search object and add to state
    state.search = new Search(query);
    console.log(query);
    //3)prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    //4)search for receipes
    await state.search.getResults();
    //5)render result onUI
    //console.log(state.Search.result);
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault(); //prevent empty reload
  controlSearch();
});
elements.searchResPages.addEventListener("click", e => {
  const btn=e.target.closest('.btn-inline');
  console.log(btn);
  if (btn){
    const goToPage=parseInt(btn.dataset.goto,10);
    searchView.clearResults();
    searchView.renderResults(state.search.result,goToPage);
    console.log(goToPage);
  }

});

/** 
 * RECIPE CONTROLLER
*/
const r=new Recipe(35626);
r.getRecipe();
console.log(r);//console whole object