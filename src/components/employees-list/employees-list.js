import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({ employees, handleDelete, handleToggleProp }) => {
  return (
    <ul className='app-list list-group'>
      {employees.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            key={id}
            {...itemProps}
            handleDelete={() => handleDelete(id)}
            handleToggleProp={(e) =>
              handleToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
            }
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
