let count  = 0;
const increase = document.getElementById('increase-btn');
const decrease = document.getElementById('decrease-btn');
const countValue = document.getElementById('count-value');
increase.addEventListener("click", function(){
    count += 1;
    countValue.innerText = count;
})
decrease.addEventListener("click", function(){
    count -= 1;
    countValue.innerText = count;
})