import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './components/ImageCard';

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');

	useEffect(() => {
		const fetchImage = async () => {
			const result = await axios(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
			);

			setImages(result.data.hits);
			setIsLoading(false);
		};

		fetchImage();
	}, [term]);

	return (
		<div className='container mx-auto'>
			{isLoading ? (
				<h1 className='text-center text-gray-700 text-6xl'>Loading...</h1>
			) : (
				<div className='grid grid-cols-3 gap-4'>
					{images.map((image) => (
						<ImageCard image={image} key={image.id} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
