import React from 'react';
// import GitHubIcon from '@material-ui/icons/GitHub';
import '../Styles/Footer.css';

function Footer() {
  return (
        
       <footer className="footer">
            <div className='col-lg-12 '>
                <div className="footer-content">
                    <div className="left-content">
                         <h5 style={{color:'white'}}>e-mail: racembouaicha123@gmail.com   ® 2022 .</h5>
                    </div>
                    <div className="right-content">
                        <h4>our social networks :</h4>
                        <div className="sm">
                            <a href="https://www.facebook.com/racem.bouaicha/" className="fab fa-facebook-f"></a>
                            <a href="https://twitter.com/bouaicharacem1" className="fab fa-twitter"></a>
                            <a href="https://github.com/racembouaicha/" className="fab fa-github" ></a>
                            <a href="https://www.linkedin.com/in/bouaicha-racem-03a7b41b4/" className="fab fa-linkedin"></a>
                    
                        </div>
                    </div>
                </div>
            </div>
        </footer>    
    
  )
}

export default Footer
