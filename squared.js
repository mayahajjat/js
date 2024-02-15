function nearestsquared(number)
{
    let squareRoot = Math.sqrt(number);
    let nearestInteger = Math.floor(squareRoot);
    return nearestInteger;
}
console.log(nearestsquared(10));