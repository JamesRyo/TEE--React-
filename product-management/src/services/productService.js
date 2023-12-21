import Axios from "axios";

export default class ProductService{

    getProducts(){
        return Axios.get("http://localhost:8080/api/products/getall")
    }
    getProductById(productId){
        return Axios.get("http://localhost:8080/api/products/getById?id="+productId)
    }
    addProduct(product){
        return Axios.post("http://localhost:8080/api/products/add", product)
    }

}