import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   
const amountInputId=useId()   // this hook is used to generate an unique id for the elements of type string
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                    {currencyOptions.map((currency,indx)=>(
                        <option key={indx} value={currency}>
                            {currency}
                        </option>
                    ))}

                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


// Step 4: onAmountChange &&

// Ye JavaScript ka short-circuit operator hai.

// onAmountChange && onAmountChange(...)

// Matlab:

// Agar onAmountChange exist karta hai to hi function call karo.

// Equivalent code:

// if(onAmountChange){
//     onAmountChange(Number(e.target.value))
// }


// Basic Rule
// condition && expression

// Matlab:

// Agar condition true hai → expression execute hoga.

// Agar condition false hai → expression execute nahi hoga.