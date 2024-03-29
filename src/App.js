
import './App.css';
import Bestdeal from './components/Bestdeal';
import Findtrend from './components/Findtrend';
import Footer from './components/Footer';
import Home from './components/Home';
import Joinus from './components/Joinus';
import Opentab from './components/Opentab';
import PagerHeader from './components/PagerHeader'
import Platform from './components/Platform';


function App() {
  return (
    <div className="App">
   
   <div className='background-container'><PagerHeader />
  

     
      <Home/>
      </div>
      <Opentab/>
      
      
      <Findtrend/>
     <Platform/>
<Bestdeal/>
     <Joinus/>
      <Footer/>
    </div>
  );
}

export default App;
