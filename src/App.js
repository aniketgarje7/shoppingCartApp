import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavbarComponent from "./Component/NavbarComponent";
import Home from './Component/Home'
import CartComponent from './Component/CartComponent';
import store from './Redux/store'
import {Provider} from 'react-redux'

function App() {

  return (
 <Provider store={store}>
  <BrowserRouter>
   <NavbarComponent />
   <Routes>
   <Route exact path='/' element={<Home/>}/>
   <Route path='/shoppingCartApp' element={<Home/>}/>
   <Route  path='/home' element={<Home/>}/>
   <Route path='/cart' element={<CartComponent/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
