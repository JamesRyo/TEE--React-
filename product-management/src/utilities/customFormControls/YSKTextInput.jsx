import React from 'react';
import {useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

export default function YskTextInput({...props}) {
    //console.log(props)
    const [field, meta] = useField(props)  //prop ile gelen bilgileri alıyor ve bu bilgileri name e bakarak yakalıyor. Reflect api kullanarak. Reflection yapısı sınıf, metot, özellikler ve annotation ait ad, parametre gibi bilgileri almak, denetlemek ve yönetmek için kullanılır.Örneğin; JAXB, Spring, Hibernate gibi yapılarda kullanılan annotation bilgileri reflection özelliği ile alınarak işlem yapılır.
    console.log(field,meta)  //meta bilgisi hata yönetimi yapmamızı yani hata varmı yokmu onu verir.
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    );
}
