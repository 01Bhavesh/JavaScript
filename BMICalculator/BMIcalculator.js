const form = document.querySelector('form');

form.addEventListener('submit',function(e)
{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === '' || height<0 || isNaN(height))
    {
        result.innerHTML = `invalid value ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight))
    {
        result.innerHTML = `invalid value ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6)
        {
            result.innerHTML = `<spam>${bmi}</spam><hr><h3>Under Weight</h3>`
        }
        if(bmi>18.6 && bmi<24.9)
        {
            result.innerHTML = `<spam>${bmi}</spam><hr><h3>Normal Range</h3>`
        }
        if(bmi>24.9)
        {
            result.innerHTML = `<spam>${bmi}</spam><hr><h3>Over Weight</h3>`
        }
       
    }
})