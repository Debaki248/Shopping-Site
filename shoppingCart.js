var flag = false;
var newItemNumber = -1;
var cartCount = {
    count:0,
    totalPrice:0,
};
var deletedItems = [];
localStorage.setItem("deletedItems[]",deletedItems);
let cartDatas = {
    imgSrc:String,
    title:String,
    price:String,
    quantity:Number,
    displayTotalPrice:Number
}

function displayTotalPrice(){
    console.log("inside displayTotalPrice()");
    cartCount.count = Number(localStorage.getItem("count"));
    let totalPrice = 0;

    let tc = 0;
    let totalP = 0;
let i = 0,k=0;
let cartUpdatedObj = {
    imgSrc:String,
    title:String,
    price:String,
    quantity:Number,
    displayTotalPrice:Number
}

let updateCart = [{}];
if(cartCount.count >= 0){
updateCart = JSON.parse(localStorage.getItem("cart[]"));
let newCart = updateCart;
let emptyCart = {};
console.log("neewCart length => ",newCart.length);
console.log("directly getting from LS",newCart);
  for(i=0;i<newCart.length;i++){
        console.log("count displaying the cart ",i);
        console.log("newCart => ",newCart[i]);
        if(JSON.stringify(newCart[i]) == '{}'){
              console.log("inside cartUpdatedObj === emptyCart");
        }else{
        console.log("index entering => ",i);
        console.log("totalPrice before entering to newCart[i]!=emptyCart => ",totalPrice);
        console.log("inside cartUpdatedObj!={}");
        console.log("displayTotalPrice => ",newCart[i].displayTotalPrice);
        totalPrice = totalPrice + Number(newCart[i].displayTotalPrice);
        console.log("totalPrice => on each lopp calculation => ",totalPrice);
    }
}
console.log("TotalPrice => ",totalPrice);
$(".totalPrice").text("$"+totalPrice);
localStorage.setItem("totalPrice",totalPrice);
}else{
    totalPrice = 0;
$(".totalPrice").text("$"+totalPrice);
localStorage.setItem("totalPrice",totalPrice);
}
}

function cartData(imgSrc,title,price,quantity){
    console.log("inside CartData");
    countValue = Number(localStorage.getItem("count"));

    console.log("inside cartData");  
    console.log("imageSrc",imgSrc);
    let cartArrayLS = localStorage.getItem("cart[]");
    cartDatas.imgSrc = imgSrc;
    console.log("cartDatas image => ",cartDatas.imgSrc);
    cartDatas.price = price;
    cartDatas.title = title;
    cartDatas.quantity = 1;
    cartDatas.displayTotalPrice = price;
    let removeDollarFromPrice = price.split("$");
    removeDollarFromPrice = Number(removeDollarFromPrice[1]);
    cartDatas.displayTotalPrice = removeDollarFromPrice;
    cartCount.count = cartCount.count + 1;
    if(countValue === 0){
        $(".totalPrice").text("$"+countValue);
        flag = false;
        localStorage.setItem("flag",flag);
    }else{
        flag = true;
        localStorage.setItem("flag",flag);
    }
    console.log("inside cartData()");
    var addProductItemCart = `
    <div class="cart-content">
    <div class="cart-box">
        <img src="${cartDatas.imgSrc}">
        <div class="detail-box">
            <div class="cart-details">
                <div class="cart-product-title">${title}</div>
                <div class="item">
                    <span class="itemTitle">Item</span>
                    <span class="itemNumber">${cartCount.count}</span>
                </div>
                <div class="cart-subDetais">                            
                    <div class="cart-price">${price}</div>
                    <i class="material-icons deleteIcon">delete</i>
                </div>
            </div>
            <input type="number" step="1" max="10" value="1" name="quantity" class="quantity quantity-field border-0 text-center w-25">
            <div class="itemPrice">
                <span>Price</span>
                <span class="displayTotalPrice">${cartDatas.displayTotalPrice}</span>
            </div>
            <div class="buyNowButton">
                <button class="btn btn-secondary">Buy Now</button>
            </div>
            </div>
    </div>
</div>
    `
    console.log("addProductItemCart => ",addProductItemCart);
    $(".cart").append(addProductItemCart);
    console.log("After appending");
var updatedPrice =  price;
let splitUpdatedPrice = updatedPrice.split("$");
let convertUpdatePriceToNumber = Number(splitUpdatedPrice[1]);
let totalCartPrice = Number(localStorage.getItem("totalPrice"));
totalCartPrice = Number(totalCartPrice);
totalCartPrice = totalCartPrice + convertUpdatePriceToNumber;
localStorage.setItem(`Item-${cartCount.count}`,JSON.stringify(cartDatas));
localStorage.setItem("count",cartCount.count);
let updateCart = [{}];
updateCart = JSON.parse(localStorage.getItem("cart[]"));
let newCart = updateCart;
newCart.push(cartDatas);
    localStorage.setItem("cart[]",JSON.stringify(newCart));
    displayTotalPrice();
cartCount.totalPrice = totalCartPrice;
totalCartPrice = totalCartPrice;  
}



