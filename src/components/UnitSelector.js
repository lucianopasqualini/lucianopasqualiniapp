import React from 'react';
import './components.css';

class UnitSelector extends React.Component {  
    constructor(props) {
    super(props);
    this.state = this.props.stock;
  }

  sumarNumero() {
    if (this.state.number < this.props.initial) {
        this.setState({ number: Number(this.state.number) + 1 });
    }
  }
  restarNumero() {
    if (this.state.number > 0) {
      this.setState({ number: Number(this.state.number) - 1 });
    }
  }

  render() {
    return (
      <div className="itemSelectorBar row align-content-center">
        <button className="col-3 text-center p-0" onClick={this.restarNumero.bind(this)}>-</button>
        <p className="col-6 text-center">{this.state.number}</p>
        <button className="col-3 text-center p-0" onClick={this.sumarNumero.bind(this)}>+</button>
      </div>
    );
  }
}

export default UnitSelector;