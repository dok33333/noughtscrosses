import React from 'react';

class InputTextForm extends React.Component {

    render() {
        return(
            <div className='input-div'>
                <label>{this.props.data.label}</label>
                <input
                    type="text"
                    className="text-input center text"
                    name={this.props.data.player.name}
                    id={this.props.data.player.name}
                    value={this.props.data.player.value}
                    onChange={this.props.data.handleChange}
                    required
                />
            </div>
        )
    }
}

export default (InputTextForm)