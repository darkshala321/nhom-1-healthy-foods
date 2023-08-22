const dom = document;

// data Category
const CATEGORY_LIST = [
    {
        id: "C_001",
        category_name: "Dầu Oils, Bơ",
        category_img: "./img/category/1.png",
        backgroud_color: "#fff9d8"
    },
    {
        id: "C_002",
        category_name: "Gạo, Bột mì & Hạt",
        category_img: "./img/category/2.png",
        backgroud_color: "#fff2ec"
    },
    {
        id: "C_003",
        category_name: "Tủ thức ăn",
        category_img: "./img/category/3.png",
        backgroud_color: "#fce9e9"
    },
    {
        id: "C_004",
        category_name: "Hạt & Đỗ ",
        category_img: "./img/category/4.png",
        backgroud_color: "#fff2ec"
    },
    {
        id: "C_005",
        category_name: "Đồ uống",
        category_img: "./img/category/5.png",
        backgroud_color: "#fcf1ff"
    },
    {
        id: "C_006",
        category_name: "Trái cây và rau quả",
        category_img: "./img/category/6.png",
        backgroud_color: "#fff9d8"
    },
    {
        id: "C_007",
        category_name: "Thức ăn sẵn",
        category_img: "./img/category/7.png",
        backgroud_color: "#fff2ec"
    },
    {
        id: "C_008",
        category_name: "Thức phẩm hỗn hợp",
        category_img: "./img/category/8.png",
        backgroud_color: "#fff9d8"
    },
    {
        id: "C_009",
        category_name: "Cooking",
        category_img: "./img/category/6.png",
        backgroud_color: "fff2ec"
    }

]

// data PRODUCT 
const PRODUCT_LIST = [
    {
        id: "PD_01",
        product_name: "Ớt chuông",
        product_img: "./img/product/1.png",
        price_old: "34.21",
        price_new: "35.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "25",
        hot_deals: "1",
        sell: "30",
        category_id: "C_001"
    },
    {
        id: "PD_02",
        product_name: "Hành tây",
        product_img: "./img/product/3.png",
        price_old: "15.21",
        price_new: "30.01",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "25",
        hot_deals: "1",
        sell: "45",
        category_id: "C_004"
    },
    {
        id: "PD_03",
        product_name: "Ớt con",
        product_img: "./img/product/5.png",
        price_old: "23.11",
        price_new: "25.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "1",
        sell: "100",
        category_id: "C_004"
    },
    {
        id: "PD_04",
        product_name: "Bông cải xanh",
        product_img: "./img/product/6.png",
        price_old: "11.21",
        price_new: "20.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "1",
        sell: "102",
        category_id: "C_003"
    },
    {
        id: "PD_05",
        product_name: "Trái Lê",
        product_img: "./img/product/7.png",
        price_old: "30.05",
        price_new: "35.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "1",
        sell: "40",
        category_id: "C_003"
    },
    {
        id: "PD_06",
        product_name: "Bơ",
        product_img: "./img/product/9.png",
        price_old: "11.21",
        price_new: "13.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_07",
        product_name: "Dưa chuột",
        product_img: "./img/product/11.png",
        price_old: "11.21",
        price_new: "12.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_08",
        product_name: "Củ cải đỏ",
        product_img: "./img/product/12.png",
        price_old: "13.21",
        price_new: "31.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_09",
        product_name: "Dâu tây",
        product_img: "./img/product/13.png",
        price_old: "34.21",
        price_new: "45.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_10",
        product_name: "Bắp",
        product_img: "./img/product/15.png",
        price_old: "11.21",
        price_new: "13.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "1",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_11",
        product_name: "Xu hào",
        product_img: "./img/product/17.png",
        price_old: "30.21",
        price_new: "11.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_12",
        product_name: "Gừng",
        product_img: "./img/product/18.png",
        price_old: "23.21",
        price_new: "28.12",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_13",
        product_name: "Đậu xanh",
        product_img: "./img/product/10.png",
        price_old: "13.21",
        price_new: "21.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_14",
        product_name: "Cà Tím",
        product_img: "./img/product/2.png",
        price_old: "39.11",
        price_new: "40.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_15",
        product_name: "Táo",
        product_img: "./img/product/8.png",
        price_old: "15.21",
        price_new: "25.12",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_16",
        product_name: "Chanh dây",
        product_img: "./img/product/14.png",
        price_old: "65.21",
        price_new: "70.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_17",
        product_name: "Nho",
        product_img: "./img/product/16.png",
        price_old: "15.21",
        price_new: "20.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_18",
        product_name: "Khoai tây",
        product_img: "./img/product/4.png",
        price_old: "15.21",
        price_new: "17.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_19",
        product_name: "Bắp",
        product_img: "./img/product/19.png",
        price_old: "21.21",
        price_new: "22.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_20",
        product_name: "Dâu tây",
        product_img: "./img/product/20.png",
        price_old: "15.21",
        price_new: "17.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_21",
        product_name: "Bông cải xanh",
        product_img: "./img/product/6.png",
        price_old: "22.21",
        price_new: "23.21",
        product_new: "0",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "-",
        sell: "30",
        category_id: "C_003"
    },
    {
        id: "PD_22",
        product_name: "Củ khoai tía",
        product_img: "./img/product/12.png",
        price_old: "65.21",
        price_new: "70.21",
        product_new: "1",
        product_star: "fa fa-star",
        discount: "0",
        hot_deals: "0",
        sell: "30",
        category_id: "C_003"
    },
]

//data Blogs
const BLOGS_LIST = [
    {
        id: "BL_01",
        Title: "Hội nghị nông nghiệp thu hoạch  2023 tại Việt Nam",
        blog_img: "./img/blogs/1.jpg",
        date: "15/08/2023",
        blog_pic: "Trung Thông"
    },
    {
        id: "BL_02",
        Title: "Hội nghị nông nghiệp thu hoạch  2023 tại Việt Nam",
        blog_img: "./img/blogs/2.jpg",
        date: "15/07/2023",
        blog_pic: "Trung Thông"
    },
    {
        id: "BL_03",
        Title: "Hội nghị nông nghiệp thu hoạch  2023 tại Việt Nam",
        blog_img: "./img/blogs/3.jpg",
        date: "15/06/2023",
        blog_pic: "Trung Thông"
    },
]
//list Category 
initialCategoryList();

//Category button Prev
const itemSlickSlide = dom.querySelectorAll(".slick-slide");
const list_Category = dom.getElementById("slick-list");
const prevButton = dom.getElementById("slick-prev");
const nextButton = dom.getElementById("slick-next");
let currentCategoryIndex = 0;
let length = itemSlickSlide.length;

//Event Category Prev 
prevButton.addEventListener('click', () => {
    currentCategoryIndex = (currentCategoryIndex - 1 + length) % length;
    if (currentCategoryIndex == 0) {
        itemSlickSlide[currentCategoryIndex].style.display = "block";
        itemSlickSlide[length - 1].style.display = "none";
        prevButton.classList.add('btn-disable');

    } else if (currentCategoryIndex != 0 && (length - currentCategoryIndex) > 6) {
        itemSlickSlide[length - 1].style.display = "none";
        itemSlickSlide[currentCategoryIndex].style.display = "block";
        nextButton.classList.remove('btn-disable');
        prevButton.classList.remove('btn-disable');

    } else if ((length - currentCategoryIndex) == 6) {
        itemSlickSlide[currentCategoryIndex + 1].style.display = "none";
        nextButton.classList.add('btn-disable');
        prevButton.classList.remove('btn-disable');
    }
});

////Event Category Next 
nextButton.addEventListener('click', () => {
    currentCategoryIndex = (currentCategoryIndex + 1) % length;
    if (currentCategoryIndex == 0) {
        itemSlickSlide[currentCategoryIndex].style.display = "block";

    } else if (currentCategoryIndex != 0 && (length - currentCategoryIndex) > 6) {
        itemSlickSlide[currentCategoryIndex - 1].style.display = "none";
        prevButton.classList.remove('btn-disable');

    } else if ((length - currentCategoryIndex) == 6) {
        itemSlickSlide[length - 1].style.display = "block";
        itemSlickSlide[currentCategoryIndex - 1].style.display = "none";
        nextButton.classList.add('btn-disable');
        prevButton.classList.remove('btn-disable');
    }
});


//function list Category
function initialCategoryList() {
    let listCategory = dom.getElementById("slick-list");

    CATEGORY_LIST.forEach((category, index) => {
        let itemSlickSlider = dom.createElement("div");
        itemSlickSlider.className = "slick-slide";
        itemSlickSlider.setAttribute('data-slick-index', index);

        let itemShopCategoryBox = dom.createElement("div");
        itemShopCategoryBox.className = "shop-category-box";
        itemShopCategoryBox.style.backgroundColor = category.backgroud_color;
        itemShopCategoryBox.style.borderRadius = "50px";
        itemShopCategoryBox.style.width = "150px";

        let itemCategoryLink = dom.createElement("a");
        itemCategoryLink.className = "cirte";
        itemCategoryLink.href = "#";


        let itemCategoryImg = dom.createElement("img");
        itemCategoryImg.src = category.category_img;
        itemCategoryImg.style.paddingLeft = "25px";



        //List Name

        let itemNameCategory = dom.createElement("div");
        itemNameCategory.className = "category-name";

        let itemName = dom.createElement("h6");
        itemName.innerHTML = category.category_name;

        itemCategoryLink.appendChild(itemCategoryImg);
        itemShopCategoryBox.appendChild(itemCategoryLink);
        itemSlickSlider.appendChild(itemShopCategoryBox);
        itemSlickSlider.appendChild(itemNameCategory);
        itemNameCategory.appendChild(itemName);
        listCategory.appendChild(itemSlickSlider);

    });

}


// Event add Cart 
//event hover popup list cart 
const btnCart = dom.getElementById("btn-card");
const btnCartIcon = dom.getElementById("cart-icon");
const popupCart = dom.getElementById("popup-cart");


//function list Products
let itemsPerPage = 8; // Số lượng đối tượng trên mỗi trang

function displayPage(pageNumber) {
    let list_Products = dom.getElementById("product-container");
    list_Products.innerHTML = "";

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < PRODUCT_LIST.length; i++) {
        let itemProductBox = dom.createElement("div");
        itemProductBox.className = "product-box";
        //add count 
        PRODUCT_LIST[i].product_count = "1";
        //Product Img
        let itemProductImage = dom.createElement("div");
        itemProductImage.className = "product-image";

        let itemProductImgLink = dom.createElement("a");
        itemProductImgLink.href = "product_img.html";

        let itemProductImg = dom.createElement("img");
        itemProductImg.src = PRODUCT_LIST[i].product_img;

        //Product detail
        let itemProductDetail = dom.createElement("div");
        itemProductDetail.className = "product-detail";

        //Product Name
        let itemName = dom.createElement("div");
        itemName.className = "proct-name";
        let itemNameLink = dom.createElement("a");
        itemNameLink.href = "product_img.html"
        let itemNameH5 = dom.createElement("h5");
        itemNameH5.innerHTML = PRODUCT_LIST[i].product_name;

        //Product Price
        let itemPrice = dom.createElement("h5");
        itemPrice.className = "product-price";
        itemPrice.innerHTML = `$${PRODUCT_LIST[i].price_new}`;
        let itemPriceOld = dom.createElement("del");
        itemPriceOld.innerHTML = `$${PRODUCT_LIST[i].price_old}`;


        //Product Quanty Number
        let itemPriceQty = dom.createElement("div");
        itemPriceQty.className = "price-qty";
        let itemCounterNumber = dom.createElement("div");
        itemCounterNumber.className = "counter-number";
        let itemCounter = dom.createElement("div");
        itemCounter.className = "counter";
        let itemQtyLeft = dom.createElement("div");
        itemQtyLeft.className = "qty-left";
        itemQtyLeft.setAttribute('data-type', 'minus');
        let itemMinus = dom.createElement("button");
        itemMinus.classList = "fa fa-solid fa-minus";

        let itemInput = dom.createElement("input");
        itemInput.className = "qty-input";
        itemInput.setAttribute('value', 1);
        itemInput.setAttribute('id', 'qty-input');

        let itemQtyRight = dom.createElement("div");
        itemQtyRight.className = "qty-right";
        let itemPlus = dom.createElement("button");
        itemPlus.classList = "fa fa-solid fa-plus";
        let btnBuy = dom.createElement("button");
        btnBuy.classList = "btn-buy";
        let iBuy = dom.createElement("i");
        iBuy.classList = "fa fa-shopping-cart";
        btnBuy.appendChild(iBuy);
        btnBuy.style.fontSize = "25px";


        //btn Plus 
        let count = 1;
        itemPlus.addEventListener('click', () => {
            count = count + 1;
            itemInput.setAttribute('value', count);
            PRODUCT_LIST[i].product_count = count;
        })

        //btn Minus
        itemMinus.addEventListener('click', () => {
            if (count > 0) {
                count = count - 1;
                itemInput.setAttribute('value', count);
                PRODUCT_LIST[i].product_count = count;

            }
        })
        btnBuy.addEventListener('click', () => {

            //const itemQtyInput = dom.getElementById("qty-input");
            //const qtyInput = itemQtyInput.value;
            PRODUCT_LIST[i].product_count = count;
            cart.push(PRODUCT_LIST[i]);
            localStorage.setItem("cart", JSON.stringify(cart));
            dom.getElementById("card-count").innerHTML = cart.length;
            location.reload();
        })




        itemProductDetail.appendChild(itemName);
        itemName.appendChild(itemNameLink);
        itemNameLink.appendChild(itemNameH5);
        itemProductDetail.appendChild(itemPrice);
        itemPrice.appendChild(itemPriceOld);

        itemProductDetail.appendChild(itemPriceQty);
        itemPriceQty.appendChild(itemCounterNumber);
        itemCounterNumber.appendChild(itemCounter);
        itemCounter.appendChild(itemQtyLeft);
        itemQtyLeft.appendChild(itemMinus);
        itemCounter.appendChild(itemInput);
        itemCounter.appendChild(itemQtyRight);
        itemQtyRight.appendChild(itemPlus);
        itemCounterNumber.appendChild(btnBuy);


        itemProductImgLink.appendChild(itemProductImg);
        itemProductImage.appendChild(itemProductImgLink);
        itemProductBox.appendChild(itemProductImage);
        itemProductBox.appendChild(itemProductDetail);
        list_Products.appendChild(itemProductBox);
    }


}

function createPaginationButtons() {

    const pagination = dom.getElementById("pagination");
    //const itemsPerPage = 8; // Số lượng đối tượng trên mỗi trang
    const pageCount = Math.ceil(PRODUCT_LIST.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        const section = document.querySelectorAll('.product-section');
        const link = document.createElement("a");
        link.classList.add("page-link");
        link.textContent = i;
        link.href = "#product-section";
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = dom.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({});
            displayPage(i);

        });
        li.appendChild(link);
        pagination.appendChild(li);
    }
}

// List pagetion Products
displayPage(1);
createPaginationButtons();

//function list New Products
function addNewProduct() {
    const NEW_PRODUCT = [];
    for (let i = 0; i < PRODUCT_LIST.length; i++) {
        if (PRODUCT_LIST[i].product_new == "1") {
            NEW_PRODUCT.push(PRODUCT_LIST[i]);
        }
    }
    return NEW_PRODUCT;
}

const new_product = addNewProduct();

function displayPageNewProduct(pageNumber) {
    let list_Products = dom.getElementById("new-product");
    list_Products.innerHTML = "";
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log(new_product);
    for (let i = startIndex; i < endIndex && i < new_product.length; i++) {
        let itemProductBox = dom.createElement("div");
        itemProductBox.className = "product-box";
        //add count 
        new_product[i].product_count = "1";
        //Product Img
        let itemProductImage = dom.createElement("div");
        itemProductImage.className = "product-image";

        let itemProductImgLink = dom.createElement("a");
        itemProductImgLink.href = "product_img.html";

        let itemProductImg = dom.createElement("img");
        itemProductImg.src = new_product[i].product_img;

        //Product detail
        let itemProductDetail = dom.createElement("div");
        itemProductDetail.className = "product-detail";

        //Product Name
        let itemName = dom.createElement("div");
        itemName.className = "proct-name";
        let itemNameLink = dom.createElement("a");
        itemNameLink.href = "product_img.html"
        let itemNameH5 = dom.createElement("h5");
        itemNameH5.innerHTML = new_product[i].product_name;

        //Product Price
        let itemPrice = dom.createElement("h5");
        itemPrice.className = "product-price";
        itemPrice.innerHTML = `$${new_product[i].price_new}`;
        let itemPriceOld = dom.createElement("del");
        itemPriceOld.innerHTML = `$${new_product[i].price_old}`;


        //Product Quanty Number
        let itemPriceQty = dom.createElement("div");
        itemPriceQty.className = "price-qty";
        let itemCounterNumber = dom.createElement("div");
        itemCounterNumber.className = "counter-number";
        let itemCounter = dom.createElement("div");
        itemCounter.className = "counter";
        let itemQtyLeft = dom.createElement("div");
        itemQtyLeft.className = "qty-left";
        itemQtyLeft.setAttribute('data-type', 'minus');
        let itemMinus = dom.createElement("button");
        itemMinus.classList = "fa fa-solid fa-minus";

        let itemInput = dom.createElement("input");
        itemInput.className = "qty-input";
        itemInput.setAttribute('value', 1);
        itemInput.setAttribute('id', 'qty-input');

        let itemQtyRight = dom.createElement("div");
        itemQtyRight.className = "qty-right";
        let itemPlus = dom.createElement("button");
        itemPlus.classList = "fa fa-solid fa-plus";
        let btnBuy = dom.createElement("button");
        btnBuy.classList = "btn-buy";
        let iBuy = dom.createElement("i");
        iBuy.classList = "fa fa-shopping-cart";
        btnBuy.appendChild(iBuy);
        btnBuy.style.fontSize = "25px";
        //btn Plus 
        let count = 1;
        itemPlus.addEventListener('click', () => {
            count = count + 1;
            itemInput.setAttribute('value', count);
            new_product[i].product_count = count;
        })

        //btn Minus
        itemMinus.addEventListener('click', () => {
            if (count > 0) {
                count = count - 1;
                new_product[i].product_count = count;
            }
        })

        btnBuy.addEventListener('click', () => {

            new_product[i].product_count = count;
            cart.push(new_product[i]);
            localStorage.setItem("cart", JSON.stringify(cart));
            dom.getElementById("card-count").innerHTML = cart.length;
            location.reload();
        })





        itemProductDetail.appendChild(itemName);
        itemName.appendChild(itemNameLink);
        itemNameLink.appendChild(itemNameH5);
        itemProductDetail.appendChild(itemPrice);
        itemPrice.appendChild(itemPriceOld);

        itemProductDetail.appendChild(itemPriceQty);
        itemPriceQty.appendChild(itemCounterNumber);
        itemCounterNumber.appendChild(itemCounter);
        itemCounter.appendChild(itemQtyLeft);
        itemQtyLeft.appendChild(itemMinus);
        itemCounter.appendChild(itemInput);
        itemCounter.appendChild(itemQtyRight);
        itemQtyRight.appendChild(itemPlus);
        itemCounterNumber.appendChild(btnBuy);


        itemProductImgLink.appendChild(itemProductImg);
        itemProductImage.appendChild(itemProductImgLink);
        itemProductBox.appendChild(itemProductImage);
        itemProductBox.appendChild(itemProductDetail);
        list_Products.appendChild(itemProductBox);

    }
}

function createPaginationNewProduct() {

    const pagination = dom.getElementById("new-product-pagination");
    //const itemsPerPage = 8; // Số lượng đối tượng trên mỗi trang
    //console.log(new_product);
    const pageCount = Math.ceil(new_product.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        const section = document.querySelectorAll('new-product-section');
        const link = document.createElement("a");
        link.classList.add("page-link");
        link.textContent = i;
        link.href = "#new-product-section";
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = dom.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({});
            displayPageNewProduct(i);

        });
        li.appendChild(link);
        pagination.appendChild(li);
    }
}

// List pagetion New Products
displayPageNewProduct(1);
createPaginationNewProduct();


// event back top
const backToTopButton = document.getElementById("back-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//Event Item Cart
let cart = []; // Lưu trữ Object Product trên LocalStrogate
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    dom.getElementById("card-count").innerHTML = cart.length;
    


    btnCart.addEventListener("mouseenter", () => {
        popupCart.style.display = "block";
    });
    
    popupCart.addEventListener('mouseleave', () => {
        popupCart.style.display = "none";
    });

}

btnCart.addEventListener("click", () => {
    location.assign("cart.html");
});
// List Cart 
productCart();
function productCart() {
    let countSplice = 0;
    let cart_list = JSON.parse(localStorage.getItem("cart"));
    let sumPrice = 0;
    const cartDetail = dom.getElementById("cart-detail");
    let itemCartList = dom.createElement("ul");
    itemCartList.className = "cart-list";
    cartDetail.appendChild(itemCartList);
    if (cart_list) {
        cart_list.forEach((item, index) => {
            let itemCartContent = dom.createElement("li");
            itemCartContent.className = "cart-content";

            let itemDropCart = dom.createElement("div");
            itemDropCart.className = "drop-cart";

            let itemDropCartLink = dom.createElement("a");
            itemDropCartLink.className = "drop-img";

            let itemDropCartImg = dom.createElement("img");
            itemDropCartImg.src = item.product_img;

            let itemDropContent = dom.createElement("div");
            itemDropContent.className = "drop-content";
            let itemDropContentLink = dom.createElement("a");
            itemDropContentLink.href = "#";
            let itemDropContentH6 = dom.createElement("h5");
            itemDropContentH6.innerHTML = item.product_name;

            let itemPrice = dom.createElement("h6");

            itemPrice.innerHTML = `${item.product_count}  x  $${item.price_new}`;

            let spanClose = dom.createElement("span");
            spanClose.className = "span-close";
            let btnCloseButton = dom.createElement("button");
            btnCloseButton.classList = "btn-close";
            btnCloseButton.id = "btnCloseButton";
            let iClose = dom.createElement("i");
            iClose.classList = "fa fa-close";
            // index vị trí delete product in cart
            //Xóa item product trong giỏ hàng
            btnCloseButton.addEventListener('click', () => {
                //alert("Bạn có chắc chắn muốn xóa không?");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                location.reload();
            })

            // total Price  
            let itemTotal = dom.createElement("span");
            itemTotal.style.display = "none";
            itemTotal.innerHTML = parseFloat(item.product_count * parseFloat(item.price_new));

            sumPrice = parseFloat(sumPrice) + parseFloat(itemTotal.innerHTML);
            cart_list.itemTotal = itemTotal;
            cart_list.sumPrice = sumPrice;

            itemPrice.appendChild(itemTotal);


            itemCartList.appendChild(itemCartContent);
            itemCartContent.appendChild(itemDropCart);
            itemDropCart.appendChild(itemDropCartLink);
            itemDropCartLink.appendChild(itemDropCartImg);
            itemCartContent.appendChild(itemDropContent);
            itemDropContent.appendChild(itemDropContentLink);
            itemDropContentLink.appendChild(itemDropContentH6);
            itemDropContent.appendChild(itemPrice);
            itemCartContent.appendChild(spanClose);
            spanClose.appendChild(btnCloseButton);
            btnCloseButton.appendChild(iClose);



        });

        let itemBr = dom.createElement("hr");
        let itemTotalPrice = dom.createElement("div");
        itemTotalPrice.className = "total-price";
        let itemPriceH5 = dom.createElement("h5");
        itemPriceH5.innerHTML = `Price:  `;
        let itemPriceH4 = dom.createElement("h4");
        itemPriceH4.innerHTML = `$${sumPrice.toFixed(2)}`;


        let itemButton = dom.createElement("div");
        itemButton.className = "btn-drop";
        let itemViewCart = dom.createElement("a");
        itemViewCart.href = "./cart.html";
        itemViewCart.innerHTML = "View Card";
        itemViewCart.style.float = "left";
        let itemCheckOut = dom.createElement("a");
        itemCheckOut.href = "checkout.html";
        itemCheckOut.innerHTML = "Check Out";
        itemCheckOut.style.float = "right";



        itemButton.appendChild(itemViewCart);
        itemButton.appendChild(itemCheckOut);
        cartDetail.appendChild(itemBr);
        cartDetail.appendChild(itemTotalPrice);
        itemTotalPrice.appendChild(itemPriceH5);
        itemTotalPrice.appendChild(itemPriceH4);
        cartDetail.appendChild(itemButton);

    }
}

