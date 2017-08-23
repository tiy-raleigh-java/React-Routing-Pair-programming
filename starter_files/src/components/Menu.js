import React, { Component } from 'react';

// IMPORT COMPONENTS
import Appetizers from '../components/Appetizers';
import Entrees from '../components/Entrees';
import Desserts from '../components/Desserts';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appetizers:[],
      entrees: [],
      desserts: [],
    }
  }
  // Lifecycle method
  // Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
  // The response should return an object with appetizers, entres, and desserts.
  // Set these to state.
    componentWillMount() {
    // Set your API URL with the API key.
    let url ="http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      let menu = data[0];
      let appetizers = menu.Appetizers;
      let entrees = menu.Entrees;
      let desserts = menu.Desserts;
      this.setState({appetizers: appetizers, entrees: entrees, desserts: desserts})
    });
  }


  render() {
    // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <h2 className="col-lg-offset-2 headings">Menu</h2>
        <Appetizers appetizers={this.state.appetizers}/>
        <Entrees entrees={this.state.entrees}/>
        <Desserts desserts={this.state.desserts}/>
      </div>
    );
  }
}

export default Menu;
