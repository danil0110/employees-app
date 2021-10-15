import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ employees }) => {
  return (
    <ul className='app-list list-group'>
      {employees.map((item) => {
        const { id, ...itemProps } = item;
        return <EmployeesListItem key={id} {...itemProps} />;
      })}
    </ul>
  );
};

export default EmployeesList;
