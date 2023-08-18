// Modules
import Link from 'next/link';

export default function MainNav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/bilder">Bilder</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/team">Team</Link>
				</li>
			</ul>
		</nav>
	);
}
