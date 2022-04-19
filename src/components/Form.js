import React, { useState } from 'react'
import { toast } from "react-toastify"

const Form = () => {
    const [form, setForm] = useState({ nombre: '', apellido: '', email: '' })

    const handleChange = (e) => {
        const { name, lastname, mail, value } = e.target;
        setForm({
            ...form,
            [name]: value,
            [lastname]: value,
            [mail]: value
        });
    };

    const handleSubmit = (e) => {
        toast.success(form.nombre + " " + form.apellido + ". Su mensaje fue enviado!")
        e.preventDefault()
    }

    return (
        <div className='row'>
            <div className='col-lg-4 offset-lg-4'>
                <h2 className='mb-4'>Formulario de Contacto</h2>
                <form className='form-contact' onSubmit={handleSubmit} >
                    <input
                        value={form.nombre}
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                    />
                    <input
                        value={form.lastname}
                        name="apellido"
                        type="text"
                        placeholder="Apellido"
                        onChange={handleChange}
                    />
                    <input
                        value={form.email}
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Enviar" disabled={!(form.nombre !== "" && form.apellido !== "" && form.email !== "")} />
                </form>
            </div>
        </div>
    )
}

export default Form