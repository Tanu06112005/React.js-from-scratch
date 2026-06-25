import React from 'react'
import { useState } from 'react';
import {InputBox} from './components/inputBox';
import useCurrencyInfo from './Hooks/useCurrencyInfo';
const App = () => {

  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState(0)

  // using our customHook : takes currency tupe as input  (ouutput me de rha h us currency ke parallel key value pairs)
  const CurrencyInfo=useCurrencyInfo(from)
  //yaha problem aa skti h ki data fetch hi nhi ho paya time pr and upr wali line phle chal gyi to options ki value undefined ya null hi rh jayegi

  // const options=Object.keys(CurrencyInfo)// extracted all the keys
  const options = Object.keys(CurrencyInfo || {})
  

// swap function
  function swap(){
    setFrom(to),
    setTo(from),
    setAmount(convertedAmount),
    setConvertedAmount(amount)
  }

// concerting the amount into the currency
const convert=()=>{
  setConvertedAmount(amount * CurrencyInfo[to])
}
     return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: "url('https://imgs.search.brave.com/g9lTA-lV5VErC7hqPL45s4HiKonjPHHrLdwrNxDH2Mc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/NDkzLzgzMy9zbWFs/bC9ibHVycmVkLWFi/c3RyYWN0LWJhY2tn/cm91bmQtd2l0aC1w/ZWFjaC1hbmQtcHVy/cGxlLWh1ZXMtcGhv/dG8uanBn')",
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    
                     <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                selectCurrency={to}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                             Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App