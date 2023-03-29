import check from '../images/icon-check.svg';

const Checkcircle = ({todoCompleted= false}) => {
    return (
        <div className={`check-wrapper ${todoCompleted? 'completed' : ''}`}>
            <div className="item-state">
                {/* <img src={check} alt="check-icon" /> */}
            </div>
        </div>
    );
}
 
export default Checkcircle;