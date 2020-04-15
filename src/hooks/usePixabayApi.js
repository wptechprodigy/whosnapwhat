import { useState, useEffect } from 'react';
import axios from 'axios';

const usePixabayApi = () => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [term, setTerm] = useState('computers');

	useEffect(() => {
		const fetchImage = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				const result = await axios(
					`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
				);

				setImages(result.data.hits);
				setIsLoading(false);
			} catch (error) {
				setIsError(true);
			}
		};

		fetchImage();
	}, [term]);

	return [{ images, isLoading, isError, term }, setTerm];
};

export default usePixabayApi;
