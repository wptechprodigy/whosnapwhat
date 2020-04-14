import React, { useState } from 'react';

function ImageSearch({ searchTerm }) {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
  };

  const handleSubmit = (e) => {
    searchTerm(text);

    e.preventDefault();
    setText('');
  };

	return (
		<div className='max-w-full rounded overflow-hidden flex justify-center items-center my-10'>
			<form onSubmit={handleSubmit} className='w-full max-w-sm'>
				<div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
					<input
						className='appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none'
						type='text'
						value={text}
						placeholder='Search for a photo...'
						aria-label='Search for a photo'
						onChange={handleChange}
					/>
					<button
						className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
						type='submit'>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}

export default ImageSearch;
