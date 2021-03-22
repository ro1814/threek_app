import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header';
/* import Footer from './components/Footer'; */
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
import CausaScreen from './screens/createRetoScreens/CausaScreen'
import CrearScreen from './screens/createRetoScreens/CrearScreen'
import ImagenReto from './screens/createRetoScreens/ImagenReto'
import RetoCreado from './screens/RetoCreado'
import CausasScreen from './screens/CausasScreen'
import InvestigacionScreen from './screens/InvestigacionScreen'
import CalDeVidaScreen from './screens/CalDeVidaScreen'

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
            <Route path='/crearnuevoreto' component={TipoScreen}/>
            <Route path='/crearretocausa' component={CausaScreen}/>
            <Route path='/crearreto' component={CrearScreen}/>
            <Route path='/crearretoimagenes' component={ImagenReto}/>
            <Route path='/retocreado' component={RetoCreado}/>
            <Route path='/causas' component={CausasScreen}/>
            <Route path='/causa/investigacion' component={InvestigacionScreen}/>
            <Route path='/causa/calidaddevidaela' component={CalDeVidaScreen}/>
          </Container>
          
      </main>
      
    {/* <Footer/> */}
    </Router>
  );
}

export default App;
