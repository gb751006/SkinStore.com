let cart_arr = [
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12682870-1654802894434596.jpg",
    head: "Decorté AQ Perfect Repair 7 Piece Set (Worth $250.00)",
    para: "Save40%",
    price: 114.00,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12681860-2674822085114358.jpg",
    head: "No7 Protect & Perfect Intense Advanced Serum Tube 50ml",
    para: "save30%",
    price: 20.99,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11927421-2284911751256481.jpg",
    head: "Grow Gorgeous Volume Bodifying Leave-in Serum 150ml",
    para: "Save30%",
    price: 19.99,
  },
  {
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12453448-1934871739712818.jpg",
    head: "Neocutis Bio Serum Firm 30ml",
    para: "15% off with code SS15 + Gift",
    price: 275.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11289146-1474967222788272.jpg",
    head: "Peter Thomas Roth Retinol Fusion PM 30ml",
    para: "15% off with code SS15 + Gift",
    price: 65.0,
  },
  {
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11429291-5004872074831463.jpg",
    head: "PCA SKIN Hyaluronic Acid Boosting Serum",
    para: "$40 PCA  Skin Gift",
    price: 120.0,
  },
  {
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289630-1114892772061416.jpg",
    head: "SkinCeuticals Phyto+ 30ml",
    para: "$21 SkinCeuticals Gift ",
    price: 87.0,
  },
  {
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289619-2044892771629386.jpg",
    head: "SkinCeuticals Hydrating B5 Hyaluronic Acid Gel Moisturizer 30ml",
    para: "$21 SkinCeuticals Gift ",
    price: 86.0,
  },
  {
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11291066-1914871574237540.jpg",
    head: "Obagi Medical Professional-C Serum 15% Strength",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 110.0,
  },
  {
    image:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289629-1544892771938209.jpg",
    head: "SkinCeuticals Phyto Corrective Gel 30ml",
    para: "$21 SkinCeuticals Gift ",
    price: 70.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11724093-9294863989769246.jpg",
    head: "BABOR Ampoule Perfect Glow 7 x 2ml",
    para: "$30 BABOR Gift ",
    price: 39.95,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11291965-1894871578716777.jpg",
    head: "iS Clinical Pro-Heal Serum Advance Plus 1oz",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 158.95,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11588281-8764882139037003.jpg",
    head: "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5oz)",
    para: "Sunday Riley Gift",
    price: 122.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/13412113-1634902420437958.jpg",
    head: " Trophy Skin Marine Collagen Gel 30 fl. oz",
    para: "15% off with code SS15 + Gift",
    price: 19.99,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11288927-9534871573441439.jpg",
    head: "Obagi Medical360 Retinol 1.0",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 77.5,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12588501-1074871816209782.jpg",
    head: "111SKIN Vitamin C Brightening Booster 0.68 oz",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 155.55,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/13412112-1944902419842254.jpg",
    head: "Trophy Skin Pure Hyaluronic Acid 60 fl. oz",
    para: "15% off with code SS15 + Gift",
    price: 19.99,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11976675-2644945861669566.jpg",
    head: "SkinCeuticals Hydrating Vitamin C and Hyaluronic Acid Serum Kit (Worth $255.00)",
    para: "$21 SkinCeuticals Gift",
    price: 255.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12810737-2264862238156558.jpg",
    head: "Medik8 Hydr8 B5 Serum 30ml",
    para: "Medik8 Gift",
    price: 52.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11289678-1494870995623922.jpg",
    head: "SkinMedica Retinol Complex 1.0 (1oz)",
    para: "10% off SkinMedica + $14 Gift",
    price: 86.4,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12187514-1554891245139065.jpg ",
    head: "SkinMedica Retinol Complex 1.0 (1oz)",
    para: "$75 Elemis Gift",
    price: 84.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11781144-7094967223333009.jpg",
    head: "Peter Thomas Roth Potent-C Power Serum 1oz",
    para: "15% off with code SS15 + Gift",
    price: 105.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11291542-3034871574623418.jpg",
    head: "Obagi Medical Professional-C Serum 10% Strength",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 92.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12707566-5954871759119050.jpg",
    head: "Obagi Medical Professional-C Serum 10% Strength Estée Lauder Perfectionl Pro Rapid Firm",
    para: "Estée Lauder Gift",
    price: 78.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12676219-1104796886810255.jpg",
    head: "Algenist Genius Liquid Collagen 1 fl oz",
    para: "15% off with code SS15 + Gift",
    price: 115.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12937610-2034871062671528.jpg",
    head: "PCA SKIN Hyaluronic Acid Boosting Serum 3oz (Worth $351)",
    para: "$40PCA Skin Gift",
    price: 229.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12597586-1914871576724507.jpg",
    head: "Obagi Medical Daily Hydro-Drops Facial Serum 1 fl. oz",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 100.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11286262-2784867630561947.jpg",
    head: "ARCONA Peptide Hydrating Complex 1.17oz",
    para: "15% off with code SS15 + Gift",
    price: 77.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11329127-4344933243006521.jpg",
    head: "Natura Bissé Essential Shock Intense Complex 30ml",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 235.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12785188-1274860601326942.jpg",
    head: "111SKIN The Y Theorem Concentrate 7 x 2ml",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 175.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/11833566-2064786785646464.jpg",
    head: "Perricone MD Face Firming Serum",
    para: "25% off Sun care",
    price: 99.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12782348-1304853587214094.jpg",
    head: "Caudalie Vinoperfect Radiance Serum Complexion Correcting - 30 mL",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 79.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/12039725-1594649957158128.jpg",
    head: "Murad Retinol Youth Renewal Serum Travel Size 0.33 fl. oz",
    para: "Murad Gift",
    price: 28.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12053029-2954882135851294.jpg",
    head: "Sunday Riley C.E.O. Glow Vitamin C + Turmeric Face Oil 15ml",
    para: "Sunday Riley Gift",
    price: 40.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11288926-5024871573395098.jpg",
    head: "Obagi Medical360 Retinol 0.5",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 73.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12810720-1704840722059427.jpg",
    head: "Medik8 Crystal Retinal 10 Serum 30ml",
    para: "Medik8 Gift",
    price: 106.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12434375-2024821041144364.jpg",
    head: "BIOEFFECT EGF Day Serum 30ml",
    para: "15% off with code SS15 + Gift",
    price: 155.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11564673-1414933223309898.jpg",
    head: "Natura Bissé Inhibit High Definition Serum",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 785.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/12095041-2004891244987862.jpg",
    head: "Elemis Pro-Collagen Insta-Smooth Primer 50ml",
    para: "75$Elemis Gift",
    price: 79.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12226538-5924768405994112.jpg",
    head: "ESPA Replenishing Treatment Oil 30ml",
    para: "15% off with code SS15 + Gift",
    price: 104.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11290615-1074896449948712.jpg",
    head: "DERMAdoctor Poetry in Lotion Intensive 1% Retinol",
    para: "DERMADoctor Gift",
    price: 75.0,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11363395-1264938699227397.jpg",
    head: "The Ordinary Hyaluronic Acid 2% + B5 Hydration Support Formula 30ml",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 7.75,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11396686-1944938699340512.jpg",
    head: "The Ordinary Caffeine Solution 5% + EGCG 30ml",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 7.7,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11363395-1264938699227397.jpg",
    head: "The Ordinary Niacinamide 10% + Zinc 1% 30ml",
    para: "12-Piece Beauty Bag (Worth $104) @ $150",
    price: 6.75,
  },
  {
    image:
      "https://static.thcdn.com/images/xsmall/webp//productimg/original/11290635-1804892767902966.jpg",
    head: "SkinCeuticals Triple Lipid Restore 2:4:2",
    para: "$21 SkinCeuticals Gift",
    price: 136.0,
  },
];




