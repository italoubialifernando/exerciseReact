import React from "react";

export class Conteiner extends React.Component {
    render() {
        return (
        <div className="conteiner">
            {this.props.children}
        </div>
        )

    }
}