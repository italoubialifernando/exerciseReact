import React from 'react'

export class Wellcome extends React.Component {
    render() {
        return <div className='welcome'>

            {!!this.props.name && <h1>Hellow, {this.props.name}!</h1>}
            {!this.props.name && <h1>Hellow, nobody !</h1>}
            {this.props.name === "john"
            
            ?   this.props.age > 18 && this.props.age < 65
             ?   <p>your age is? {this.props.age}</p>
             : <p>You are very <strong>LUCKY</strong></p>
            
            :
            <p>john?</p> }
        </div>
    }
}

