import React, { Component } from "react";
import styled from "styled-components";
import {setColor} from "../styles";

class InputForm extends Component {
  state = {
    firstPlayerInput: "",
    secondPlayerInput: "",
    showForm: "show"
  };

  handleFirstInput = (event) => {
    this.setState({
      firstPlayerInput: event.target.value,
    });
  };

  handleSecondInput = (event) => {
    this.setState({
      secondPlayerInput: event.target.value,
    });
  };

  sendPlayers = (e, first, second) => {
    e.preventDefault();
      console.log(first);
    this.props.createPlayers(first, second);
    this.setState({
        firstPlayerInput: "",
        secondPlayerInput: "",
        showForm: "hide"
    })
  }
  render() {
    return (
          <div className={this.state.showForm}>
      <FormWrapper>
        <form 
        onSubmit={e=>this.sendPlayers(e, e.target.firstPlayerInput.value, e.target.secondPlayerInput.value)}>
          <div className="centered">
            <label>1st Player Full Name:</label>
            <input
              type="text"
              value={this.state.firstPlayerInput}
              name="firstPlayerInput"
              onChange={this.handleFirstInput}
            />
          </div>
          <div className="break"></div>
          <div className="centered">
            <label>2st Player Full Name:</label>
            <input
              type="text"
              value={this.state.secondPlayerInput}
              name="secondPlayerInput"
              onChange={this.handleSecondInput}
            />
          </div>
          <div className="break"></div>
          <button>Send the players</button>
        </form>
      </FormWrapper>
          </div>
    );
  }
}

export const FormWrapper = styled.div`
  
  background: ${setColor.mainBcg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 1s linear;
  

  form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 70vw;
    font-size: inherit;
    flex-wrap: wrap;
    
  }

  .show {
      
      animation: hide 2s linear;
  }
  .hide {
        visibility: hidden;
        
    }

    @keyframes hide {
    0% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
  }

  form input {
    width: 60%;
    font-size: inherit;
  }

  form label {
      width: 40%;
  }

  form button {
    font-size: inherit;
    align-self: flex-end;
  }

  .break {
    flex-basis: 100%;
    height: 2vh;
  }

  .centered {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
  }
`;

export default InputForm;
