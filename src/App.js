import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'firebase'

import Orgaos from './components/orgaos/orgaos';
import SideBar from './components/sideBar/sideBar.js';
import Nav from './components/topNav/topNav'

function App() {
  return (
    
    <div className="App">
      <Nav></Nav>
      <div>
    <SideBar/>
    </div>
      <Orgaos/>
    </div>

    
    
  );
}

export default App;
