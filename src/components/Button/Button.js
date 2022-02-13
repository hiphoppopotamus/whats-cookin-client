import "./Button.css"

const STYLES = [
    "btn--primary",
    "btn--outline",
]

const SIZES = [
    "btn--medium",
    "btn--large"
]

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize
                       }) => {

    const currentButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const currentButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${ currentButtonStyle} ${ currentButtonSize }`} onClick={ onClick } type={ type }>
            { children }
        </button>
    );
}