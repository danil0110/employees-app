import './app.css';

import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import Modal from '../modal/modal';

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
          rise: true,
        },
        {
          id: 2,
          name: 'Ricardo Rodriguez',
          salary: 1500,
          increase: false,
          rise: false,
        },
        {
          id: 3,
          name: 'Kuzya Babkin',
          salary: 3000,
          increase: false,
          rise: false,
        },
      ],
      term: '',
      filter: 'all',
      onDeleteId: null,
      isModal: false,
    };
  }

  deleteEmployee = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
      isModal: false,
      onDeleteId: null,
    }));
  };

  addEmployee = (name, salary) => {
    this.setState(({ data }) => {
      const newId = data[data.length - 1].id + 1;
      return {
        data: [...data, { id: newId, name, salary, increase: false, rise: false }],
      };
    });
  };

  toggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }

        return item;
      }),
    }));
  };

  updateSalary = (id, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary };
        }

        return item;
      }),
    }));
  };

  getQuantityOfIncrease = () => {
    const { data } = this.state;
    return data.filter((item) => item.increase === true).length;
  };

  getQuantityOfRise = () => {
    const { data } = this.state;
    return data.filter((item) => item.rise === true).length;
  };

  searchEmployees = (items, term) => {
    if (!term) {
      return items;
    }

    return items.filter((currItem) => currItem.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  filterEmployees = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise === true);
      case 'salary':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  handleUpdateSearch = (term) => {
    this.setState({ term });
  };

  handleUpdateToggler = (filter) => {
    this.setState({ filter });
  };

  confirmDeleteEmployee = (id) => {
    this.setState({ isModal: true, onDeleteId: id });

    const name = this.state.data.find((item) => item.id === id);
    this.showModal(`Вы уверены, что хотите удалить ${name}?`, () => this.deleteEmployee(id));
  };

  showModal = () => {
    const { data, isModal, onDeleteId } = this.state;

    if (!isModal) {
      return;
    }

    const { name } = data.find((item) => item.id === onDeleteId);

    return (
      <div className='overlay' onClick={this.hideModal}>
        <Modal
          textContent={`Вы уверены, что хотите удалить ${name}?`}
          callback={() => this.deleteEmployee(onDeleteId)}
          handleHideModal={this.hideModal}
        />
      </div>
    );
  };

  hideModal = () => {
    this.setState({ isModal: false, onDeleteId: false });
  };
  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterEmployees(this.searchEmployees(data, term), filter);

    return (
      <div className='app'>
        <AppInfo
          totalIncreaseEmployees={this.getQuantityOfIncrease}
          totalRiseEmployees={this.getQuantityOfRise}
          employeesCount={data.length}
        />

        <div className='search-panel'>
          <h2>Поиск</h2>
          <SearchPanel handleUpdateSearch={this.handleUpdateSearch} />
          <AppFilter handleUpdateToggler={this.handleUpdateToggler} filter={filter} />
        </div>
        <EmployeesList
          employees={visibleData}
          handleConfirmDelete={this.confirmDeleteEmployee}
          handleDelete={this.deleteEmployee}
          handleToggleProp={this.toggleProp}
          handleUpdateSalary={this.updateSalary}
        />
        <EmployeesAddForm handleAddEmployee={this.addEmployee} />

        {this.showModal()}
      </div>
    );
  }
}

export default App;
