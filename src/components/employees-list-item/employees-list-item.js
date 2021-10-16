import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.salary,
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;

    this.setState({ value });
    this.props.handleUpdateSalary(value);
  };

  render() {
    const { name, handleConfirmDelete, handleToggleProp, increase, rise } = this.props;

    let classNames = 'list-group-item d-flex justify-content-between';
    classNames += increase ? ' increase' : '';
    classNames += rise ? ' like' : '';

    return (
      <li className={classNames}>
        <span className='list-group-item-label' onClick={handleToggleProp} data-toggle='rise'>
          {name}
        </span>
        <input
          type='text'
          className='list-group-item-input'
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn-cookie btn-sm '
            onClick={handleToggleProp}
            data-toggle='increase'
          >
            <i className='fas fa-cookie'></i>
          </button>

          <button type='button' className='btn-trash btn-sm ' onClick={handleConfirmDelete}>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
