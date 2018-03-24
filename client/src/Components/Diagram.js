import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid } from 'recharts';
class Diagram extends Component {

    onlyTheFirst(table) {
        if (table.length > 10) {
            return table.slice(0, 10)
        }
        else {
            console.log(table);
            return table.slice(0, table.length)
        }
    }

    choseAcolor(table, index) {
        var max = 0;
        var min = 1000;
        for (var elem of table) {
            if (elem.doc_count > max) {
                max = elem.doc_count
            }
            if (elem.doc_count < min) {
                min = elem.doc_count
            }
        }
        if (table[index].doc_count >= (max - (max - min) / 6)) {
            return '#800000'
        }
        else if ((table[index].doc_count >= (max - 2 * (max - min) / 6)) && (table[index].doc_count < (max - (max - min) / 6))) {
            return '#FF4500'
        }
        else if ((table[index].doc_count >= (max - 3*(max - min) / 6)) && (table[index].doc_count < (max - 2*(max - min) / 6))) {
            return '#FFA500'
        }
        else if ((table[index].doc_count >= (max - 4*(max - min) / 6)) && (table[index].doc_count < (max - 3*(max - min) / 6))) {
            return '#FFD600'
        }
        else if ((table[index].doc_count >= (max - 5*(max - min) / 6)) && (table[index].doc_count < (max - 4*(max - min) / 6))) {
            return '#61bf93'
        }
        else {
            return '#000000'
        }


    }
    render() {
        return (
            <BarChart
                width={900}
                height={260}
                data={this.onlyTheFirst(this.props.data)}
                margin={{ top: 5, right: 0, left: 0, bottom: 25 }}>
                <XAxis
                    dataKey="key"
                    fontFamily="sans-serif"
                    tickSize
                    dy='25'
                />
                <YAxis />
                <CartesianGrid
                    vertical={false}
                    stroke="#ebf3f0"
                />
                <Bar
                    dataKey="doc_count"
                    barSize={160}
                    fontFamily="sans-serif"

                >
                    {
                        this.onlyTheFirst(this.props.data).map((entry, index) => (
                            <Cell fill={this.choseAcolor(this.onlyTheFirst(this.props.data), index)} />
                        ))
                    }
                </Bar>
            </BarChart>
        );
    }

}

export default Diagram;














