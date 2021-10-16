import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  handleInputChange = (e) => {
    const term = e.target.value;
    this.setState({ term });

    this.props.handleUpdateSearch(term);
  };

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='Имя сотрудника...'
        value={this.state.term}
        onChange={(e) => this.handleInputChange(e)}
      />
    );
  }
}

export default SearchPanel;
