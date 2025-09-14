export default function Rating({rating}) {
    return (
        <div className="flex space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
                ★
                </span>
            ))}
        </div>
    );
}