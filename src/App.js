import React, {useState, useEffect} from 'react'
//import axios from 'axios'
import Chart from './components/Chart'
import './App.css'

function updateChart() {
  async function fetchData(){
    const url = 'http://localhost:3001/metrics';
    const response = await fetch(url);
    const datapoints = await response.json();
    console.log(datapoints);
    return datapoints;
  };
  fetchData().then(datapoints => {
    const metric1 = datapoints.metrics.map(
      function(index){
        return index.metric_1;
      })
      console.log(metric1);
  })
  
  
}
/*fetch(".../data.json").then(function(resp) {
  return resp.json();
}).then(function(data) {
  console.log(data);
})*/
const App = () => {
  /*const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/metrics')
      .then(res => {
        console.log(res)
        return res.json();
      })
      .catch(err => {
        console.log(err)
      })
  })*/

  return (
    <div>
      <Chart />
      <button onClick={updateChart}>Fetch</button>
    </div>
  )
}

export default App
