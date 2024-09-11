export default function CardBadge({ title, content }) {
    return (
        <div className="badge bg-light text-dark p-2 text-start mx-3">
            {title && <div className="mb-2">{title}</div>}
            <div>{content}</div>
        </div>
    );
}
