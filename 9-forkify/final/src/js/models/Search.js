import axios from 'axios';
import { proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
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

