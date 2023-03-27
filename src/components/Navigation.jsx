import { Link } from "react-router-dom";
import "./Navigation.style.css";

const Navigation = () => {
	// function numeFunctie() {}
	// const numeFunctie = () => {}
	return (
		<div className='navbar_blog'>
			<Link to='/home'>Home</Link>
			<Link to='/blogs'>All blogs</Link>
			<Link to='/wishlist'>Favorite Blogs</Link>
		</div>
	);
};

export default Navigation;
