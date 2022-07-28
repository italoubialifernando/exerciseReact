import React from 'react'

export class Wellcome extends React.Component {
    render() {
        return <div>
            {!!this.props.name && <p>hellow, {this.props.name}!</p>}
            {!this.props.name && <h1>hellow, nobody !</h1>}
            <p>your age is? {this.props.age}</p>
        </div>
    }
}

