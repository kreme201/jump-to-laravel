import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export default function EditorField({
    label,
    value,
    setValue,
    error,
    height = 800,
    ...props
}) {
    const id = crypto.randomUUID();

    return (
        <div className="mb-3">
            {label && <label htmlFor={id}>{label}</label>}

            <MDEditor
                className={`form-control ${error ? "is-invalid" : ""}`}
                value={value}
                onChange={setValue}
                height={height}
                previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                }}
                {...props}
            />

            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
}
