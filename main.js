const btn_copy=document.querySelector('#btn-copy');
const btn_generate=document.querySelector('#btn-generate');

const pwEl=document.querySelector('#pw');
const lengthEl=document.querySelector('#pw-length');
const numberEl = document.querySelector('#number');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const symbolEl = document.querySelector('#symbol');

//samples
const numbers='0123456789';
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase=upperCase.toLowerCase();
const symbols='~!@#$%^&*()-+=_';

btn_copy.addEventListener('click',function(){
    copyPassword();
});

btn_generate.addEventListener('click',function(){
    if(lengthEl.value>20){
        alert('Length is bigger than 20');
    }
    else{
        generatePassword();
    }
    
});

function copyPassword(){
    const password=pwEl.innerText;
    if(!password){
        return;
    }
    //新版(js clipboard api)
    if(navigator.clipboard){
        navigator.clipboard.writeText(password);
    }
    //官網已棄用(還可以用)
    // const textArea=document.createElement('textarea');
    // textArea.value=password;
    // console.log(textArea);

    // document.body.appendChild(textArea);
    // textArea.select();
    // document.execCommand('copy');
    // textArea.remove();
    alert('Password copied to clipboard.');
}

function generatePassword(){
    const len=lengthEl.value;
    let pw='';
    if(numberEl.checked){
        pw+=getNumbers();
    }
    if(upperEl.checked){
        pw+=getUpperCase();
    }
    if(lowerEl.checked){
        pw+=getLowerCase();
    }
    if(symbolEl.checked){
        pw+=getSymbols();
    }
    for(let i=pw.length;i<len;i++){
        const x=generateX();
        pw+=x;
    }
    pwEl.innerText=pw;
}

function generateX(){
    const xs=[];
    if(numberEl.checked){
        xs.push(getNumbers());
    }
    if(upperEl.checked){
        xs.push(getUpperCase());
    }
    if(lowerEl.checked){
        xs.push(getLowerCase());
    }
    if(symbolEl.checked){
        xs.push(getSymbols());
    }
    if(xs.length===0){
        return '';
    }
    // console.log(xs);
    return(xs[Math.floor(Math.random()*xs.length)]);
}




function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}numbers
function getUpperCase(){
    return upperCase[Math.floor(Math.random()*upperCase.length)];
}
function getLowerCase(){
    return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}
function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

