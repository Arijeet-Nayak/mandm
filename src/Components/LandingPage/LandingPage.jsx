import "./LandingPage.css"; 

const LandingPage = () => {


   //input animation
    let i=0;
    let placeholder="";  
    const txt = "Enter Your Name";
    const speed = 100;
    function type(){
        placeholder+= txt.charAt(i);
        console.log(placeholder);
        document.querySelector('.input1').setAttribute("placeholder",placeholder);
        i++;
        setTimeout(type, speed);

    } 
    setTimeout(() => {
        type();
    }, 1000);
   return(
     <div className="main">
        <h1>M & M</h1>
        <h3>Let's create <span style={{color: "#D08856"}}>moments</span> every <span style={{color: "#AA210F"}}>mile.</span></h3>
        <input type="text" className="input1"></input>
        <input type="button" value="Get Started" className="input2"></input>
     </div>
   );
};
export default LandingPage;