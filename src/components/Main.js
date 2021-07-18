import { useState, useEffect } from 'react'
import Countdown from '../components/Countdown'

import '../style/MainStyle.css'

function Main() {
    const [countDays, setCountDays] = useState()
    const [countHours, setCountHours] = useState()
    const [countMinutes, setCountMinutes] = useState()
    const [countSeconds, setCountSeconds] = useState()

    let interval

    const startTimer = () => {
        const blackFridayDate = new Date("Nov 26,2021").getTime()

        interval = setInterval(() => {
            const currentDate = new Date().getTime()

            const distance = blackFridayDate - currentDate

            const days = Math.floor(distance / (24 * 60 * 60 * 1000))
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
            const seconds = Math.floor((distance % (60 * 1000)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setCountDays(days)
                setCountHours(hours)
                setCountMinutes(minutes)
                setCountSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        startTimer()
    })

    // form localstorage

    let [nome, setnome] = useState()
    let [email, setEmail] = useState()

    let data = {
        nome,
        email
    }

    let converterData = JSON.stringify(data)

    const armazenar=(chave,valor) => {
        localStorage.setItem(chave,valor)
    }

    return (
        <main className="main-container">
            <div className="sale">
                <div className="text">
                    <h1 data-text="[Black Friday]">Black Friday</h1>
                    <h2>Sale</h2>    
                </div>
                
                <Countdown 
                    countDays={countDays}
                    countHours={countHours}
                    countMinutes={countMinutes}
                    countSeconds={countSeconds}
                />
                   
            </div>
            

            <div className="form-Conatiner">
                <p>Cadastre-se agora mesmo para receber ofertas especiais!</p>
                <form id="form">
                    <div className="input-item">
                        <span>Nome* :</span>    
                        <input  
                            className="input-name" 
                            type="text" 
                            value={nome}
                            onChange={(e) => setnome(e.target.value)}
                            placeholder="Digite seu nome" 
                            required 
                        />
                    </div>
                    <div className="input-item">
                        <span>Nick Github :</span>    
                        <input  
                            className="input-name" 
                            type="text" 
                            placeholder="Como você se chama no Github" 
                        />
                    </div>
                    <div className="input-item">
                        <span>Email* :</span>    
                        <input  
                            className="input-name" 
                            type="email" 
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <button onClick={() => armazenar('ls_data', converterData)}>Cadastrar</button>
                    <small className="required">* Campos obrigatorios</small>
                </form>
            </div>
        </main>
    )
}

export default Main