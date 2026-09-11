/* =========================================
   CASK & SCREW - CURATED INVENTORY CATALOGUE
   Replace your current script.js with this file.
========================================= */

const products = [
  {
    "id": 1,
    "name": "Alberta Premium Rye",
    "category": "Whisky",
    "price": 23.99,
    "size": "750 mL",
    "badge": "Alberta",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 2,
    "name": "Crown Royal Deluxe",
    "category": "Whisky",
    "price": 35.95,
    "size": "750 mL",
    "badge": "Featured",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 3,
    "name": "Crown Royal Apple",
    "category": "Whisky",
    "price": 35.95,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 4,
    "name": "Johnnie Walker Black Label",
    "category": "Whisky",
    "price": 53.95,
    "size": "750 mL",
    "badge": "Premium",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 5,
    "name": "Jameson Irish Whiskey",
    "category": "Whisky",
    "price": 39.95,
    "size": "750 mL",
    "badge": "Featured",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 6,
    "name": "Jack Daniel's Old No. 7",
    "category": "Whisky",
    "price": 38.99,
    "size": "750 mL",
    "badge": "Classic",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 7,
    "name": "Canadian Club Premium",
    "category": "Whisky",
    "price": 26.99,
    "size": "750 mL",
    "badge": "Canadian",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 8,
    "name": "J.P. Wiser's Deluxe",
    "category": "Whisky",
    "price": 32.99,
    "size": "750 mL",
    "badge": "Canadian",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 9,
    "name": "Glenfiddich 12 Year Old",
    "category": "Whisky",
    "price": 65.99,
    "size": "750 mL",
    "badge": "Premium",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 10,
    "name": "Bulleit Bourbon",
    "category": "Whisky",
    "price": 43.99,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A recognizable whisky selection from the supplied Cask and Screw inventory export."
  },

  {
    "id": 11,
    "name": "Alberta Pure Vodka",
    "category": "Vodka",
    "price": 23.99,
    "size": "750 mL",
    "badge": "Alberta",
    "type": "spirit",
    "description": "A clean, versatile vodka selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 12,
    "name": "Smirnoff Vodka",
    "category": "Vodka",
    "price": 23.99,
    "size": "750 mL PET",
    "badge": "Featured",
    "type": "spirit",
    "description": "A clean, versatile vodka selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 13,
    "name": "Tito's Handmade Vodka",
    "category": "Vodka",
    "price": 34.99,
    "size": "750 mL",
    "badge": "Featured",
    "type": "spirit",
    "description": "A clean, versatile vodka selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 14,
    "name": "Grey Goose Vodka",
    "category": "Vodka",
    "price": 52.99,
    "size": "750 mL",
    "badge": "Premium",
    "type": "spirit",
    "description": "A clean, versatile vodka selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 15,
    "name": "Absolut Vodka",
    "category": "Vodka",
    "price": 29.99,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A clean, versatile vodka selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 16,
    "name": "Ketel One Vodka",
    "category": "Vodka",
    "price": 36.49,
    "size": "750 mL",
    "badge": "Premium",
    "type": "spirit",
    "description": "A clean, versatile vodka selection from the supplied Cask and Screw inventory export."
  },

  {
    "id": 17,
    "name": "Captain Morgan Spiced Rum",
    "category": "Rum",
    "price": 32.99,
    "size": "750 mL",
    "badge": "Featured",
    "type": "spirit",
    "description": "A popular rum selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 18,
    "name": "Bacardi Superior White Rum",
    "category": "Rum",
    "price": 27.99,
    "size": "750 mL",
    "badge": "Classic",
    "type": "spirit",
    "description": "A popular rum selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 19,
    "name": "Bacardi Gold Rum",
    "category": "Rum",
    "price": 26.99,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A popular rum selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 20,
    "name": "The Kraken Black Spiced Rum",
    "category": "Rum",
    "price": 34.49,
    "size": "750 mL",
    "badge": "Featured",
    "type": "spirit",
    "description": "A popular rum selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 21,
    "name": "Appleton Estate Signature",
    "category": "Rum",
    "price": 27.99,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A popular rum selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 22,
    "name": "Malibu Original",
    "category": "Rum",
    "price": 28.45,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A popular rum selection from the supplied Cask and Screw inventory export."
  },

  {
    "id": 23,
    "name": "Jose Cuervo Silver Tequila",
    "category": "Tequila",
    "price": 38.99,
    "size": "750 mL",
    "badge": "Featured",
    "type": "spirit",
    "description": "A tequila selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 24,
    "name": "Jose Cuervo Gold Tequila",
    "category": "Tequila",
    "price": 38.99,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A tequila selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 25,
    "name": "Don Julio Blanco",
    "category": "Tequila",
    "price": 78.45,
    "size": "750 mL",
    "badge": "Premium",
    "type": "spirit",
    "description": "A tequila selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 26,
    "name": "Casamigos Blanco",
    "category": "Tequila",
    "price": 57.99,
    "size": "750 mL",
    "badge": "Premium",
    "type": "spirit",
    "description": "A tequila selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 27,
    "name": "Patrón Reposado",
    "category": "Tequila",
    "price": 78.99,
    "size": "750 mL",
    "badge": "Premium",
    "type": "spirit",
    "description": "A tequila selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 28,
    "name": "1800 Reposado Tequila",
    "category": "Tequila",
    "price": 43.99,
    "size": "750 mL",
    "badge": "",
    "type": "spirit",
    "description": "A tequila selection from the supplied Cask and Screw inventory export."
  },

  {
    "id": 29,
    "name": "Budweiser",
    "category": "Beer",
    "price": 32.99,
    "size": "15 × 355 mL cans",
    "badge": "Featured",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 30,
    "name": "Coors Light",
    "category": "Beer",
    "price": 32.99,
    "size": "15 × 355 mL cans",
    "badge": "Featured",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 31,
    "name": "Molson Canadian",
    "category": "Beer",
    "price": 33.99,
    "size": "15 × 355 mL cans",
    "badge": "Canadian",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 32,
    "name": "Corona Extra",
    "category": "Beer",
    "price": 33.99,
    "size": "12 × 355 mL bottles",
    "badge": "Featured",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 33,
    "name": "Heineken",
    "category": "Beer",
    "price": 34.99,
    "size": "12 × 330 mL bottles",
    "badge": "Import",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 34,
    "name": "Bud Light",
    "category": "Beer",
    "price": 32.99,
    "size": "15 × 355 mL cans",
    "badge": "",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 35,
    "name": "Michelob Ultra",
    "category": "Beer",
    "price": 35.99,
    "size": "15 × 355 mL cans",
    "badge": "",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 36,
    "name": "Kokanee",
    "category": "Beer",
    "price": 32.99,
    "size": "15 × 355 mL cans",
    "badge": "Canadian",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 37,
    "name": "Stella Artois",
    "category": "Beer",
    "price": 33.99,
    "size": "12 × 355 mL bottles",
    "badge": "Import",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 38,
    "name": "Guinness Draught",
    "category": "Beer",
    "price": 16.25,
    "size": "4 × 440 mL cans",
    "badge": "Import",
    "type": "beer",
    "description": "A familiar beer option from the supplied Cask and Screw inventory export."
  },

  {
    "id": 39,
    "name": "White Claw Big Surf Variety Pack",
    "category": "RTD",
    "price": 30.99,
    "size": "12 pack",
    "badge": "Featured",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 40,
    "name": "White Claw Variety Pack No. 1",
    "category": "RTD",
    "price": 30.99,
    "size": "12 × 355 mL",
    "badge": "",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 41,
    "name": "Twisted Tea Variety Pack",
    "category": "RTD",
    "price": 30.99,
    "size": "12 cans",
    "badge": "Featured",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 42,
    "name": "Twisted Tea Original",
    "category": "RTD",
    "price": 30.99,
    "size": "12 pack",
    "badge": "",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 43,
    "name": "NÜTRL Vodka Soda 7% Mixer",
    "category": "RTD",
    "price": 31.99,
    "size": "12 × 355 mL",
    "badge": "Featured",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 44,
    "name": "NÜTRL Bar Classics Mixer",
    "category": "RTD",
    "price": 31.99,
    "size": "12 × 355 mL",
    "badge": "",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 45,
    "name": "Nude Vodka Soda Mixer",
    "category": "RTD",
    "price": 29.99,
    "size": "12 × 355 mL",
    "badge": "",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 46,
    "name": "Mike's Hard Variety Tea",
    "category": "RTD",
    "price": 30.99,
    "size": "12 pack",
    "badge": "",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 47,
    "name": "Smirnoff Ice Party Pack",
    "category": "RTD",
    "price": 30.99,
    "size": "12 × 355 mL cans",
    "badge": "",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },
  {
    "id": 48,
    "name": "Palm Bay Mix Pack",
    "category": "RTD",
    "price": 31.99,
    "size": "12 × 355 mL",
    "badge": "",
    "type": "rtd",
    "description": "A ready-to-drink option from the supplied Cask and Screw inventory export."
  },

  {
    "id": 49,
    "name": "Apothic Red",
    "category": "Wine",
    "price": 15.99,
    "size": "750 mL",
    "badge": "Featured",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 50,
    "name": "19 Crimes Cabernet Sauvignon",
    "category": "Wine",
    "price": 17.99,
    "size": "750 mL",
    "badge": "",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 51,
    "name": "19 Crimes Cali Red",
    "category": "Wine",
    "price": 19.99,
    "size": "750 mL",
    "badge": "Featured",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 52,
    "name": "Kim Crawford Sauvignon Blanc",
    "category": "Wine",
    "price": 19.99,
    "size": "750 mL",
    "badge": "Premium",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 53,
    "name": "Oyster Bay Sauvignon Blanc",
    "category": "Wine",
    "price": 18.99,
    "size": "750 mL",
    "badge": "Featured",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 54,
    "name": "Josh Cellars Cabernet Sauvignon",
    "category": "Wine",
    "price": 19.99,
    "size": "750 mL",
    "badge": "",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 55,
    "name": "Barefoot Sauvignon Blanc",
    "category": "Wine",
    "price": 12.99,
    "size": "750 mL",
    "badge": "Value",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 56,
    "name": "Yellow Tail Cabernet Sauvignon",
    "category": "Wine",
    "price": 13.99,
    "size": "750 mL",
    "badge": "Value",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 57,
    "name": "Bodacious Cabernet Sauvignon",
    "category": "Wine",
    "price": 10.99,
    "size": "750 mL",
    "badge": "Value",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  },
  {
    "id": 58,
    "name": "Barefoot Moscato",
    "category": "Wine",
    "price": 12.99,
    "size": "750 mL",
    "badge": "",
    "type": "wine",
    "description": "A wine selection from the supplied Cask and Screw inventory export."
  }
];


