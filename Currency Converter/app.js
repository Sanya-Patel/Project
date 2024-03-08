const BASE_URL="https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json"

const dropdowns=document.querySelectorAll(".dropdown select");
const btn= document.querySelector("form button");

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const mssg=document.querySelector(".mssg")

for(let select of dropdowns)
{
    for (currCode in countryList)
    {
        // console.log(code, countryList[code]);
        let newOption= document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD")
        {
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag =(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img= element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount= document.querySelector("form input");
    let amtVal= amount.value;
    if(amtVal==="" || amtVal<1)
    {
        amtVal=1;
        amount.value=amtVal;
    }
    // const URL=`` ;//1:08:00
    let response = await fetch(BASE_URL);
    let data = await response.json();
    console.log(data);
    let curr=toCurr.value;
    let rate= data.quotes[curr];
    console.log(rate);
    // console.log(rate);
    let finalAmt=amtVal*rate;
    mssg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;

})


