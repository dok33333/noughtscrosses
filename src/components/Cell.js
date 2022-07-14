import React from 'react';

class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            className: this.props.data.className,
        }
    }

    render() {        
        return (
            <div className={this.state.className} onClick={e => this.props.data.handleClick(e, this.props.data.cell, this.props.data.index_row, this.props.data.index_cell)} >
                <div id={"dash-" + this.props.data.index_row + "_" + this.props.data.index_cell} className='dash absolute' style={{display: "none"}}>|</div> 
                <div className='cell absolute'>{this.props.data.cell.symbol}</div>
            </div>
        )
    }
}

export default (Cell);