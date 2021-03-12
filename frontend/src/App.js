import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import RetoScreen from './screens/RetoScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <Router>
    <Header/>
      <main className="py-3">
          <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/reto/:id' component={RetoScreen}/>
            <Route path='/login' component={LoginScreen} exact/>
          </Container>
          
      </main>
      
    <Footer/>
    </Router>
  );
}

export default App;
