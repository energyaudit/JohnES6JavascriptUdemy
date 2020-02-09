//  //////////////////////////////////////Building the Likes Model,Building the Likes Controller
// import { elements } from "./base";
// export const toggleLikeBtn=isLiked => {
//     const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
//     document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
//     // icons.svg#icon-heart-outlined
// };
//////////////////////////////////////Building the Likes View
import { elements } from "./base";
export const toggleLikeBtn=isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
    // icons.svg#icon-heart-outlined
};

export const toggleLikeMenu=numLikes => {
    elements.likesMenu.style.visibility = numLikes>0?'visible':'hidden';
}
