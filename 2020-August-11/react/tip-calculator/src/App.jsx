import { useState, useEffect } from "react";

function App() {
  const [totalTip, setTotalTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  const [bill, setBill] = useState(50);
  const [tipPerc, setTipPerc] = useState(18);
  const [people, setPeople] = useState(1);

  useEffect(() => {
    setTotalTip(Number((bill * tipPerc) / 100).toFixed(2));
    setTipPerPerson(Number(totalTip / people).toFixed(2));
  }, [bill, totalTip, people, tipPerc]);

  return (
    <div className="bill">
      <div className="input-fields">
        <div>
          <h1>Bill</h1>
          <input
            type="number"
            min={50}
            defaultValue={50}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <div>
          <h1>Tip Percentage</h1>
          <input
            type="number"
            min={0}
            max={100}
            defaultValue={18}
            onChange={(e) => setTipPerc(e.target.value)}
          />
        </div>

        <div>
          <h1>Number of people</h1>
          <input
            type="number"
            min={1}
            defaultValue={1}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
      </div>

      <div className="results">
        <p>Total tip: ${totalTip}</p>
        <p>Tip per person: ${tipPerPerson}</p>
      </div>
    </div>
  );
}

export default App;
