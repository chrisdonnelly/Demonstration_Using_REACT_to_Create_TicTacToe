import React from 'react';
import Tile from './Tile.jsx';

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            board: [
                null, null, null,
                null, null, null,
                null, null, null
            ]
        }
    }

    render() {
        return (
            <div id="board">
                <h3>This is a board</h3>
                {this.state.board.map((value, index) => {
                    return (
                        <Tile
                            recordPlayerMove={this.props.recordPlayerMove}
                            key={index}
                            location={index}
                            value={value}
                        />)
                })
                }
                </div>
        );
    }
}

export default Board;