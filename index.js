const Index = () => {
    return(
        <>
        <div class="image">
    <img src="/images/web.png" alt="" />
 </div>
 <div class="personal-text">
  <p>HELLO EVERYBODY, I AM</p>
  <h3>MUHIRE DAVID</h3>
  <h4>JUNIOR UI/UX DEVELOPER</h4>
  <p>You will begin to realise why this exercise is called the Pattern (with reference to the ghost showing Scrooge some different futures)</p>
  <div className="form-container">
      <div className="icon change">
        <i className="fa-solid fa-phone"></i>
        <p>+(250) 788787769</p>
      </div>
      <div className="icon">
        <i className="fa-solid fa-envelope icon"> </i>
        <p>muhiredavid74@gmail.com</p>
      </div>
      <div className="icon change">
        <i className="fa-solid fa-location-dot"></i>
        <p>Rwamagana</p>
      </div>
      </div>
  <div class="social-icons"><i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-linkedin"></i>
  </div>

 </div>
 
        </>
        
    )
}
const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(<Index />);