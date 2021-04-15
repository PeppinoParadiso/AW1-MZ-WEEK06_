import { Button } from 'react-bootstrap';

function SimpleButton(props) {
    if(props.selected)
        return <Button variant="danger">{props.name}</Button>
    else
        return <Button onClick={() => props.choose(props.index)}>{props.name}</Button>;
}

export default SimpleButton;