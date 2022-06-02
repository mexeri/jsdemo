

function calcAmount()
{
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    
    if(amountNumber>10)
    {
        alert("Max 10 db!");
        return;
    }
    else if(amountNumber<1)
    {
        alert("Min 1 db kell!");
        return;
    }
    
    
    
    let amount = amountNumber*price;
    

    showAmount.innerHTML = amount;
}