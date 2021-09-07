let postLiked = false;
let numLikes = 0;
let projects = ["Say so", "Drake Remix", "Bad Habits", "Cold Heart", "Good 4 U"]

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
  document.querySelector('.comment-section').innerHTML =
  `<div class="comment">
    <p> <span style="font-weight: bolder;">username       </span>` + comment + `</p>
  </div>` + document.querySelector('.comment-section').innerHTML
  //document.querySelector('#comments').innerText = comment;
  //document.getElementById('like_button_inner').innerHTML =`thumb_up_off_alt`
}

function filterFunction() {

  document.getElementById('proj_list').classList.toggle("show")

  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}



input.onfocus = function () {
  browsers.style.display = 'block';
  input.style.borderRadius = "5px 5px 0 0";
};
for (let option of browsers.options) {
  option.onclick = function () {
    input.value = option.value;
    browsers.style.display = 'none';
    input.style.borderRadius = "5px";
  }
};

input.oninput = function() {
  currentFocus = -1;
  var text = input.value.toUpperCase();
  for (let option of browsers.options) {
    if(option.value.toUpperCase().indexOf(text) > -1){
      option.style.display = "block";
  }else{
    option.style.display = "none";
    }
  };
}
var currentFocus = -1;
input.onkeydown = function(e) {
  if(e.keyCode == 40){
    currentFocus++
   addActive(browsers.options);
  }
  else if(e.keyCode == 38){
    currentFocus--
   addActive(browsers.options);
  }
  else if(e.keyCode == 13){
    e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (browsers.options) browsers.options[currentFocus].click();
        }
  }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }
