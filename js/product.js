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


//list Products
//initialProducts();

// Event add Cart 
//event hover popup list cart 
const btnCart = dom.getElementById("btn-card");
const btnCartIcon = dom.getElementById("cart-icon");
const popupCart = dom.getElementById("popup-cart");


let cart = []; // Lưu trữ Object Product trên LocalStrogate
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    dom.getElementById("card-count").innerHTML = cart.length;
    btnCart.addEventListener("click", () => {
        location.assign("cart.html");
    });

    btnCart.addEventListener("mouseenter", () => {
        popupCart.style.display = "block";
    });

    popupCart.addEventListener('mouseleave', () => {
        popupCart.style.display = "none";
    });
}
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
            PRODUCT_LIST[i].product_count = count;
            cart.push(PRODUCT_LIST[i]);
            localStorage.setItem("cart", JSON.stringify(cart));
            dom.getElementById("card-count").innerHTML = cart.length;
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

// List Cart 
productCart();
function productCart() {
    let cart_list = JSON.parse(localStorage.getItem("cart"));
    let sumPrice = 0;
    const cartDetail = dom.getElementById("cart-detail");
    let itemCartList = dom.createElement("ul");
    itemCartList.className = "cart-list";
    cartDetail.appendChild(itemCartList);
    if (cart_list) {
        cart_list.forEach(item => {
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
            let iClose = dom.createElement("i");
            iClose.classList = "fa fa-close";


            // total Price  
            let itemTotal = dom.createElement("span");
            itemTotal.style.display = "none";
            itemTotal.innerHTML = parseFloat(item.product_count * parseFloat(item.price_new));

            sumPrice = parseFloat(sumPrice) + parseFloat(itemTotal.innerHTML);

            itemPrice.appendChild(itemTotal);
            //alert(itemTotal.innerHTML);
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
        itemCheckOut.href = "#";
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

//click Blog 
let btnBlog = dom.getElementById("btnBlog"); 
btnBlog.addEventListener('click',()=>{
    location.assign('blog.html');
})

//click Blog 
let btnHome = dom.getElementById("btnHome"); 
btnHome.addEventListener('click',()=>{
    location.assign('index.html');
})
//click Product 
let btnSanPham = dom.getElementById("btnSanPham"); 
btnSanPham.addEventListener('click',()=>{
    location.assign('product.html');
})