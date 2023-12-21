export const ADD_TO_CART = "ADD_TO_CART"  //Reducers içinde kullanacağımız için yazım yanlışı yapmamak için böyle yazarız.
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){     //sepete ekleme fonksiyonudur.
    return {                   //obje döndürücez
        type: ADD_TO_CART,  //bu action un ismi. Reducer içerisinde hangi state i etkilediğini ona göre bulur.
        payload: product              //sepete ne eklemek istediğimiz.
    }
}
export function removeFromCart(product){
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}
