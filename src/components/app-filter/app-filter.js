import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
    };
  }

  handleFilterChange = (e) => {
    let filterType = e.target.getAttribute('data-filter');

    this.setState({
      filter: filterType,
    });

    this.props.handleUpdateToggler(filterType);
  };

  render() {
    const { filter } = this.props;
    const btnsData = [
      { dataFilter: 'all', textContent: 'Все сотрудники' },
      { dataFilter: 'rise', textContent: 'На повышение' },
      { dataFilter: 'salary', textContent: 'З/П больше $1000' },
    ];

    const buttons = btnsData.map((btn) => {
      const active = btn.dataFilter === filter;
      const className = active ? 'btn-light' : 'btn-outline-light';

      return (
        <button
          className={`btn ${className}`}
          type='button'
          data-filter={btn.dataFilter}
          onClick={(e) => this.handleFilterChange(e)}
          key={btn.dataFilter}
        >
          {btn.textContent}
        </button>
      );
    });

    return <div className='btn-group'>{buttons}</div>;
  }
}

export default AppFilter;
