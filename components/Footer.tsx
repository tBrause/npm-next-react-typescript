import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="site-footer">
			<small>&copy; Cimdata {new Date().getFullYear()}</small>
			<nav className="social-nav" aria-label="Social Media">
				<a href="#" aria-label="Social Media" title="fff">
					<FaTwitter />
				</a>
			</nav>
		</footer>
	);
}
