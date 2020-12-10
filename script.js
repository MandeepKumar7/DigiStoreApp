/* Add any JavaScript you need to this file. */
itemData = [
  {
    brand: 'Apple',
    model: 'iPhone 12 Pro Max',
    description: 'Apple iPhone 12 Pro Max (White, 256 GB, 6.7 inch Display, A14 Bionic Chip)',
    price: 1689,
    category: 'phone',
    featured: true,
    imageUrl: './images/iphone-12-pro-max-silver-hero.png' // relative URL to image of this item
  },
  {
    brand: 'Apple',
    model: 'iPhone 12 Pro',
    description: 'Apple iPhone 12 Pro (White, 128 GB, 6.1 inch Display, A14 Bionic Chip)',
    price: 1399,
    category: 'phone', // category of this item
    featured: true,
    imageUrl: 'images/iphone-12-pro-silver-hero.png' // relative URL to image of this item
  },
  {
    brand: 'Apple',
    model: 'iPhone 12',
    description: 'Apple iPhone (Black, 64 GB, 6.1 inch Display, A14 Bionic Chip)',
    price: 1129,
    category: 'phone', // category of this item
    featured: true,
    imageUrl: 'images/iphone-12-black-select-2020.png' // relative URL to image of this item
  },
  {
    brand: 'Apple',
    model: 'iPhone 12 mini',
    description: 'Apple iPhone 12 mini (Black, 64 GB, 5.4 inch Display, A14 Bionic Chip)',
    price: 979,
    category: 'phone', // category of this item
    featured: false,
    imageUrl: 'images/iphone-12-mini-black-select-2020.png' // relative URL to image of this item
  },
  {
    brand: 'Apple',
    model: 'iPhone 11',
    description: 'Apple iPhone 11 (Yellow, 64 GB, 6.1 inch Display, A13 Bionic Chip)',
    price: 849,
    category: 'phone', // category of this item
    featured: false,
    imageUrl: 'images/iphone11-yellow-select-2019.png' // relative URL to image of this item
  },
  {
    brand: 'Apple',
    model: 'iPhone SE',
    description: 'Apple iPhone SE (Black, 64 GB, 4.7 inch Display, A13 Bionic Chip)',
    price: 599,
    category: 'phone',
    featured: false,
    imageUrl: 'images/iphone-se-black-select-2020.png'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Note20 Ultra',
    description:
      'Samsung Galaxy Note20 Ultra (Black, 512 GB, 6.9 inch Display, Snapdragon 865 Plus)',
    price: 1767,
    category: 'phone',
    featured: true,
    imageUrl: 'images/note 20 ultra.jpg'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Note20',
    description: 'Samsung Galaxy Note20(Gray, 128 GB, 6.7 inch Display, Snapdragon 865 Plus)',
    price: 1179,
    category: 'phone',
    featured: true,
    imageUrl: 'images/Note20Bronze.jpg'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Note10',
    description: 'Samsung Galaxy Note10 (Black, 256 GB, 6.3 inch Display, Snapdragon 855)',
    price: 1007,
    category: 'phone',
    featured: false,
    imageUrl: 'images/note10.jpeg'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Note10 Plus',
    description: 'Samsung Galaxy Note10+ (Black, 256 GB, 6.8 inch Display, Snapdragon 855)',
    price: 1269,
    category: 'phone',
    featured: false,
    imageUrl: 'images/note10p.jpg'
  },
  {
    brand: 'LG',
    model: 'Velvet',
    description: 'LG Velvet 5G (White, 128 GB, 6.8 inch Display, Snapdragon 765G)',
    price: 631,
    category: 'phone',
    featured: true,
    imageUrl: 'images/LG-Velvet.jpg'
  },
  {
    brand: 'LG',
    model: 'G8 ThinQ',
    description: 'LG G8 ThinQ (Black, 128 GB, 6.1 inch Display, Snapdragon 855)',
    price: 699,
    category: 'phone',
    featured: false,
    imageUrl: 'images/G8 ThinQ.jpg'
  },
  {
    brand: 'LG',
    model: 'V60 ThinQ',
    description: 'LG V60 ThinQ 5G Dual Screen (Black, 128 GB, 6.8 inch Display, Snapdragon 865)',
    price: 779,
    category: 'phone',
    featured: false,
    imageUrl: 'images/LG_V60_Catalog.png'
  },
  {
    brand: 'Apple',
    model: 'iPad Pro',
    description: 'Apple iPad Pro (Gray, 512 GB, 11 inch Display, A12Z Bionic chip)',
    price: 1639,
    category: 'tablet',
    featured: true,
    imageUrl: 'images/ipad-pro-11-select-wifi-spacegray-202003_GEO_GB_FMT_WHH.jpg'
  },
  {
    brand: 'Apple',
    model: 'iPad Air',
    description: 'Apple iPad Air (Green, 256 GB, 10.9 inch Display, A14 Bionic chip)',
    price: 1149,
    category: 'tablet',
    featured: true,
    imageUrl: 'images/ipad-air-select-cell-green-202009_FMT_WHH.png'
  },
  {
    brand: 'Apple',
    model: 'iPad',
    description: 'Apple iPad (Gray, 128 GB, 10.2 inch Display, A12 Bionic chip)',
    price: 719,
    category: 'tablet',
    featured: false,
    imageUrl: 'images/apple-ipad-mini-5.jpg'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Tab S7',
    description: 'Galaxy Tab S7 WiFi (Black, 128 GB, 11 inch Display, Snapdragon 865)',
    price: 799,
    category: 'tablet',
    featured: true,
    imageUrl: 'images/Samsung-Galaxy-Tab-S7.jpg'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Tab A',
    description: 'Galaxy Tab A (Black, 32 GB, 8.4 inch Display, Exynos 7904)',
    price: 319,
    category: 'tablet',
    featured: false,
    imageUrl: 'images/Tab A.jpg'
  },
  {
    brand: 'LG',
    model: 'G Pad IV 8.0',
    description: 'LG G Pad IV 8.0 FHD (Brown, 32 GB, 8 inch Display, Snapdragon 435)',
    price: 299,
    category: 'tablet',
    featured: true,
    imageUrl: 'images/lg-g-pad-4-8.0-fhd.jpg'
  },
  {
    brand: 'Apple',
    model: 'MacBook Pro',
    description: 'Apple MacBook Pro 16 (Gray, 512 GB, 16 inch Display, Intel Core i7)',
    price: 2999,
    category: 'laptop',
    featured: true,
    imageUrl: 'images/macBook Pro.jpg'
  },
  {
    brand: 'Apple',
    model: 'MacBook Air',
    description: 'Apple MacBook Air (Gray, 256 GB, 13 inch Display, Apple M1 chip)',
    price: 1299,
    category: 'laptop',
    featured: true,
    imageUrl: 'images/MacBook Air.jpg'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Book Ion',
    description: 'Samsung Galaxy Book Ion 15 (Silver, 512 GB, 15.6 inch Display, Intel Core i7)',
    price: 1679,
    category: 'laptop',
    featured: true,
    imageUrl: 'images/Samsung-Galaxy-Book-Ion-2020-800-770x502.jpg'
  },
  {
    brand: 'Samsung',
    model: 'Galaxy Book S',
    description: 'Samsung Galaxy Book S (Gray, 256 GB, 13.3 inch Display, Intel Core i5)',
    price: 1099,
    category: 'laptop',
    featured: false,
    imageUrl: 'images/Galaxy Book S.jpg'
  },
  {
    brand: 'LG',
    model: 'Gram 17 Ultra-Light',
    description: 'LG Gram 17 Ultra-Light Laptop (White, 256 GB, 17 inch Display, Intel Core i7)',
    price: 2311,
    category: 'laptop',
    featured: true,
    imageUrl: 'images/LG Gram.jpg'
  }
];

