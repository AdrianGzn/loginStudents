import { useState } from 'react';
import './Section.css';
import { getObj } from "../../data/data.js";
import ViewStudentsBox from '../molecules/ViewStudents.jsx';
import Button from '../atoms/Button.jsx';

function SectionView(){
    const [students, setStudents] = useState([]);

    const handlerShow = (event) => {
        let listStudents = getObj();
        console.log(listStudents);
        let cards = [];
        for(let i = listStudents.length - 1; i >= 0; i--) {
            let studentAux = listStudents[i];
            console.log(studentAux);
            cards.push(
                <ViewStudentsBox key={i} 
                type={studentAux.tipo} 
                matricle={studentAux.matricula} 
                name={studentAux.nombre} 
                birthdate={studentAux.fecha}>
                </ViewStudentsBox>
            );
        }
        setStudents(cards);
    }

    return (
        <div className="section">
            <div>
                {students}
            </div>
            <Button title="Mostrar" onclick={handlerShow}></Button>
        </div>
    );
}

export default SectionView;
