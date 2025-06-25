
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <>
      <footer>
        <p>&copy; {currentYear} Mandy Pan. All rights reserved.</p>
      </footer>
      </>
    );
  };
  
export default Footer;


  