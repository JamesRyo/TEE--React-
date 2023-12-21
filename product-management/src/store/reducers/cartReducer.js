import {cartItems} from "../initialStates/cartItems";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../action/cartAction";

const initialState = {
    cartItems: cartItems   //initial state den başlangıç değerini aldık.
}
//redux sepet elemanlarının değiştiğini eğer referansı değiştiyse sepette değişmiştir. (hookslarda da böyledir.)

export default function cartReducer(state = initialState, {type, payload}) {   //sepetin son halini burda tutacağız gönderdiğimiz action a göre değişicektir.
    switch (type) {                                //cqrs design pattern araştır.
        case ADD_TO_CART:                          //sepette zaten öyle bir ürün varsa adedini arttırıcak yoksa sadece spete eklicek.
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {                         //zaten sepette o ürün varsa
                product.quantity++   //böyle yazdığımızda aniden değişiklik olmaz referansı değiştirirsek hemen yansır.
                return {
                    ...state  //spread operator kullanarak state i döndürdük. (spread sayesinde referans da değişir hemen yansır.)
                }
            } else {             //sepette yoksa o ürün
                return {
                    ...state,
                    cartItems: [...state.cartItems, {quantity: 1, product: payload}]  //yeni referası olan bir cartItems oluşturduk aniden değişikliği görmemiz için.
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((c) => c.product.id !== payload.id)   //filter da referans değiştirir.
            }
        default:
            return state;
    }

}