let current = [];
let previous = [];
let sortIn = [];
let searchOut = [];
let cartArr = [];
let lableCounter = 0;
let indexNo;
let featured1;
let phone1;
let tablet1;
let laptop1;
let all1;
let search1;
let cart1;
let apple1;
let samsung1;
let lg1;
let price1;
let minPrice;
let maxPrice;
let sortCounter = 0;
let brandFilter1 = 0;
let priceFilter1 = 0;
let cartItemCount = 0;
let noItem = 0;

const utils = {
  search(input) {
    let newArray = [];
    let i = 0;
    str = input.replace(/\s/g, '');
    let lowerInput = str.toLowerCase();
    itemData.forEach(element => {
      let lowerModel = element.model.toLowerCase();
      if (lowerModel.includes(lowerInput)) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    itemData.forEach(element => {
      let lowerBrand = element.brand.toLowerCase();
      if (lowerBrand.includes(lowerInput)) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    itemData.forEach(element => {
      let lowerDescription = element.description.toLowerCase();
      if (lowerDescription.includes(lowerInput)) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    itemData.forEach(element => {
      let lowerCategory = element.category.toLowerCase();
      if (lowerCategory.includes(lowerInput)) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    return newArray;
  },

  searchByBrand(brandName) {
    let newArray = [];
    let i = 0;
    itemData.forEach(element => {
      if (brandName === element.brand) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    return newArray;
  },
  getAll() {
    let newArray = [];
    let i = 0;
    itemData.forEach(element => {
      newArray[i] = JSON.parse(JSON.stringify(element));
      i++;
    });
    console.log(newArray);
    return newArray;
  },
  searchByCategory(categoryName) {
    let newArray = [];
    let i = 0;
    itemData.forEach(element => {
      if (categoryName === element.category) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    return newArray;
  },

  searchByPrice(maxPrice, minPrice) {
    let newArray = [];
    let i = 0;
    itemData.forEach(element => {
      if (maxPrice > element.price && minPrice < element.price) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    return newArray;
  },

  sortByPriceASC(arr) {
    console.log('sortByPriceASC function reached');
    let newArray = [];
    let i = 0;
    arr.forEach(element => {
      newArray[i] = JSON.parse(JSON.stringify(element));
      i++;
    });
    newArray.sort(function(a, b) {
      return a.price - b.price;
    });
    return newArray;
  },

  sortByPriceDES(arr) {
    let newArray = [];
    let i = 0;
    arr.forEach(element => {
      newArray[i] = JSON.parse(JSON.stringify(element));
      i++;
    });
    newArray.sort(function(a, b) {
      return b.price - a.price;
    });
    return newArray;
  },
  searchFeatured() {
    let newArray = [];
    let i = 0;
    itemData.forEach(element => {
      if (element.featured) {
        newArray[i] = JSON.parse(JSON.stringify(element));
        i++;
      }
    });
    return newArray;
  },
  addArrays(arr1, arr2) {
    let newArray = [];
    let arrLength = arr1.length + arr2.length;
    let i = 0;
    let j = 0;
    let k = 0;
    for (k = 0; k < arrLength; k++) {
      for (i = 0; i < arr1.length; i++) {
        newArray[k] = JSON.parse(JSON.stringify(arr1[i]));
        k++;
      }
      for (j = 0; j < arr2.length; j++) {
        newArray[k] = JSON.parse(JSON.stringify(arr2[j]));
        k++;
      }
    }
    return newArray;
  },
  findCommon(arr1, arr2) {
    let newArray = [];
    let i = 0;
    let j = 0;
    let k = 0;
    for (i = 0; i < arr1.length; i++) {
      j = 0;
      for (j = 0; j < arr2.length; j++) {
        if (arr1[i].model === arr2[j].model) {
          newArray[k] = JSON.parse(JSON.stringify(arr2[j]));
          k++;
        }
      }
    }
    return newArray;
  },
  whatCategory() {
    let arr1 = [];
    if (featured1) {
      arr1 = utils.searchFeatured();
    } else if (phone1) {
      arr1 = utils.searchByCategory('phone');
      console.log(arr1);
      console.log('what category Phone check');
    } else if (tablet1) {
      arr1 = utils.searchByCategory('tablet');
    } else if (laptop1) {
      arr1 = utils.searchByCategory('laptop');
    } else if (all1) {
      arr1 = utils.getAll();
    } else if (search1) {
      arr1 = searchOut;
    }
    console.log(arr1);
    console.log('what category return check');
    return arr1;
  },
  brandFilter() {
    let arr1 = utils.whatCategory();
    let arr2 = [];
    let common1 = [];
    let common2 = [];
    let out = [];
    console.log(arr1);
    console.log('Arr1 value');
    console.log(apple1);
    console.log('Apple1 value');
    console.log(samsung1);
    console.log('samsung1 value');
    console.log(brandFilter1);
    console.log('brandFilter1 value');
    console.log(priceFilter1);
    console.log('priceFilter value');
    if (apple1) {
      arr2 = utils.searchByBrand('Apple');
      common1 = utils.findCommon(arr1, arr2);
      out = common1;
      console.log(out);
      console.log('brand filter apple true');
      if (samsung1) {
        arr2 = utils.searchByBrand('Samsung');
        common1 = utils.findCommon(arr1, arr2);
        common2 = utils.addArrays(out, common1);
        out = common2;
        console.log(out);
        console.log('brand filter samsung true');
        if (lg1) {
          arr2 = utils.searchByBrand('LG');
          common1 = utils.findCommon(arr1, arr2);
          common2 = utils.addArrays(out, common1);
          out = common2;
          console.log(common1);
          console.log('brand filter LG true');
        }
      } else if (lg1) {
        arr2 = utils.searchByBrand('LG');
        common1 = utils.findCommon(arr1, arr2);
        common2 = utils.addArrays(out, common1);
        out = common2;
      }
    } else if (samsung1) {
      arr2 = utils.searchByBrand('Samsung');
      common1 = utils.findCommon(arr1, arr2);
      out = common1;
      if (lg1) {
        arr2 = utils.searchByBrand('LG');
        common1 = utils.findCommon(arr1, arr2);
        common2 = utils.addArrays(out, common1);
        out = common2;
      }
    } else if (lg1) {
      arr2 = utils.searchByBrand('LG');
      common1 = utils.findCommon(arr1, arr2);
      out = common1;
    } else {
      out = arr1;
    }
    console.log(out);
    console.log('brand filter return value');
    return out;
  },
  priceFilter() {
    let arr1 = [];
    if (brandFilter1 > 0) {
      arr1 = utils.brandFilter();
    } else {
      arr1 = utils.whatCategory();
    }
    let arr2 = utils.searchByPrice(maxPrice, minPrice);
    let common = utils.findCommon(arr1, arr2);
    return common;
  },
  filter() {
    let arr = [];
    if (price1) {
      arr = utils.priceFilter();
    } else {
      arr = utils.brandFilter();
    }
    return arr;
  },
  resetCategoryValues() {
    featured1 = false;
    phone1 = false;
    tablet1 = false;
    laptop1 = false;
    all1 = false;
    search1 = false;
  },
  resetFilterValues() {
    apple1 = false;
    samsung1 = false;
    lg1 = false;
    price1 = false;
    minPrice = 0;
    maxPrice = 9999999;
    brandFilter1 = 0;
    priceFilter1 = 0;
    sortCounter = 0;
    cart1 = false;
  },
  resetValues() {
    utils.resetCategoryValues();
    utils.resetFilterValues();
  },
  setValue(input1, input2) {
    if (input1 === 'featured') {
      utils.resetValues();
      featured1 = true;
    } else if (input1 === 'phone') {
      utils.resetValues();
      phone1 = true;
    } else if (input1 === 'tablet') {
      utils.resetValues();
      tablet1 = true;
    } else if (input1 === 'laptop') {
      utils.resetValues();
      laptop1 = true;
    } else if (input1 === 'all') {
      utils.resetValues();
      all1 = true;
    } else if (input1 === 'search') {
      utils.resetValues();
      search1 = true;
    } else if (input1 === 'cart') {
      utils.resetValues();
      cart1 = true;
    } else if (input1 === 'apple') {
      apple1 = true;
    } else if (input1 === 'samsung') {
      samsung1 = true;
      console.log('samsung trueeeee');
    } else if (input1 === 'lg') {
      lg1 = true;
    } else if (input1 === 'price') {
      price1 = true;
    } else {
      maxPrice = input1;
      minPrice = input2;
    }
  }
};

window.onload = function() {
  featured();
};

function featured() {
  clear();
  utils.setValue('featured');
  resetFilterChecks();
  let out = utils.searchFeatured();
  apply(out);
}

function phone() {
  clear();
  utils.setValue('phone');
  resetFilterChecks();
  let out = utils.searchByCategory('phone');
  apply(out);
}
function tablet() {
  clear();
  utils.setValue('tablet');
  resetFilterChecks();
  let out = utils.searchByCategory('tablet');
  apply(out);
}
function laptop() {
  clear();
  utils.setValue('laptop');
  resetFilterChecks();
  let out = utils.searchByCategory('laptop');
  apply(out);
}
function allCat() {
  console.log('all selected');
  clear();
  utils.setValue('all');
  resetFilterChecks();
  let out = utils.getAll();
  console.log(out);
  apply(out);
}
function searchBar() {
  clear();
  utils.setValue('search');
  resetFilterChecks();
  let input = document.getElementById('search').value;
  let out = utils.search(input);
  searchOut = out;
  console.log(out);
  apply(out);
}
let i = 0;
function addToCart(idNo) {
  //let buttonelem = document.getElementsByClassName("applyAddToCart")[0];
  console.log(idNo);
  // let buttonId = buttonelem.id;
  //console.log(buttonId);
  cartArr[i] = JSON.parse(JSON.stringify(sortIn[idNo]));
  i++;

  let top = document.getElementById('topOptions');
  console.log(cartItemCount);
  if (cartItemCount > 0) {
    let previousCount = document.getElementById('cartItemCount');
    console.log(top);
    console.log(previousCount);
    top.removeChild(previousCount);
  }
  cartItemCount++;
  let cartItemNo = document.createElement('div');
  cartItemNo.id = 'cartItemCount';
  let text = document.createTextNode(cartItemCount);
  cartItemNo.appendChild(text);
  console.log(cartItemNo);
  console.log(top);
  top.appendChild(cartItemNo);
  console.log(top);

  console.log('done');
}

function cart() {
  clear();

  resetFilterChecks();
  utils.setValue('cart');
  apply(cartArr);
}

function removeFromCart() {
  let i = 0;
  let buttonelem = document.getElementsByClassName('applyCartRemove')[0];
  console.log(buttonelem);
  let buttonId = buttonelem.id;
  console.log(buttonId);
  console.log('before');
  console.log(cartArr);
  sortIn.splice(buttonId, 1);
  cartArr = sortIn;
  let top = document.getElementById('topOptions');
  console.log(cartItemCount);
  cartItemCount--;
  if (cartItemCount > 0) {
    let previousCount = document.getElementById('cartItemCount');
    console.log(top);
    console.log(previousCount);
    top.removeChild(previousCount);
  }
  let cartItemNo = document.createElement('div');
  cartItemNo.id = 'cartItemCount';
  let text = document.createTextNode(cartItemCount);
  cartItemNo.appendChild(text);
  top.appendChild(cartItemNo);
  if (cartItemCount < 1) {
    let previousCount = document.getElementById('cartItemCount');
    console.log(top);
    console.log(previousCount);
    top.removeChild(previousCount);
  }
  cart();
}

function resetFilterChecks() {
  document.getElementById('apple').checked = false;
  document.getElementById('samsung').checked = false;
  document.getElementById('lg').checked = false;
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  let sort = document.getElementById('sort');
  sort.selectedIndex = 0;
}

function clearAllFilters() {
  utils.resetFilterValues();
  resetFilterChecks();
  if (featured1) {
    featured();
  } else if (phone1) {
    phone();
  } else if (tablet1) {
    tablet();
  } else if (laptop1) {
    laptop();
  } else if (all1) {
    allCat();
  } else if (search1) {
    searchBar();
  }
}
function clear() {
  let div = document.getElementById('applyDiv');
  if (div) {
    let main = document.getElementById('main');
    main.removeChild(div);
  }
}
function checkApple() {
  clear();
  let elem = document.getElementById('apple');
  if (elem.checked) {
    brandFilter1++;
    utils.setValue('apple');
    let out = utils.filter();
    apply(out);
  } else {
    brandFilter1--;
    apple1 = false;
    let out = utils.filter();
    apply(out);
  }
}

function checkSamsung() {
  clear();
  let elem = document.getElementById('samsung');
  if (elem.checked) {
    brandFilter1++;
    utils.setValue('samsung');
    let out = utils.filter();
    apply(out);
  } else {
    brandFilter1--;
    samsung1 = false;
    let out = utils.filter();
    apply(out);
  }
}

function checkLg() {
  clear();
  let elem = document.getElementById('lg');
  if (elem.checked) {
    brandFilter1++;
    utils.setValue('lg');
    let out = utils.filter();
    apply(out);
  } else {
    brandFilter1--;
    lg1 = false;
    let out = utils.filter();
    apply(out);
  }
}
function checkPrice() {
  clear();
  utils.setValue('price');
  let min = document.getElementById('priceMin').value;
  let max = document.getElementById('priceMax').value;
  console.log(min);
  console.log(max);

  utils.setValue(max, min);
  let out = utils.filter();
  apply(out);
}
function sort() {
  clear();

  if (sortCounter === 0) {
    previous = sortIn;
  }
  console.log('Hello');
  let value = document.getElementById('sort').value;
  let out = [];
  console.log(value);
  if (value === 'Asc') {
    out = utils.sortByPriceASC(sortIn);
    console.log(out);
    sortCounter++;
  } else if (value === 'Des') {
    out = utils.sortByPriceDES(sortIn);
    sortCounter++;
  } else if (value === 'Default') {
    out = previous;
    sortCounter = 0;
  }
  apply(out);
}

function mainLable() {
  let main = document.getElementById('main');
  if (lableCounter > 0) {
    let previousLable = document.getElementById('mainLable');
    main.removeChild(previousLable);
  }
  lableCounter++;
  let lable = document.createElement('div');
  lable.id = 'mainLable';
  let text;
  if (featured1) {
    text = 'Category: Featured';
  } else if (phone1) {
    text = 'Category: Phone';
  } else if (tablet1) {
    text = 'Category: Tablet';
  } else if (laptop1) {
    text = 'Category: Laptop';
  } else if (all1) {
    text = 'Category: All items';
  } else if (cart1) {
    text = 'Shopping Cart:';
  } else if (search1) {
    text = 'Search Result:';
  }
  let text1 = document.createTextNode(text);
  lable.appendChild(text1);
  main.appendChild(lable);
}

function topNavCSS() {
  let elem = document.getElementById('elem');
  let featured = document.getElementById('featuredLi');
  let phone = document.getElementById('phoneLi');
  let tablet = document.getElementById('tabletLi');
  let laptop = document.getElementById('laptopLi');
  let all = document.getElementById('allLi');
  console.log(elem);
  console.log(featured);
  console.log(phone);
  console.log(tablet);
  console.log(laptop);
  console.log(all);
  if (featured1) {
    featured.style.backgroundColor = 'darkslategray';
    featured.style.color = 'lightgray';
  } else {
    featured.style.backgroundColor = 'rgb(255, 238, 238)';
    featured.style.color = 'darkslategray';
    featured.style.paddingBottom = '7px';
  }
  if (phone1) {
    phone.style.backgroundColor = 'darkslategray';
    phone.style.color = 'lightgray';
  } else {
    phone.style.backgroundColor = 'rgb(255, 238, 238)';
    phone.style.color = 'darkslategray';
    phone.style.paddingBottom = '7px';
  }
  if (tablet1) {
    tablet.style.backgroundColor = 'darkslategray';
    tablet.style.color = 'lightgray';
  } else {
    tablet.style.backgroundColor = 'rgb(255, 238, 238)';
    tablet.style.color = 'darkslategray';
    tablet.style.paddingBottom = '7px';
  }
  if (laptop1) {
    laptop.style.backgroundColor = 'darkslategray';
    laptop.style.color = 'lightgray';
  } else {
    laptop.style.backgroundColor = 'rgb(255, 238, 238)';
    laptop.style.color = 'darkslategray';
    laptop.style.paddingBottom = '7px';
  }
  if (all1) {
    all.style.backgroundColor = 'darkslategray';
    all.style.color = 'lightgray';
  } else {
    all.style.backgroundColor = 'rgb(255, 238, 238)';
    all.style.color = 'darkslategray';
    all.style.paddingBottom = '7px';
  }
}

function menu() {
  let nav = document.getElementById('cat');
  console.log(nav);
  if (nav.className === 'category') {
    nav.className = 'responsive';
  } else {
    nav.className = 'category';
  }
}
function orderProblem() {
  let elem = document.getElementById('orderNumberDiv');
  let val = document.getElementById('problem').value;
  console.log(elem);
  console.log(val);
  if (val) {
    elem.style.display = 'inline';
  } else {
    elem.style.display = 'none';
  }
}
function resetProblem() {
  let elem = document.getElementById('orderNumberDiv');
  elem.style.display = 'none';
}
function apply(out) {
  topNavCSS();
  let main = document.getElementById('main');
  let div = document.createElement('div');
  div.id = 'applyDiv';
  mainLable();
  if (out.length === 0) {
    if (noItem > 0) {
      let previous = document.getElementById('noItem');
      main.removeChild(previous);
    }
    noItem++;
    let elem = document.createElement('p');
    elem.id = 'noItem';
    let text = document.createTextNode('0 results available...');
    elem.appendChild(text);
    main.appendChild(elem);
  }

  let i = 0;
  for (i = 0; i < out.length; i++) {
    indexNo = i;
    let unordered = document.createElement('ul');
    unordered.className = 'applyUl';
    let list1 = document.createElement('li');
    list1.className = 'applyLiImage';
    let image = document.createElement('img');
    image.src = out[i].imageUrl;
    image.className = 'image';
    list1.appendChild(image);
    list1.style.listStyleType = 'none';
    unordered.appendChild(list1);
    let list2 = document.createElement('li');
    list2.className = 'applyLiTitle';
    let text2 = document.createTextNode(out[i].brand + ' ' + out[i].model);
    list2.appendChild(text2);
    list2.style.listStyleType = 'none';
    list2.style.fontWeight = 'bolder';
    unordered.appendChild(list2);
    let list3 = document.createElement('li');
    list3.className = 'applyLiPrice';
    let text3 = document.createTextNode('$' + out[i].price);
    list3.appendChild(text3);
    list3.style.listStyleType = 'none';
    unordered.appendChild(list3);
    let list4 = document.createElement('li');
    list4.className = 'applyLiDescription';
    let text4 = document.createTextNode(out[i].description);
    list4.appendChild(text4);
    list4.style.listStyleType = 'none';
    unordered.appendChild(list4);
    if (cart1) {
      let list5 = document.createElement('button');
      list5.className = 'applyMakePayment';
      list5.id = i;
      let text5 = document.createTextNode('Make Payment');
      list5.appendChild(text5);
      console.log(list5);
      list5.style.listStyleType = 'none';
      unordered.appendChild(list5);

      let list6 = document.createElement('button');
      list6.className = 'applyCartRemove';
      list6.id = i;
      list6.onclick = function() {
        removeFromCart();
      };
      let text6 = document.createTextNode('Remove');
      list6.appendChild(text6);
      console.log(list6);
      list6.style.listStyleType = 'none';
      unordered.appendChild(list6);
    } else {
      let list5 = document.createElement('button');
      list5.className = 'applyAddToCart';
      console.log(i);
      list5.id = i;
      console.log(list5.id);
      list5.onclick = function() {
        addToCart(list5.id);
      };
      let text5 = document.createTextNode('Add to Cart');
      list5.appendChild(text5);
      console.log(list5);
      list5.style.listStyleType = 'none';
      unordered.appendChild(list5);
    }
    div.appendChild(unordered);
    main.appendChild(div);
  }
  console.log(out);
  sortIn = out;
  return out;
}
