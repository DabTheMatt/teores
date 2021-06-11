import React, { Component } from "react";
import styled from "styled-components";
import { setColor } from "../styles";

class Board extends Component {
  state = {
    showGem1: "hide",
    showGem2: "hide",
    showGem3: "hide",
    score: [0, 15, 30, 40, 45, 50],
    actScore: "",
    actGemScore2: "",
    scoreCounter: 0,
    scoreCounterGem2: 0,
    actScore2: "",
    scoreCounter2: 0
  };

  showGemPlayer1 = () => {

    if (this.state.actScore === 1) {
        this.setState({
            actScore: "kupa"
        })
    } else {

    if (this.state.actScore <= 30) {
      this.setState({
        showGem1: "gem",
        actScore: this.state.score[this.state.scoreCounter],
        scoreCounter: this.state.scoreCounter + 1,
      });
    } else if (this.state.actScore < 50) {
      this.setState({
        actScore: "AD",
        
      });
    } else  {

        if (this.state.actGemScore2 <= 30) {
        this.setState({
            actScore: 1,
            showGem1: "set",
            showGem2: "gem",
            actGemScore2: this.state.score[this.state.scoreCounterGem2],
            scoreCounterGem2: this.state.scoreCounterGem2 + 1,
        })
    } else if (this.state.actGemScore2 < 50) {
        this.setState({
          actGemScore2: "AD",
          
        });
      }
    }
}
  };

  showGemPlayer2 = () => {
    if (this.state.actScore2 < 45) {
      this.setState({
        showGem1: "gem",
        actScore2: this.state.score[this.state.scoreCounter2],
        scoreCounter2: this.state.scoreCounter2 + 1,
      });
    } else if (this.state.actScore2) {
      this.setState({
        actScore2: 40,
        scoreCounter2: 4,
      });
    }
  };

  render() {
    return (
      <BoardWrapper>
        <div className="top row ">
          <div className="serve">//</div>
          <div className="name">{this.props.player1}</div>

          <div className={this.state.showGem1}>{this.state.actScore}</div>

          <div className={this.state.showGem2}>{this.state.actGemScore2}</div>

          <div className={this.state.showGem3}>{this.state.actGemScore3}</div>


          <div className="scored" onClick={this.showGemPlayer1}>
            Point{" "}
          </div>
        </div>

        <div className="top row ">
          <div className="serve">//</div>
          <div className="name">{this.props.player2}</div>

          <div className={this.state.showGem0}>{this.state.actScore2}</div>
          <div className="scored" onClick={this.showGemPlayer2}>
            Point{" "}
          </div>
        </div>
      </BoardWrapper>
    );
  }
}

export const BoardWrapper = styled.div`
  height: 75vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 2vw;

  .name {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 11vw;
    text-align: left;
  }

  .serve {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 5vw;
    text-align: center;
  }

  .row {
    height: 10vh;
    width: 100%;
    background: ${setColor.namebcg};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.1rem;
  }
  .scored {
    height: 100%;
    width: 10vw;
    background: green;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    align-self: flex-end;
    margin-left: auto;
  }

  .gem {
    width: 10vw;
    text-align: center;
    background: linear-gradient(230deg, ${setColor.gemBcg}, #426159 );
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    animation: showGem 0.1s linear;
  }

  .set {
    width: 10vw;
    text-align: center;
    background: linear-gradient(230deg,  #426159, ${setColor.gemBcg} );
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    animation: showGem 0.1s linear;
  }

  @keyframes showGem {
    0% {
      width: 0vw;
    }

    100% {
      width: 10vw;
    }
  }
`;

export default Board;
