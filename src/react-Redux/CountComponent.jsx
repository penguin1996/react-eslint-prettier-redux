import React from "react";
import {bindActionCreators} from "redux";
import {add, reduce} from "./Counter";
import { connect } from "react-redux";

class CountComponent extends React.Component{

    onChangeNumber(e){
        this.setState({
            number: e.target.value
        });
    }

    constructor(props){
        super(props);
        this.state = {
            number: 0,
            count: 0,
        };

        this.onChangeNumber = this.onChangeNumber.bind(this);
    }

    render (){
        const {count, add, reduce} = this.props;
        const { number } = this.state;
        return (
            <div>
                <p>The Result Is: {count}</p>
                <input type="text" value={number} onChange={this.onChangeNumber}></input>
                <button type="button" onClick={() => {
                    add(number)
                }}>+</button>
                <button type="button" onClick={() => {
                    reduce(number)
                }}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    count: state.counter.count,
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({add, reduce}, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CountComponent); 