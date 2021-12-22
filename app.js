const btn = document.getElementById('btn')




//Function
const calculate = () =>{
    let sub1 = document.getElementById('sub1').value
    let sub2 = document.getElementById('sub2').value
    let sub3 = document.getElementById('sub3').value
    let sub4 = document.getElementById('sub4').value
    let sub5 = document.getElementById('sub5').value
    let sub6 = document.getElementById('sub6').value
    let sub7 = document.getElementById('sub7').value
    let sub8 = document.getElementById('sub8').value
    let sub9 = document.getElementById('sub9').value

    let obtainedMarks = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5) + parseFloat(sub6) + parseFloat(sub7) + parseFloat(sub8) + parseFloat(sub9)
    
    let percentage = (obtainedMarks/900) * 100
    // alert(percentage);

    let grade = '' 

    if(percentage<= 100 && percentage >= 70){
        grade = 'A'
    } else if(percentage<=69 && percentage >=60){
        grade = 'B'
    } else if(percentage<=59 && percentage >=50){
        grade = 'C'
    } else if(percentage<=49 && percentage >=45){
        grade = 'D'
    }else if(percentage<=44 && percentage >=40){
        grade = 'E'
    }else{
        grade = 'F'
    }

    if(percentage>=40){
        let showResult = document.getElementById('showResult');
        showResult.innerHTML = `You obtained ${obtainedMarks}marks out of 900. Your percentage is ${percentage}% with ${grade} grade. You have passed the test`
    }else{
        let showResult = document.getElementById('showResult');
        showResult.innerHTML = `You obtained ${obtainedMarks}marks out of 900. Your percentage is ${percentage}% with ${grade} grade. You have failed the test`
    }
}








//Event Listener
btn.addEventListener('click', calculate)