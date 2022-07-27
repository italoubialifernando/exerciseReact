import React from 'react'

export class HelloWorld extends React.Component {
    render() {
        return <div>
            {!!this.props.name && <h1>hellow, {this.props.name}!</h1>}
            {!this.props.name && <h1>hellow, nobody !</h1>}
        </div>
    }
}

