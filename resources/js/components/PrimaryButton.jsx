export default function PrimaryButton({
    type = "button",
    children,
}) {
    return (
        <button type={type} className="btn btn-primary">{children}</button>
    );
}
