addEventListener("DOMContentLoaded",async(e)=>{
    let res = await fetch("http://localhost/ApolT01-033/tablasdql/uploads/camper")
    let data=await res.json();
    console.log(data)
})