import React from "react";
import { ClickTracker } from "./ClickTracker";
import { Wellcome } from "./Wellcome";

export class InteractiveWelcome extends React.Component {
    state = {
        WelcomeName: "",
        age: ""
    }

    HandleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        
        this.setState({
            [name] : value
        })

    }

    render() {
        return (
            <div>
                <Wellcome name={this.state.WelcomeName} age={this.state.age} />
                <form>
                    <input placeholder="Your name is john?" name="WelcomeName" value={this.state.WelcomeName} onChange={this.HandleInputChange} />
                    <input placeholder="age?" name="age" value={this.state.age} onChange={this.HandleInputChange} />
                </form>
                <ClickTracker />
            </div>)
    }
}
