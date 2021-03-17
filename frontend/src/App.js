import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import RetoScreen from './screens/RetoScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import SponsorScreen from './screens/SponsorScreen'
import SponsorInfoScreen from './screens/SponsorInfoScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import TipoScreen from './screens/createRetoScreens/TipoScreen'


const App = () => {
  return (
    <Router>
    <Header/>
      <main className="py-3">
          <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/reto/:id' component={RetoScreen}/>
            <Route path='/sponsor/:id' component={SponsorScreen}/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/register' component={RegisterScreen}/>
            <Route path='/profile' component={ProfileScreen}/>
            <Route path='/sponsorinfo' component={SponsorInfoScreen}/>
            <Route path='/payment' component={PaymentScreen}/>
            <Route path='/placeorder' component={PlaceOrderScreen}/>
            <Route path='/crearreto' component={TipoScreen}/>
          </Container>
          
      </main>
      
    <Footer/>
    </Router>
  );
}

export default App;
