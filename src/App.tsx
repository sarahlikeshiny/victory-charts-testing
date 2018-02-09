import * as React from 'react';
import './App.css';
import { BarChart } from './components/demo-chart.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Victory Charts Demo</h1>
        </header>
        <BarChart />
      </div>
    );
  }
}

export default App;
