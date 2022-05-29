import "./Button.css"

const STYLES = [
    "btn--primary",
    "btn--yellow",
    "btn--pink",
    "btn--green",
    "btn--cream",
    "btn--white",
    "btn--outline"
]

const SIZES = [
    "btn--medium",
    "btn--large"
]

const MARGIN = [
    "margin--0px",
    "margin-top--25px",
]

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize,
                           marginSize
                       }) => {

    const currentButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const currentButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const currentMarginSize = MARGIN.includes(marginSize) ? marginSize : MARGIN[0]

    return (
        <button className={`btn ${ currentButtonStyle } ${ currentButtonSize } ${ currentMarginSize }`} onClick={ onClick } type={ type }>
            { children }
        </button>
    );
}