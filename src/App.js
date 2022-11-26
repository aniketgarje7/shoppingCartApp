
import Count from './Component/increament';
import {Provider} from 'react-redux'
import store  from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    
      
    
        <Count/>
     
    
    </Provider>
  );
}

export default App;
