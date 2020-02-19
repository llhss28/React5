import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            dice: [0,0,0,0,0,0]
        }
        this.diceroll = this.diceroll.bind(this)
    }
    diceroll(){
        const updateddie = this.state.dice.map(function(die){
            die = Math.ceil(Math.random()*6)
            console.log(die)
            return die
        })
        this.setState({dice: updateddie}, ()=> console.log(this.state))
        
    }
    render(){
        return(
            <div>
                <h1>{this.state.dice}</h1>
                <button onClick = {this.diceroll}>Click me</button>
            </div>
        )
    }
}


export default App