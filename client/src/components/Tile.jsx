import React from 'react';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.makeMove = this.makeMove.bind(this);
    }

    makeMove(index) {
        this.props.recordPlayerMove(this.props.location);
    }

    render() {
        return (
            <div className="tile" onClick={this.makeMove}>
                <h4>this is a tile</h4>
            </div>
        );
    }
}

export default Tile;