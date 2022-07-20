import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://amongus.gallery/wp-content/uploads/2021/04/Hes-an-impostor-among-us-gif.gif" alt="among us gif" />
      <Card.ImgOverlay>
        <Card.Title>Among Us</Card.Title>
      </Card.ImgOverlay>
      <Card.Footer className="text-muted">Image Attribution: https://amongus.gallery/gif/</Card.Footer>
    </Card>
  )
}

export default Home;
