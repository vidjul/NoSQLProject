import React, { Component } from 'react';
class CustomizedLabel extends Component {    
    render () {
      const {x, y, fill, value} = this.props;
         return <text 
                 x={x} 
                 y={y} 
                 dy={-4} 
                 fontSize='16' 
                 fontFamily='sans-serif'
                 fill={fill}
                 textAnchor="middle">{value}</text>
    }
  }

export default CustomizedLabel;