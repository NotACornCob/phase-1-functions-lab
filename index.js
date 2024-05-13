function distanceFromHqInBlocks(someValue) {

    let distance;

    if (someValue >= 42){
        distance = (someValue - 42)
    }
    if (someValue < 42){
        distance = (42 - someValue)
    }
    return distance;
}

function distanceFromHqInFeet(someValue) {
    let feet = (264 * distanceFromHqInBlocks(someValue));
    return feet;
  }


function distanceTravelledInFeet(start, destination) {
    
    let travelled; 
    if (start < destination){
        travelled = (264 * (destination - start)); 
    }
    if (start > destination){
        travelled = (264 * (start - destination)); 
    }
    return travelled;
  }

function calculatesFarePrice(start, destination) {
    let farePrice; 
    if (400 > distanceTravelledInFeet(start, destination)) {
        farePrice = 0
}
    if ((400 < distanceTravelledInFeet(start, destination) && (2000 > distanceTravelledInFeet(start, destination)))) {
        farePrice = (.02 * (distanceTravelledInFeet(start, destination) - 400))
}
    if (2000 < distanceTravelledInFeet(start, destination)) { 
        farePrice = 25
    }
    if (2500 < distanceTravelledInFeet(start, destination)) { 
        farePrice = 'cannot travel that far'
    }
return farePrice;  
  }