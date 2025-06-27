import telegram from "../images/telegram.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";

export default function Footer () {
    return (
        <div className="footer" id="contact">
           <a href="https://t.me/@etse_e" target="_blank">
                <img src= {telegram} alt="telegram" width= "30px"/>
           </a> 
          <a href="https://www.linkedin.com/in/etsegenet-elias-920954234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXQh%2FoLQ8SJ%2B82YCFPlDAcQ%3D%3D&" target="_blank">
            <img src= {linkedin} alt="linkedin" width= "30px" />
          </a>  
           <a href="mailto:etsegenetelias13@gmail.com" target="_blank">
                <img src= {gmail} alt="gmail" width= "30px"/>
            </a> 
        </div>
    );
}