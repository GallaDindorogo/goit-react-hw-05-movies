import { getMovieReviewsByID } from 'Utils/MoviesAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const RewiewPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewsByID(movieId).then(rev => setReviews(rev));
  }, [movieId]);

  const elements = reviews.map(({ id, author, content, updated_at }) => (
    <li key={id}>
      <p>{updated_at}</p>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  ));
  return (
    <>
      <ul>
        <li>
          {elements.length === 0 ? (
            <p>'We did not find any rewiews for this movie'</p>
          ) : (
            elements
          )}
        </li>
      </ul>
    </>
  );
};

export default RewiewPage;
