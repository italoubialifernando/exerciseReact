import React from "react";


let list = ["buy milk", "buy another milk", "drink more milk"]



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
        this.setState({
            addListItem : ''
        })
    }
    HandleClearList =() => {
        list = []
        this.forceUpdate()
    }

    HandleRemove = (e)=>{
        ((e.target).parentNode).remove()
    }
    



    render() {
        

        return(
            <div>
                <ul>
                {list.map((name, index) => (
                <li key={name + index}>{name}<button onClick={this.HandleRemove}>remove</button></li>))}
                </ul>
                <input
                    name="addListItem,"
                    value ={this.state.addListItem}
                    onChange ={this.handleInputChange}
                />
                <button on onClick={this.HandleItemList}>add list item</button>
                <button on onClick={this.HandleClearList}>Clear list</button>
            </div>
        )
    }
}