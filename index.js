$(document).ready(function () {
    $('.submit-psf').click((e) => {
        e.preventDefault();
        $('.answer-psf').text("Calculating ...")
        var sum = parseInt($('.sum-input').val());
        var product = parseInt($('.poroduct-input').val());
        if(sum && product){
            const result = calculate(sum, product);
        } else {
            $('.answer-psf').text("Please enter sum and product")
        }
    })
    $('.submit-factor').click((e) => {
        e.preventDefault();
        $('.f-ans').text("Calculting ...")
        var num = parseInt($('.factor-input').val());
        if(num){
            var temp = ""
            const result = factors(num)
            for(var i = 0; i < result.length; i++){
                temp += result[i] + ", ";
            }
            $('.f-ans').text(temp);
        } else {
            $('.f-ans').text("Please enter a number")
        }
    })
})



function calculate(sum, pro){
    var a;
    var b;
    console.log(factors(sum))
}

const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)
