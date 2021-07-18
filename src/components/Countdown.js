import '../style/CountdownStyle.css'

function Countdown({ countDays, countHours, countMinutes, countSeconds}) {
    return (
        <div className="countdown-container">
            <div className="countdown-item days-c">
                <p className="big-text" id="days">{countDays}</p>
                <span>Dias</span>
            </div>
            <div className="countdown-item hours-c">
                <p className="big-text" id="hours">{countHours}</p>
                <span>Horas</span>
            </div>
            <div className="countdown-item mins-c">
                <p className="big-text" id="mins">{countMinutes}</p>
                <span>Minutos</span>
            </div>
            <div className="countdown-item seconds-c">
                <p className="big-text" id="seconds">{countSeconds}</p>
                <span>Segundos</span>  
            </div>
            <br />
            <small className="title-countdown">Dias para o Black Friday</small>
        </div> 
    )
}



export default Countdown