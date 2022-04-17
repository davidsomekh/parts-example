import "./App.css";
import Newpart from "./New";
import List from "./List";
import {PartsProvider} from './Context/Parts';
import Error from "./Error"
import {ErrorProvider} from './Context/ErrorContext';


function App() {
 

  
  
  return (
    <PartsProvider>
      <ErrorProvider>
        <div className="App">
        <Error/>
        <List/>
        <Newpart/>
        </div>
     </ErrorProvider>
    </PartsProvider>
  );
}

export default App;
