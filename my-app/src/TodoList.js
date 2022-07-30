import React from "react";


const list = ["buy milk", "buy another milk", "drink more milk"]



export class TodoList extends React.Component {
    state ={
        addListItem : ''
    }

    handleInputChange =  (event) => {
       const value = event.target.value 
        this.setState({
            addListItem : value
        })
    }

    HandleItemList =()=>{
        list.push(this.state.addListItem)
        this.forceUpdate()
    }
    



    render() {
        

        return(
            <div>
                <ul>
                <ul>{list.map((name, index) => (<li key={name + index}>{name}</li>))}</ul>
                </ul>
                <input
                    name="addListItem,"
                    value ={this.state.addListItem}
                    onChange ={this.handleInputChange}
                />
                <button on onClick={this.HandleItemList}>add list item</button>
            </div>
        )
    }
}