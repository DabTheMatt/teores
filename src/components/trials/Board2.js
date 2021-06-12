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
    p1g2act: "",
    p2g2act: "",
  };

  handlePlayer1 = () => {

    if (this.state.p1act === 40 && this.state.p2act <= 30) {
        console.log(this.state.p1g1.length - this.state.p2g1.length)
        this.setState({
            p1act: "win"
        })
    
    } else if (this.state.p1act === "AD"){
      let tempP1G2 = [];
    let tempP2G2 = [];

    this.setState({
      showGem2: "gem",
      p1g2act: this.state.score[this.state.p1g2.length + 1],
    });
    tempP1G2.push(this.state.p1g2act);

    this.setState({
      p1g2: [...this.state.p1g2, tempP1G2],
      p2g2act: this.state.score[this.state.p2g2.length],
    });
      
    } else {

    let tempP1G1 = [];
    let tempP2G1 = [];

    this.setState({
      showGem1: "gem",
      p1g2act: this.state.score[this.state.p1g1.length + 1],
    });
    tempP1G1.push(this.state.p1act);

    this.setState({
      p1g1: [...this.state.p1g1, tempP1G1],
      p2g2act: this.state.score[this.state.p2g1.length],
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
  
  
  .name {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 10vw;
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
    content: "";
    height: 10vh;
    width: 100%;
    background: ${setColor.namebcg};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    z-index: 0;
    position: relative;
    border: 1px solid #354f52;
    
  }
  .row::before {
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(255,255,255,0.2), rgba(0,0,0,0));
    z-index: 1;
    position: absolute;
  }
  
  .scored {
    height: 100%;
    width: 10vw;
    background: green;
    opacity:0.7;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    align-self: flex-end;
    margin-left: auto;
  }

  .gem {
    width: 10%;
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
    width: 10%;
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
