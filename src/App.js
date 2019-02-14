import React, { Component } from 'react';
import './App.css';

import AutoSuggestionInput from './component/AutoSuggestionInput'
import Dropdown from './component/Dropdown'
import { dummyData } from '././data/dummyData'
import TableList from './component/TableList';

const tableListData1 = {
  [dummyData["dropDown1"][0]]: [],
  [dummyData["dropDown1"][1]]: [],
  [dummyData["dropDown1"][2]]: []

}

const tableListData2 = {
  [dummyData["dropDown2"][0]]: "",
  [dummyData["dropDown2"][1]]: "",
  [dummyData["dropDown2"][2]]: ""
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropDown1: dummyData["dropDown1"],
      suggestionList1: [],
      dropDown1Selectedval: "",
      dropDown2: dummyData["dropDown2"],
      suggestionList2: [],
      dropDown2Selectedval: "",
      tableListData1: JSON.parse(JSON.stringify(tableListData1)),
      tableHeader1: [...dummyData["dropDown1"]],
      tableListData2: JSON.parse(JSON.stringify(tableListData2)),
      tableHeader2: [...dummyData["dropDown2"]]

    }
    this.handleAutoSuggestionSelectedVal1 = this.handleAutoSuggestionSelectedVal1.bind(this)
    this.handleAutoSuggestionSelectedVal2 = this.handleAutoSuggestionSelectedVal2.bind(this)
    this.handleDropdownSelect1 = this.handleDropdownSelect1.bind(this)
    this.handleDropdownSelect2 = this.handleDropdownSelect2.bind(this)
    this.handleResetTable1=this.handleResetTable1.bind(this)
    this.handleResetTable2=this.handleResetTable2.bind(this)
    //window.dummyData = dummyData

  }

    handleResetTable1(){
        this.setState({tableListData1:tableListData1})
    }

  handleResetTable2(){
    this.setState({tableListData2:tableListData2})
   }
   
  handleAutoSuggestionSelectedVal1(selectedVal) {
    var tableListData1 = this.state.tableListData1
    var prevArr = tableListData1[this.state.dropDown1Selectedval]
    tableListData1[this.state.dropDown1Selectedval] = [...prevArr,selectedVal]
    this.setState({ tableListData1 })
    //console.log('tableListData1',tableListData1)
    //window.tableListData1=tableListData1

  }

  handleAutoSuggestionSelectedVal2(selectedVal) {
    var tableListData2 = this.state.tableListData2
    tableListData2[this.state.dropDown2Selectedval] = selectedVal
    this.setState({ tableListData2 })
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
      <div className="container border border-secondary">

        <div className="row">
        <div className="col-sm-6 border border-secondary">
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
          <div className="row table-list col-sm-12" >
              <TableList tableHeader={this.state.tableHeader1} tableListData={this.state.tableListData1} 
              handleReset={this.handleResetTable1}/>          
          </div>
        </div>        
        {/*<div className="col-sm-6 border border-secondary">
          <div className="row">
          <div className="col-sm-4">
            <Dropdown dropDownList={this.state.dropDown2} handleDropdownSelect={this.handleDropdownSelect2} />
          </div>
          <div className="col-sm-8">
            <AutoSuggestionInput suggestionList={this.state.suggestionList2}
              handleAutoSuggestionSelectedVal={this.handleAutoSuggestionSelectedVal2}
              dropDownSelectedValue={this.state.dropDown2Selectedval} />
          </div>
          </div>
          <div className="row table-list col-sm-12" >
              <TableList tableHeader={this.state.tableHeader2} tableListData={this.state.tableListData2}
              handleReset= {this.handleResetTable2}/>
           
          </div>
    </div> */}  
        </div>         
      </div>
    );
  }
}

export default App;
