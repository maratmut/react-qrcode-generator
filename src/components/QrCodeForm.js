import React, { useState } from 'react'
import '../App.css'

const QrCodeForm = () => {
    const [inputValue, setInputValue] = useState('')
    const [isInputValid, setIsInputValid] = useState(true)
    const [imgSrc, setImgSrc] = useState("")

  const onChangeInputValue = (e) => {
    if(e.target.value.length > 0) {
        setIsInputValid(true)
    }
    setInputValue(e.target.value)
  }

  const qrClickHandler = () => {
    if(inputValue.trim().length === 0) {
        setIsInputValid(false)
        return
    }
    const qrImg = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    setImgSrc(qrImg)
    setInputValue('')
  }

  return (
    
    <div className={imgSrc ? 'wrapper active' : 'wrapper'}>
        <header>
                <h1>ГЕНЕРАТОР QR КОДОВ</h1>
        </header>
        <div className="form">
                <input style={{borderColor: !isInputValid ? 'red' : ''}} onChange={onChangeInputValue} type="text" placeholder="Вставьте текст или ссылку" value={inputValue} />
                <button onClick={qrClickHandler}>Получить QR КОД</button>
        </div>
        
            {imgSrc &&
            <div className="qr-code">
                <img src={imgSrc} alt="qr-code" />
            </div>
        }
        
        </div>
        
    
  )
}

export default QrCodeForm