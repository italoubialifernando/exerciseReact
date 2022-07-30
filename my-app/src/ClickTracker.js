import React from "react";
import { Message } from "./Message";

export class ClickTracker extends React.Component {
    state = {
        buttonPress: "",
        hidden: "none",
        hidden2: "none"
    }


    handleButton = (e) => {
        this.setState(() => {
            return {
                buttonPress: e.target.name,
                hidden2: "block"
            }
        })

    }
    handleShow = () => {
        this.setState(() => {
            return {
                hidden: "block"
            }
        })
    }


    render() {
        return (
            <div>
                <button className="border-no" onClick={this.handleShow}>
                    <Message />
                </button>
                <div style={{ display: this.state.hidden }}>
                    <button name="Jack Daniel's" onClick={this.handleButton}>Jack Daniel's</button>
                    <button name="The Glenlivet" onClick={this.handleButton}>The Glenlivet</button>
                    <button name="Johnnie Walker" onClick={this.handleButton}>Johnnie Walker</button>
                </div>
                <div style={{ display: this.state.hidden2 }}>
                    <h1>You chose: {this.state.buttonPress}</h1>
                </div>
            </div>)
    }
}

