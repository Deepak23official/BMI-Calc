function Calc(){
    // Get value from User..
    const Height = document.getElementById('input').value  
    const weight = document.getElementById('input1').value

    // 2time squre in user Heigth..
    let cm_Sqr = Height*Height;

    // Convert to Whole Number..
    let math = Math.floor(weight/cm_Sqr*10000);

    // Give a Condition to Check Body Health..
    if(Height.length == " " && weight.length == " "){
        alert("Enter your Details in the input box")
    }
    else{
    if(math >= 18 && math <= 24){
        document.getElementById('span').innerText = `Your Body Healthy Range is ${math}\nYour Body Health is Good..`
    }
    else if(math >= 25){
        document.getElementById('span').innerText = `Your Body Healthy Range is ${math}\nYour Body Health is Over Weight..`
    }
    else{
        document.getElementById('span').innerText = `Your Body Healthy Range is ${math}\nYour Body Health is Enargy lost Eat well`
    }
}
}
