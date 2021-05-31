function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
            return false;
    }
}

function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}

function SaveItem(productDIV) {
    var name = document.getElementById(productDIV).getElementsByClassName("productUnit")[0].name.value;
    var price = document.getElementById(productDIV).getElementsByClassName("productUnit")[0].price.value;
    localStorage.setItem(name, price);
    localStorage.setItem("test","etst");
    doShowAll();
    
}

//Change an existing key-value in HTML5 storage.
function ModifyItem() {
    var name1 = document.getElementById(productDIV).forms.productUnit.name.value;
    var price1 = document.getElementById(productDIV).forms.productUnit.price.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,price1);
              document.getElementById(productDIV).forms.productUnit.price.value = localStorage.getItem(name1);
            }

    doShowAll();
}

function RemoveItem()
{
var name=document.getElementById(productDIV).getElementsByClassName("productUnit")[0].name.value;
document.getElementById(productDIV).getElementsByClassName("productUnit")[0].price.value =localStorage.removeItem(name);
doShowAll();
}