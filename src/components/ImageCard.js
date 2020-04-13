import React from 'react';
import Tags from './Tags';

function ImageCard({
	image: { user, webformatURL, views, downloads, favorites, likes, tags },
}) {
	const tagList = tags.split(',');

	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg'>
			<img src={webformatURL} alt='' className='w-full' />
			<div className='px-6 py-4'>
				<div className='font-bold text-purple-500 text-xl mb-6'>
					Photo by {user}
				</div>
				<ul>
					<li className='mb-2'>
						<span className='text-gray-600'>Views:</span>
						<span className='text-base mx-3'>{views}</span>
					</li>
					<li className='mb-2'>
						<span className='text-gray-600'>Favourited by: </span>
						<span className='text-base mx-3'>{favorites}</span>
					</li>
					<li className='mb-2'>
						<span className='text-gray-600'>Downloads: </span>
						<span className='text-base mx-3'>{downloads}</span>
					</li>
					<li className='mb-2'>
						<span className='text-gray-600'>Likes: </span>
						<span className='text-base mx-3'>{likes}</span>
					</li>
				</ul>
			</div>
			<div className='px-6 py-4'>
				{tagList.map((tag) => (
					<Tags key={tag} tag={tag} />
				))}
			</div>
		</div>
	);
}

export default ImageCard;
