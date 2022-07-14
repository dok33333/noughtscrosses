import React from 'react';
import InputTextForm from './InputTextForm';

class Settings extends React.Component {

    render() {
        return (
            <form className='center padding-bottom-10'>
                <InputTextForm data={{ player: this.props.data.playerX, handleChange: this.props.data.handleChange, label: "Игрок X: " }} />
                <InputTextForm data={{ player: this.props.data.playerO, handleChange: this.props.data.handleChange, label: "Игрок O: " }} />
                <div className='center again-button-div'>
                    <button className='button' onClick={e => this.props.data.savePlayers(e)} disabled={this.props.data.isButtonDisabled()}>Сохранить</button>
                </div>
            </form>
        )
    }
}

export default (Settings);