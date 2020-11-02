import React from 'react';
import './App.css';
import TopPanel from "./components/topPanel/TopPanel";
import Content from "./components/content/Content";
import ApiService from "./api/ApiService";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pageNumber : 1,
      items:[]
    }
    this.apiService = new ApiService('https://api.punkapi.com/v2/beers');
  }

  componentDidMount() {
    this.getItems();
  }

  async getItems(){
    const receivedItems = await this.apiService.get();
    this.setState({items: receivedItems});
  }

  render() {
    return(
      <div className="main-wrapper">
        <TopPanel />
        <Content items={this.state.items} />
      </div>
    )
  }
}

export default App;
