import { useState } from "react";

function InputExample() {
    const [form, setForm] = useState({ name: "", surname: "" });

    const onChangeInput = (event) => {
        console.log(event.target.name);
        setForm({ ...form, [event.target.name]: event.target.value });  //kısayol ile yaptık.
    };

    return (
        <div>
            <hr/>
            <br />
            <br />
            Name <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            <br />
            Surname <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            <br />
            {form.name} {form.surname}
        </div>
    );
}

export default InputExample;