const iphonePrice = 1219;
const s        document.getElementById("checkout-bill").innerText = (bill1+bill2+tax);

    }

iliconCasePrice = 59;
var tax = 10;
 var subTotal1 = 0;
 var subTotal2 = 0;

function showCost(isphone, count, id) {
    var setPrice = parseInt(document.getElementById(id).innerText);
    if(isphone){
        setPrice = iphonePrice * count;
    }
    else{
        setPrice = siliconCasePrice * count;
    }
    
    document.getElementById(id).innerText = setPrice;
    return setPrice;
}
function finalBill(bill1,bill2){
    document.getElementById("total-bill").innerText = (bill1+bill2);
    if(bill1+bill2 == 0){
        document.getElementById("checkout-bill").innerText = (bill1+bill2);
    }
    else{

}



//click plus button for iphone
const plusBtnPhone = document.getElementById("plus-iphone-count");
plusBtnPhone.addEventListener("click", function(){
    var count = parseInt(document.getElementById("iphone-count").value);
    count++;
    document.getElementById("iphone-count").value = count;
    subTotal1 = showCost(1, count, "iphone-bill");
    finalBill(subTotal1,subTotal2);
})
//click minus button for iphone
const minusBtnPhone = document.getElementById("minus-iphone-count");
minusBtnPhone.addEventListener("click", function(){
    var count = parseInt(document.getElementById("iphone-count").value);
    if(count > 0)
        count--;
    document.getElementById("iphone-count").value = count;
    subTotal1 = showCost(1, count, "iphone-bill");
    finalBill(subTotal1,subTotal2);
})



//click plus button for silicon case
const plusBtnCase = document.getElementById("plus-case-count");
plusBtnCase.addEventListener("click", function(){
    var count = parseInt(document.getElementById("case-count").value);
    count++;
    document.getElementById("case-count").value = count;
    subTotal2  = showCost(0, count, "silicon-case-bill");
    finalBill(subTotal1,subTotal2);
})
//click minus button for silicon case
const minusBtnCase = document.getElementById("minus-case-count");
minusBtnCase.addEventListener("click", function(){
    var count = parseInt(document.getElementById("case-count").value);
    if(count > 0){
        count--;
    }
    document.getElementById("case-count").value = count;
    subTotal2 = showCost(0, count, "silicon-case-bill");
    finalBill(subTotal1,subTotal2);
})




