import img1 from './photosrc.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
    <img src={img1} alt = 'my image'></img>
    <img src="photopub.jpg" alt = 'my image'></img>
    </div>
  );
}

export default App;
