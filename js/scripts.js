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

// Get the cart data from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load CATEGORY_LIST from localStorage (nếu index.html có thể parse được cate.)
//const CATEGORY_LIST = JSON.parse(localStorage.getItem("CATEGORY_LIST")) || [];

// Select the container where you want to display the cart items
const cartTableBody = document.querySelector(".table tbody");

// Clear the existing content of the table body
cartTableBody.innerHTML = '';

function getCategoryNameById(categoryId) {
    const category = CATEGORY_LIST.find(cat => cat.id === categoryId);
    return category ? category.category_name : "";
}
let sumPrice = 0;
let index;
// Loop through the cart and create rows in the table for each cart item
cart.forEach((product, i) => {
    // Create a table row element
    const tableRow = document.createElement("tr");
    tableRow.classList.add("product-box-contain");


    // Convert price_new and price_old to numbers
    var priceNew = parseFloat(product.price_new);
    var priceOld = parseFloat(product.price_old);
    index = i;

    // Set the content of the table row using template literals
    tableRow.innerHTML = `
     <td class="product-detail">
         <div class="product border-0">
             <a href="#" class="product-image">
                 <img name="product_img" src="${product.product_img}" class="img-fluid blur-up lazyloaded" alt="">
             </a>
             <div class="product-detail">
                 <ul>
                     <li class="name">
                         <a href="#"><h3 name="product_name">${product.product_name}</h3></a>
                         <h6>ID sản phẩm: <i name="id">${product.id}</i></h6>
                         <h6>Danh mục: <i name="category_id">${getCategoryNameById(product.category_id)}</i></h6>
                     </li>
                 </ul>
             </div>
         </div>
     </td>
     <td class="price">
         <h4 class="table-title text-content">Price</h4>
         <h5><span name="price_new" class="new-price">${priceNew.toFixed(2)}</span><del class="text-content">$<span name="price_old" class="old-price">${priceOld.toFixed(2)}</span></del></h5>
     </td>
     <td class="quantity">
            <h4 class="table-title text-content">Qty</h4>
            <div class="quantity-price">
                <div class="cart_qty">
                    <div class="input-group">
                        <button type="button" class="btn qty-left-minus"
                            data-type="minus" data-field="">
                            <i class="fa fa-minus ms-0" aria-hidden="true"></i>
                        </button>
                        <input class="form-control input-number qty-input" type="text"
                            name="quantity" value="${product.product_count}">
                        <button type="button" class="btn qty-right-plus"
                            data-type="plus" data-field="">
                            <i class="fa fa-plus ms-0" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </td>

        <td class="subtotal">
            <h4 class="table-title text-content">Total</h4>
            <h5>$${parseFloat(parseFloat(priceNew.toFixed(2)) * parseFloat(product.product_count))}</h5>
        </td>
        <span style ="display: none;">${sumPrice = parseFloat(sumPrice) + (parseFloat(parseFloat(parseFloat(priceNew.toFixed(2)) * parseFloat(product.product_count))))}</span>
        <td class="save-remove">
            <h4 class="table-title text-content">Action</h4>
            <!-- <a class="save notifi-wishlist" href="javascript:void(0)">Save for later</a> >> chức năng lưu vào wishlist -->
            <a class="remove close_button" id = "close_button" onclick="closeButton()" href="javascript:void(0)">Remove</a>
        </td>
        <td style = "display: none;">
           <span><span>
        </td>
        
 `;

    let itemTotal = document.getElementById("price");
    itemTotal.innerHTML = `$${sumPrice.toFixed(2)}`;
    console.log("aaa" + sumPrice.toFixed(2));

    let shiping = "7.0";
    let itemShipping = document.getElementById("price-ship");
    itemShipping.innerHTML = `$${shiping}`;


    let itemPriceNew = document.getElementById("price-new");
    itemPriceNew.innerHTML = `$${(parseFloat(parseFloat(shiping) + parseFloat(sumPrice.toFixed(2)))).toFixed(2)}`;

    // Append the table row to the table body
    cartTableBody.appendChild(tableRow);

});

