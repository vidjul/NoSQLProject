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

    whatToShow(){
        if(this.props.fieldType === 'Topics')
        {
            return "Topics mentionned in the article"
        }
        else if(this.props.fieldType === 'Text.Body')
        {
            return "Words contained in the Body"
        }
        else if(this.props.fieldType === 'Text.Title')
        {
            return "Words contained in the title"
        }
        else if(this.props.fieldType === 'Places')
        {
            return "Places concerned by the article"
        }
        else if(this.props.fieldType === 'People')
        {
            return "People concerned by the article"
        }
        else
        {
            return "Fulfill with what you want to search"
        }
    }

    render() {
        let names = this.props.fieldType.split('.');
        let name;
        if (names.length > 1) {
            name = names[1];
        }
        else {
            name = this.props.fieldType;
        }
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon  addonType="prepend">
                        <InputGroupText>{name}</InputGroupText>
                    </InputGroupAddon>
                    <Input name={this.props.fieldType} onChange={this.props.onFieldChange} placeholder={this.whatToShow()} />
                    <InputGroupButtonDropdown  addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret color="warning">
                            {this.props.dropValue.toUpperCase()}
                        </DropdownToggle>
                        <DropdownMenu >
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