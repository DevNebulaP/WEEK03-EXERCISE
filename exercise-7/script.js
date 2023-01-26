function showAlert(message){
    alert(message)
}

function addToCart(item){
    if(isItemInCart(item)){
        let cartItems = document.getElementById("cartBody").children
        for(let i = 0; i < cartItems.length; i++){
            if(item.children[0].innerText == cartItems[i].children[0].innerText){
                cartItems[i].children[1].innerText = parseInt(cartItems[i].children[1].innerText) + 1
                cartItems[i].children[2].innerText = (parseFloat(cartItems[i].children[2].innerText) + parseFloat(item.children[1].innerText.split(" ")[0])).toFixed(2)
            }
        }
    }
    else{
        let row = document.createElement("tr")

        let data = document.createElement("td")
        data.innerText = item.children[0].innerText
        row.appendChild(data)

        data = document.createElement("td")
        data.innerText = "1"
        row.appendChild(data)

        data = document.createElement("td")
        data.innerText = item.children[1].innerText.split(" ")[0]
        row.appendChild(data)

        data = document.createElement("td")
        let button = document.createElement("button")
        button.className = "button is-danger"
        button.innerText = "ลบ"
        button.onclick = () => {row.remove()
                                let amount = document.getElementById("total-amount")
                                amount.innerText = (parseFloat(amount.innerText) - parseFloat(row.children[1].innerText)).toFixed(2)
                                let price = document.getElementById("total-price")
                                price.innerText = (parseFloat(price.innerText) - parseFloat(row.children[2].innerText)).toFixed(2)
                               }
        data.appendChild(button)
        row.appendChild(data)

        document.getElementById("cartBody").appendChild(row)
    }
    let amount = document.getElementById("total-amount")
    amount.innerText = (parseFloat(amount.innerText) + 1).toFixed(2)
    let price = document.getElementById("total-price")
    price.innerText = (parseFloat(price.innerText) + parseFloat(item.children[1].innerText.split(" ")[0])).toFixed(2)
}

function isItemInCart(item){
    let cartItems = document.getElementById("cartBody").children
    for(let i = 0; i < cartItems.length; i++){
        if(item.children[0].innerText == cartItems[i].children[0].innerText){
            return true
        }
    }
    return false
}