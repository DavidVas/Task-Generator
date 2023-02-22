import './Button.css';

export interface ButtonProps {
    onClick: Function;
    size: string;

}

export default function Button({onClick, size}: ButtonProps) {
    return (<button className='button' 
    style={{height: size, width: size}} 
        onClick={() => onClick()}>Select random task</button>
    );
}