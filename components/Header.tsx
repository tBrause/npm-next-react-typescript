// Components
import MainNav from './MainNav';

// Icons
import { FaBluetooth } from 'react-icons/fa';

export default function Header() {
	return (
		<header className="site-header">
			<div className="site-header__title">
				<FaBluetooth />
				Header
			</div>
			<MainNav />
		</header>
	);
}
