import axios from 'axios';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PhoneDetail from './components/PhoneDetail';
import PhoneList from './components/PhoneList';
import './stylesheets/App.scss';

class App extends React.Component{
constructor(props) {
  super(props);
  this.state={
    phones :[],
    isLoading: false,
  }
  this.renderRouterDetail = this.renderRouterDetail.bind(this);
  this.isLoadingChange = this.isLoadingChange.bind(this);
}

componentDidMount(){
  axios.get('http://localhost:3002/phones')
  .then(res=>{
    const phones = res.data;
    console.log(phones)
    this.setState({
      phones:phones, 
      isLoading: false})
  })
  .catch((err) => console.log(err));
  this.isLoadingChange()
}
isLoadingChange() {
  this.setState({ isLoading: true })
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
     <Header/>
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
