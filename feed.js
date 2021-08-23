let postLiked = false;
let numLikes = 0;

function liked() {
  /* post is liked */
  if (postLiked == false){

    /* update icon */
    document.getElementById('like_button_inner').innerHTML =`thumb_up`
    postLiked = true;

    /* update number */
    numLikes = numLikes + 1
    let likes_string =""

    if (numLikes == 1){
      likes_string = numLikes.toString() + " like"
    }
    else{
      likes_string = numLikes.toString() + " likes"
    }
    document.getElementById('num_likes').innerHTML= likes_string


  }
  /* post is unliked */
  else{
    document.getElementById('like_button_inner').innerHTML =`thumb_up_off_alt`
    postLiked = false;

    /* update number */
    numLikes = numLikes - 1
    let likes_string =""

    if (numLikes == 1){
      likes_string = numLikes.toString() + " like"
    }
    else{
      likes_string = numLikes.toString() + " likes"
    }
    document.getElementById('num_likes').innerHTML= likes_string

  }

}

function commented() {

  let comment = document.getElementById('comment_input').value
  console.log("here")
  console.log(comment)
  document.getElementsByClassName('comment_section').innerHTML = "<p> <span style='font-weight: bolder;'>username</span>" + comment + "</p>"
  document.getElementById('like_button_inner').innerHTML =`thumb_up_off_alt`
}
