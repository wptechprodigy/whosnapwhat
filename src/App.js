import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './components/ImageCard';
import DisplayError from './components/DisplayError';
import ImageSearch from './components/ImageSearch';

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [term, setTerm] = useState('');
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchImage = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				const result = await axios(
					`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
				);

				setImages(result.data.hits);
			} catch (error) {
				setIsError(true);
			}
		};

		setIsLoading(false);

		fetchImage();
	}, [term]);

	return (
		<div className='container mx-auto my-10'>
			<ImageSearch searchTerm={(text) => setTerm(text)} />
			{isError && <DisplayError message='Something went wrong.' />}

			{isLoading ? (
				isError ? (
					''
				) : (
					<h1 className='text-center text-gray-700 text-6xl my-10'>Loading...</h1>
				)
			) : (
				<div className='flex flex-col justify-center items-center md:justify-center md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 place-items-center'>
					{images.map((image) => (
						<ImageCard image={image} key={image.id} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
