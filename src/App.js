import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'firebase'

import Orgaos from './components/orgaos/orgaos';
import Nav from './components/topNav/topNav'

function App() {
  return (
    
    <div className="App">
      <Nav></Nav>
      <div>
    
    </div>
      <Orgaos/>
    </div>

    
    
  );
}

export default App;
