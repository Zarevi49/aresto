function TextareaComponent({ placeholder, className, rows }) {
    return (
        <textarea
            placeholder={placeholder}
            className={className}
            rows={rows}
        ></textarea>
    );
}

export default TextareaComponent