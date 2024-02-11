var product_data = {
  1: {
    image: "img-1.jpg",
    price: {
      sale: 40,
      regular: 50,
    },
  },
  2: {
    image: "img-2.jpg",
    price: {
      sale: 80,
      regular: 100,
    },
  },
  4: {
    image: "img-3.jpg",
    price: {
      sale: 120,
      regular: 150,
    },
  },
};


var price_sale_div = document.querySelector(".price .sale");
var price_regular_div = document.querySelector(".price .regular");
var product_image_div = document.querySelector(".product .image img");

var variant_input = document.getElementsByName("variant");
variant_input.forEach((inp) => {
  inp.addEventListener("click", (e) => {
    price_sale_div.innerHTML =
      "$" + product_data[inp.value]["price"]["sale"] + ".00";
    price_regular_div.innerHTML =
      "$" + product_data[inp.value]["price"]["regular"] + ".00";
    product_image_div.src = product_data[inp.value]["image"];
  });
});
