import logo from './logo.svg';
import './App.css';
import ProgressiveImage from './component/ProgressiveImage';

import largeImg from './Images/large.jpeg';
import tinyImg from './Images/tiny.jpeg';

function App() {
  return (
    <div className="App">
      <h1>Progressive Images</h1>
      <ProgressiveImage src={largeImg} placeholderImg={tinyImg} height={'450'} width={'450'}/>
    </div>
  );
}

export default App;
