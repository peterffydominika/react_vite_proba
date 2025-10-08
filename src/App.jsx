import './App.css'
//import Hello from './Hello';
//import Hello2 from './Hellop';
import Auto from './Auto';
import Dealer from './Dealer';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    {/* <Hello name="Borbála" age={count}/>
    <Hello2 name="Borbála" age={count}/>
      <button onClick={() => setCount(count+1)}
        className="btn btn-primary"
        >
          A számláló értéke: {count}
      </button> */}
      <Auto color="piros" type="Aventador" brand="Lamborghini"/>
      <Auto color="barna" type="Avensis" brand="Toyota"/>
      <Auto color="ezüst" type="Karoq" brand="Skoda"/>
      <Dealer name="Charles" location="center" zip={6}/>
      <Dealer name="Andrew" location="downtown" zip={2}/>
    </>
  )
}

export default App
