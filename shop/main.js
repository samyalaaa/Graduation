// declare variables
let scrollContainer = document.querySelector(".gallery");
let left = document.getElementById("left");
let right = document.getElementById("right");


// drag scroll
// scrollContainer.addEventListener("mousemove", (e) => {
//     scrollContainer.scrollLeft = e.pageX;
// });

// keyboard scroll
document.addEventListener("keydown", (e) => {
    if(e.keyCode == 37){
        scrollContainer.scrollLeft -= 300;
    }else if(e.keyCode == 39){
        scrollContainer.scrollLeft += 300;
    }
});

// wheel scroll
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
})

// right and left buttons
right.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 700;
})
left.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 700;
})
// --------------------

