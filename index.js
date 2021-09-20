function scuberGreetingForFeet(val){
  // Write your code here!
  let result;
  if (val <= 400) {
    result = "This one is on me!";
  // } else if (val >= 2000 && val < 2501) {
  //   result = "I will gladly take your thirty bucks."
  } else if (val > 2500) {
    result = "No can do."
  } else {
    result = "I will gladly take your thirty bucks."
  }
  return result;
}

function ternaryCheckCity(location){
  // Write your code here!
  let result = location === "NYC" ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(val){
  // Write your code here!
  let response;
  switch (val) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    case 'thanks for everything' :
      response = 'Bye.';
  }
  return response;
}