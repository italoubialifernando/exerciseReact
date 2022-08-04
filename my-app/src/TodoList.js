import React from "react";



let list = ["buy milk", "buy another milk", "drink more milk"]

export class TodoList extends React.Component {
    state = {
        addListItem: '',
        list : list
    }


    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            addListItem: value
        })
    }

    HandleItemList = () => {
        list.push(this.state.addListItem)
        this.setState({
            addListItem: '',
            list:list
        })
        this.forceUpdate()
        console.log(list, this.state.list)
    }
    HandleClearList = () => {
        list=[]
        this.setState({
            list:[]
        })
        this.forceUpdate()
    }

    HandleRemove = (e) => {
        ((e.target).parentNode).remove()
    }
    


    render() {
        return (
            <div>
                <ul>
                    {this.props.render(this.state.list)} 
                </ul>
               <input
                    name="addListItem,"
                    value={this.state.addListItem}
                    onChange={this.handleInputChange}
                />
                <button on onClick={this.HandleItemList}>add list item</button>
                <button on onClick={this.HandleClearList}>Clear list</button>
            </div>
        )
    }
}