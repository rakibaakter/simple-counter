let count  = 0;
const increase = document.getElementById('increase-btn');
const decrease = document.getElementById('decrease-btn');
const reset = document.getElementById('reset-btn');
const countValue = document.getElementById('count-value');
increase.addEventListener("click", function(){
    count += 1;
    countValue.innerText = count;
})
decrease.addEventListener("click", function(){
    count -= 1;
    countValue.innerText = count;
})
reset.addEventListener("click", function(){
    count = 0;
    countValue.innerText = count;
})