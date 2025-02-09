import logo from './logo.svg';
import './App.css';
import Orb from './ReactBits/Orb/Orb';

function App() {
  return (
    <div className="App">
    <div style={{ width: '100%', height: '600px', position: 'relative' }} className="orb-container">
    <Orb
      hoverIntensity={0.5}
      rotateOnHover={true}
      hue={0}
      forceHoverState={false}
    />
  </div>
    </div>
  );
}

export default App;
