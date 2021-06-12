import React, { Component } from "react";
import styled from "styled-components";
import { setColor } from "../styles";

class Board extends Component {
  state = {
    showGem1: "hide",
    showGem2: "hide",
    showGem3: "hide",
    showSet1: "hide",
    showSet2: "hide",
    showSet3: "hide",
    score: [0, 15, 30, 40, "AD"],
    p1g1: [],
    p1g2: [],
    p1g3: [],
    p2g1: [],
    p2g2: [],
    p2g3: [],
    p1s1: "",
    p1s2: "",
    p1s3: "",
    p2s1: "",
    p2s2: "",
    p2s3: "",
    p1act: "",
    p2act: "",
  };

  handlePlayer1 = () => {

    if ((this.state.p1act === 40 && this.state.p2act <= 30) || (this.state.p1act === "AD" && this.state.p2act === 40)) {
        console.log(this.state.p1g1.length - this.state.p2g1.length)
        this.setState({
            p1act: "win"
        })
    
    } else {

    let tempP1G1 = [];
    let tempP2G1 = [];

    this.setState({
      showGem1: "gem",
      p1act: this.state.score[this.state.p1g1.length + 1],
    });
    tempP1G1.push(this.state.p1act);

    this.setState({
      p1g1: [...this.state.p1g1, tempP1G1],
      p2act: this.state.score[this.state.p2g1.length],
    });
}
  };

  handlePlayer2 = () => {

    if ((this.state.p2g1.length - this.state.p1g1.length) >=2 && this.state.p2g1.length > 2) {
        
        this.setState({
            p2act: "win"
        })
    } else {
    let tempP1G1 = [];
    let tempP2G1 = [];

    this.setState({
      showGem1: "gem",
      p2act: this.state.score[this.state.p2g1.length + 1],
    });
    tempP2G1.push(this.state.p2act);

    this.setState({
      p2g1: [...this.state.p2g1, tempP2G1],
      p1act: this.state.score[this.state.p1g1.length],
    });
}
  };

  render() {
    return (
      <BoardWrapper>
        <div className="top row ">
          <div className="serve">//</div>
          <div className="name">{this.props.player1}</div>
          <div className={this.state.showSet1}>{this.state.p1s1}</div>
          <div className={this.state.showGem1}>{this.state.p1act}</div>
          <div>{this.state.p1g1.length}</div>
          <div className={this.state.showGem2}>{this.state.actGemScore2}</div>
          <div className={this.state.showGem3}>{this.state.actGemScore3}</div>
          <div className="scored" onClick={this.handlePlayer1}>
            Point{" "}
          </div>
        </div>

        <div className="top row ">
          <div className="serve">//</div>
          <div className="name">{this.props.player2}</div>
          <div className={this.state.showSet1}>{this.state.p1s1}</div>
          <div className={this.state.showGem1}>{this.state.p2act}</div>
            <div>{this.state.p2g1.length}</div>
          <div className={this.state.showGem2}>{this.state.actGemScore2}</div>
          <div className={this.state.showGem3}>{this.state.actGemScore3}</div>
          <div className="scored" onClick={this.handlePlayer2}>
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
    background: linear-gradient(230deg, ${setColor.gemBcg}, #426159);
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
    background: linear-gradient(230deg, #426159, ${setColor.gemBcg});
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
