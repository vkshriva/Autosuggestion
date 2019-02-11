import React, { Component } from 'react'

export default class TableList extends Component {

     state={
         tableListData:this.props.tableListData
     }

    render() {
        //console.log('tableListData1 in render',this.props.tableListData)
        return (
            <div className="col-sm-12">
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
             <div className="text-right">
             <button className="btn btn-info" type="reset" onClick={this.props.handleReset}>Reset</button>
                </div>
            </div>
        )
    }
}