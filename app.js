const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "lunch",
    price: 15.99,
    img: "bg.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: 13.99,
    img: "bg3.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb legging gouching gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "bgnew2.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "lunch",
    price: 22.99,
    img: "bowl-7683485_1920.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch.Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "pexels-cats-coming-699544.jpg",
    desc: `franzen vegan pabst bicycle rights kickstartr pinterest meditation farm-to-table 90's pop-up`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "pexels-chan-walrus-958545.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iphone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "pexels-dana-tentis-691114.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork bellycloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "pexels-eghost-2611917.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yeccie crucifix microdosing. `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "pexels-jane-doan-769969.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut `,
  },
  {
    id: 10,
    title: "biscon",
    category: "dinner",
    price: 22.99,
    img: "pexels-william-choquette-2641886.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing `,
  },
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "biscon",
    price: 15.99,
    img: "bg.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
];
const SectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});

function displayMenuItems(menu) {
  let displayMenu = menu.map(function (menuItem) {
    return ` <article class="menu-item">
        <img src=${menuItem.img} class="photo" alt="" height="150px">
        <div class="item-info">
          <header>
          <h4>${menuItem.title}</h4>
          <h4 class="price">$${menuItem.price}</h4>
        </header>
        <p class="item-text">${menuItem.desc}
        </p>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  SectionCenter.innerHTML = displayMenu;
}
function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      console.log(values);
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return ` <button class="filter-btn" id="breakfast" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //   const category = e.currentTarget.id;
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) return menuItem;
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
// filter buttons

// }
// const SectionCenter = document.querySelector('.section-center');
// const filterBtns = document.querySelectorAll('.filter-btn')

// window.addEventListener("DOMContentLoaded",function(){
//     //     console.log(item);
//     //     return `<h1>hello world</h1>`;
//     displayMenuItems(menu);
// });

// filterBtns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const category = e.currentTarget.dataset.id;

//         const menuCategory = menu.filter(function(menuItem){
//           //  console.log(menuItem.category);
//           if (menuItem.category===category)
//             return menuItem;
//         })

//         if(category ==='all')
//         {
//             displayMenuItems(menu);
//         }
//         else
//         {
//             displayMenuItems(menuCategory)
//         }

//     })
// })

// function displayMenuItems(menuItems){

//     let displayMenu = menuItems.map(function(item){
//     return `
//     <article class="menu-item">
//     <img src=${item.img} class="photo" alt=${item.title}>
//     <div class="item-info">
//       <header>
//       <h4>${item.title}</h4>
//       <h4 class="price">$${item.price}</h4>
//     </header>
//     <p class="item-text">${item.desc}
//     </p>
//   </div>
//  </article>`
//      });
//       displayMenu = displayMenu.join("");
//       SectionCenter.innerHTML = displayMenu;
//  }
//
