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
                {state.plans.concat(state.finished).map((item, index) =>{
                    return (
                        <tr>
                            <td>{item}</td>
                            <td>{ state.entries[index]
                                ? state.entries[index].reduce((total, amount)=>total+amount, 0)
                                :0}
                            </td>
                            <td>{state.entries[index]
                                ?state.entries[index].length
                                :0}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}


const mapStateProps = (state) =>{
    return { state: state };
}
export default connect(mapStateProps)(MiningResults)