import Header from "./component/Header";
import './App.css';
import HomePage from "./container/Beers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
