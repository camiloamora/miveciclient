import React, { useState }  from 'react';
import '@styles/PostItem.scss';

const PostItem = ({ post }) => {
	const [like, setLike] = useState([]);

	const handleLike = () => {
		setLike([]);
	}

	return (
		<div className="PostItem">
			<div className="post-info">
				<div>
					<p>500</p>
					<p>fdrfdgfg</p>
				</div>
				<figure onClick={handleLike} >
				</figure>
			</div>
		</div>
	);
}

export default PostItem;
