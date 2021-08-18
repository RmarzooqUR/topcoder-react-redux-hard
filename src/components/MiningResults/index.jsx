import { connect } from "react-redux"
import { Link } from "react-router-dom"
import './styles.scss'

const MiningResults = ({ state }) => {
    return (
        <>
        <Link to='/process'>
            <button id="backToProcess">Back</button>
        </Link>
        <table>
            <thead>
                <tr>
                    <th>Ore Name</th>
                    <th>Amount Mined</th>
                    <th>Total Jobs</th>
                </tr>
            </thead>
            <tbody>
                {state.entries.map((item, index) =>{
                    if (item.length)
                        return (
                            <tr key={index}>
                                <td>{state.finished.concat(state.plans)[index]}</td>
                                <td>{ item.reduce((total, amount)=>total+amount, 0)}</td>
                                <td>{item.length}</td>
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
        </>
    )
}


const mapStateProps = (state) =>{
    return { state: state };
}
export default connect(mapStateProps)(MiningResults)