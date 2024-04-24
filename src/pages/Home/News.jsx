import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function News({ news }) {
    const { title, details, image_url, _id } = news;
    return (
        <div className='card card-compact bg-base-100 shadow-xl bg-slate-700'>
            <figure>
                <img src={image_url} alt={title} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                {details.length > 200 ? (
                    <p>
                        {details.slice(0, 200)}
                        <Link
                            to={`/news/${_id}`}
                            className='text-blue-500 font-bold'>
                            ...Read More
                        </Link>
                    </p>
                ) : (
                    <p>{details}</p>
                )}
            </div>
        </div>
    );
}

export default News;

News.propTypes = {
    news: PropTypes.object.isRequired,
};