let btnCloseButton = document.getElementById("close_button");

function closeButton() {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}





$(document).ready(function () {
    // Function to update the total price
    function updateTotalPrice(element) {
        var productBox = $(element).closest(".product-box-contain");
        var priceElement = productBox.find("[name='price_new']").first();
        var priceText = priceElement.text();
        var totalElement = productBox.find(".subtotal h5").first();
        var quantity = parseInt(productBox.find(".qty-input").val());
        var price = parseFloat(priceText.replace("$", ""));
        var total = quantity * price;

        // Get the price text from the price element
        var priceText = priceElement.text();

        // Extract the numerical value from the price text
        var price = parseFloat(priceText.replace("$", ""));

        // Check if priceText is a valid number
        if (!isNaN(price)) {
            var total = quantity * price;

            totalElement.text("$" + total.toFixed(2));
            //updateOverallTotalPrice();
        } else {
            console.error("Invalid price:", priceText);
        }

        setTimeout(function () {
            totalElement.text("$" + total.toFixed(2));
            //updateOverallTotalPrice();
        }, 0); // No delay for update
    }

    // Function to update the overall total price
    /*function updateOverallTotalPrice() {
        var totalPrice = 0;

        // Loop through each product box
        $(".product-box-contain").each(function () {
            var productTotal = parseFloat($(this).find(".subtotal h5").text().replace("$", ""));
            totalPrice += productTotal;
        });

        console.log("Total Price:", totalPrice); // Log the total price for troubleshooting

        // Update the subtotal value
        var subtotalElement = $(".summery-contain .pre-subtotal h4.price");
        subtotalElement.text("$" + totalPrice.toFixed(2));
    }*/

    // Quantity decrement and increment buttons
    $(".qty-left-minus, .qty-right-plus").on("click", function () {
        var inputElement = $(this).siblings(".qty-input");
        let qty = document.getElementById("qty-input");
        var currentValue = parseInt(inputElement.val());
            if ($(this).hasClass("qty-left-minus") && currentValue > 0) {
                inputElement.val(currentValue - 1);

            } else {
                inputElement.val(currentValue + 1);
            }
        updateTotalPrice(this); // Pass the button element to the function
    });



    // Remove product and update the subtotal price
    /* $(".remove.close_button").on("click", function () {
         var productBox = $(this).closest(".product-box-contain");
         productBox.addClass("fade-out");
 
         setTimeout(function () {
             productBox.remove();
             updateOverallTotalPrice();
         }, 500);
     });*/

    document.addEventListener("DOMContentLoaded", function () {
        const youSaveElement = document.querySelector(".price h6.theme-color");
        youSaveElement.style.display = "none";
    });

    // Initial calculation when the page loads
    //updateOverallTotalPrice();

    document.addEventListener("DOMContentLoaded", function () {
        // Đoạn mã xử lý dữ liệu sẽ được thực thi sau khi trang web tải hoàn toàn
        // Ví dụ:
        const cartTableBody = document.querySelector(".table tbody");

        // Loop through the cart and create rows in the table for each cart item
        cart.forEach(product => {
            // ...
            const categoryElement = tableRow.querySelector("[name='category_id']");
            categoryElement.innerHTML = getCategoryNameById(product.category_id);
            // ...
        });
    });

});

//click Blog 
let btnBlog = document.getElementById("btnBlog");
btnBlog.addEventListener('click', () => {
    location.assign('blog.html');
})

//click Blog 
let btnHome = document.getElementById("btnHome");
btnHome.addEventListener('click', () => {
    location.assign('index.html');
})
//click Product 
let btnSanPham = document.getElementById("btnSanPham");
btnSanPham.addEventListener('click', () => {
    location.assign('product.html');
})

//click Check OUT
function checkOut(){
    if (localStorage.getItem("cart")) {
        location.assign('checkout.html');
    } else {
        alert("Giỏ hàng trống ! Mời bạn quay lại trang chủ và chọn hàng.");
    }
}
