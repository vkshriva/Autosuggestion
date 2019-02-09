import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';


export default class AutoSuggestionInput extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.typeahead.getInstance().clear()
        this.props.handleAutoSuggestionSelectedVal(this.state.selectedValue)
    }


    state = {
        selectedValue: ""
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.dropDownSelectedValue !== this.props.dropDownSelectedValue) {
            this.typeahead.getInstance().clear()
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-11">
                    <Typeahead
                        onChange={(selectedValue) => {
                            this.setState({ selectedValue });
                        }}
                        options={this.props.suggestionList}
                        selected={this.state.selectedValue}
                        //clearButton
                        ref={(typeahead) => this.typeahead = typeahead}
                    />
                </div>
                <div className="col-sm-1">
                    <a href="#" className="btn btn-info btn-lg" onClick={this.handleClick}>
                        <span className="glyphicon glyphicon-plus"></span>+
                    </a>
                </div>
            </div>
        )
    }
}