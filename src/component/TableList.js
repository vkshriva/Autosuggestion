import React, { Component } from 'react'

export default class TableList extends Component {


    render() {
        //console.log('tableListData1 in render',this.props.tableListData)
        return (
            <table id="simple-board" className="table table-bordered">
                <thead><tr>
                    {this.props.tableHeader.map((header) => {
                        return (<th key={header}>
                            {header}
                        </th>)
                    })
                    }
                </tr></thead>
                <tbody>{<tr>
                    {this.props.tableHeader.map((val) => {
                        return (
                            <td key={val}>{this.props.tableListData[val]}</td>
                        )
                    })}
                </tr>}
                </tbody>

            </table>
        )
    }
}