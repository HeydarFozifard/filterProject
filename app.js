//vars

let allMenuBtn = document.getElementById("all-menu");
let cakeBtn = document.getElementById("cake");
let sweetBtn = document.getElementById("sweet");
let dougnutBtn = document.getElementById("dougnut");
let cupCakeBtn = document.getElementById("cupCake");
let filterInputBtn = document.getElementById("filter-input");
let showBox = document.getElementById("container-item");

let getItems = document.querySelectorAll(".item");
let getBtns = document.querySelectorAll("button");

getBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let getDataSet = e.target.dataset.name;

        getItems.forEach((item) => {
            if (getDataSet === "all") {
                item.style.display = "block";
            } else {
                
                let set = item.classList.contains(getDataSet);
                if (set) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        });
    });
});

filterInputBtn.addEventListener('keyup',(e)=>{
    let getValueInput=e.target.value.trim();
    getItems.forEach((item)=>{
   
            
            if(item.getAttribute("data-name").includes(getValueInput) ){
                item.style.display = "block";
    
            }else{
                item.style.display = "none";
    
            }
    
        
    })
})