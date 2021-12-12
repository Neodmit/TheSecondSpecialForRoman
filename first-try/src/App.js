import Header from "./Portfolio/Header/Header";
import Intro from "./Portfolio/Intro/Intro"
import Services from "./Portfolio/Services/Services"
import Brands from "./Portfolio/Brands/Brands"

function App() {
  return (
     <div className="App">
        <Header/>
        <main class="main">
          <Intro/>
          <Services/>
          <Brands/>
        </main>
     </div>
  );
}

export default App;
