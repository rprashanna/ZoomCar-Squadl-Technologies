
let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [

  {
    id: 1,
    name: 'Maruti Wagon R',
    price: 700,
    transmission: ['Automatic'],
    fuel: ['Disel'],
    type: 4,
    image: 'https://images10.gaadi.com/usedcar_image/original/zz1_crop_img_639440c93189c_1670660297.jpg?imwidth=640',
    nature: {
      transmission: ['Automatic'],
      fuel: ['Disel'],
      size: ['S', 'M', 'L'],
      type: 4
    }
  },
  {
    id: 2,
    name: 'Honda Jazz',
    price: 900,
    transmission: ['Manual'],
    fuel: ['Disel'],
    type: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7i7f-cnDNSKwuY4nmu6oykkXGoPJM2ZtdQDlpas60w&usqp=CAU&ec=48665701',
    nature: {
      transmission: ['Manual'],
      fuel: ['Disel'],
      type: 4
    }
  },
  {
    id: 3,
    name: 'Maruti Ignis',
    price: 1100,
    transmission: ['Automatic'],
    fuel: ['Petrol'],
    type: 4,
    image: 'https://static.locowiz.com/locomedia/mahindra-first-choice/products/original/cover_image-20220528122902.jpg',
    nature: {
      transmission: ['Automatic'],
      fuel: ['Petrol'],
      type: 4
    }
  },

  {
    id: 4,
    name: 'Datasun Redi-Go',
    price: 1200,
    transmission: ['Manual'],
    fuel: ['Petrol'],
    type: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Datsun_redi-Go_%28front%29.png/1200px-Datsun_redi-Go_%28front%29.png',
    nature: {
      transmission: ['Manual'],
      fuel: ['Petrol'],
      type: 4
    }
  },
  {
    id: 5,
    name: 'Maruti Dzire',
    price: 1400,
    transmission: ['Automatic'],
    fuel: ['Disel'],
    type: 5,
    image: 'https://www.carz4sale.in/photos-2/166/16629/maruti-suzuki-swift-dzire-petrol-vxi-1574234288.jpeg',
    nature: {
      transmission: ['Automatic'],
      fuel: ['Disel'],
      type: 5
    }
  },
  {
    id: 6,
    name: 'Maruti Baleno',
    price: 1500,
    transmission: ['Manual'],
    fuel: ['Disel'],
    type: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4VhtVG01Vx94Uip0KUPez0zJDZn7_J69Oqu8lI2WtQ&usqp=CAU&ec=48665701',
    nature: {
      transmission: ['Manual'],
      fuel: ['Disel'],
      type: 5
    }
  },
  {
    id: 7,
    name: 'Ford Ecosport',
    price: 1650,
    transmission: ['Automatic'],
    fuel: ['Petrol'],
    type: 5,
    image: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/NGRCH8F_d94ba14c929f495498a734ebf5052cb9_1_29126988.jpg?q=75',
    nature: {
      transmission: ['Automatic'],
      fuel: ['Petrol'],
      type: 5
    }
  },
  {
    id: 8,
    name: 'Hyundai Xcent',
    price: 1700,
    transmission: ['Manual'],
    fuel: ['Petrol'],
    type: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDxez4LgUJe0tQWmFcG8hUFnPH4fS_AwXiJbGdrJCnw&usqp=CAU&ec=48665701',
    nature: {
      transmission: ['Manual'],
      fuel: ['Petrol'],
      type: 5
    }
  },

  {
    id: 9,
    name: 'Renault Triber',
    price: 3000,
    transmission: ['Automatic'],
    fuel: ['Disel'],
    type: 7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2021_Renault_Triber_RXZ_%28Indonesia%29_front_view.jpg/1200px-2021_Renault_Triber_RXZ_%28Indonesia%29_front_view.jpg ',
    nature: {
      transmission: ['Automatic'],
      fuel: ['Disel'],
      type: 7
    }
  },
  {
    id: 10,
    name: 'Maruti Ertiga',
    price: 3150,
    transmission: ['Manual'],
    fuel: ['Disel'],
    type: 7,
    image: 'https://imgd.aeplcdn.com/300x225/cw/ucp/stockApiImg/NGRCH8F_d94ba14c929f495498a734ebf5052cb9_1_29126988.jpg?q=75',
    nature: {
      transmission: ['Manual'],
      fuel: ['Disel'],
      type: 7
    }
  },
  {
    id: 11,
    name: 'Maruti Ertiga (Hybrid)',
    price: 3250,
    transmission: ['Automatic'],
    fuel: ['Petrol'],
    type: 7,
    image: 'https://usedcarkerala.in/oc-content/uploads/34/11816.jpg',
    nature: {
      transmission: ['Automatic'],
      fuel: ['Petrol'],
      type: 7
    }
  },
];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter) {
  count.innerText = productFilter.length;
  list.innerHTML = '';
  productFilter.forEach(item => {
    let newItem = document.createElement('div');
    newItem.classList.add('item');

    // create image
    let newImage = new Image();
    newImage.src = item.image;
    newItem.appendChild(newImage);
    // create name product
    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.name;
    newTitle.style.fontSize = "20px";
    newItem.appendChild(newTitle);

    // 
    let t = document.createElement('div');
    t.classList.add('addd');
    t.style.color = "grey";
    t.innerText = item.transmission + " · " + item.fuel + " · " + item.type + ' Seats';
    newItem.appendChild(t);

    // create price
    let newPrice = document.createElement('div');
    newPrice.classList.add('price');
    newPrice.style.fontSize = "25px";
    newPrice.style.color = "black";
    newPrice.innerText = '₹ ' + item.price.toLocaleString();
    newItem.appendChild(newPrice);

    list.appendChild(newItem);
  });
}
filter.addEventListener('submit', function (event) {
  event.preventDefault();
  let valueFilter = event.target.elements;
  productFilter = listProducts.filter(item => {
    // check seats
    if (valueFilter.seats.value != '') {
      if (item.nature.type != valueFilter.seats.value) {
        return false;
      }
    }
    // check transmission
    if (valueFilter.transmission.value != '') {
      if (!item.nature.transmission.includes(valueFilter.transmission.value)) {
        return false;
      }
    }

    if (valueFilter.fuel.value != '') {
      if (!item.nature.fuel.includes(valueFilter.fuel.value)) {
        return false;
      }
    }
    if (valueFilter.minprice.value != '') {
      if (item.price < valueFilter.minprice.value) {
        return false;
      }
    }
    if (valueFilter.maxprice.value != '') {
      if (item.price > valueFilter.maxprice.value) {
        return false;
      }
    }


    return true;
  })
  showProduct(productFilter);
})









