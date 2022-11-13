// js for items 

let item_arr=["Brands", "Summer Shop", "Sale","Build a Routine", "Hair", "Make Up","Tools","Bath & body","Self-Care","Fragrance","New & Trending","Advice"];
document.querySelector("#item", display);
display(item_arr);
function display(item_arr){
    for(let i=0;i<item_arr.length-1;i++){
    let box=document.createElement("div");
    box.innerText=item_arr[i];
    box.style.cursor="pointer";
    box.addEventListener("click", ()=>{
        event.preventDefault();
        window.location.href="itemsList.html"
    })
    document.querySelector("#item").append(box);
    }
}
