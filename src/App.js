
import Count from './Component/increament';
import {Provider} from 'react-redux'
import store  from './Redux/store';
import Display from './Component/Display/display';


function App() {
  return (
    <Provider store={store}>
    
      
    
        <Count/>
        <Display/>
       
     
    
    </Provider>
  );
}

export default App;
