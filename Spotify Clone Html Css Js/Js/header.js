const exploreBtn = document.getElementById("header_div2_b2_button")
const searchBtn = document.getElementById("header_div2_b1_Search")


addEventListener("click", ()=>{
    
})


exploreBtn.addEventListener("click" , ()=> {
    alert("Please Try after some time")
})

searchBtn.addEventListener("keydown" , (e)=>{
    let input = searchBtn.value;
    if(e.key === "Enter"){
       alert(`Search Song :- ${input}`) 
    }
    else{
        return 0;
    }
    searchBtn.value ="";
})

function Search(){

    const input = searchBtn.value;
    if(input){
       alert(`Song : ${input}`)
    }
    else{
        alert("Please Enter the Song Name before Searching")
        
    }
    searchBtn.value = "";
}