//function list Products Hot Deals 
let itemShow = 2; // Hiển thị số lượng page là 2 sản phẩm
function productHotDeals() {
    const HOT_DEALS_PRODUCT = [];
    for (let i = 0; i < PRODUCT_LIST.length; i++) {
        if (PRODUCT_LIST[i].hot_deals == "1") {
            HOT_DEALS_PRODUCT.push(PRODUCT_LIST[i]);
        }
    }
    return HOT_DEALS_PRODUCT;
}

const hot_deals = productHotDeals();

function displayPageHotDealsProduct(pageNumber) {
    let itemShow = 2;
    let list_Products = dom.getElementById("product-hot-deals");
    list_Products.innerHTML = "";
    const startIndex = (pageNumber - 1) * itemShow;
    const endIndex = startIndex + itemShow;
    console.log(hot_deals);
    for (let i = startIndex; i < endIndex && i < hot_deals.length; i++) {
        let itemProductBox = dom.createElement("div");
        itemProductBox.className = "product-box-hot-deals";
        //add count 
        hot_deals[i].product_count = "1";
        //Product Img
        let itemProductImage = dom.createElement("div");
        itemProductImage.className = "product-image-hotdeals";

        let itemProductImgLink = dom.createElement("a");
        itemProductImgLink.href = "product_img.html";

        let itemProductImg = dom.createElement("img");
        itemProductImg.src = hot_deals[i].product_img;
        itemProductImg.style.width = "140px";

        //Product detail
        let itemProductDetail = dom.createElement("div");
        itemProductDetail.className = "product-detail";

        //Hot Deals 
        let itemHotDeals = dom.createElement("div");
        itemHotDeals.className = "hot-deals";
        let labelHotDeals = dom.createElement("span");
        labelHotDeals.innerHTML = "HOT DEALS";

        //Product Name
        let itemName = dom.createElement("div");
        itemName.className = "proct-name";
        let itemNameLink = dom.createElement("a");
        itemNameLink.href = "product_img.html"
        let itemNameH5 = dom.createElement("h5");
        itemNameH5.innerHTML = hot_deals[i].product_name;

        //Product Price
        let itemPrice = dom.createElement("h5");
        itemPrice.className = "product-price";
        itemPrice.innerHTML = `$${hot_deals[i].price_new}`;
        let itemPriceOld = dom.createElement("del");
        itemPriceOld.innerHTML = `$${hot_deals[i].price_old}`;

        //Progress 
        let itemProgress = dom.createElement("div");
        itemProgress.className = "progress";
        let itemProgressBar = dom.createElement("div");
        itemProgressBar.className = "progress-bar";
        itemProgressBar.role = "progressbar";
        itemProgressBar.ariaValueNow = "50";
        itemProgressBar.ariaValueMin = "0";
        itemProgressBar.ariaValueMax = "100";
        itemProgressBar.style.width = "50%";



        //Sold Prodcut
        let itemSold = dom.createElement("div");
        itemSold.className = "product-sold";
        itemSold.innerHTML = `Đã bán: `;
        let spanSold = dom.createElement("span");
        spanSold.innerHTML = `${hot_deals[i].sell} trái `;

        let itemOffer = dom.createElement("div");
        itemOffer.className = "offer";
        itemOffer.innerHTML = "Nhanh tay, giới hạn chỉ còn trong :"

        //CountDown
        let itemCountDown = dom.createElement("div");
        itemCountDown.className = "countdown";
        itemCountDown.id = "countdown";

        let itemTimeUnitDays = dom.createElement("div");
        itemTimeUnitDays.className = "time-unit";
        itemTimeUnitDays.id = "days";
        let itemTimeUnitHours = dom.createElement("div");
        itemTimeUnitHours.className = "time-unit";
        itemTimeUnitHours.id = "hours";
        let itemTimeUnitMinutes = dom.createElement("div");
        itemTimeUnitMinutes.className = "time-unit";
        itemTimeUnitMinutes.id = "minutes";
        let itemTimeUnitSeconds = dom.createElement("div");
        itemTimeUnitSeconds.className = "time-unit";
        itemTimeUnitSeconds.id = "seconds";

        //CoutDown
        var time = setInterval(function () {

            let countDownDate = new Date("Sep 15,2023 00:00:00").getTime();
            //get giá trị date và time hôm nay 
            let now = new Date().getTime();

            //Tìm khoảng cách giữa bây giờ và ngày đếm ngược
            let distance = countDownDate - now;

            //tính toán ngày giờ
            let day = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / (1000));

            //Output

            itemTimeUnitDays.innerHTML = `${day}d`;
            itemTimeUnitHours.innerHTML = `${hours}h`;
            itemTimeUnitMinutes.innerHTML = `${minutes}m`;
            itemTimeUnitSeconds.innerHTML = `${seconds}s`;
        }, 1000);

        //Product Quanty Number
        let itemPriceQty = dom.createElement("div");
        itemPriceQty.className = "price-qty";
        let itemCounterNumber = dom.createElement("div");
        itemCounterNumber.className = "counter-number-hot-deals";
        let itemCounter = dom.createElement("div");
        itemCounter.className = "counter";
        let itemQtyLeft = dom.createElement("div");
        itemQtyLeft.className = "qty-left";
        itemQtyLeft.setAttribute('data-type', 'minus');
        let itemMinus = dom.createElement("button");
        itemMinus.classList = "fa fa-solid fa-minus";

        let itemInput = dom.createElement("input");
        itemInput.className = "qty-input";
        itemInput.setAttribute('value', 1);
        itemInput.setAttribute('id', 'qty-input');

        let itemQtyRight = dom.createElement("div");
        itemQtyRight.className = "qty-right";
        let itemPlus = dom.createElement("button");
        itemPlus.classList = "fa fa-solid fa-plus";
        let btnBuy = dom.createElement("button");
        btnBuy.classList = "btn-buy";
        let iBuy = dom.createElement("i");
        iBuy.classList = "fa fa-shopping-cart";
        btnBuy.appendChild(iBuy);
        btnBuy.style.fontSize = "25px";

        //btn Plus 
        let count = 1;
        itemPlus.addEventListener('click', () => {
            count = count + 1;
            itemInput.setAttribute('value', count);
            hot_deals[i].product_count = count;
        })

        //btn Minus
        itemMinus.addEventListener('click', () => {
            if (count > 0) {
                count = count - 1;
                itemInput.setAttribute('value', count);
                hot_deals[i].product_count = count;
            }
        })
        btnBuy.addEventListener('click', () => {
            hot_deals[i].product_count = count;
            cart.push(new_product[i]);
            localStorage.setItem("cart", JSON.stringify(cart));
            dom.getElementById("card-count").innerHTML = cart.length;
            location.reload();
        })

        itemProductDetail.appendChild(itemHotDeals);
        itemHotDeals.appendChild(labelHotDeals);
        itemProductDetail.appendChild(itemName);
        itemName.appendChild(itemNameLink);
        itemNameLink.appendChild(itemNameH5);
        itemProductDetail.appendChild(itemPrice);
        itemPrice.appendChild(itemPriceOld);


        itemProductDetail.appendChild(itemProgress);
        itemProgress.appendChild(itemProgressBar);

        itemProductDetail.appendChild(itemSold);
        itemSold.appendChild(spanSold);

        itemProductDetail.appendChild(itemOffer);

        itemProductDetail.appendChild(itemCountDown);
        itemCountDown.appendChild(itemTimeUnitDays);
        itemCountDown.appendChild(itemTimeUnitHours);
        itemCountDown.appendChild(itemTimeUnitMinutes);
        itemCountDown.appendChild(itemTimeUnitSeconds);


        itemProductDetail.appendChild(itemPriceQty);
        itemPriceQty.appendChild(itemCounterNumber);
        itemCounterNumber.appendChild(itemCounter);
        itemCounter.appendChild(itemQtyLeft);
        itemQtyLeft.appendChild(itemMinus);
        itemCounter.appendChild(itemInput);
        itemCounter.appendChild(itemQtyRight);
        itemQtyRight.appendChild(itemPlus);
        itemCounterNumber.appendChild(btnBuy);


        itemProductImgLink.appendChild(itemProductImg);
        itemProductImage.appendChild(itemProductImgLink);

        itemProductBox.appendChild(itemProductDetail);
        itemProductBox.appendChild(itemProductImage);
        list_Products.appendChild(itemProductBox);

    }
}

