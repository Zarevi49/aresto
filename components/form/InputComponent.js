function InputComponent({ type, placeholder, className }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
        />
    );
}

export default InputComponent