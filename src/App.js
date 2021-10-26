import React, {useState, useEffect} from 'react'
//import axios from 'axios'
import Chart from './components/Chart'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  //const [state, setState] = useState({updateChart});
   // setState({updateChart});
  function updateChart() {
    async function fetchData(){
      const url = 'http://localhost:3001/metrics';
      const response = await fetch(url);
      const datapoints = await response.json();

      return datapoints;
    };
    fetchData().then(datapoints => {
      const metric1 = datapoints.map(
        function(index){
          return index.metric_1;
        });
        function calcAvg() {
          var sum = 0;
          for( var i = 0; i < metric1.length; i++ ){
            sum += metric1[i] }
          var avg = sum/metric1.length;
          return avg;
        };
        console.log(Math.max(...metric1));
        console.log(Math.min(...metric1));
        console.log(calcAvg());
    })
    
  }
  
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
      <button type="button" className="btn btn-info" onClick={updateChart}>Fetch</button>
    </div>
  )
}

export default App
