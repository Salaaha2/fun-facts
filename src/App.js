import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route path='/' component={Home} />
    </div>
    </BrowserRouter>
  );
}
export default App;
