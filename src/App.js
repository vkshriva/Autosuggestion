import React, { Component } from 'react';
import './App.css';

import AutoSuggestionInput from './component/AutoSuggestionInput'
import Dropdown from './component/Dropdown'
import { dummyData } from '././data/dummyData'
import TableList from './component/TableList';

class App extends Component {
  constructor(props) {
    super(props)
    var tableListData1 = {
      [dummyData["dropDown1"][0]]: "",
      [dummyData["dropDown1"][1]]: "",
      [dummyData["dropDown1"][2]]: ""
    }
    this.state = {
      dropDown1: dummyData["dropDown1"],
      suggestionList1: [],
      dropDown1Selectedval: "",
      tableListData1: tableListData1

    }
    this.handleAutoSuggestionSelectedVal1 = this.handleAutoSuggestionSelectedVal1.bind(this)
    this.handleDropdownSelect1 = this.handleDropdownSelect1.bind(this)
    //window.dummyData = dummyData

  }




  handleAutoSuggestionSelectedVal1(selectedVal) {
    var tableListData1 = this.state.tableListData1
    tableListData1[this.state.dropDown1Selectedval] = selectedVal
    this.setState({ tableListData1 })
    //console.log('tableListData1',tableListData1)
    //window.tableListData1=tableListData1

  }

  handleDropdownSelect1(selectedVal) {
    console.log(`In  handleDropdownSelect1 of App.js selectedValue`, selectedVal)
    this.setState({ dropDown1Selectedval: selectedVal })
    this.setState({ suggestionList1: dummyData[dummyData["dropDownAutoSuggestionMap"][selectedVal]] })
    //console.log(dummyData[dummyData["dropDownAutoSuggestionMap"][selectedVal]])
  }


  render() {
    return (
      <div className="container">
      <div className="row">
       <div className="col-sm-4">
        <Dropdown dropDownList={this.state.dropDown1} handleDropdownSelect={this.handleDropdownSelect1} />
        </div>
        <div className="col-sm-8">
        <AutoSuggestionInput suggestionList={this.state.suggestionList1}
          handleAutoSuggestionSelectedVal={this.handleAutoSuggestionSelectedVal1}
          dropDownSelectedValue={this.state.dropDown1Selectedval} />
          </div>
          </div>
          <div className="row table-list" >
          <div className="col-sm-12">
           <TableList tableHeader={dummyData["dropDown1"]} tableListData={this.state.tableListData1} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
