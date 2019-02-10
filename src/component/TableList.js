import React, { Component } from 'react'

export default class TableList extends Component {


    render() {
        //console.log('tableListData1 in render',this.props.tableListData)
        return (
            <table id="simple-board" className="table table-bordered">
                     <tbody>
                    {this.props.tableHeader.map((header) => {

                        return (
                        <tr key={header}>
                        <th >
                            {header} :
                        </th>
                        <td >{this.props.tableListData[header]}</td>
                        </tr>
                        )
                    })
                    }
              </tbody>
            </table>
        )
    }
}