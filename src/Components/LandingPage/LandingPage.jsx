import "./LandingPage.css"; 

const LandingPage = () => {

   return(
     <div className="main">
        <h1>M & M</h1>
        <h3>Let's create <span style={{color: "#D08856"}}>moments</span> every <span style={{color: "#AA210F"}}>mile.</span></h3>
        <input type="text" placeholder="Your Name" className="input1"></input>
        <input type="button" value="Get Started" className="input2"></input>
     </div>
   );
};
export default LandingPage;