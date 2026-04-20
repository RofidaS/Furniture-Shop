
const navBarButton = document.getElementById("sidebar-btn");
const sideBar = document.getElementById("side-menu");
const closeSideBarButton = document.getElementById("close-sideBar");

if (navBarButton && sideBar && closeSideBarButton){
   
    navBarButton.addEventListener("click", function(){
     sideBar.style.display = "block";
});

    closeSideBarButton.addEventListener("click", function(){
     sideBar.style.display = "none";

    }); 
    }






const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn"); 
const image = document.getElementById("my-chairs");
const textBesideImage = document.getElementById("text-div");

// const mainContainer = document.querySelector(".container");



// const divOfImage = document.getElementById("my-images");

function triggerTextAnimation() {
   textBesideImage.classList.remove("zoom-fade-in");
   image.classList.remove("zoom-fade-in");

    void textBesideImage.offsetWidth; 
    void image.offsetWidth;

    textBesideImage.classList.add("zoom-fade-in");
    image.classList.add("zoom-fade-in");
}


const images = ["image/chair/1.jpg",
                "image/chair/2.jpg",
                "image/chair/3.jpg",
                "image/chair/4.jpg",
                "image/chair/5.jpg",
                "image/chair/6.png",
                 "image/chair/7.png"
];

let currentImageIndex = 0;
function displayNextImage (){
     currentImageIndex ++;
    if(currentImageIndex >= images.length){
        currentImageIndex = 0;
    } else{
       
        image.setAttribute ("src", images [currentImageIndex])
        triggerTextAnimation();
    }}
       
  function displayPreviousImage (){
    currentImageIndex --;
    if(currentImageIndex <= 0){
        currentImageIndex = images.length-1;
    } else{
         
        image.setAttribute ("src", images [currentImageIndex])
        triggerTextAnimation();
    }}

    nextButton.addEventListener("click", displayNextImage);
    previousButton.addEventListener("click", displayPreviousImage);




    const popImages = document.getElementById("pop-container");
    const popImageElement = document.getElementById("popImg")
    const mainContainer = document.querySelector(".contain");
    const closePopButton = document.getElementById("close-pop");

   
     mainContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "IMG") {

        const clickedImg = e.target;
        popImages.style.display = "flex";

         popImageElement.src = ""; 
         popImageElement.src = clickedImg.src;


        const title = clickedImg.getAttribute("data-title");
        document.getElementById("popTitle").textContent = title;

        const description = clickedImg.getAttribute("data-desc");
        document.getElementById("popDesc").textContent = description;
    }
});

closePopButton.addEventListener("click", function() {
    popImages.style.display = "none";
});