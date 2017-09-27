import React from 'react';

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.makeMove = this.makeMove.bind(this);
    }

    makeMove(index) {
        console.log("player moved here");
        console.log(this.props.location);
        console.log(this.props);
        this.props.recordPlayerMove(index);
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