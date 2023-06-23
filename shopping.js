//import {cartData} from './shoppingCart';
    console.log("inside js");
    $(document).ready(function(){
        
        var flag;
        var afterReloadTotalPrice;
        var afterReloadCount;
        var getFlag = localStorage.getItem("flag");
        var cartCount = {
            count:0,
            totalPrice:0
        };
        console.log("inside jquery");
        var cartArray = [{}];
        var concatText = "";
        var text = "";
        var onChangingQuantityCartPrice = 0;
        var addDollarToTotalCartPrice = "";
        var totalCartPriceDis = 0;
        $(".main-cart").click(function(){
            // $(".cart").css("width","30%").show();
        //  $(".shopping").css("width","60%").show();
        window.location.href = "C:/Users/Nabakishore/Desktop/Web Designing/shopping/shopping-cart.html";

              console.log("cart");
           cartCount.count = localStorage.getItem("count");
           if(cartCount.count>=0){
                let getTotalPriceFromLocalStorage = localStorage.getItem("totalPrice");
                $(".totalPrice").text("$"+getTotalPriceFromLocalStorage);
            }else{
                $(".totalPrice").text("$"+0);
            }
        })
 
    $(".cart-icon").click(function (){
            localStorage.setItem("flag",true);
            cartCount.count = Number(localStorage.getItem("count"));
            let cartClass = this.className;
            console.log("typeOf cartClass",cartClass);
            var updatedCartClass = "."+cartClass;
            console.log("updatedCart => ",updatedCartClass);
            const spaceCount = cartClass.split(' ').length-1;
            console.log("spaceCount=> ",spaceCount);
            let splitText = cartClass.split(' ');
            console.log("splitText=> ",splitText);
            var finalText = "";
            let i;
            for(i =0;i<=spaceCount;i++){
               finalText = finalText+"."+splitText[i]+" ";
            }
            console.log("finaltext=>",finalText);
            var parent_Div = $(finalText).closest(".products");
            console.log("parent_Div datatype",typeof(parent_Div));
            console.log("parent_DIV",parent_Div[0]);
            let cartObj = {
            img_src:String,
            title:String,
            price:String,
            quantity:Number
        };
          //  $(".cart").append(parent_Div[0]);

         //  let newImage = $(this).parents(".products").find("img").attr("src");
        //   console.log("newImage => ",newImage);
            cartObj.img_src = $(this).parents(".products").find(".productImage").attr("src");
            cartObj.title = $(this).parents(".products").find(".shirt-brand").text();
            cartObj.price =$(this).parents(".products").find(".cart-price").text();
            console.log("cartObj image",cartObj.img_src);
           // cartArray.push(cartObj);
            console.log("image ===> ",typeof($(this).parents(".products").find("img").attr("src")));
            console.log("title => ",$(this).parents(".products").find(".shirt-brand").text());
            console.log("img=>",+cartObj.img_src+" title=>",+cartObj.title+" price=>",cartObj.title+" from lineNumber-236");
            cartObj.quantity = 0;
            cartData(cartObj.img_src,cartObj.title,cartObj.price,cartObj.quantity);
    })

})