import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({
  employees,
  handleConfirmDelete,
  handleDelete,
  handleToggleProp,
  handleUpdateSalary,
}) => {
  return (
    <ul className='app-list list-group'>
      {employees.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            key={id}
            {...itemProps}
            handleToggleProp={(e) =>
              handleToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
            }
            handleUpdateSalary={(newSalary) => handleUpdateSalary(id, newSalary)}
            handleConfirmDelete={() => handleConfirmDelete(id)}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