document.querySelector("#select").addEventListener("change", selectfucn);
let added_cart = JSON.parse(localStorage.getItem("added_cart_data")) || [];
function selectfucn(event) {
  let select_data = document.querySelector("#select").value;
  if (select_data === "") {
    itemfunc(cart_arr);
    return;
  }
  if (select_data == "low") {
    cart_arr.sort((a, b) => a.price - b.price);
    itemfunc(cart_arr);
  }
  if (select_data == "high") {
    cart_arr.sort((a, b) => b.price - a.price);
    itemfunc(cart_arr);
  }
}


let get_array=JSON.parse(localStorage.getItem("signup_data")) || [];
itemfunc(cart_arr);
function itemfunc(cart_arr) {
  document.querySelector("#items").innerHTML = "";
  cart_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let para = document.createElement("p");
    para.innerText = elem.para;
    
    let price = document.createElement("p");
    price.innerText ="$"+ elem.price;
    
    let btn = document.createElement("div");
    btn.innerText = "QUICK BUY";
    btn.addEventListener("click", () => {
      if(get_array.length==0){
        alert("You have to login first before adding the items into the cart");
        window.location.href="signin.html"
      }else{
        added_cart_func(elem, index);
      }
    
    });
    box.append(image, head, para, price, btn);
    document.querySelector("#items").append(box);
  });
}

function added_cart_func(elem, index) {
  added_cart.push(elem);
  alert("Product added Successfully!");
  localStorage.setItem("added_cart_data", JSON.stringify(added_cart));
  itemfunc(cart_arr);
}
