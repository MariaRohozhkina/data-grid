import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import { people } from './components/table/table-body/info';

import Table from './components/table/table-body';
import SearchString from './components/search-string';
import ToggleButton from './components/toggle-btn';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSort = this.onSort.bind(this);
    this.onDataSearch = this.onDataSearch.bind(this);
    this.showActive = this.showActive.bind(this);
    this.state = {
      sort: 'asc', 
      sortField: 'id', 
      data: people,
      checked: 0,
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

  onDataSearch = e => {
    const value = e.target.value;
    const cloneData = this.state.data.concat();
    const orderedData = cloneData.filter(item => {
      return item['name'].toLowerCase().includes(value.toLowerCase())
      || item['country'].toLowerCase().includes(value.toLowerCase())
    })
    
    this.setState({
      data: orderedData,
    })
  }

  showActive = () => {
    const cloneData = this.state.data.concat(); 
    let orderedData;

    if (this.state.checked === 0) {
      orderedData = cloneData.filter(item => {
      return item['activity'].toLowerCase().includes('active')
      })
    } else if (this.state.checked === 1) {
      orderedData = people;
    }

    const checkedval = this.state.checked === 0 ? 1 : 0;

    this.setState({
      checked: checkedval,
      data: orderedData,
    })
  }

  render() {
  return (
   <Fragment>
     <ToggleButton showActive={this.showActive}/>
     <SearchString 
      onDataSearch={this.onDataSearch}/>
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
