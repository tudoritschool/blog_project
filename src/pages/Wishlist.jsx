import { useEffect, useState } from "react";

function Wishlist() {
	//Pasul 2 - se creaza o variabila de stare pentru datele noastre
	const [wishlistBlogs, setWishlistBlogs] = useState([]);

	//Pasul 1 - preluare date din localStorage
	useEffect(() => {
		const blogsString = localStorage.getItem("bloguri");
		if (blogsString !== null) {
			const blogs = JSON.parse(blogsString);
			setWishlistBlogs(blogs);
		}
	}, []);

	return (
		<>
			<h2>Wishlist page</h2>
			<ul>
				{wishlistBlogs.map((blog, index) => {
					return <li key={"blog_" + index}>{blog.title}</li>;
				})}
			</ul>
		</>
	);
}

export default Wishlist;
