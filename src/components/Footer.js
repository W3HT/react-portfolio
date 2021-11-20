// create footer with external pages

// import react
import React from 'react';
// import fontaswesome icons
import { FaGithub, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
// footer function
function Footer() {

// hovers
    const handleMouseEnter = event => {
        event.target.style.color = "######"
    }
    const handleMouseLeave = event => {
        event.target.style.color = "######"
    }

// return code with jsx
    return (
        <footer className="footer">
            <div className="container text-center">
                {/* a link linkedin*/}
                <a 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="https://www.linkedin.com/in/matthew-yang-5440a921b"
                    target="_blank" rel="noreferrer">
                        <FaLinkedin id="footer-icons" />
                </a>
                {/* a link GitHub*/}
                <a 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="https://github.com/W3HT"
                    target="_blank" rel="noreferrer">
                        <FaGithub id="footer-icons" />
                </a>
                {/* a link Twitter*/}
                <a 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href="https://twitter.com/3MP_Y"
                    target="_blank" rel="noreferrer">
                        <FaTwitterSquare id="footer-icons" />
                </a>
            </div>
        </footer>

    )
}

export default Footer;