import React from 'react';
import ImageCard from './components/ImageCard';
import DisplayError from './components/DisplayError';
import ImageSearch from './components/ImageSearch';
import Navigation from './components/Navigation';
import useDataSourceApi from './hooks/useDataSourceApi';

function App() {
	const [{ images, isLoading, isError, term }, setTerm] = useDataSourceApi([], 'computers');

	return (
		<>
			<Navigation />
			<div className='container mx-auto my-10'>
				<ImageSearch searchTerm={(text) => setTerm(text)} />

				{isError && <DisplayError message='Something went wrong.' />}

				{!isLoading && images.length === 0 && (
					<h1 className='text-center text-gray-700 text-6xl my-10'>
						No Images Found.
					</h1>
				)}

				{isLoading ? (
					isError ? (
						''
					) : (
						<h1 className='text-center text-gray-700 text-6xl my-10'>
							Loading...
						</h1>
					)
				) : (
					<>
						<h3 className='text-center text-gray-700 text-xl mb-5'>
							Showing {images.length} results for {term}
						</h3>

						<div className='flex flex-col justify-center items-center md:justify-center md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 place-items-center'>
							{images.map((image) => (
								<ImageCard image={image} key={image.id} />
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default App;
