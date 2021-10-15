import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'John Smith',
          salary: 1000,
          increase: false,
        },
        {
          id: 2,
          name: 'Ricardo Rodriguez',
          salary: 1500,
          increase: false,
        },
        {
          id: 3,
          name: 'Kuzya Babkin',
          salary: 3000,
          increase: false,
        },
      ],
    };
  }

  deleteEmployee = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addEmployee = (name, salary) => {
    this.setState(({ data }) => {
      const newId = data[data.length - 1].id + 1;
      return {
        data: [...data, { id: newId, name, salary, increase: false }],
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className='app'>
        <AppInfo />

        <div className='search-panel'>
          <h2>Поиск</h2>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList employees={data} handleDelete={this.deleteEmployee} />
        <EmployeesAddForm handleAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
