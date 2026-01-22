export default function ReviewsCard({reviews}) {
    return (
        <>
        {reviews.map((review) => (
            <div className="card mt-3 bg-purple">
                <div className="card-body">
                    <h5 className="card-title">Nome: {review.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Vote: {review.vote}</h6>
                    <p className="card-text">{review.text}</p>
                </div>
            </div>
        ))}

        </>
    )
}