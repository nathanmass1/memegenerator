document.addEventListener("DOMContentLoaded", function(){
    //make sure HTML doc is completely loaded
    
    var inputForm = document.getElementById("form");
    var listGallery = document.querySelector(".collection");

 //wait for submit event   
inputForm.addEventListener("submit", function(event){
     event.preventDefault();


        var memeListItem = document.createElement('li');
        memeListItem.classList.add("memeImg");

//pull URL from input form
    var URL = document.getElementById('imageURL').value,
    src =  URL
    img = document.createElement('img');
    img.src = src;
        

//define the divs for top and bottom text
    var topText = document.createElement('div');
    topText.classList.add("text", "top");
    topText.innerText = document.getElementById("topText").value;


    var bottomText = document.createElement('div');
    bottomText.classList.add("text", "bottom");
    bottomText.innerText = document.getElementById("bottomText").value;

    var remove = document.createElement('div');
    remove.classList.add("redX");
    remove.innerText = "X";
    remove.style.color = "red";
    
    inputForm.reset();



    listGallery.appendChild(memeListItem);
    memeListItem.appendChild(img);
    memeListItem.appendChild(topText);
    memeListItem.appendChild(bottomText);
    memeListItem.appendChild(remove);
    memeListItem.appendChild(removeButton);
    });


function remove(event){
  event.target.parentNode.remove();
}

 listGallery.addEventListener('click', remove, false);

});

