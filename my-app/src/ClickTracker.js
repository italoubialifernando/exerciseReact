import React from "react";

export class ClickTracker extends React.Component {
    state = {
        buttonPress: "button ?"
    }


    handleButton = (e)=> {
        this.setState(() => {
            return {
                buttonPress: e.target.name
            }
        })
     
    }


    render  () {
        return (
            <div>
                <button name="Jack Daniel's" onClick={this.handleButton}>Jack Daniel's</button>
                <button name="The Glenlivet" onClick={this.handleButton}>The Glenlivet</button>
                <button name="Johnnie Walker" onClick={this.handleButton}>Johnnie Walker</button>
                <h1>You press: { this.state.buttonPress}</h1> 
            </div>)
    }
}

