import { ThemeProvider } from '@mui/material/styles';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { Web, MusicNote, YouTube } from '@mui/icons-material';
import { scroller, Element } from 'react-scroll';
import { theme } from './theme'; // Импорт Dracula темы
import melnitsaImg from './assets/melnitsa.jpg'; // Убедитесь, что путь корректен

const App = () => {
	// Функция прокрутки с анимацией
	const scrollTo = (section: string) => {
		scroller.scrollTo(section, {
			duration: 800,
			smooth: 'easeInOutQuart',
			offset: 0,
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					height: '100vh',
					scrollSnapType: 'y mandatory',
					overflowY: 'scroll',
					scrollBehavior: 'smooth',
					'&::-webkit-scrollbar': { display: 'none' }, // Скрыть полосы прокрутки для Chrome/Safari
					'-ms-overflow-style': 'none', // Скрыть для IE и Edge
					'scrollbar-width': 'none', // Скрыть для Firefox
				}}
			>
				{/* Заголовки разделов */}
				<Box
					sx={{
						position: 'fixed',
						top: '20px',
						left: '50%',
						transform: 'translateX(-50%)',
						backgroundColor: theme.palette.background.default,
						padding: '10px',
						borderRadius: '8px',
						display: 'flex',
						justifyContent: 'space-around',
						width: '355px',
						zIndex: 1000, // Добавляем высокий z-index, чтобы панель была выше остальных элементов
						opacity: 0.7,
					}}
				>
					<Typography
						variant='h6'
						onClick={() => scrollTo('section1')}
						sx={{ cursor: 'pointer', color: '#50fa7b', margin: '0 10px' }}
					>
						Биография
					</Typography>
					<Typography
						variant='h6'
						onClick={() => scrollTo('section2')}
						sx={{ cursor: 'pointer', color: '#50fa7b', margin: '0 10px' }}
					>
						Послушать
					</Typography>
					<Typography
						variant='h6'
						onClick={() => scrollTo('section3')}
						sx={{ cursor: 'pointer', color: '#50fa7b', margin: '0 10px' }}
					>
						Ссылки
					</Typography>
				</Box>

				{/* Раздел 1: Биография */}
				<Element
					name='section1'
					style={{
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						scrollSnapAlign: 'start',
					}}
				>
					<Typography
						variant='h1'
						align='center'
						sx={{ color: theme.palette.text.primary }}
					>
						Моя любимая группа "Мельница"!
					</Typography>
					<Typography
						variant='body1'
						align='center'
						sx={{ color: theme.palette.text.primary }}
					>
						"Мельница" — российская фолк-рок группа, основанная в 1999 году.
						Известна своими мелодичными композициями и уникальным вокалом.
					</Typography>
					<img
						src={melnitsaImg}
						alt='Melnitsa'
						style={{
							width: '800px',
							height: 'auto',
							borderRadius: '8px',
							margin: '20px 0',
						}}
					/>
				</Element>

				{/* Раздел 2: YouTube-плееры */}
				<Element
					name='section2'
					style={{
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						scrollSnapAlign: 'start',
					}}
				>
					<Typography
						variant='h4'
						align='center'
						sx={{
							display: 'flex',
							alignItems: 'center',
							color: theme.palette.text.primary,
							gap: '100px',
						}}
					>
						Послушать
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: '20px',
							marginTop: '15px',
							width: '100%', // Используем всю доступную ширину
						}}
					>
						{/* Контейнер для адаптивного iframe */}
						<Box
							sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
						>
							<iframe
								src='https://www.youtube.com/embed/xGiGcRaimU8'
								title='Melnitsa Video 1'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
								}}
							/>
						</Box>

						<Box
							sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
						>
							<iframe
								src='https://www.youtube.com/embed/q7ADhPM__Ag'
								title='Melnitsa Video 2'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
								}}
							/>
						</Box>
					</Box>
				</Element>

				{/* Раздел 3: Ссылки */}
				<Element
					name='section3'
					style={{
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						scrollSnapAlign: 'start',
					}}
				>
					<Typography variant='h4' sx={{ color: theme.palette.text.primary }}>
						Ссылки
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '15px',
						}}
					>
						<IconButton
							href='https://melnitsa.info/'
							target='_blank'
							sx={{ color: '#50fa7b', margin: '0 10px' }}
						>
							<Web fontSize='large' />
						</IconButton>
						<IconButton
							href='https://music.yandex.ru/artist/359577/'
							target='_blank'
							sx={{ color: '#50fa7b', margin: '0 10px' }}
						>
							<MusicNote fontSize='large' />
						</IconButton>
						<IconButton
							href='https://www.youtube.com/@melnitsa_official'
							target='_blank'
							sx={{ color: '#50fa7b', margin: '0 10px' }}
						>
							<YouTube fontSize='large' />
						</IconButton>
					</Box>
				</Element>
			</Container>
		</ThemeProvider>
	);
};

export default App;
