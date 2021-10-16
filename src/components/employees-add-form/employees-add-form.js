import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let { name, salary } = this.state;
    name = name.trim();
    salary = salary.trim();

    if (!name || name.length < 4 || !salary) {
      return;
    }

    this.props.handleAddEmployee(name, salary);
    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className='app-add-form'>
        <h3>Добавление нового сотрудника</h3>
        <form className='add-form d-flex' onSubmit={(e) => this.handleFormSubmit(e)}>
          <input
            type='text'
            className='form-control new-post-label'
            name='name'
            value={name}
            placeholder='Имя'
            onChange={(e) => this.handleInputChange(e)}
          />
          <input
            type='number'
            className='form-control new-post-label'
            name='salary'
            value={salary}
            placeholder='З/П в $'
            onChange={(e) => this.handleInputChange(e)}
          />

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
