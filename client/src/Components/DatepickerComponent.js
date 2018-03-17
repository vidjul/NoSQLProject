import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class InputDate extends Component {
  render() {
    return (
      <InputGroup>
      <InputGroupAddon addonType="append">
        <InputGroupText>Date</InputGroupText>
      </InputGroupAddon>
      <Input onClick={this.props.onClick} value={this.props.value}/>
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
        customInput={<InputDate />}
        selected={this.props.date}
        onChange={this.props.onFieldChange}
        dateFormat="D-MMM-YYYY"
        minDate={moment('1987-02-26')}
      />);
  }
}

export default DatepickerComponent;