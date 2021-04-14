import SimpleButton from './SimpleButton';

function ButtonGroup(props) {
    return (<>
        {props.names.map(
            (name, index) => <SimpleButton
                name={name} key={index} index={index}>
            </SimpleButton>)}
    </>);

}

export default ButtonGroup;