/* =========================================
   VISUAL COLOURS
========================================= */

const categoryVisuals = {

  Whisky: {
    dark: "#2f1c12",
    mid: "#956437",
    label: "#dec58e"
  },

  Vodka: {
    dark: "#cbd1d1",
    mid: "#f7f9f8",
    label: "#e7ded1"
  },

  Rum: {
    dark: "#432719",
    mid: "#9b6437",
    label: "#dfc995"
  },

  Tequila: {
    dark: "#8a6532",
    mid: "#d8b25e",
    label: "#e8d5a4"
  },

  Beer: {
    dark: "#9e8b57",
    mid: "#d6bd70",
    label: "#ece2c4"
  },

  RTD: {
    dark: "#b8c3c8",
    mid: "#edf2f3",
    label: "#e0e7e8"
  },

  Wine: {
    dark: "#2d2523",
    mid: "#6d3b3d",
    label: "#e8dcc7"
  }

};


/* =========================================
   STATE
========================================= */

let activeCategory = "All";
let searchTerm = "";
let sortMode = "featured";


const productGrid =
  document.getElementById("productGrid");

const productCount =
  document.getElementById("productCount");

const searchInput =
  document.getElementById("searchInput");

const sortSelect =
  document.getElementById("sortSelect");


/* =========================================
   FILTER + SORT PRODUCTS
========================================= */

