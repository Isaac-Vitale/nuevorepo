import './button.css';

function Button ({text, onClick}) {
    return(
        <Button onClick={onClick} className='button'>{text}</Button>
    )
}

export default Button;