function createPaginationHotDealsProduct() {

    const pagination = dom.getElementById("hot-deals-pagination");
    //console.log(new_product);
    const pageCount = Math.ceil(hot_deals.length / itemShow);

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        const section = document.querySelectorAll('hot-deals-section');
        const link = document.createElement("a");
        link.classList.add("page-link");
        link.textContent = i;
        link.href = "#hot-deals-section";
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = dom.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({});
            displayPageHotDealsProduct(i);

        });
        li.appendChild(link);
        pagination.appendChild(li);
    }
}

// List pagetion Hot Deals Products
displayPageHotDealsProduct(1);
createPaginationHotDealsProduct();


//List Blog
let itemShowBlog = 2;

function displayPageBlogs(pageNumber) {
    let list_Blog = dom.getElementById("list-blog");
    list_Blog.innerHTML = "";
    const startIndex = (pageNumber - 1) * itemShowBlog;
    const endIndex = startIndex + itemShowBlog;
    for (let i = startIndex; i < endIndex && i < BLOGS_LIST.length; i++) {
        let itemBlogBox = dom.createElement("div");
        itemBlogBox.className = "blog-box";

        //Blog image
        let itemBlogImg = dom.createElement("div");
        itemBlogImg.className = "blog-img";
        let itemBlogImgLink = dom.createElement("a");
        itemBlogImgLink.className = "blog-link";
        itemBlogImgLink.href = "blog.html";
        let srcBlogImg = dom.createElement("img");
        srcBlogImg.src = BLOGS_LIST[i].blog_img;

        //Blog Detail
        let itemBlogDetail = dom.createElement("div");
        itemBlogDetail.className = "blog-detail";

        let itemBlogName = dom.createElement("a");
        itemBlogName.href = "blog.html";
        let itemTitle = dom.createElement("h2");
        itemTitle.innerHTML = BLOGS_LIST[i].Title;


        //Blog List 

        let itemBlogList = dom.createElement("div");
        itemBlogList.className = "blog-list";
        let itemBlogDate = dom.createElement("span");
        itemBlogDate.innerHTML = `Ngày Đăng : ${BLOGS_LIST[i].date}`;
        let itemBlogPic = dom.createElement("span");
        itemBlogDate.style.float = "left";
        itemBlogDate.style.marginLeft = "15px";
        itemBlogPic.innerHTML = `Người đăng: ${BLOGS_LIST[i].blog_pic}`;
        itemBlogPic.style.float = "right";
        itemBlogPic.style.marginRight = "120px";


        list_Blog.appendChild(itemBlogBox);
        itemBlogBox.appendChild(itemBlogImg);
        itemBlogImg.appendChild(itemBlogImgLink);
        itemBlogImgLink.appendChild(srcBlogImg);

        itemBlogBox.appendChild(itemBlogDetail);
        itemBlogDetail.appendChild(itemBlogName);
        itemBlogName.appendChild(itemTitle);
        itemBlogDetail.appendChild(itemBlogList);
        itemBlogList.appendChild(itemBlogDate);
        itemBlogList.appendChild(itemBlogPic);





    }
}

function createPaginationBlogs() {

    const pagination = dom.getElementById("blog-pagination");
    const pageCount = Math.ceil(BLOGS_LIST.length / itemShowBlog);

    for (let i = 1; i <= pageCount; i++) {
        const li = dom.createElement("li");
        li.classList.add("page-item");
        const section = dom.querySelectorAll('blog-pagination');
        const link = dom.createElement("a");
        link.classList.add("page-link");
        link.textContent = i;
        link.href = "#blog-pagination";
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = dom.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({});
            displayPageBlogs(i);

        });
        li.appendChild(link);
        pagination.appendChild(li);
    }
}

// List pagetion Hot Deals Products
displayPageBlogs(1);
createPaginationBlogs();

//click Blog 
let btnBlog = dom.getElementById("btnBlog");
btnBlog.addEventListener('click', () => {
    location.assign('blog.html');
})

//click Home 
let btnHome = dom.getElementById("btnHome");
btnHome.addEventListener('click', () => {
    location.assign('index.html');
})
//click Product 
let btnSanPham = dom.getElementById("btnSanPham");
btnSanPham.addEventListener('click', () => {
    location.assign('product.html');
})