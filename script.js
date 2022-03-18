
function list(i){
    let primes = document.querySelector('section');
    let para = document.createElement('p');
    para.textContent = i;
    primes.appendChild(para);
    //console.log(i);
}

function errorHandler(error){

}
function primalityTest(){
    let lower = document.getElementById('min');
    let upper = document.getElementById('max');
    let counter = document.querySelector('div');
    let par = document.createElement('p');
    
    const min = parseInt(Math.round(lower.value));
    const max = parseInt(Math.round(upper.value));
    let error;
    if(min < 2){
        par.textContent = `Please enter a number greater than 2`;
        counter.appendChild(par);
    }else if(min > max){
        par.textContent = `The minimum Value can not be greater than the maximum value.`;
        counter.appendChild(par);
    }else{
    let num = 0;
    let prime;
    number: for(let i = min; i < max; i++){
        prime = true;
        test: for(let j = 2; j < i; j++){
            let test = i % j;
                if(test == 0){
                    prime = false;
                    break test;
            }
        }
        if(prime == true){
            list(i);
            num++;
        }
    }
    par.textContent = `there are ${num} Prime numbers from ${min} to ${max}.`;
    counter.appendChild(par);
}
}