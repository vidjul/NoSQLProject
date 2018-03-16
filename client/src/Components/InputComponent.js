import React from 'react';
import {InputGroup,InputGroupAddon,InputGroupText,Input} from 'reactstrap';

class InputComponent extends React.Component {
    render() {
		return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>{this.props.fieldType}</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
            </div>
		);
	}
}
export default InputComponent;