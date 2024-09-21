import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
	return (
		<Container>
			<Typography variant='h2' color='primary'>
				Welcome to My Music Group Fan Page
			</Typography>
			<Typography variant='body1' color='text.primary'>
				Explore the latest albums, tour dates, and more.
			</Typography>
			<Button variant='contained' color='secondary'>
				Learn More
			</Button>
		</Container>
	);
};

export default Home;
