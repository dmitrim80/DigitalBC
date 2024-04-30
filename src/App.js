import Login from './DigitalBC/Login';
import Option1 from './DigitalBC/Option1';
import Option2 from './DigitalBC/Option2';
import Option3 from './DigitalBC/Option3';
import Option4 from './DigitalBC/Option4';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main-row'>
        <div className='main-col'>
        <Option1/>
        <Option3/>
        </div>
        <div className='main-col'>
        <Option2/>
        <Option4/>
        </div>
      </div>
    </div>
  );
}

export default App;
