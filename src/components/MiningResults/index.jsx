import { Link } from "react-router-dom"
import './styles.scss'

const MiningResults = () => {
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
                <tr></tr>
            </tbody>
        </table>
        </>
    )
}

export default MiningResults