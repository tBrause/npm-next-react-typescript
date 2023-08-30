export default function Home() {
	return (
		<>
			<div>
				<picture
					style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
				>
					<img style={{ width: '20vw' }} src="/next.svg" alt="Next" />
				</picture>
				<picture
					style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
				>
					<img style={{ width: '20vw' }} src="/react.svg" alt="React" />
				</picture>
				<picture
					style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
				>
					<img
						style={{ width: '20vw' }}
						src="/typescript.svg"
						alt="TypeScript"
					/>
				</picture>
				<picture
					style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
				>
					<img style={{ width: '20vw' }} src="/sass.svg" alt="Sass" />
				</picture>
			</div>
		</>
	);
}
