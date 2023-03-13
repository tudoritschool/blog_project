import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function BlogComponent({ blog }) {
	const addToWishlist = () => {
		const newProducts = [];
		newProducts.push(blog);
		localStorage.setItem("bloguri", JSON.stringify(newProducts));
	};

	return (
		<Col className='mt-4'>
			<Card>
				<img
					alt='Sample'
					src={"https://picsum.photos/300/200?random=" + blog.id}
				/>
				<CardBody>
					<CardTitle tag='h5'>{blog.title}</CardTitle>
					<CardText>{blog.body}</CardText>
					<h4>{blog.userId}</h4>
					<Button
						onClick={() => {
							addToWishlist();
						}}>
						Add to favourite!
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default BlogComponent;
