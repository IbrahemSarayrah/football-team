alert(`Welcome to Liverpool FC`)
var age= prompt('Please Enter Your Age');

if(age >= 18){
  document.write('Welcome, you can visit all of our sections');
  document.write('<img src="https://media.istockphoto.com/vectors/welcome-inscription-hand-drawn-lettering-greeting-card-with-design-vector-id816807384?k=6&m=816807384&s=612x612&w=0&h=Nl_Vnf74_Fm_U6gO9GDpgmDQXtouWCqNnmTc-j6sOS8=">');
}else if(age < 18){
  document.write('Welcome, Some of our section will be blocked');
  document.write('<img src="http://www.amcomltd.com/wp-content/uploads/2019/08/welcome.jpg">');
  alert('sorry you are under age some section will be blocked')
}
confirm('If You love to Support us Please see the section About Liverpool');

var Email= prompt(`Enter Your Email to Subscribe For News`)
