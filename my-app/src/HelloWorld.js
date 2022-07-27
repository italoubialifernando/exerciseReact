import React from 'react'

export class HelloWorld extends React.Component {
    render() {
        return <div>
            <h1>hellouoa, {this.props.name}</h1>

        </div>
    }
}

