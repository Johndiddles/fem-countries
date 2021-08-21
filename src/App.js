
import { Switch, Route } from 'react-router';
import Header from './components/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import Country from './pages/country/country.component';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/:country' component={Country}> 
          <Country/> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
