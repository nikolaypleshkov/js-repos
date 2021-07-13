import { Doughnut} from  'react-chartjs-2';
import React, { Component } from 'react'
import { Ably } from '../../server'

let realTime = null;
let votingChannel = null;
class Dashboard extends Component {

    componentDidMount(){
        realTime = new Ably.Realtime({ authUrl: "/subscribe"});
        realTime.connection.once("connected", () => {
            const votingChannel = realTime.channels.get("Voting-System");
            votingChannel.subscribe("vote", (msg) => {
                this.setState({
                    votes:{
                        ...this.state.votes,
                        [msg.data]: this.state.votes[msg.data] + 1,          
                    },
                });
            });
        });
    }

    componentWillUnmount(){
        votingChannel.unsubscribe()
         realTime.connection.off()
       }

    state = {
        votes: {
            javascript: 0,
            typescript: 0,
            ruby: 0,
        },
    };

    render() {
        const data = {
            labels: ["JavaScript", "TypeScript", "Ruby"],
            datasets:[
                {
                    barPercentage: 1,
                    backgroundColor: ["#FF6384", "#4BC0C0", "FFCE56"],
                    data: [
                        this.state.votes.javascript,
                        this.state.votes.typescript,
                        this.state.votes.ruby,
                    ],
                },
            ],
        };

        const options = {
            title: {
                display: true,
                text: "Voting Dashboard",
                fontSize: 25,
                fontColor: "#CB0F33",
            },
            layout: {
                padding: {
                    top: 50,
                }
            }
        };
        return <Doughnut data={data} options={options} />;
    }
}

export default Dashboard;
