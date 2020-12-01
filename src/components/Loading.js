import { useSelector, useDispatch } from 'react-redux'
import { switchLoading } from '../actions'

export const Loading = () => {
    const dispatch = useDispatch()
    return (
        <div id="loader-bg" className="loader-bg">
            <div className="loader">
                <div className="loader-container">
                    <div className="ball red"></div>
                    <div className="ball orange"></div>
                    <div className="ball green"></div>
                    <div className="ball blue"></div>
                </div>
            </div>
      		<button onClick={() => dispatch(switchLoading())}>-</button>
        </div>
    );
}