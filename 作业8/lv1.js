const btn = document.querySelector("button")
btn.addEventListener("click",async()=>{
    const res=await fetch (("https://taskapi.chovrio.club/poetry/:id"),{
        method:"get",
        body:"" 
    
    })
})
