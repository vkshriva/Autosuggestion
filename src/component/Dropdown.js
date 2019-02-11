import React, { Component } from 'react'

export default class Dropdown extends Component {

    state = {
        dropDownList: this.props.dropDownList
    }

    render() {
        return (
            <div>
                <div>
                    <select className="col-sm-12 browser-default custom-select" onChange={(event) => { this.props.handleDropdownSelect(event.target.value) }}>
                        <option>Select</option>
                        {this.state.dropDownList.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>
                </div>
            </div>
        )
    }
}