import "./Landing.css";
import { Button } from "../../components/Button/Button";
import HeroImage from "../../assets/images/food-landing.jpeg";

const Landing = () => {
    return ( 
        <div className="landing">
            <div className="landing-page-left">
                <h1 className="landing-page-title">Why cook when u can buy my food?</h1>
                <h1 className="landing-page-subtitle">like honestly why</h1>
                <Button buttonStyle="btn--primary">
                    Eat now!
                </Button>
            </div>
            <div className="landing-page-right"/>
         </div>
     );
}

export default Landing;