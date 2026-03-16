// Smooth scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})
})

// CTA Button

document.querySelectorAll(".cta").forEach(btn=>{
btn.addEventListener("click",()=>{
window.open("https://wa.me/91XXXXXXXXXX")
})
})

console.log("OMorals Media site running 🚀")