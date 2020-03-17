import React, { Fragment, Component } from 'react';
import './App.css';
import _ from 'lodash';
import { people } from './components/table/table-body/info';

import Table from './components/table/table-body';
import SearchString from './components/search-string';
import ToggleButton from './components/toggle-btn';
import EnumSelect from './components/enum-select';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSort = this.onSort.bind(this);
    this.onDataSearch = this.onDataSearch.bind(this);
    this.showActive = this.showActive.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.onClick = this.onClick.bind(this);
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

  onClick = (event) => {
    const checkboxElement = event.target;
    const ell = checkboxElement.closest("tr");
    ell.style.background = '#563d7cab';
    function ss() {
      const result = window.confirm('Удалить выбранный элемент?');
      if (result) {
        ell.parentElement.removeChild(ell);
      } else {
        ell.style.background = 'white';
      }
    }

    setTimeout(ss, 300);
  }

  selectValue = (options) => {
    let orderedData;
console.log(options);
    if (options === null || options[0] === undefined) {
      orderedData = people;
    } else if (options[0].value === 'white' && options.length === 1) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('white')
        })
    } else if (options[0].value === 'black' && options.length === 1) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('black')
        })
    } else if (options[0].value === 'yellow' && options.length === 1) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('yellow')
        })
    } else if (options[0].value === 'white' && options[1].value === 'black' && options.length === 2) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('white') 
        })
        const pp = people.filter(item => {
          return item['colorOfSkin'].toLowerCase().includes('black') 
          });
          orderedData = orderedData.concat(pp);
    } else if (options[0].value === 'white' && options[1].value === 'yellow' && options.length === 2) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('white') 
        })
        const pp = people.filter(item => {
          return item['colorOfSkin'].toLowerCase().includes('yellow') 
          });
          orderedData = orderedData.concat(pp);
    } else if (options[0].value === 'black' && options[1].value === 'yellow' && options.length === 2) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('black') 
        })
        const pp = people.filter(item => {
          return item['colorOfSkin'].toLowerCase().includes('yellow') 
          });
          orderedData = orderedData.concat(pp);
    } else if (options[0].value === 'black' && options[1].value === 'white' && options.length === 2) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('black') 
        })
        const pp = people.filter(item => {
          return item['colorOfSkin'].toLowerCase().includes('white') 
          });
          orderedData = orderedData.concat(pp);
    } else if (options[0].value === 'yellow' && options[1].value === 'black' && options.length === 2) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('yellow') 
        })
        const pp = people.filter(item => {
          return item['colorOfSkin'].toLowerCase().includes('black') 
          });
          orderedData = orderedData.concat(pp);
    } else if (options[0].value === 'yellow' && options[1].value === 'white' && options.length === 2) {
      orderedData = people.filter(item => {
        return item['colorOfSkin'].toLowerCase().includes('yellow') 
        })
        const pp = people.filter(item => {
          return item['colorOfSkin'].toLowerCase().includes('white') 
          });
          orderedData = orderedData.concat(pp);
    } else if (options.length === 3) {
      orderedData = people;
    } 

    this.setState({
      data: orderedData,
    })
  }

  render() {
  return (
   <Fragment>
     <ToggleButton showActive={this.showActive}/>
     <SearchString 
      onDataSearch={this.onDataSearch}/>
       <EnumSelect selectValue={this.selectValue}/>
     <Table 
     onSort={this.onSort} 
     data={this.state.data}
     sort={this.state.sort}
     sortField={this.state.sortField}
     onClick={this.onClick}/>
   </Fragment>
  );
  }
}

export default App;
