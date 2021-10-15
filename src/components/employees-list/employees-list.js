import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ employees }) => {
  return (
    <ul className='app-list list-group'>
      {employees.map((item) => (
        <EmployeesListItem {...item} />
      ))}
    </ul>
  );
};

export default EmployeesList;
