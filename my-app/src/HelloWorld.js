import React from 'react'

export class HelloWorld extends React.Component {

    render() {
        const grettering = this.props.grettering.split(``)
        const letters = grettering.map((letter, index)=> <h1 style={{ animationDelay: "calc(.1s * "+ index+")" }}> {letter} </h1> )
        console.log(grettering)

        return <div className='waviy'>
           {letters}
        </div>
    }
}
