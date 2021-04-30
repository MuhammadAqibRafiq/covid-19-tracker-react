import React,{useState} from 'react';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import Country from './Components/Country/Country';

import {fetchData} from './api';

import styles from './App.module.css'

class App extends React.Component {
  
state = {
  data:{},
  country: '',
}

async componentDidMount(){
  const reqData = await fetchData();
  // console.log(reqData);
  this.setState({data:reqData  });
}

handleCountryChange = async (country) => {
  const reqData = await fetchData(country);
  this.setState({data:reqData , country:country });
}

  render() {

    const {data,country} = this.state
    return (
      <div className={styles.container}>

        <Cards data={data}/>
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart  data={data} country = {country} />
        
        
      </div>
    )
  }
}

export default App;
