let product, price, item_num, item_bought, email, none = false; 
let emails = [""];

//Products stock 
let prd1 = 5, prd2 = 12, prd3 = 2;



//Help Function
function _(element) {
    return document.getElementById(element);
}

//Add product levels
_("prd1").innerHTML = prd1;
_("prd2").innerHTML = prd2;
_("prd3").innerHTML = prd3;

function addStock() {
    product = _("products").value;
    item_num = _("item-num").value;
    price = _("price-per-item").value;

    parseInt(item_num);

    if(product == "Product 01") {
        //Add price number
        prd1 = prd1 + parseInt(item_num);

        //Display new stock value
        _("prd1").innerHTML = prd1;

        //Display Average stock price
        _("prd1_avrg").innerHTML = parseFloat((prd1 * price) / prd1).toFixed(2);
        alert("Product 01 updated");

    }

    if(product == "Product 02") {
        //Add price number
        prd2 = prd2 + parseInt(item_num);

        //Display new stock value
        _("prd2").innerHTML = prd2;

        //Display Average stock price
        _("prd2_avrg").innerHTML = parseFloat((prd2 * price) / prd2).toFixed(2);
        alert("Product 02 updated");
    }

    if(product == "Product 03") {
        //Add price number
        prd3 = prd3 + parseInt(item_num);

        //Display new stock value
        _("prd3").innerHTML = prd3;

        //Display Average stock price
        _("prd3_avrg").innerHTML = parseFloat((prd3 * price) / prd3).toFixed(2);  
        alert("Product 03 updated");
    }


}

function removeStock() {
    email = _("email").value;
    product = _("products").value;
    item_bought = _("item-bought").value;

    console.log(none);
    for(var i = 0; i < emails.length; i++) {
        if(email == emails[i]) {
            alert("Email already exists try another one");
        } else {
            none = true;
        }
    }

    if(product == "Product 01" && none == true) {
        //Add email to array
        emails.push(email);

        //Subtract stock
        prd1 = prd1 - parseInt(item_bought);

        //Display the new stock
        _("prd1").innerHTML = prd1;

        //Calculate average
        _("prd1_avrg").innerHTML = parseFloat((parseInt(_("prd1_avrg").textContent) * prd1) / prd1).toFixed(2);
        alert("Product 01 removed");

    }

    if(product == "Product 02" && none == true) {
        //Add email to array
        emails.push(email);

        //Subtract stock
        prd2 = prd2 - parseInt(item_bought);

        //Display the new stock
        _("prd2").innerHTML = prd2;

        //Calculate average
        _("prd2_avrg").innerHTML = parseFloat((parseInt(_("prd2_avrg").textContent) * prd2 / prd2)).toFixed(2);
        alert("Product 02 removed");

    }

    if(product == "Product 03" && none == true) {
        //Add email to array
        emails.push(email);

        //Subtract stock
        prd3 = prd3 - parseInt(item_bought);

        //Display the new stock
        _("prd3").innerHTML = prd3;

        //Calculate average
        _("prd3_avrg").innerHTML = parseFloat((parseInt(_("prd3_avrg").textContent) * prd3) / prd3).toFixed(2);
        alert("Product 03 removed");

    }



}



