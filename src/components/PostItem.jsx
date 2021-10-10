import React, { useState }  from 'react';
import '@styles/PostItem.scss';
import Like from './Like';

const PostItem = ({ post }) => {
	const [like, setLike] = useState([]);

	const handleLike = () => {
		setLike([]);
	}

	return (
		<article className="PostItem">
          <div className="PostItem__item-content">
            <small>
              By miveci
            </small>
            <h3 className="title__h3">
              {post.name}
            </h3>
            <p className="copy">
              {post.content}
            </p>
          </div>
          <div className="PostItem__footer">
            <span>
                <Like />
            </span>
          </div>
    </article>
	);
}

export default PostItem;
