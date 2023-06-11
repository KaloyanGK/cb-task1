function renderBestsellers() {
    const dummyProductsArray = [
      {
        img: "../static/images/Rectangle39.png",
        name: "Teardrop Halo and Wishbone Sta...",
        bestseller: true,
        price: 240,
      },
      {
        img: "../static/images/Rectangle38.png",
        name: "Teardrop Halo and Wishbone Sta...",
        price: 240,
      },
      {
        img: "../static/images/Rectangle40.png",
        name: "Teardrop Halo and Wishbone Sta...",
        price: 240,
      },
      {
        img: "../static/images/Rectangle37.png",
        name: "Teardrop Halo and Wishbone Sta...",
        price: 240,
      },
    ];
  
    const targetElem = document.querySelector(".cards-wrapper");
  
    targetElem.innerHTML = dummyProductsArray
      .map(
        (product) => `<div class="card">
                                          <div class="card-img-wrapper ">
                                              <img src="${product.img}" alt=""></img>
                                              ${product.bestseller ? '<p class="bestseller-item"></p>' : ""}
                                          </div>
                                          <p class="product-name">${product.name}</p>
                                          <p class="product-price">$${product.price}</p>
                                   </div>`
      )
      .join("");
  }