// //////////////////////////////////////version1
// export default 'I am an exported string.';
// // //////////////////////////////////////version2
// import axios from "axios";
// export default class Search {
//   constructor(query) {
//     this.query = query;
//   }

//   //import axios from "axios";//when copy function originally here ,so moved to top
//   //async  getResults(query) {//query must delete that already assigned above,no need pass as para
//   async getResults() {
//     //
//     try {
//       const res = await axios(
//         `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
//       );
//       console.log(res);
//       // const recipes = res.data.recipes;//save result into object,so change to this
//       this.result = res.data.recipes;
//       console.log(this.result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// //////////////////////////////////////version3,Building the Recipe Model - Part 1
import axios from "axios";
import proxy from '../config.js';//..means go up folder twice
export default class Search {
  constructor(query) {
    this.query = query;
  }

  //import axios from "axios";//when copy function originally here ,so moved to top
  //async  getResults(query) {//query must delete that already assigned above,no need pass as para
  async getResults() {
    //
    try {
      // const res = await axios(//proxy repeating use by different files so put in one place:config.js to manage it
     //   `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
     const res = await axios(
        `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
      );
      console.log(res);
      // const recipes = res.data.recipes;//save result into object,so change to this
      this.result = res.data.recipes;
      console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }
}
