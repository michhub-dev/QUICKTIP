function roundUp(value){
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$" + value;
}

function splitFormat(value){
    if (value === "1") return value + "person";
    return value + "people";
}

function userInput(){
    let bill = Number(document.getElementById("userBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    console.log({bill, tipPercent, split});

    let tipValue = bill * (tipPercent/100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue)/ split;
    

    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = roundUp( tipValue);
    document.getElementById("totalOfTip").innerHTML = roundUp(bill + tipValue);
    document.getElementById("splitValue").innerHTML = splitFormat(split);
    document.getElementById("billEach").innerHTML = roundUp(newBillEach);
    document.getElementById("tipEach").innerHTML = roundUp(tipEach);
}

let container = document.getElementById("container");
container.addEventListener("input", userInput);