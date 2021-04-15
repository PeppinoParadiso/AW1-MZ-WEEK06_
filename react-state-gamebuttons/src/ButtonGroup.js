import SimpleButton from './SimpleButton';
import { useState } from 'react';

function ButtonGroup(props) {
    const [selected, setSelected] = useState(undefined);

    const chooseButton = (index) => setSelected(index);

    return (<>
        {props.names.map(
            (name, index) => 
            <SimpleButton
                name={name} key={index} index={index} selected={index === selected} choose={chooseButton}>
            </SimpleButton>)}
    </>);

}

export default ButtonGroup;