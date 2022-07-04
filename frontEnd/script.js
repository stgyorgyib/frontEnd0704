const baseUrl = "http://localhost:3000/country/";



console.log("alma");

getCountries(baseUrl + "list");
createHTMLCOuntry();

function getCountries(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url );
    xhr.onload = function(){
        console.log(xhr.responseText);
    }
    xhr.send();
}

function createHTMLCOuntry(){
   /* let countryDiv = document.createElement("div");
    let countryH1 = document.createElement("h1");

    let capitalDiv = document.createElement("div");
    let populationDiv = document.createElement("div");

    let capitalLabel=document.createElement("label");
    let capitalP = document.createElement("p");

    let populationLabel=document.createElement("label");
    let populationP = document.createElement("p");

    let position = document.getElementById("countries");

    let h1Text = document.createTextNode("Magyarország");

    let capitalLabelText = document.createTextNode("Capital");
    let capitalPText = document.createTextNode("Budapest");
    let populationLabelText = document.createTextNode("Population");
    let populationPText = document.createTextNode("9 730 000");

    position.appendChild(countryDiv);

    countryDiv.appendChild(countryH1);


    position.appendChild(h1Text);
    countryH1.appendChild(h1Text);

    //capital és population Div hozzafűzésea country divhez
    countryDiv.appendChild(capitalDiv);
    countryDiv.appendChild(populationDiv);
    capitalDiv.appendChild(capitalLabel);
    capitalDiv.appendChild(capitalP);
    populationDiv.appendChild(populationLabel);
    populationDiv.appendChild(populationP);

    capitalLabel.appendChild(capitalLabelText);
    capitalP.appendChild(capitalPText);
    populationLabel.appendChild(populationLabelText);
    populationP.appendChild(populationPText);



    //capital és population Div-hez hozzáfűzni a megfeleléő labelt és p taget
    //console.log(position);*/
    let position = document.getElementById("countries");
    position.innerHTML = `
        <div class="country">
            <h1>Hungary</h1>
            <div class="detail">
                <label style="font-weight:bold ;">Capital</label>
                <p>Budapest</p>
            </div>
            <div class="detail">
                <label style="font-weight:bold ;">Population</label>
                <p>9 730 000</p>
            </div>
        </div>`

}






