import './ShowErr.scss'
import { MdError } from 'react-icons/md'

export default function showError({ setShowError }) {
    return (<div className='errorCom'>
        <div className='errlogo' >
            <MdError style={{ fontSize: 40 }} />Travel Pin
        </div>
        <span className='errMessage'>
            Please enter the details then submit the form, empty pins aren&apos;t allowed.
        </span>
        <button className='errButton' onClick={() => setShowError(false)}>OK</button>
    </div>

    )
}