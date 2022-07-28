const orderId = getOrderId()
displayOrderId(orderId)
removeAllCache()

function getOrderId(){
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get("orderId")
}

