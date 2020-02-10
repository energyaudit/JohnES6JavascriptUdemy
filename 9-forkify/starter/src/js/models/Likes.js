// ///////////////////////////////version 1,Building the Likes Model-View
// export default class Likes {
//    constructor() {
//        this.likes=[];
//    }
//    addLike(id,title, author, img){
//        const like={id, title, author, img};
//        this.likes.push(like);
//        return like;
//    }
//    deleteLike(id){
//     const index = this.likes.findIndex(el => el.id === id);
//     // [2,4,8] splice(1, 2) -> returns [4, 8], original array is [2]
//     // [2,4,8] slice(1, 2) -> returns 4, original array is [2,4,8]
//     this.likes.splice(index, 1);//remove one item
//    }
// isLiked(id){
//     return this.likes.findIndex(el => el.id === id)!==-1;//if -1 mean not inside
// }
// getNumLikes(){
//     return this.likes.length;
// }

// }

///////////////////////////////version 2,Implementing Persistent Data with localStorage
export default class Likes {
  constructor() {
    this.likes = []; //array of likes
  }
  addLike(id, title, author, img) {
    const like = { id, title, author, img };
    this.likes.push(like);
    //Persis data in localStorage
    this.persistData();
    return like;
  }
  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id);
    // [2,4,8] splice(1, 2) -> returns [4, 8], original array is [2]
    // [2,4,8] slice(1, 2) -> returns 4, original array is [2,4,8]
    this.likes.splice(index, 1); //remove one item
    //Persis data in localStorage
    this.persistData();
  }
  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1; //if -1 mean not inside
  }
  getNumLikes() {
    return this.likes.length;
  }
  persistData() {
    localStorage.setItem("likes", JSON.stringify(this.likes)); //localStorage only accept string para so stringfy
  //  console.log("current likes", this.likes);
  }
  readStorage(){
      const storage= JSON.parse(localStorage.getItem('likes'));
      //Restoring likes from the localStorage
      console.log("current likes", storage);
      if (storage) this.likes=storage;
  }
}
