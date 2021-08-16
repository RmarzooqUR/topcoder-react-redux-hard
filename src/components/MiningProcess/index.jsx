import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function MiningProcess() {
  const [ submit, setSubmit ] = useState(true);
  const [ amount, setAmount ] = useState();
  const [ lastEntry, setLastEntry ] = useState(false);

  const handleChange = (e) => {
    if (e.target.value){
      setSubmit(false);
      setAmount(e.target.value);
      return;
    }
    setSubmit(true);
    setAmount(e.target.value);
  }

  const handleLastEntry = (e) =>{
    if (e.target.checked){
      setLastEntry(true);
      return;
    }
    setLastEntry(false);
  }

  const addMiningEntry = (e) =>{
    return;
  }

  return (
    <div className="mining-process">
      <h1>Mining Plan</h1>
      <label htmlFor="amountMined">Amount Mined</label>
      <input type="number" name="amountMined" id="amountMined" onChange={handleChange} />
      <label htmlFor="lastBlock">Last Block</label>
      <input type="checkbox" name="lastBlock" id="lastBlock" onChange={handleLastEntry} />
      <button disabled={submit} id="btnAddEntry" onClick={addMiningEntry}>Add Entry</button>
      <Link to='/results'><button>Check Results</button></Link>
    </div>
  );
}

export default MiningProcess;
