import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'firebase'

import Orgaos from './components/orgaos/orgaos';
import Nav from './components/topNav/topNav'
import sideNav from './components/sideBar/sideBar'

function App() {
  return (
    
    <div className="App">
      <Nav></Nav>
      <sideNav></sideNav>
      <div>
    
    </div>
      <Orgaos/>
    </div>

    
    
  );
}

export default App;
