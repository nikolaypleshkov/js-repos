import React, { Component } from 'react'
import Dashboard from './Dashboard';
import { Ably } from '../../server'
import "./voting.css";

let realTime = null;
let votingChannel = null;
class Voting extends Component {
    
    componentDidMount(){
        realTime = new Ably.RealTime({ authUrl: "/publish" });
        realTime.connection.once("conntected", () => {
            votingChannel = realTime.channels.get("Voting-System");
        });
    }

    clickHandler(card){

        votingChannel.publish("vote", card.value, (err) => {
            console.log("err", err);
        });
    }

    componentWillUnmount(){
        realTime.connection.off()
      }

    clickHandler = (card) => {
        if(this.state.flipped){
            return;
        }
        this.setState({
            flipped: card,
        });
    };
    
    render() {
        const hasVoted = !!this.state.flipped;
        return (
    <React.Fragment>
        <h1 className="voting-heading">Vote for your favourite team</h1>
        <div className="voting-main">
          {this.state.cards.map((card) => {
            return (
              <section key={card.id} className="card-container">
                <div
                  className={`card ${
                    this.state.flipped === card ? "flipped" : ""
                  } ${hasVoted ? "remove-mouse-pointer" : "pointer"}`}
                  onClick={() => this.clickHandler(card)}
                >
                  <div className="front">{card.name}</div>
                  <div className="back">Thanks for voting </div>
                </div>
              </section>
            );
          })}
        </div>
        <button className="refresh-btn" onClick={()=>this.setState({flipped:null})}>Vote Gain</button>
        <p><strong>You can vote again by clicking this button to see this demo working.</strong></p>
                <Dashboard />
            </React.Fragment>
        )
    }
}

export default Voting;