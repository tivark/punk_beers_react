import React from 'react';
import './App.css';
import TopPanel from "./components/topPanel/TopPanel";
import Content from "./components/content/Content";
import ApiService from "./api/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      perPage: 24,
      items: [],
      hasNext: false
    }

    this.apiService = new ApiService('https://api.punkapi.com/v2/beers');
    this.sortMethods = {
      abvAsc: this.sortAbvAsc.bind(this),
      abvDesc: this.sortAbvDesc.bind(this),
      ibuAsc: this.sortIbuAsc.bind(this),
      ibuDesc: this.sortIbuDesc.bind(this)
    }
  }

  componentDidMount() {
    this.getItems();
  }

  nextPage() {
    const pageNum = this.state.pageNumber + 1;
    this.setState({pageNumber: pageNum}, () => {
      this.getItems();
    });
  }

  previousPage() {
    const pageNum = this.state.pageNumber - 1;
    this.setState({pageNumber: pageNum}, () => {
      this.getItems()
    });

  }

  sortAbvAsc() {
    this.setState({items: this.state.items.sort((el1, el2) => (el1.abv - el2.abv))});
  }

  sortAbvDesc() {
    this.setState({items: this.state.items.sort((el1, el2) => (el2.abv - el1.abv))});
  }

  sortIbuAsc() {
    this.setState({items: this.state.items.sort((el1, el2) => (el1.ibu - el2.ibu))});
  }

  sortIbuDesc() {
    console.log('ibu desc');
    this.setState({items: this.state.items.sort((el1, el2) => (el2.ibu - el1.ibu))});
  }

  async getItems() {
    this.apiService.setParams(this.state.pageNumber, this.state.perPage);
    const receivedItems = await this.apiService.get();

    let hasNextPage;
    if (this.state.perPage % receivedItems.length === 0) {
      hasNextPage = true;
    }

    this.setState({items: receivedItems, hasNext: hasNextPage});
  }

  render() {
    return (
      <div className="main-wrapper">
        <TopPanel
          currentPage={this.state.pageNumber}
          hasNext={this.state.hasNext}
          nextHandler={this.nextPage.bind(this)}
          prevHandler={this.previousPage.bind(this)}
          sortMethods={this.sortMethods}
        />
        <Content items={this.state.items}/>
      </div>
    )
  }
}

export default App;
