import SimpleBar from 'simplebar-react';
import './App.scss';

import 'simplebar/dist/simplebar.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "animate.css/animate.min.css";
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Header from './components/Header';

function App() {


  return (


    <SimpleBar style={{ height: '100vh' }}>

      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </SimpleBar>

  );
}

export default App;
