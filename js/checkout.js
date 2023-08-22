let cart = JSON.parse(localStorage.getItem("cart")) || [];


let total = 0; 
function listCheckOutCart() {

    let cart_list = JSON.parse(localStorage.getItem("cart"));
    let listCheckOut = document.getElementById("summery-contain");
    let itemTotalPrice = document.getElementById("total-price");
    cart_list.forEach((item, index) => {
        console.log(index);
        console.log(item.product_img);
        console.log(item.product_name);
        console.log(item.product_name);
        let priceNew = item.price_new;
        let itemImgCart = document.createElement("li");
        let liImgCart = document.createElement("img");
        liImgCart.src = item.product_img;
        liImgCart.style.width = "55px";
        liImgCart.style.height = "55px";

        let itemNameCart = document.createElement("h4");
        let fontNameCart = document.createElement("span");
        fontNameCart.innerHTML = `${item.product_name} X `;
        fontNameCart.style.padding = "10px";
        let fontPrice = document.createElement("span");
        fontPrice.innerHTML = item.product_count;

        let itemPrice = document.createElement("h4");
        itemPrice.className = "price";
        itemPrice.innerHTML = `$${parseFloat(parseFloat(priceNew) * parseFloat(item.product_count))}`;

        total = total + (parseFloat(parseFloat(priceNew) * parseFloat(item.product_count)));
        listCheckOut.appendChild(itemImgCart);
        itemImgCart.appendChild(liImgCart);
        itemImgCart.appendChild(itemNameCart);
        itemNameCart.appendChild(fontNameCart);
        itemNameCart.appendChild(fontPrice);
        itemImgCart.appendChild(itemPrice);
    });

    itemTotalPrice.innerHTML = `$${total}`;
    /*listCheckOut.innerHTML = `<li class="list-total">
    <h4>Tổng cộng (USD)</h4>
    <h4 class="price">$19.28</h4>
    </li>`;*/
}

listCheckOutCart();

