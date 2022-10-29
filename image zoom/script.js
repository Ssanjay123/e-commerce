const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener('mousemove',(egit)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log(x,y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)'
});
container.addEventListener('mouseleave',()=>{
    img.style.transformOrigin = 'scale(2)'
})