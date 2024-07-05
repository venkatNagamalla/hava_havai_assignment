import Headers from './components/Headers'
import SideBar from './components/SideBar'
import Airports from './components/Airports'
import './App.css'

const App = () => (
     <>
       <Headers/>
       <div className="main-container">
         <SideBar/>
         <Airports/>
       </div>
     </>
     
)

export default App