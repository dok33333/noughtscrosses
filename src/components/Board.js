import React from 'react';
import Cell from './Cell.js';
import Settings from './Settings.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let initialState = {
    playerX: "X",
    playerO: "O",
    player: { player: "X", namePlayer: "X" },
    isGameOver: false,
    winner: "",
    winnerClass: "",
    squares: [
        Array(3).fill({ symbol: null, weight: 0 }),
        Array(3).fill({ symbol: null, weight: 0 }),
        Array(3).fill({ symbol: null, weight: 0 }),
    ],
    isCreateUsers: false,
};

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(JSON.stringify(initialState));
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.savePlayers = this.savePlayers.bind(this);
        this.isButtonDisabled = this.isButtonDisabled.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    }

    isButtonDisabled(){
        if (initialState.playerX === this.state.playerX && 
            initialState.playerO === this.state.playerO) return true;
        else return false;
    }

    calculateWinner(squares) {
        let row1 = squares[0][0].weight + squares[0][1].weight + squares[0][2].weight;
        let row2 = squares[1][0].weight + squares[1][1].weight + squares[1][2].weight;
        let row3 = squares[2][0].weight + squares[2][1].weight + squares[2][2].weight;
        let column1 = squares[0][0].weight + squares[1][0].weight + squares[2][0].weight;
        let column2 = squares[0][1].weight + squares[1][1].weight + squares[2][1].weight;
        let column3 = squares[0][2].weight + squares[1][2].weight + squares[2][2].weight;
        let diagona1 = squares[0][0].weight + squares[1][1].weight + squares[2][2].weight;
        let diagona2 = squares[0][2].weight + squares[1][1].weight + squares[2][0].weight;
        let summ = row1 + row2 + row3;
        if (row1 === 3 || row2 === 3 || row3 === 3 || column1 === 3 || column2 === 3 || column3 === 3 ||
            diagona1 === 3 || diagona2 === 3) {
            let winner = "Победил игрок X!";
            if (this.state.isCreateUser) winner = "Победил игрок " + this.state.playerX + "!"
            this.setState({
                isGameOver: true,
                winner: winner,
                winnerClass: "winner winner-ok"
            })
        } else if (row1 === 30 || row2 === 30 || row3 === 30 || column1 === 30 || column2 === 30 || column3 === 30 ||
            diagona1 === 30 || diagona2 === 30) {
                let winner = "Победил игрок O!";
                if (this.state.isCreateUser) winner = "Победил игрок " + this.state.playerO + "!"
            this.setState({
                isGameOver: true,
                winner: winner,
                winnerClass: "winner winner-ok"
            })
        } else if (summ === 45 || summ === 54) {
            this.setState({
                isGameOver: true,
                winner: "Ничья!",
                winnerClass: "winner winner-no"
            })
        }

        if (row1 === 3 || row1 === 30) {
            let cell_0_0 = document.getElementById("dash-0_0");
            let cell_0_1 = document.getElementById("dash-0_1");
            let cell_0_2 = document.getElementById("dash-0_2");
            cell_0_0.className += " transform-cell-goriz";
            cell_0_1.className += " transform-cell-goriz";
            cell_0_2.className += " transform-cell-goriz";
            cell_0_0.style.display = "block";
            cell_0_1.style.display = "block";
            cell_0_2.style.display = "block";
        } else if (row2 === 3 || row2 === 30) {
            let cell_1_0 = document.getElementById("dash-1_0");
            let cell_1_1 = document.getElementById("dash-1_1");
            let cell_1_2 = document.getElementById("dash-1_2");
            cell_1_0.className += " transform-cell-goriz";
            cell_1_1.className += " transform-cell-goriz";
            cell_1_2.className += " transform-cell-goriz";
            cell_1_0.style.display = "block";
            cell_1_1.style.display = "block";
            cell_1_2.style.display = "block";
        } else if (row3 === 3 || row3 === 30) {
            let cell_2_0 = document.getElementById("dash-2_0");
            let cell_2_1 = document.getElementById("dash-2_1");
            let cell_2_2 = document.getElementById("dash-2_2");
            cell_2_0.className += " transform-cell-goriz";
            cell_2_1.className += " transform-cell-goriz";
            cell_2_2.className += " transform-cell-goriz";
            cell_2_0.style.display = "block";
            cell_2_1.style.display = "block";
            cell_2_2.style.display = "block";
        } else if (column1 === 3 || column1 === 30) {
            let cell_0_0 = document.getElementById("dash-0_0");
            let cell_1_0 = document.getElementById("dash-1_0");
            let cell_2_0 = document.getElementById("dash-2_0");
            cell_0_0.className += " transform-cell-vertical";
            cell_1_0.className += " transform-cell-vertical";
            cell_2_0.className += " transform-cell-vertical";
            cell_0_0.style.display = "block";
            cell_1_0.style.display = "block";
            cell_2_0.style.display = "block";
        } else if (column2 === 3 || column2 === 30) {
            let cell_0_1 = document.getElementById("dash-0_1");
            let cell_1_1 = document.getElementById("dash-1_1");
            let cell_2_1 = document.getElementById("dash-2_1");
            cell_0_1.className += " transform-cell-vertical";
            cell_1_1.className += " transform-cell-vertical";
            cell_2_1.className += " transform-cell-vertical";
            cell_0_1.style.display = "block";
            cell_1_1.style.display = "block";
            cell_2_1.style.display = "block";
        } else if (column3 === 3 || column3 === 30) {
            let cell_0_2 = document.getElementById("dash-0_2");
            let cell_1_2 = document.getElementById("dash-1_2");
            let cell_2_2 = document.getElementById("dash-2_2");
            cell_0_2.className += " transform-cell-vertical";
            cell_1_2.className += " transform-cell-vertical";
            cell_2_2.className += " transform-cell-vertical";
            cell_0_2.style.display = "block";
            cell_1_2.style.display = "block";
            cell_2_2.style.display = "block";
        } else if (diagona1 === 3 || diagona1 === 30) {
            let cell_0_0 = document.getElementById("dash-0_0");
            let cell_1_1 = document.getElementById("dash-1_1");
            let cell_2_2 = document.getElementById("dash-2_2");
            cell_0_0.className += " transform-cell-135";
            cell_1_1.className += " transform-cell-135";
            cell_2_2.className += " transform-cell-135";
            cell_0_0.style.display = "block";
            cell_1_1.style.display = "block";
            cell_2_2.style.display = "block";
        } else if (diagona2 === 3 || diagona2 === 30) {
            let cell_0_2 = document.getElementById("dash-0_2");
            let cell_1_1 = document.getElementById("dash-1_1");
            let cell_2_0 = document.getElementById("dash-2_0");
            cell_0_2.className += " transform-cell-45";
            cell_1_1.className += " transform-cell-45";
            cell_2_0.className += " transform-cell-45";
            cell_0_2.style.display = "block";
            cell_1_1.style.display = "block";
            cell_2_0.style.display = "block";
        }
    }

    handleClick(e, cell, i_row, i_cell) {
        if (!this.state.winner) {
            let squares = this.state.squares;
            let player = this.state.player;
            if (!cell.symbol) {
                let obj = {}
                if (player.player === "X") obj = { symbol: "X", weight: 1 }
                if (player.player === "O") obj = { symbol: "O", weight: 10 }
                squares[i_row][i_cell] = obj;
            }


            if (player.player === "X" && !cell.symbol) {
                if (!this.state.isCreateUser) {
                    player = { player: "O", namePlayer: "O" };
                } else {
                    player = { player: "O", namePlayer: this.state.playerO };
                }
            }
            else if (player.player === "O" && !cell.symbol) {
                if (!this.state.isCreateUser) {
                    player = { player: "X", namePlayer: "X" };
                } else {
                    player = { player: "X", namePlayer: this.state.playerX };
                }
            }

            this.setState({
                squares: squares,
                player: player
            });

            this.calculateWinner(squares);
        }
    }

    genRow(item, index_row) {
        return (
            <div id={"row_" + index_row} className="flex" key={'key_row_' + index_row}>
                {
                    item.map((cell, index_cell) => (
                        this.genCell(cell, index_cell, index_row)
                    ))
                }
            </div>
        )
    }

    genCell(cell, index_cell, index_row) {
        let className = "cell-bloсk ";

        if (index_row in [1, 2]) className += "cell-border-bottom ";
        if (index_cell in [1, 2]) className += "cell-border-right";

        let data = {
            className: className,
            cell: cell,
            index_row: index_row,
            index_cell: index_cell,
            handleClick: this.handleClick
        }

        return (
            <Cell key={'key_cell_' + index_cell} data={data} />
        )
    }

    resetState(e) {
        e.preventDefault();
        this.setState(JSON.parse(JSON.stringify(initialState)));
        let cell_0_0 = document.getElementById("dash-0_0");
        let cell_0_1 = document.getElementById("dash-0_1");
        let cell_0_2 = document.getElementById("dash-0_2");
        let cell_1_0 = document.getElementById("dash-1_0");
        let cell_1_1 = document.getElementById("dash-1_1");
        let cell_1_2 = document.getElementById("dash-1_2");
        let cell_2_0 = document.getElementById("dash-2_0");
        let cell_2_1 = document.getElementById("dash-2_1");
        let cell_2_2 = document.getElementById("dash-2_2");
        cell_2_0.className = "dash absolute";
        cell_2_1.className = "dash absolute";
        cell_2_2.className = "dash absolute";
        cell_0_0.className = "dash absolute";
        cell_0_1.className = "dash absolute";
        cell_0_2.className = "dash absolute";
        cell_1_0.className = "dash absolute";
        cell_1_1.className = "dash absolute";
        cell_1_2.className = "dash absolute";
        cell_0_0.style.display = "none";
        cell_0_1.style.display = "none";
        cell_0_2.style.display = "none";
        cell_1_0.style.display = "none";
        cell_1_1.style.display = "none";
        cell_1_2.style.display = "none";
        cell_2_0.style.display = "none";
        cell_2_1.style.display = "none";
        cell_2_2.style.display = "none";
    }

    getSettings(e) {
        let settings = document.getElementById("settings_div");
        let settings_img = document.getElementById("settings_img");
        if (settings.style.display === "none") {
            settings.style.display = "block";
            settings_img.className = "settings-img-cross";
        }
        else if (settings.style.display === "block") {
            settings.style.display = "none";
            settings_img.className = "settings-img-gear"
        }
    }

    savePlayers(e) {
        e.preventDefault();

        initialState.player = { player: "X", namePlayer: this.state.playerX }
        initialState.playerX = this.state.playerX;
        initialState.playerO = this.state.playerO;
        initialState.isCreateUsers = true;

        this.setState({
            isCreateUser: true,
            player: { player: "X", namePlayer: this.state.playerX }
        });

        toast.success("Пользователи сохранены.", {position: "top-right", autoClose:4000, hideProgressBar: true, background: 'green'});
    }


    render() {
        let status = 'Следующий ход (' + this.state.player.player + '): ' + this.state.player.namePlayer;

        let data = {
            playerX: {
                value: this.state.playerX,
                name: "playerX"
            },
            playerO: {
                value: this.state.playerO,
                name: "playerO"
            },
            handleChange: this.handleChange,
            savePlayers: this.savePlayers,
            isButtonDisabled: this.isButtonDisabled
        }

        return (
            <>
                <div className='settings-div'>
                    <div id='settings_img' className='settings-img-gear' onClick={e => this.getSettings(e)} />
                </div>
                <div id="settings_div" style={{ display: "none" }}>
                    <Settings data={data} />
                    <hr />
                </div>
                <h3 className='text status'>{status}</h3>
                <div className="text cross-div">
                    {
                        this.state.squares.map((item, index_row) => (
                            this.genRow(item, index_row)
                        ))
                    }
                </div>
                {
                    this.state.isGameOver ?
                        <>
                            <div className={this.state.winnerClass}>
                                {this.state.winner}
                            </div>
                            <div className='center again-button-div'>
                                <button className='button' onClick={e => this.resetState(e)}>Начать заново</button>
                            </div>
                        </>
                        : null
                }
                <ToastContainer />
            </>
        )
    }
}

export default (Board);