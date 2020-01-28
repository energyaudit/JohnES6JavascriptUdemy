// //////////////////////////////////////versin1
// export default 'I am an exported string.';
// //////////////////////////////////////versin2
import axios from "axios";
export default class Search{
    constructor(query){
        this.query=query;
    }

//import axios from "axios";//when copy function originally here ,so moved to top
//async  getResults(query) {//query must delete that already assigned above,no need pass as para
    async  getResults() {//
  try {
    const res = await axios(
      `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
    );
    console.log(res);
   // const recipes = res.data.recipes;//save result into object,so change to this
   this.result= res.data.recipes;
   console.log(this.result);
  } catch (error) {
     console.log(error);
  }
}
}
