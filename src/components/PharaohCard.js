import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './PharaohCard.css';

function PharaohCard(props) {
    const renderButton = (props.favorites.includes(props.item)) ? 
        <Button variant="secondary" onClick={() => removeFavorite()}>Remove from Favorites</Button>:
        <Button variant="primary" onClick={() => addFavorite()}>Add to Favorites</Button>;

    const addFavorite = () => {
        let favs = [...props.favorites];
        if (!favs.includes(props.item)) {
            favs = [...favs, props.item];
        }
        props.updateFavorites(favs);
    }

    const removeFavorite = () => {
        const favs = [...props.favorites].filter((el) => el !== props.item);
        props.updateFavorites(favs);
    }


    return(
        <Card className="card" text='white' style={{ maxWidth: '30rem'}} bg={"dark"}>
            <Card.Img style={{maxWidth: '30rem'}}variant="top" src={props.item.image} />
            <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}}>{props.item.name}</Card.Title>
            <Card.Text style={{fontWeight: 'bold'}}>{"Time Period: " + props.item.timePeriod}</Card.Text>
            <Card.Text style={{fontWeight: 'bold'}}>{"Gender: " + props.item.gender}</Card.Text>
            <Card.Text style={{fontWeight: 'bold'}}> {"Start of reign: " + props.item.startRule}</Card.Text>
            <Card.Text style={{fontWeight: 'bold'}}>{" Ruled for: " + props.item.ruleDuration + " years"}</Card.Text>
            <Card.Text>{props.item.description}</Card.Text>
            <Card.Text><a className="link" href={props.item.wikiLink}>{"Read more"}</a></Card.Text>
            {renderButton}
            </Card.Body>
        </Card>
    );
}
    
export default PharaohCard;