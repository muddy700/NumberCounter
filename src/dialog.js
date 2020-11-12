import React , { Component } from 'react'
import './index.css';


class DialogDiv extends Component {
    constructor (props) {
        super(props);
        this.state = {
            uName : ''
        }
    }
    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            uName : value
        })
    }

    submitName = () => {
        const value1 = this.state.uName
        this.props.onChange(value1)
    }
render(){
    if(this.props.status){
        return( 
            <div className="dialogContainer">
                <h1>Enter Your Name To Login</h1>
                <form name="dialogForm">
                    <input autoFocus type="text" name="userName" className="inputField" onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Login" className="submitButton" onClick={this.submitName} />
                </form>
            </div>
        )  }

        else{
            return null
        }

}  }

export default DialogDiv