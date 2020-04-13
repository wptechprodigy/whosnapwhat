import React from 'react';

function App() {
	return (
		<div class='max-w-sm rounded overflow-hidden shadow-lg'>
			<img src='https://source.unsplash.com/random' alt='' className='w-full' />
			<div className='px-6 py-4'>
				<div className='font-bold text-purple-500 mb-2'>The Coldest Sunset</div>
				<p className='text-gray-700 text-base'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
					quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
					nihil.
				</p>
			</div>
			<div class='px-6 py-4'>
				<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
					#photography
				</span>
				<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
					#travel
				</span>
				<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
					#winter
				</span>
			</div>
		</div>
	);
}

export default App;
