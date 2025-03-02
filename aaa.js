//Reference
let divRef=document.querySelector('.div_me')
let btnRef=document.querySelector('.btn_me')

console.log(divRef)

//Event listeners
divRef.addEventListener("click",()=>{
    alert("clicked")
})

btnRef.addEventListener("click",()=>{
    alert("i am btn clicked")
})


