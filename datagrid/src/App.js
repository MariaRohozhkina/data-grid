import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import { people } from './components/table/table-body/info';

import Table from './components/table/table-body';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSort = this.onSort.bind(this);
    this.state = {
      sort: 'asc', 
      sortField: 'id', 
      data: people,
    }
  }

  onSort = sortField => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField: sortField
    })
  }

  render() {
  return (
   <Fragment>
     <Table 
     onSort={this.onSort} 
     data={this.state.data}
     sort={this.state.sort}
     sortField={this.state.sortField}/>
   </Fragment>
  );
  }
}

export default App;
