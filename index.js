function getdata(num)
{
    console.log(num)
    var result = document.getElementById("getdata")
    result.value += num
}
function clearresult()
{
    var result = document.getElementById("getdata")
    result.value = ''
}
function getresult()
{
    var result = document.getElementById("getdata")
    result.value = eval(result.value)
}
function sin()
{
    var result = document.getElementById("getdata")
    result.value = Math.sin(result.value)
}
function cos()
{
    var result = document.getElementById("getdata")
    result.value = Math.cos(result.value)
}
function tan()
{
    var result = document.getElementById("getdata")
    result.value = Math.tan(result.value)
}
function PI()
{
    var result = document.getElementById("getdata")
    result.value = Math.PI
}
function exp()
{
    var result = document.getElementById("getdata")
    result.value = Math.E
}
function square()
{
    var result = document.getElementById("getdata")
    result.value = result.value*result.value
}
function cube()
{
    var result = document.getElementById("getdata")
    result.value = result.value*result.value*result.value
}
function inverse()
{
    
    var result = document.getElementById("getdata")
    result.value = 1/result.value
}
function abs()
{
    
    var result = document.getElementById("getdata")
    result.value = Math.abs(result.value)
}
function Factorial(n) 
{ 
    var result = document.getElementById("getdata")
    var ans=1; 
    for (var i = 2; i <= result.value; i++) 
        ans = ans * i; 
    result.value = ans
} 
