
import { Switch, Route } from 'react-router';
import Header from './components/header/header.component';

import Homepage from './pages/homepage/homepage.component'

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
