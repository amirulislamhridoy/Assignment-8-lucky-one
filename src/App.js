import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <h2>How to react works?</h2>
      <p>React is a declarative code.</p>
      <div>
        <h2>useState vs props</h2>
        <p>1) useState may change. And props don't may change. </p>
        <p>2) useState can not change his place. if we want send any component or place, we can send by props</p>
      </div>
    </div>
  );
}

export default App;
