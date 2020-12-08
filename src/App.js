import GameboardView from "./components/GameboardView"


function App() {


  return (
    <div className="container-fluid">
      <h1 className = "text-center">BATTLESHIP</h1>
      <div className="row">
        <div className="col">
          <h2 className = "text-center">PLAYER</h2>
          <GameboardView/>
        </div>

        <div className="col">
          <h2 className = "text-center">AI</h2>

        </div>
      </div>
    </div>
  );
}

export default App;