$(document).ready(function(){
var getFlag = Boolean(localStorage.getItem("flag"));
cartCount.count = Number(localStorage.getItem("count"));
if(cartCount.count === 0){
    let cart = [];
    localStorage.setItem("cart[]",JSON.stringify(cart));
}
console.log("getFlag => ",getFlag);
var afterReloadTotalPrice;
var afterReloadCount;
console.log("inside jquery");
var cartArray = [{}];
var concatText = "";
var text = "";
var onChangingQuantityCartPrice = 0;
var addDollarToTotalCartPrice = "";
var totalCartPriceDis = 0;
let cartIcon = document.getElementsByClassName(".cart-icon");
getFlag?gettingCartFromLocalS():settingUpOnFirstReload();
function settingUpOnFirstReload(){ //on First Reload
    console.log("inside settingUpOnFirstLoad");
    var firstSetCount = 0;
    var firstSetTotalprice = 0;
    localStorage.setItem("count",firstSetCount);
    localStorage.setItem("totalPrice",firstSetTotalprice);
    $(".totalPrice").text("$"+firstSetTotalprice);
    var flag = false;
    localStorage.setItem("flag",flag);   
    console.log("deletedItems[] => ",deletedItems);
    localStorage.setItem("deletedItems[]",deletedItems);
}


function gettingCartFromLocalS() { //on reloads
    let entry = 0;
    console.log("inside gettingCartFromLocalS");
    var countValue = Number(localStorage.getItem("count"));
    if(countValue === 0){
        $(".totalPrice").text("$"+countValue);
        flag= false;
        localStorage.setItem("flag",flag);
        localStorage.setItem("deletedItems[]",deletedItems);
        let cart = [];
        localStorage.setItem("cart[]",JSON.stringify(cart));
    }else{
        flag=true;
        localStorage.setItem("flag",flag);
    }
    let cartObjFromLocalS = {
        imgSrc:String,
        title:String,
        price:String,
        quantity:Number,
        displayTotalPrice:Number
}
let getCart = {
    imgSrc:String,
    title:String,
    price:String,
    quantity:Number,
    displayTotalPrice:Number
}

   console.log("cartCount => ",cartCount.count);
    let k,i;
    let cartPrice;
    let cartText;
    let cartImgSrc;
    if(cartCount.count != 0){
    let cartFromLS = JSON.parse(localStorage.getItem("cart[]"));
  for(i=0;i<cartFromLS.length;i++){
        entry++;
        console.log("no of times ebtery on gettingCartFromLocalS()",entry);
        console.log("count displaying the cart ",i);
    if(JSON.stringify(cartFromLS[i]) != '{}'){
        console.log("image_src => ",cartFromLS[i].imgSrc+" "+"title => ",cartFromLS[i].title+" "+"price=>",cartFromLS[i].price);
        console.log("quantity from loca;lStorage => ",cartFromLS[i].quantity);

        var addProductItemCart = `
    <div class="cart-content">
    <div class="cart-box">
        <img src="${cartFromLS[i].imgSrc}">
        <div class="detail-box">
            <div class="cart-details">
                <div class="cart-product-title">${cartFromLS[i].title}</div>
                <div class="item">
                    <span class="itemTitle">Item</span>
                    <span class="itemNumber">${i}</span>
                </div>
                <div class="cart-subDetais">                            
                    <div class="cart-price">${cartFromLS[i].price}</div>
                    <i class="material-icons deleteIcon">delete</i>
                </div>
            </div>
            <input type="number" step="1" max="10" value="${cartFromLS[i].quantity}" name="quantity" class="quantity quantity-field border-0 text-center w-25">
            <div class="itemPrice">
                <span>Price</span>
                <span class="displayTotalPrice">${"$"+cartFromLS[i].displayTotalPrice}</span>
            </div>
            <div class="buyNowButton">
                <button class="btn btn-secondary">Buy Now</button>
            </div>
        </div>
    </div>
</div>
    `
    $(".cart").append(addProductItemCart);
    }
}
    }
    displayTotalPrice();
    
}

$(".close-cart").click(function(){
    window.location.href = "C:/Users/Nabakishore/Desktop/Web Designing/shopping/shopping.html";
})
$(".cart").delegate(".deleteIcon","click",function () {
    console.log("inside deleIcon");
    console.log("deleteIcon inside");
    $(this).parents(".cart-content").remove();
    let cartTitles = $(this).closest(".cart-content").find(".displayTotalPrice").text();
    let itemNumber = $(this).closest(".cart-content").find(".itemNumber").text();
    itemNumber = Number(itemNumber);
    console.log("itemNumber from items component => ",itemNumber);
    let i;
    let cart = JSON.parse(localStorage.getItem("cart[]"));
    for(i=0;i<cart.length;i++){
        if(itemNumber === i){
            cart[i]={};
        }
    }
    console.log("cartArray after deletion",cart);
    localStorage.setItem("cart[]",JSON.stringify(cart));
    let getCount  = Number(localStorage.getItem('count'));
    if(getCount === 0){
        let tp = 0;
        $(".totalPrice").text("$"+tp);
        localStorage.setItem("totalPrice",tp);
    }
    cartCount.count = getCount - 1;
    localStorage.setItem("count",cartCount.count);
    displayTotalPrice();
});
$(".cart").delegate(".quantity","keyup change",function ()  {
    console.log("changing Quantity");
    localStorage.setItem("flag",true);
    let cartClass = this.className;
        text="";
        concatText = "";
        priceInDollar = 0;
        console.log("cartClass=>",cartClass);
        console.log("before => ",text);
        console.log("inside qya==uantity");
        var quantity = $(this).val();
        var displayTotalValue;
        var total = 0;
        var changeQuantityToNumber = Number(quantity);
        console.log("quantity",quantity);
        text = $(this).parents(".detail-box").find('.cart-price').text();
        console.log("after text=>",text);
        let textLength = text.length;
        console.log("textLength=>",textLength);
        let i;
        for(i=1;i<textLength;i++){
            concatText = concatText + text.charAt(i);
        }
        console.log("concatText=> ",concatText);
        let concatTextLength = concatText.length - 1;
        console.log("concatTextLength=>",concatTextLength);
        const convertContactTextToNumber = Number(concatText);
        let totalUpdatedCartPrice = localStorage.getItem("totalPrice");
        totalUpdatedCartPrice = Number(totalUpdatedCartPrice);
        console.log("totalPrice from local storage => ",totalUpdatedCartPrice);
        let priceCalculationAfterQuantChn;
        if(changeQuantityToNumber > 1){
            priceCalculation = convertContactTextToNumber * (changeQuantityToNumber - 1);
            console.log("priceCalculation => ",priceCalculation);
        }else{
        priceCalculationAfterQuantChn = convertContactTextToNumber * changeQuantityToNumber;
        console.log("periceCalculation => ",priceCalculationAfterQuantChn);
        }
        let quantityChangeCalculate =  convertContactTextToNumber * changeQuantityToNumber;
        $(this).closest(".cart-content").find('.displayTotalPrice').text("$"+quantityChangeCalculate);
        let gettingUpdatedPrice =  $(this).closest(".cart-content").find('.displayTotalPrice').text();
        console.log("seeting in the displatyTotalPrice => ",gettingUpdatedPrice);
        gettingUpdatedPrice = gettingUpdatedPrice.split("$");
        let displatyTotalPriceFromItem = Number(gettingUpdatedPrice[1]);
        console.log("displayTotalPriceFromItem => ",displatyTotalPriceFromItem);
       let itemPrice = $(this).closest(".cart-content").find(".cart-price").text();
       console.log("itemPrice => ",itemPrice);
       let splitItemPrice = itemPrice.split("$");
       splitItemPrice = Number(splitItemPrice[1]);
       console.log("splitItemPrice => ",splitItemPrice);
        if(changeQuantityToNumber > 1){
            console.log("gettingUpdatedPrice => ",totalUpdatedCartPrice+"priceCalculation => ",priceCalculation)
            caluculateTotalPrice = (totalUpdatedCartPrice - splitItemPrice) + displatyTotalPriceFromItem;
            console.log("calculation of total ptice = local Storage totalPrice + displayTotalPrice ",caluculateTotalPrice);
        }else{
            let caluculateTotalPrice = totalUpdatedCartPrice + splitItemPrice;
            console.log("totalUpdatedCartPrice => ",totalUpdatedCartPrice + "priceCalculation => ",priceCalculationAfterQuantChn);
            console.log("calculation of total ptice = local Storage totalPrice + displayTotalPrice ",caluculateTotalPrice);
        }
        let updatedCount = localStorage.getItem("count");
        let k;
        
        let cartUpdated = {
            img_src:String,
            title:String,
            price:String,
            quantity:Number,
            displayTotalPrice:Number
        }
        let itemNumber = $(this).closest(".detail-box").find(".itemNumber").text();
        console.log("itemNumber => ",itemNumber);
        let itemNumberInCart = Number(itemNumber) - 1;

        let chnQuantToNum = Number(quantity);
        console.log("chnQuantToNum => ",chnQuantToNum);
        itemNumber = Number(itemNumber);
        let LSItemNumber = itemNumber + 1;
        let cartArrayItemNumber = itemNumber;
        console.log("cartArrayItemNumber => ",cartArrayItemNumber);
        console.log("LocalStorage itemNumber => ",LSItemNumber);
        cartUpdated = localStorage.getItem(`Item-${LSItemNumber}`);
        cartUpdated = JSON.parse(cartUpdated);
        cartUpdated.quantity = chnQuantToNum;
        cartUpdated.displayTotalPrice = quantityChangeCalculate;
        let cart = JSON.parse(localStorage.getItem("cart[]"));
        console.log("cart from ls",cart);
        for(i=0;i<cart.length;i++){
            if(i === cartArrayItemNumber){
                cart[cartArrayItemNumber].quantity = cartUpdated.quantity;
                cart[cartArrayItemNumber].displayTotalPrice = cartUpdated.displayTotalPrice;
                console.log("cart Quantity => ",cart[cartArrayItemNumber].quantity+"cart DisplayTotalPrice => ",cart[cartArrayItemNumber].displayTotalPrice);
            }
        }
        console.log("cart Array Updated",cart);
        localStorage.setItem("cart[]",JSON.stringify(cart));
        console.log("cartUpdated => ",cartUpdated);
        localStorage.setItem(`Item-${LSItemNumber}`,JSON.stringify(cartUpdated));
        $(this).closest(".cart-content").find(".displayTotalPrice").text("$"+cartUpdated.displayTotalPrice);
        displayTotalPrice();
        cartCount.totalPrice = totalUpdatedCartPrice;
});
})