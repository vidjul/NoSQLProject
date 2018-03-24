import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid} from 'recharts';
import CustomizedLabel from './CustomizedLabel';
class Diagram extends Component {
    constructor(props) {
        super(props);

        this.loadData = this.loadData.bind(this);
        this.state = {
            data: null,
        
        };
    }

    loadData(){
        this.setState({data : this.props.loadData()}) ;
    }

    onlyTheFiveFirst(table){
        if(table.length > 10)
        {
            return table.slice(0,10)
        }
        else
        {
            console.log(table);
            return table.slice(0,table.length)
        }
    }

    render() {
        return (
            <BarChart
                width={900}
                height={260}
                data={this.onlyTheFiveFirst(this.props.data)}
                margin={{ top: 5, right: 0, left: 0, bottom: 25 }}>
                <XAxis
                    dataKey="key"
                    fontFamily="sans-serif"
                    tickSize
                    dy='25'
                />
                <YAxis hide />
                <CartesianGrid
                    vertical={false}
                    stroke="#ebf3f0"
                />
                <Bar
                    dataKey="doc_count"
                    barSize={170}
                    fontFamily="sans-serif"
                    label={<CustomizedLabel/>}
                >
                    {
                        this.onlyTheFiveFirst(this.props.data).map((entry, index) => (
                            <Cell fill={this.onlyTheFiveFirst(this.props.data)[index].doc_count > 20 ? '#61bf93' : '#000000'} />
                        ))
                    }
                </Bar>
            </BarChart>
        );
    }

}

export default Diagram;














