import "./Landing.css";
import HeroImage from "../../assets/images/food-landing.jpeg";

const Landing = () => {
    return ( 
        <div className="Landing">
            <div className="landing-item landing-page-left">
                <h1 className="landing-page-title">Like honestly, why cook when u can buy my food?</h1>
                <h1 className="landing-page-subtitle">Made with love</h1>
                <button className="landing-page-sign-up-button">
                    Eat now!
                </button>
            </div>
            <div className="landing-item landing-page-right">
                {/*<img src={HeroImage} alt="Whats cooking hero" className="landing-page-image"/>*/}
            </div>
         </div>
     );
}

export default Landing;