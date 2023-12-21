import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail(){
    let {id} = useParams()  //bize route içerisinde yazılan parametreleri object olarak getirir. Dashboard da :id diyerek yazmıştık.


    const [product, setProduct] = useState({});
    useEffect(() => {         //useEffect() fonksiyonunu kullandığınızda React, DOM ile ilgili herhangi bir işlem tamamlandığında çağıracaktır. React, varsayılan olarak ilk render da dahil olmak üzere her render işleminden sonra effect fonksiyonunu çalıştırır.
        let productService = new ProductService()
        productService.getProductById(id).then(response => setProduct(response.data.data))  //yukarıdaki id dan aldık parametreyi.
    }, []);

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta><strong>{product.quantityPerUnit}</strong></Card.Meta>
                        <Card.Description>Stock : {product.unitsInStock}   |   Price : {product.unitPrice}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Add To Bag
                            </Button>
                            <Button basic color='red'>
                                Add To Favorites
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};

