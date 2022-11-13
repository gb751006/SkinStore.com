let added_cart_items =
  JSON.parse(localStorage.getItem("added_cart_data")) || [];
display_cart_items(added_cart_items);
function display_cart_items(added_cart_items) {
  let sum = 0;
  if(added_cart_items.length==0){
    document.querySelector("#span_total").innerText = 0;
  }
  document.querySelector("#cart_items").innerHTML = "";
  added_cart_items.forEach((elem, index) => {
    sum = sum + elem.price;
      document.querySelector("#span_total").innerText = sum;
    let box = document.createElement("div");
    let box1 = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let para = document.createElement("p");
    para.innerText = elem.price;
    let total = document.createElement("h4");
    total.innerText = elem.price;
    let del = document.createElement("div");
    del.innerText = "X";
    del.addEventListener("click", () => {
      delfunc(elem, index);
    });
    let line = document.createElement("hr");
    line.setAttribute("width", "100%");
    line.style.color = "grey";
    box1.append(image, head);
    box.append(box1, para, total, del);
    document.querySelector("#cart_items").append(box, line);
  });
}

function delfunc(elem, index) {
  added_cart_items.splice(index, 1);
  localStorage.setItem("added_cart_data", JSON.stringify(added_cart_items));
  display_cart_items(added_cart_items);
}
