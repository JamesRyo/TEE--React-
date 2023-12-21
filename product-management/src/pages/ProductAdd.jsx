import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Button, FormField, Label} from "semantic-ui-react";
import YskTextInput from "../utilities/customFormControls/YSKTextInput";
import {ToastContainer} from "react-toastify";
import ProductService from "../services/productService";

export default function ProductAdd() {

    const initialValues = {   //formik ile form yapmadan önce başlangıç değerleri vermemizi ister.
        productName: "",
        unitPrice: null,
    };
    const schema = Yup.object({          //Yup validation yapmamızı sağlar.
        productName: Yup.string().required("Product name is required"),
        unitPrice: Yup.number().required("Product price is required")
    });

    return (
        <Formik
            initialValues={{initialValues}}
            validationSchema={schema}
            onSubmit={(values) => {
                let productService = new ProductService();
                productService.addProduct(values).then(response => (console.log(response)))
            }}>
            <Form className="ui form">
                <YskTextInput name="productName" placeholder="Product Name"></YskTextInput>  {/*bu iki bilgiyi alıp bunları YSKTextInput compta object haline getiricez*/}
                <YskTextInput name="unitPrice" placeholder="Product Price"></YskTextInput>
                <Button color="blue" type="submit">Add</Button>
            </Form>
        </Formik>
    );
}



/*  //normalde böyle yapmıştık ama bunları daha kısayollu şekilde yapıcaz.
<Formik
    initialValues={{initialValues}}
    validationSchema={schema}
    onSubmit={(values) => {
        console.log(values)
    }}>
    <Form className="ui form">
        <YskTextInput></YskTextInput>
        <FormField>
            <Field name="productName" placeholder="Product Name"></Field>
            <ErrorMessage name="productName" render={error => <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
        </FormField>
        <FormField>
            <Field name="unitPrice" placeholder="Product Price"></Field>
            <ErrorMessage name="unitPrice" render={error => <Label pointing basic color="red" content={error}></Label>}></ErrorMessage>
        </FormField>
        <Button color={"blue"} type={"submit"}>Add</Button>
    </Form>
</Formik>*/
