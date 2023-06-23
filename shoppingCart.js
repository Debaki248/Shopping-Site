var flag = false;
var cartCount = {
    count:0,
    totalPrice:0
};
let cartDatas = {
    imgSrc:String,
    title:String,
    price:String,
    quantity:Number,
    displayTotalPrice:Number
}
function displayTotalPrice(){
    let totalP = 0;
let i = 0;
let cartUpdatedObj = {
    imgSrc:String,
    title:String,
    price:String,
    quantity:Number,
    displayTotalPrice:Number
}
let newCount = Number(localStorage.getItem("count"));
console.log("newCount => ",newCount);
for(i=1;i<=newCount;i++){
    console.log("inside for ")
    let cartUpdatedObj = localStorage.getItem(`Item-${i}`);
    let cart = JSON.parse(cartUpdatedObj);
    console.log("Cart => ",cart);
    console.log("cart displayTotalPrice => ",cart.displayTotalPrice);
    totalP = totalP + cart.displayTotalPrice;
    console.log("TotalPrice",totalP);
    localStorage.setItem("totalPrice",totalP);
    $(".totalPrice").text("$"+totalP);
}
}
function cartData(imgSrc,title,price,quantity){
    countValue = Number(localStorage.getItem("count"));
if(countValue === 0){
    $(".totalPrice").text("$"+countValue);
    flag = false;
    localStorage.setItem("flag",flag);
}else{
    flag = true;
    localStorage.setItem("flag",flag);
}
    console.log("inside cartData");  
    console.log("imageSrc",imgSrc);
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
    $(".cart").append(addProductItemCart);

var updatedPrice =  price;
let splitUpdatedPrice = updatedPrice.split("$");

console.log("UpdatedPrice=>",splitUpdatedPrice[1]);
let convertUpdatePriceToNumber = Number(splitUpdatedPrice[1]);
console.log("convertPriceToNumber => ",convertUpdatePriceToNumber);
let totalCartPrice = Number(localStorage.getItem("totalPrice"));
totalCartPrice = Number(totalCartPrice);
totalCartPrice = totalCartPrice + convertUpdatePriceToNumber;
//  totalCartPrice = Number(totalCartPrice);
console.log("totalcartPrice=>",totalCartPrice);
console.log("cartDatas Quantity => ",cartDatas.quantity);
localStorage.setItem(`Item-${cartCount.count}`,JSON.stringify(cartDatas));
localStorage.setItem("count",cartCount.count);
console.log("count => increment ",cartCount.count);
displayTotalPrice();

//console.log("cartobj from localStorage => ",cartObj);
cartCount.totalPrice = totalCartPrice;
totalCartPrice = totalCartPrice;  
}

   $(document).ready(function(){
var getFlag = Boolean(localStorage.getItem("flag"));
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
//addDollarToTotalCartPrice = "$"+totalCartPrice;
let cartIcon = document.getElementsByClassName(".cart-icon");
getFlag?gettingCartFromLocalS():settingUpOnFirstReload();
function settingUpOnFirstReload(){
    var firstSetCount = 0;
    var firstSetTotalprice = 0;
    localStorage.setItem("count",firstSetCount);
    localStorage.setItem("totalPrice",firstSetTotalprice);
    $(".totalPrice").text("$"+firstSetTotalprice);
    var flag = false;
    localStorage.setItem("flag",flag);
}


function gettingCartFromLocalS() {
    console.log("inside gettingCartFromLocalS");
    var countValue = Number(localStorage.getItem("count"));
    if(countValue === 0){
        $(".totalPrice").text("$"+countValue);
        flag= false;
        localStorage.setItem("flag",flag);
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
   cartCount.count = Number(localStorage.getItem("count"));
   console.log("cartCount => ",cartCount.count);
    let i;
    let cartPrice;
    let cartText;
    let cartImgSrc;
  
  //  console.log("localStorageCount => ",localStorageCount);
    for(i=1;i<=cartCount.count;i++){
        console.log("count displaying the cart ",i);
        cartObjFromLocalS = localStorage.getItem(`Item-${i}`);
        console.log("cartObjFromLocalS => ",cartObjFromLocalS);
        getCart = JSON.parse(cartObjFromLocalS);
        console.log("inside gettingCartFromLocalS getCart => ",getCart);
        console.log("image_src => ",getCart.imgSrc+" "+"title => ",getCart.title+" "+"price=>",getCart.price);
        console.log("quantity from loca;lStorage => ",getCart.quantity);
      //  $(".quantity").text(getCart.quantity);

        var addProductItemCart = `
    <div class="cart-content">
    <div class="cart-box">
        <img src="${getCart.imgSrc}">
        <div class="detail-box">
            <div class="cart-details">
                <div class="cart-product-title">${getCart.title}</div>
                <div class="item">
                    <span class="itemTitle">Item</span>
                    <span class="itemNumber">${i}</span>
                </div>
                <div class="cart-subDetais">                            
                    <div class="cart-price">${getCart.price}</div>
                    <i class="material-icons deleteIcon">delete</i>
                </div>
            </div>
            <input type="number" step="1" max="10" value="${getCart.quantity}" name="quantity" class="quantity quantity-field border-0 text-center w-25">
            <div class="itemPrice">
                <span>Price</span>
                <span class="displayTotalPrice">${"$"+getCart.displayTotalPrice}</span>
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

    displayTotalPrice();

}

// gettingCartFromLocalS();
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
   // let emptyObject = {};
   // localStorage.setItem(`Item-${itemNumber}`,JSON.stringify(emptyObject));
   localStorage.removeItem(`Item-${itemNumber}`);
    let splitCartTitles = cartTitles.split("$");
    let convertTitlesToNumber = Number(splitCartTitles[1]);

    let totalPriceAfterRemovingCart = Number(localStorage.getItem("totalPrice"));
    totalPriceAfterRemovingCart = totalPriceAfterRemovingCart - convertTitlesToNumber;
    console.log("totalPriceAfterRemovingCart => ",totalPriceAfterRemovingCart);
    cartCount.count--;
  //  console.log("count after removing an item from the cart",count);
    localStorage.setItem("count",cartCount.count);
    localStorage.setItem("totalPrice",totalPriceAfterRemovingCart);
    $(".totalPrice").text("$"+totalPriceAfterRemovingCart);
    var countValue = Number(localStorage.getItem("count"));
    if(countValue === 0){
        $(".totalPrice").text("$"+countValue);
        flag = false;
        localStorage.setItem("flag",flag);
    }else{
        flag = true;
        localStorage.setItem("flag",flag);
    }
    cartCount.totalPrice = totalPriceAfterRemovingCart;
    afterReloadCount = cartCount.count;
    afterReloadTotalPrice = cartCount.totalPrice;
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
       // let splitPrice = text.split("$");
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
            $(".totalPrice").text("$"+caluculateTotalPrice);
            localStorage.setItem("totalPrice",caluculateTotalPrice);

        }else{
            let caluculateTotalPrice = totalUpdatedCartPrice + splitItemPrice;
            console.log("totalUpdatedCartPrice => ",totalUpdatedCartPrice + "priceCalculation => ",priceCalculationAfterQuantChn);
            console.log("calculation of total ptice = local Storage totalPrice + displayTotalPrice ",caluculateTotalPrice)
            $(".totalPrice").text("$"+caluculateTotalPrice);
            localStorage.setItem("totalPrice",caluculateTotalPrice);
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
        let chnQuantToNum = Number(quantity);
        console.log("chnQuantToNum => ",chnQuantToNum);
        itemNumber = Number(itemNumber);
        cartUpdated = localStorage.getItem(`Item-${itemNumber}`);
        cartUpdated = JSON.parse(cartUpdated);
        cartUpdated.quantity = chnQuantToNum;
        cartUpdated.displayTotalPrice = quantityChangeCalculate;
        console.log("cartUpdated => ",cartUpdated);
        localStorage.setItem(`Item-${itemNumber}`,JSON.stringify(cartUpdated));
        $(this).closest(".cart-content").find(".displayTotalPrice").text("$"+cartUpdated.displayTotalPrice);
        displayTotalPrice();
        cartCount.totalPrice = totalUpdatedCartPrice;
});
});