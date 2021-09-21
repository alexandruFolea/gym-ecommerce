import React from 'react';
import Section from './Section';

const CategoryWrapper = () => {
	return (
		<div className='category-wrapper'>
			<Section
				image='https://images.unsplash.com/photo-1604247584233-99c80a8aae2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
				title='Crossfit'
			/>
			<Section
				image='https://images.unsplash.com/photo-1499438075715-fc23ef376ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
				title='Cycling'
			/>
			<Section
				image='https://images.unsplash.com/photo-1616941347251-97a7a124a9a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1bm5pbmd8ZW58MHx8MHxibGFja19hbmRfd2hpdGV8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
				title='Running'
			/>
			<Section
				image='https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
				title='Yoga'
			/>
			<Section
				image='https://images.unsplash.com/photo-1591343395082-e120087004b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
				title='Massage'
			/>
			<Section
				image='https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
				title='1 - 1 Coaching'
			/>
		</div>
	);
};

export default CategoryWrapper;
