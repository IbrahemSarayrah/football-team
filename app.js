alert(`Welcome to Liverpool FC`)
//global var
var age
//start of the first function
var getAge = function() {

  age = prompt('Please Enter Your Age');

  if (age >= 18) {
    document.write('Welcome, you can visit all of our sections');
    document.write('<img src="https://media.istockphoto.com/vectors/welcome-inscription-hand-drawn-lettering-greeting-card-with-design-vector-id816807384?k=6&m=816807384&s=612x612&w=0&h=Nl_Vnf74_Fm_U6gO9GDpgmDQXtouWCqNnmTc-j6sOS8=">');
  } else if (age < 18) {
    document.write('Welcome, Some of our section will be blocked');
    document.write('<img src="http://www.amcomltd.com/wp-content/uploads/2019/08/welcome.jpg">');
    alert('sorry you are under age some section will be blocked')
  }
  confirm('If You love to Support us Please see the section About Liverpool');

}
// end of the first function
// call the first function
getAge();


var Email = prompt(`Enter Your Email to Subscribe For News`);

// global var
var playerName
// start of the second function
function getFavPlayer () {
 playerName = prompt('Please Enter the name of your fav player');

while (playerName !== 'mohamed' && playerName !== 'james') {
  playerName = prompt('please enter mohamed or james')
}
}
// end of the second funstion
// call the second function
getFavPlayer();

// global var
var playerChoose;
// start of the third function
function nameChoose (){

if (playerName === `mohamed`) {
  playerChoose = ('<img src="https://resources.premierleague.com/premierleague/photo/2020/06/09/91b209a3-1e87-47d2-beeb-0cdef23c93d1/2020-02-01T165121Z_1905305979_RC2SRE9R3CBK_RTRMADP_3_SOCCER-ENGLAND-LIV-SOU-REPORT.JPG">')
} else if (playerName === 'james') {
  playerChoose = '<img src="https://cdn.mos.cms.futurecdn.net/hMVwxExU4n2wxCgbWhhkGe.jpg">'
}

var imgNumber = prompt('how many time you want to see your fav player')

for (var i = 0; i < imgNumber; i++) {
  document.write(playerChoose)
}

}
//end of the third function
//call the third function
nameChoose();
