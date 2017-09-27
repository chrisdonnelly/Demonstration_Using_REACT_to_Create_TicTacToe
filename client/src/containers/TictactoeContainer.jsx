import React from 'react';
import Board from '../components/Board.jsx';
import Tile from '../components/Tile.jsx';

class TictactoeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            currentPlayer: 'plX',
            playerX: 0,
            playerO: 0,
            winningNumbers: [3, 9, 12, 15, 21],
            movesCounter: 0,
            winner: null
        }
    }

    recordPlayerMove(tileIndex) {
        this.step(tileIndex);
        this.switcher()
    }

    step(tileIndex) {
        let score = null;
        let moves = null;

        if (this.state.currentPlayer === 'plX') {
            score = this.state.playerX + tileIndex;
            moves = this.state.movesCounter += 1;
            this.setState({ playerX: score, movesCounter: moves })
            this.winChecker(score, 'playerX');
        } else {
            score = this.state.playerO + tileIndex;
            moves = this.state.movesCounter += 1;
            this.setState({ playerO: score, movesCounter: moves })
            this.winChecker(score, 'playerO');
        }
        return;
    }

    switcher() {
        if (this.state.currentPlayer === 'plX') {
            this.setState({ currentPlayer: 'plO' })
        } else {
            this.setState({ currentPlayer: 'plX' })
        }
    }

    winChecker(score, player) {
        if (this.state.movesCounter > 4) {
            this.state.winningNumbers.forEach((number) => {
                if (number === score) {
                    console.log("true??")
                    this.setState({ winner: player })
                    alert("The winner is " + player)
                }
            });
        }
    }

    winDeclarer() {
        if (this.state.winner !== null ) {
   
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="game">
                <div className="header">
                    <h2>TicTacToe Container</h2>
                </div>
                <Board recordPlayerMove={this.recordPlayerMove.bind(this)} />
            </div>
        );
    }
}

export default TictactoeContainer;