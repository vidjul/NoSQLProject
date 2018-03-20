import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class InputDate extends Component {
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
      <InputGroup>
        <InputGroupAddon addonType="append">
          <InputGroupText>Date</InputGroupText>
        </InputGroupAddon>
        <Input onClick={this.props.onClick} value={this.props.value} />
        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
          <DropdownToggle caret>
            {this.props.dropValue.toUpperCase()}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Bool query option</DropdownItem>
            <DropdownItem name='Date' onClick={this.props.onSelectChange}>must</DropdownItem>
            <DropdownItem name='Date' onClick={this.props.onSelectChange}>should</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
    )
  }
}

class DatepickerComponent extends Component {
  constructor(props) {
    moment.updateLocale('en', {
      monthsShort: [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
      ]
    });
    super(props)
  }

  render() {
    return (
      <DatePicker
        openToDate={moment('1987-02-26')}
        customInput={<InputDate dropValue={this.props.dropValue} onSelectChange={this.props.onSelectChange} />}
        selected={this.props.date}
        onChange={this.props.onFieldChange}
        dateFormat="D-MMM-YYYY"
        minDate={moment('1987-02-26')}
        maxDate={moment('1987-10-20')}
      />);
  }
}

export default DatepickerComponent;