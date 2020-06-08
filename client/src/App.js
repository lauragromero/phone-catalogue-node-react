import axios from 'axios';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';
import PhoneList from './components/PhoneList/PhoneList';
import './stylesheets/App.scss';

class App extends React.Component{
constructor(props) {
  super(props);
  this.state={
    phones :[]
  }
  this.renderRouterDetail = this.renderRouterDetail.bind(this); 
}

componentDidMount(){
  axios.get('http://localhost:3002/phones')
  .then(res=>{
    const phones = res.data;
    console.log(phones)
    this.setState({phones:phones})
  })
  .catch((err) => console.log(err));
}
renderRouterDetail(props){
  const routerId = props.match.params.id;
  return <PhoneDetail phoneDetail ={routerId}
                      phones={this.state.phones}
                          />
}

  render(){
    console.log(this.state.phones)
    return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
          <Route path="/" exact>
            <PhoneList
              phonesList= {this.state.phones}/>
          </Route>
        <Route path="/phone/:id" render={this.renderRouterDetail}></Route>
        </Switch>
    </div>
  );}
}

export default App;