function getFilteredProducts() {

  let result =
    products.filter(product => {

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;


      const searchable =
        (
          product.name +
          " " +
          product.category +
          " " +
          product.size
        ).toLowerCase();


      const matchesSearch =
        searchable.includes(
          searchTerm.toLowerCase()
        );


      return (
        matchesCategory &&
        matchesSearch
      );

    });


  if (sortMode === "low") {

    result.sort(
      (a, b) =>
        a.price - b.price
    );

  }


  if (sortMode === "high") {

    result.sort(
      (a, b) =>
        b.price - a.price
    );

  }


  if (sortMode === "az") {

    result.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name
        )
    );

  }


  return result;

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

  const result =
    getFilteredProducts();


  if (productCount) {

    productCount.textContent =
      result.length;

  }


  if (!result.length) {

    productGrid.innerHTML = `

      <div class="no-results">

        <strong>
          No products found.
        </strong>

        <p>
          Try another search or category.
        </p>

      </div>

    `;

    return;

  }


  productGrid.innerHTML =
    result
      .map(product => {

        const visual =
          categoryVisuals[
            product.category
          ] ||
          categoryVisuals.Whisky;


        return `

          <article
            class="product-card ${product.type}"
          >

            <div class="product-image">


              ${
                product.badge

                  ? `

                    <div class="product-badge">

                      ${product.badge}

                    </div>

                  `

                  : ""

              }


              <div
                class="bottle"

                style="
                  --bottle-dark:${visual.dark};
                  --bottle-mid:${visual.mid};
                  --label:${visual.label};
                "
              ></div>


            </div>


            <div class="product-content">


              <div class="product-category">

                ${
                  product.category === "RTD"
                    ? "Coolers / RTD"
                    : product.category
                }

              </div>


              <div class="product-name">

                ${product.name}

              </div>


              <div class="product-meta">

                ${product.size}

              </div>


              <div class="product-bottom">


                <div class="product-price">

                  $${product.price.toFixed(2)}

                  <small>
                    inventory export price*
                  </small>

                </div>


                <button
                  class="product-view"

                  onclick="
                    openProduct(
                      ${product.id}
                    )
                  "
                >

                  View

                </button>


              </div>


            </div>


          </article>

        `;

      })
      .join("");

}


