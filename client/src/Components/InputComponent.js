import React, { Component } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class InputComponent extends Component {

    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false,
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>{this.props.fieldType}</InputGroupText>
                    </InputGroupAddon>
                    <Input name={this.props.fieldType} onChange={this.props.onFieldChange} />
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret>
                            {this.props.dropValue.toUpperCase()}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Bool query option</DropdownItem>
                            <DropdownItem name={this.props.fieldType} onClick={this.props.onSelectChange}>must</DropdownItem>
                            <DropdownItem name={this.props.fieldType} onClick={this.props.onSelectChange}>should</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                </InputGroup>
            </div>
        );
    }
}
export default InputComponent;