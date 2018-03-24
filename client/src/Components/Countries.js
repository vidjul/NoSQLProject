import React from 'react';
import { Dropdown, DropdownToggle } from 'reactstrap';
import DropdownMenuWithItems from './DropdownMenuWithItems';
import country from '../places/placesNames.js' ;
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown style={this.props.style} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Country
        </DropdownToggle>
        
        <DropdownMenuWithItems countries={country}/>
        
      </Dropdown>
    );
  }
}