import React from 'react';
import Board from '../components/Board.jsx';
import Tile from '../components/Tile.jsx';

class TictactoeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            playerX: 0,
            playerO: 0,
            winningNumbers: [],
            movesCounter: 0,
            winner: null
        }

    }

    recordPlayerMove(tileIndex) {
        let score = this.state.playerX + tileIndex;
        this.setState({playerX: score })
    }

    render() {
        return (
            <div className="game">
                <div className="header">
                    <h2>TicTacToe Container</h2>
                </div>
                <Board />
                {this.state.board.map(function (value, index) {
                    return (
                        <Tile
                            key={index}
                            location={index}
                            value={value}
                            />
                    )})
                }
            </div>
        );
    }
}

export default TictactoeContainer;