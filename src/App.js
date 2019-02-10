import React, { Component } from 'react';
import './App.css';

import AutoSuggestionInput from './component/AutoSuggestionInput'
import Dropdown from './component/Dropdown'
import { dummyData } from '././data/dummyData'
import TableList from './component/TableList';

class App extends Component {
  constructor(props) {
    super(props)
    var tableListData = {
      [dummyData["dropDown1"][0]]: "",
      [dummyData["dropDown1"][1]]: "",
      [dummyData["dropDown1"][2]]: "",
      [dummyData["dropDown2"][0]]: "",
      [dummyData["dropDown2"][1]]: "",
      [dummyData["dropDown2"][2]]: ""
    }

    this.state = {
      dropDown1: dummyData["dropDown1"],
      suggestionList1: [],
      dropDown1Selectedval: "",
      dropDown2: dummyData["dropDown2"],
      suggestionList2: [],
      dropDown2Selectedval: "",
      tableListData: tableListData,
      tableHeader:[...dummyData["dropDown1"],...dummyData["dropDown2"]]

    }
    this.handleAutoSuggestionSelectedVal1 = this.handleAutoSuggestionSelectedVal1.bind(this)
    this.handleAutoSuggestionSelectedVal2 = this.handleAutoSuggestionSelectedVal2.bind(this)
    this.handleDropdownSelect1 = this.handleDropdownSelect1.bind(this)
    this.handleDropdownSelect2 = this.handleDropdownSelect2.bind(this)
    //window.dummyData = dummyData

  }




  handleAutoSuggestionSelectedVal1(selectedVal) {
    var tableListData = this.state.tableListData
    tableListData[this.state.dropDown1Selectedval] = selectedVal
    this.setState({ tableListData })
    //console.log('tableListData1',tableListData1)
    //window.tableListData1=tableListData1

  }

  handleAutoSuggestionSelectedVal2(selectedVal) {
    var tableListData = this.state.tableListData
    tableListData[this.state.dropDown2Selectedval] = selectedVal
    this.setState({ tableListData })
    //console.log('tableListData1',tableListData1)
    //window.tableListData1=tableListData1

  }


  handleDropdownSelect1(selectedVal) {
   // console.log(`In  handleDropdownSelect1 of App.js selectedValue`, selectedVal)
    this.setState({ dropDown1Selectedval: selectedVal })
    this.setState({ suggestionList1: dummyData[dummyData["dropDownAutoSuggestionMap"][selectedVal]] })
    //console.log(dummyData[dummyData["dropDownAutoSuggestionMap"][selectedVal]])
  }
  handleDropdownSelect2(selectedVal) {
   // console.log(`In  handleDropdownSelect1 of App.js selectedValue`, selectedVal)
    this.setState({ dropDown2Selectedval: selectedVal })
    this.setState({ suggestionList2: dummyData[dummyData["dropDownAutoSuggestionMap"][selectedVal]] })
    //console.log(dummyData[dummyData["dropDownAutoSuggestionMap"][selectedVal]])
  }



  render() {
    return (
      <div className="fluid-container">
      <div className="row">
       <div className="col-sm-2">
        <Dropdown dropDownList={this.state.dropDown1} handleDropdownSelect={this.handleDropdownSelect1} />
        </div>
        <div className="col-sm-4">
        <AutoSuggestionInput suggestionList={this.state.suggestionList1}
          handleAutoSuggestionSelectedVal={this.handleAutoSuggestionSelectedVal1}
          dropDownSelectedValue={this.state.dropDown1Selectedval} />
          </div>
 
        <div className="col-sm-2">
        <Dropdown dropDownList={this.state.dropDown2} handleDropdownSelect={this.handleDropdownSelect2} />
        </div>
        <div className="col-sm-4">
        <AutoSuggestionInput suggestionList={this.state.suggestionList2}
          handleAutoSuggestionSelectedVal={this.handleAutoSuggestionSelectedVal2}
          dropDownSelectedValue={this.state.dropDown2Selectedval} />
          </div> 

          </div>
          <div className="row table-list" >
          <div className="col-sm-6">
           <TableList tableHeader={this.state.tableHeader} tableListData={this.state.tableListData} />
        </div>

        </div>
      </div>
    );
  }
}

export default App;
