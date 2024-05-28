import Card from "../atoms/Card";
import Label from "../atoms/Label";
function ViewStudentsBox(props) {
    return ( <>
    <Card key={props.key}>
        <Label text={props.type}></Label>
        <Label text=" / "></Label>
        <Label text={props.matricle}></Label>
        <Label text=" / "></Label>
        <Label text={props.name}></Label>
        <Label text=" / "></Label>
        <Label text={props.birthdate}></Label>
    </Card>
    </> );
}

export default ViewStudentsBox;