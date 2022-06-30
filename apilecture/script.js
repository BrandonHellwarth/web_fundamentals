async function getmoney(){
    div = document.querySelector("#coinlist");
    //identify your container
    responsefromapi = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");//create a variable to store data from the api, fetch is a built in JS function for calling api's
    coindata = await responsefromapi.json();//.json converts the api so the machine can understand it. coindata is now an array
    console.log(coindata);
    for(i=0;i<coindata.length;i++){
        currentcoin = coindata[i]; //sotres current coindata value in a variable
        ptag = document.createElement("p");
        //creates a paragraph tag variable
        ptag.innerText = currentcoin.name + "-" + currentcoin.current_price;
        //fills paragraph tag with current coins name
        ptag.classList.add("coin");//adds a css class to the ptag
        div.appendChild(ptag);//.appendChild will add an element to the div variable which is #coinlist
    }
}