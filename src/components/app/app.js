import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
  const data = [
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
      increase: true,
    },
    {
      id: 3,
      name: 'Kuzya Babkin',
      salary: 3000,
      increase: false,
    },
  ];

  return (
    <div className='app'>
      <AppInfo />

      <div className='search-panel'>
        <h2>Поиск</h2>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employees={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
