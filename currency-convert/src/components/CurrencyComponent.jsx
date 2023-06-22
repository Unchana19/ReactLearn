export default function CurrencyComponent({currencyChoice, selectCurrency, ChangeCurrency, amount, onChangeAmount}){
    return(
        <div>
            <select value={selectCurrency} onChange={ChangeCurrency} className="py-4 px-6 rounded-l-lg outline-none cursor-pointer appearance-none font-semibold">
                {currencyChoice.map(choice => {
                    return( <option key={choice} value={choice}>{choice}</option>)
                })}
            </select>
            <input value={amount} onChange={onChangeAmount} className="py-4 px-6 rounded-r-lg outline-none text-end font-semibold" type="number" />
        </div>
    )
}