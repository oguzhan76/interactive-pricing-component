import Pricing from "./components/Pricing";
import bg from '/bg-pattern.svg';
import circles from '/pattern-circles.svg';

function App() {

  return (
    <div className="main">
      <div className="bg">
        <img className="bg-pattern" src={bg}/>
        <img className="bg-circles" src={circles}/>
      </div>
      <div className="page">
        <div className="heading">
          <h1>Simple, traffic-based pricing</h1>
          <p> Sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <Pricing />
      </div>
    </div>
  )
}

export default App;