import { useState } from "react";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './Section.css';
import { pushStack } from "../../data/data.js";

function SectionLogin() {
    const [type, setType] = useState('');
    const [matricle, setMatricle] = useState('');
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handlerClick = (event) => {
        if(pushStack(type, matricle, name, birthdate)){
            Swal.fire({
                title: "Datos guardados",
                text: `${type} ${matricle} ${name} ${birthdate}`
            });
        }else{
            Swal.fire({
                title: "Datos no guardados",
                text: `Ha habido un error`
            });
        }
    }

    return (
        <>
            <div className="section">
                <Field type="text" placeholder="Tipo" text="Tipo de documento" val={type} fnVal={setType} />
                <Field type="text" placeholder="Matricula" text="Matricula" val={matricle} fnVal={setMatricle} />
                <Field type="text" placeholder="Nombre" text="Nombre" val={name} fnVal={setName} />
                <Field type="text" placeholder="Día" text="Día de nacimiento" val={birthdate} fnVal={setBirthdate} />
                <Button title="Guardar datos" onclick={handlerClick} />
            </div>
        </>
    );
}

export default SectionLogin;
