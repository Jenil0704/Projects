const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
const dropdowns = document.querySelectorAll("#dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector("#msg");

for(let select of dropdowns){
    for(currCode in countryList){

        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === 'from' && currCode === 'USD'){
            newOption.selected = 'selected';
        }else if(select.name === 'to' && currCode === 'INR'){
            newOption.selected = 'selected';
        } 
        select.append(newOption);
    }
    select.addEventListener('change', (evt)=>{
        updateFlag(evt.target)
    })
}
const updateFlag = (Element)=>{
    let currCode = Element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = Element.parentElement.querySelector('img');
    img.src = newSrc; 
}
const updateExchangeRate = async ()=>{
    let amount = document.querySelector("#amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);
    let finalMsg = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalMsg} ${toCurr.value}`
}
btn.addEventListener('click', (evt)=>{
    evt.preventDefault();
   updateExchangeRate();
})
window.addEventListener("load", () => {
    updateExchangeRate();
})