/* =========================================
   CATEGORY FILTERS
========================================= */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(item => {

            item.classList.remove(
              "active"
            );

          });


        button.classList.add(
          "active"
        );


        activeCategory =
          button.dataset.category;


        renderProducts();

      }
    );

  });


/* =========================================
   SEARCH
========================================= */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    event => {

      searchTerm =
        event.target.value;


      renderProducts();

    }
  );

}


/* =========================================
   SORT
========================================= */

if (sortSelect) {

  sortSelect.addEventListener(
    "change",
    event => {

      sortMode =
        event.target.value;


      renderProducts();

    }
  );

}


/* =========================================
   PRODUCT MODAL
========================================= */

const productModal =
  document.getElementById(
    "productModal"
  );


const modalCategory =
  document.getElementById(
    "modalCategory"
  );


const modalName =
  document.getElementById(
    "modalName"
  );


const modalMeta =
  document.getElementById(
    "modalMeta"
  );


const modalPrice =
  document.getElementById(
    "modalPrice"
  );


const modalDescription =
  document.getElementById(
    "modalDescription"
  );


function openProduct(id) {

  const product =
    products.find(
      item =>
        item.id === id
    );


  if (
    !product ||
    !productModal
  ) {

    return;

  }


  modalCategory.textContent =

    product.category === "RTD"

      ? "Coolers / RTD"

      : product.category;


  modalName.textContent =
    product.name;


  modalMeta.textContent =
    product.size;


  modalPrice.textContent =
    `$${product.price.toFixed(2)} CAD*`;


  modalDescription.textContent =
    product.description;


  productModal.classList.add(
    "show"
  );


  document.body.classList.add(
    "locked"
  );

}


function closeProductModal() {

  if (!productModal) {

    return;

  }


  productModal.classList.remove(
    "show"
  );


  document.body.classList.remove(
    "locked"
  );

}


const modalClose =
  document.getElementById(
    "modalClose"
  );


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeProductModal
  );

}


if (productModal) {

  productModal.addEventListener(
    "click",
    event => {

      if (
        event.target === productModal
      ) {

        closeProductModal();

      }

    }
  );

}


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeProductModal();

    }

  }
);


/* =========================================
   PORTFOLIO / PRICE NOTICE
========================================= */

const priceDisclaimer =
  document.querySelector(
    ".price-disclaimer"
  );


