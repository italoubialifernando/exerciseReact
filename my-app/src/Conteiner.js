import React from "react";

export class Conteiner extends React.Component {
    render() {
        return (
            <div className="conteiner">
                <div className="conteiner-title" >
                    {this.props.title}
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )

    }
}