import React from './node_modules/react';
import {createStore} from "./node_modules/redux";
import {add,reduce} from '../ConsetVriable'

const init = {
    count: 0,
};

function add(number){
    return {
        type: add,
        number,
    }
}

function reduce(number){
    return {
        type: reduce,
        number
    }
}

function countReducer(state = init, actions){
    switch (actions.type) {
        case add:
            return {
                ...state,
                count: state.count + parseInt(actions.number, 10),
            };
        case reduce:
            return {
                ...state,
                count: state.count - parseInt(actions.number, 10),
            };
        default:
            return state;
    }
}

const stores = createStore(countReducer);

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            count: 0,
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                count: store.getState().count,
            });
        });
    }

    onChangeNumber(e){
        this.setState({
            number: e.target.value
        });
    }

    render (){
        const {
            counts,
            number
        } = this.state;
        return (
            <div>
                <p>result is: {counts}</p>
                <input type="text" value={number} onChange={this.onChangeNumber.bind(this)}>
                    </input>             
                <button type="button" onClick={() => {
                    stores.dispatch(add(number))
                }}><h2>+</h2></button>
                <button type="button" onClick={() => {
                    stores.dispatch(reduce(number))
                }}><h2>-</h2></button>
            </div>
        );
    }
}