if (priceDisclaimer) {

  priceDisclaimer.innerHTML = `

    <strong>
      Portfolio project notice:
    </strong>

    This is a concept website and is not the official
    Cask and Screw Liquor website.

    Product names and prices shown here were selected
    from the supplied inventory export and may no longer
    reflect current store pricing or availability.

  `;

}


/* =========================================
   AGE VERIFICATION
========================================= */

const ageGate =
  document.getElementById(
    "ageGate"
  );


const ageCard =
  document.getElementById(
    "ageCard"
  );


const deniedCard =
  document.getElementById(
    "deniedCard"
  );


const ageYes =
  document.getElementById(
    "ageYes"
  );


const ageNo =
  document.getElementById(
    "ageNo"
  );


if (ageYes) {

  ageYes.addEventListener(
    "click",
    () => {

      sessionStorage.setItem(
        "caskAgeVerified",
        "yes"
      );


      if (ageGate) {

        ageGate.classList.add(
          "hidden"
        );

      }


      document.body.classList.remove(
        "locked"
      );

    }
  );

}


if (ageNo) {

  ageNo.addEventListener(
    "click",
    () => {

      if (ageCard) {

        ageCard.style.display =
          "none";

      }


      if (deniedCard) {

        deniedCard.style.display =
          "block";

      }

    }
  );

}


if (
  sessionStorage.getItem(
    "caskAgeVerified"
  ) === "yes"
) {

  if (ageGate) {

    ageGate.classList.add(
      "hidden"
    );

  }

} else {

  document.body.classList.add(
    "locked"
  );

}


/* =========================================
   AIRDRIE STORE HOURS
========================================= */

const storeHours = {

  Sunday: {

    open: 10,

    close: 23,

    display:
      "10 a.m. – 11 p.m."

  },


  Monday: {

    open: 10,

    close: 23,

    display:
      "10 a.m. – 11 p.m."

  },


  Tuesday: {

    open: 10,

    close: 23,

    display:
      "10 a.m. – 11 p.m."

  },


  Wednesday: {

    open: 10,

    close: 23,

    display:
      "10 a.m. – 11 p.m."

  },


  Thursday: {

    open: 10,

    close: 24,

    display:
      "10 a.m. – 12 a.m."

  },


  Friday: {

    open: 10,

    close: 24,

    display:
      "10 a.m. – 12 a.m."

  },


  Saturday: {

    open: 10,

    close: 24,

    display:
      "10 a.m. – 12 a.m."

  }

};


/* =========================================
   GET AIRDRIE TIME
========================================= */

function getAirdrieTime() {

  const formatter =
    new Intl.DateTimeFormat(
      "en-CA",
      {

        timeZone:
          "America/Edmonton",

        weekday:
          "long",

        hour:
          "2-digit",

        minute:
          "2-digit",

        hourCycle:
          "h23"

      }
    );


  const parts =
    formatter.formatToParts(
      new Date()
    );


  const result = {};


  parts.forEach(
    part => {

      result[
        part.type
      ] =
        part.value;

    }
  );


  return {

    day:
      result.weekday,

    hour:
      Number(
        result.hour
      ),

    minute:
      Number(
        result.minute
      )

  };

}


/* =========================================
   UPDATE OPEN / CLOSED
========================================= */

function updateStoreStatus() {

  const time =
    getAirdrieTime();


  const today =
    storeHours[
      time.day
    ];


  if (!today) {

    return;

  }


  const currentTime =
    time.hour +
    time.minute / 60;


  const isOpen =
    currentTime >= today.open &&
    currentTime < today.close;


  const status =
    document.getElementById(
      "storeStatus"
    );


  const todayHours =
    document.getElementById(
      "todayHours"
    );


  if (todayHours) {

    todayHours.textContent =

      `${time.day}: ${today.display}`;

  }


  if (status) {

    status.textContent =

      isOpen

        ? "Open now"

        : "Closed";


    status.classList.remove(
      "open",
      "closed"
    );


    status.classList.add(

      isOpen

        ? "open"

        : "closed"

    );

  }

}


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement =
  document.getElementById(
    "year"
  );


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

renderProducts();

updateStoreStatus();


setInterval(
  updateStoreStatus,
  60000
);
