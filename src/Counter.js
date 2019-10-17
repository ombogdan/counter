import React from "react";
import "./counter.module.css";

//import style from './counter.module.css'

class Counter extends React.Component {
    state = {
         count: 0,
        count1: 0
    };

    numberOfClicks = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    numberOfClick = () => {
        this.setState({
            count1: this.state.count1 + 1,
            alert: function (count1) {
            }
        })
    };
    addNewBtn = () => {
        let btn = document.getElementById('nameBtn').value;
        this.setState({
            btn: <div>
                <button className="newBtn"
                        onClick={() => {
                            this.numberOfClick()
                        }}>
                    {btn}</button>
                <p>{this.state.count1}</p>
            </div>
        })
    };

    render() {
        return (
            // <div className={style.counter}>
            <div className="counter">
                <button
                    onClick={() => {
                        this.numberOfClicks();
                    }}>
                    Count
                </button>
                <p>{this.state.count}</p>
                <button
                    onClick={() => {
                        this.addNewBtn()
                    }}>
                    Add
                </button>
                <textarea id="nameBtn"/>
                    {this.state.btn}
            </div>
        );
    }
}

export default Counter;
