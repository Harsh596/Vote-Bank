var initials;
var email;
var vote;
var voteButton;
var greeting;
var title;
function setup(){
  database = firebase.database();
  createCanvas(500,500);
  title = createElement('h4');
  title.html("Vote Bank");
  title.position(130,40);
  initials = createInput('name');
  email = createInput('email');
  vote = createInput('vote');
  voteButton = createButton('vote');
  voteButton.mousePressed(submitDetails);
  initials.position(130,160);
  email.position(130,180);
  vote.position(130,200);
  voteButton.position(130,235);
 
  }
 function submitDetails(){
 
  
  var data={
    name:initials.value(),
    email:email.value(),
    vote:vote.value(),
  }
  initials.hide();
  email.hide();
  vote.hide();
  voteButton.hide();
  var ref = database.ref('voters');
  ref.push(data);
}
function draw(){
  background("white");
}
