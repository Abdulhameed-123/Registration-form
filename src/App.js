import './App.css';
import signin from './signin';
import login from './login';
import { Switch } from '@material-ui/core';
import { Router } from 'react-router-dom';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="md">
       <div className='app'>
         <Switch>
            <Router path="\signin" exact component={signin}/>
            <Router path="\login" exact component={login}/>
         </Switch>
       </div>
    </Container>
  );
}

export default App;
