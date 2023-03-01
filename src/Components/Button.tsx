import './Button.css';

export interface ButtonProps {
    onClick: Function;
    size: string;
    text: string;
}

export default function Button({onClick, size, text}: ButtonProps) {
    return (<button className='button' 
    style={{height: size, width: size}} 
        onClick={() => onClick()}>{text}</button>
    );
}