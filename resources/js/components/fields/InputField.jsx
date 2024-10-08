export default function InputField({
    type = "text",
    label,
    value,
    setValue,
    error,
    ...props
}) {
    const id = crypto.randomUUID();

    return (
        <div className="mb-3">
            {label && <label htmlFor={id}>{label}</label>}

            <input
                type={type}
                className={`form-control ${error ? "is-invalid" : ""}`}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...props}
            />

            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
}
