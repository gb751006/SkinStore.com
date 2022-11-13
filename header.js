

let trend_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg",
    head: "SkinCeuticals Gift",
    para: "Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/22/original-ChristopheRobin.ss-090122.jpg",
    head: "25% off Gift Sets",
    para: "Treat yourself or someone you love to a gift set they will be sure to love and enjoy 25% off. Discount will apply at the cart, valid for a limited time only.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg",
    head: "Brand of the Month: Obagi Medical",
    para: "Obagi crafts advanced skincare products that help unleash skin’s full potential with an extensive portfolio designed to brighten, protect, and enhance skin tone and texture.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/51/Square_tns_plus-010451.png",
    head: "10% off SkinMedica",
    para: "Every single SkinMedica product has been formulated to rejuvenate the skin to leave it looking flawless and radiant.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/29/original-original-STR%28Patches_500x500%29%5B1%5D-091415-min-011529.jpg",
    head: "SiO Beauty",
    para: "A skin-smoothing patch for everyone—and every wrinkle.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-original-GF_Product-Banner_SkinStore_500x500-060256-042353.jpg",
    head: "Glasshouse Fragrances",
    para: "At Glasshouse Fragrances, we handcraft each ground-breaking product, channeling the power of scent to make you feel amazing.",
  },
];

trendfunc(trend_arr);
function trendfunc(trend_arr) {
  trend_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let para = document.createElement("p");
    para.innerText = elem.para;
    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      event.preventDefault();
      window.location.href = "itemsList.html";
    });
    btn.innerText = "SHOP NOW";
    box.append(image, head, para, btn);
    document.querySelector("#trending").append(box);
  });
}

// category row

let cat_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png",
  },
];

catefunc(cat_arr);
function catefunc(cat_arr) {
  cat_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    image.addEventListener("click", function () {
      event.preventDefault();
      window.location.href = "itemsList.html";
    });
    box.append(image);
    document.querySelector("#category").append(box);
  });
}

// buying

let buying_arr = [
  {
    image: "https://static.thcdn.com/images/small/webp//productimg/480/480/13524404-5734930150395321.jpg",
    head: "Epionce Luminous Eye Serum 0.53ml",
    msrp: "",
    price: "$67.00",
  },
  {
    image: "https://static.thcdn.com/images/small/webp//productimg/480/480/12448076-8695002190173929.jpg",
    head: "Grow Gorgeous Hair Density Serum  Original Duo 2 x 60ml",
    msrp: "MSRP:$70.00",
    price: "$49.00",
  },
  {
    image: "https://static.thcdn.com/images/small/webp//productimg/480/480/13920999-1114993397470335.jpg",
    head: "Sunday Riley Morning Buzz Vitamin C Brightening Trio Skincare Set (Worth $151.00)",
    msrp: "",
    price: "$98.00",
  },
  {
    image: "https://static.thcdn.com/images/small/webp//productimg/480/480/12358556-1974888087906815.jpg",
    head: "TriPollar STOP X Device - Rose Gold",
    msrp: "MSRP:$399.50",
    price: "$199.75",
  },
];

buyingfunc(buying_arr);
function buyingfunc(buying_arr) {
  buying_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let msrp = document.createElement("p");
    msrp.innerText = elem.msrp;
    msrp.style.textDecoration = "line-through";
    let para = document.createElement("p");
    para.innerText = elem.price;
    let btn = document.createElement("button");
    btn.innerText = "SHOP NOW";
    btn.addEventListener("click", function () {
      event.preventDefault();
      window.location.href = "itemsList.html";
    });
    box.append(image, head,msrp, para, btn);
    document.querySelector("#buying").append(box);
  });
}

// brand image section

let brand_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png",
  },
];
brandfunc(brand_arr);
function brandfunc(brand_arr) {
  brand_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    box.append(image);
    document.querySelector("#brand").append(box);
  });
}

// blog section

let blog_arr = [
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg",
    head: "SkinCeuticals: Vitamin C Beyond the Face",
    para: "SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they’re making sure your eyes and lips get in on the antioxidant action (and benefits).",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",
    head: "Which TriPollar Device is Right for You?",
    para: "In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology behind at-home treatments and devices.",
  },
  {
    image:
      "https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg",
    head: "Discover Natura Bissé",
    para: "With an aim to help their clients’ skin as they age and to turn their daily skin care routines into a moment of real self-care, Natura Bissé works to discover the latest scientific advancements and adapt them to the wellness industry.",
  },
];
blogfunc(blog_arr);
function blogfunc(blog_arr) {
  blog_arr.forEach((elem, index) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let head = document.createElement("h3");
    head.innerText = elem.head;
    let para = document.createElement("p");
    para.innerText = elem.para;
    let btn = document.createElement("button");
    btn.innerText = "READ MORE";
    box.append(image, head, para, btn);
    document.querySelector("#blog").append(box);
  });
}
