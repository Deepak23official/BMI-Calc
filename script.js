function Calc(){
    // Get value from User..
    const cm = document.getElementById('input').value  
    const klg = document.getElementById('input1').value

    // 2time squre in user Heigth..
    let cm_Sqr = cm*cm;

    // Convert to Whole Number..
    let math = Math.floor(klg/cm_Sqr*10000);

    // Give a Condition to Check Body Health..
    if(cm.length == " " && klg.length == " "){
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
