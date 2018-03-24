import React, { Component } from 'react';
import { DropdownItem,DropdownMenu } from 'reactstrap';

class DropdownMenuWithItems extends Component {

    render() {
        if (this.props.countries !== null) {
            let rows = [];
            this.props.countries.forEach((element, index) => {
                rows.push(<DropdownItem onClick={this.props.onSelectChange}>{element}</DropdownItem>);
            });
            return (
                <DropdownMenu>
                    {rows}
                </DropdownMenu>
            );
        }
        else {
            return null;
        }
    }
}

export default DropdownMenuWithItems;