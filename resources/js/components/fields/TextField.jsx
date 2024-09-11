export default function TextField({
    label,
    value,
    setValue,
    error,
    rows = 10,
    ...props
}) {
    const id = crypto.randomUUID();

    return (
        <div className="mb-3">
            {label && <label htmlFor={id}>{label}</label>}

            <textarea
                className={`form-control ${error ? "is-invalid" : ""}`}
                rows={rows}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...props}
            />

            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
}
