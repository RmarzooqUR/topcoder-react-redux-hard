import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import types from "../../types";
import "./styles.scss";

function MiningProcess({ plans, currentPlan, dispatchMiningEntry }) {
  const [ submit, setSubmit ] = useState(true);
  const [ amount, setAmount ] = useState();
  const [ lastEntry, setLastEntry ] = useState(false);
  const history = useHistory();

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
    dispatchMiningEntry(amount, lastEntry)
    if (lastEntry === true && plans.length === 1)
      history.push('/results')
    setLastEntry(false)
    return;
  }

  return (
    <div className="mining-process">
      <h1>{currentPlan}</h1>
      <label htmlFor="amountMined">Amount Mined</label>
      <input type="number" name="amountMined" id="amountMined" onChange={handleChange} />
      <label htmlFor="lastBlock">Last Block</label>
      <input type="checkbox" name="lastBlock" id="lastBlock" onChange={handleLastEntry} checked={lastEntry} />
      <button disabled={submit} id="btnAddEntry" onClick={addMiningEntry}>Add Entry</button>
      <Link to='/results'><button id='btnCheckResults'>Check Results</button></Link>
    </div>
  );
}

const mapStateProps = ( state ) => {
  return { plans:state.plans, currentPlan: state.plans[0]}
}

const mapDispatchProps = (dispatch) => {
  return {
    dispatchMiningEntry(amount, lastBlock){
      dispatch({ 
        type: types.AddMiningEntry, 
        payload: {
          amount: parseInt(amount),
          lastBlock:lastBlock
        }
      })
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(MiningProcess);
