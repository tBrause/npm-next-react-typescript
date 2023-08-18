// Modules
import Link from 'next/link';

export default function MainNav() {
	return (
		<nav style={{ display: 'none' }}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
			</ul>
		</nav>
	);
}
