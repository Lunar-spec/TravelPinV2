import './ShowErrLog.scss'
import { MdNearbyError } from 'react-icons/md'


export default function showErrorLogin({ setShowErrorLogin }) {
    return (<div className='errorLog'>
        <div className='allogo' >
            <MdNearbyError style={{ fontSize: 40 }} />Travel Pin
        </div>
        <span className='errMes'>
            Please login to pin your travels.
        </span>
        <button className='errBtn' onClick={() => setShowErrorLogin(false)}>OK</button>
    </div>

    )
}