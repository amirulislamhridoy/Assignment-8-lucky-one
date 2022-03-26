const getLocalStorage = () => {
    let cart = {}
    const shopping = localStorage.getItem('shopping-cart')
    if(shopping){
        cart = JSON.parse(shopping)
    }
    return cart
}

const setLocalSTorage = (data) => {
    let cart = getLocalStorage()
    if(cart[data.id]){
        return
    }else{
        cart[data.id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cart))
}

const removeLocalStorage = id => {
    let exists = getLocalStorage()
    delete exists[id]
    localStorage.setItem('shopping-cart', JSON.stringify(exists))
}

const clearLocalStorage = () => {
    localStorage.clear()
}

export {getLocalStorage, setLocalSTorage, removeLocalStorage, clearLocalStorage}