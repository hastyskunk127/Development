import Form from 'react-bootstrap/Form';
import './ControlPanel.css';

function ControlPanel(props) {
    const calcDurationTotal = () => {
        const favs = [...props.favorites];
        const total = favs.reduce((accumulator, currentValue) => accumulator + currentValue.ruleDuration, 0);
        return total;
    }
    const handlePeriodChange = (eventKey) => {
        props.setTime(eventKey.target.value);
    }

    const handleSortChange = (eventKey) => {
        props.setSort(eventKey.target.value);
    }

    const handleGenderChange = (eventKey) => {
        props.setGender(eventKey.target.value);
    }

    const handleFavoriteChange = (eventKey) => {
        if (props.favoriteOn === "True") {
            props.setFavoriteOn("False");
        } else {
            props.setFavoriteOn("True");
        }
    }

    return(
        <div className="container">
        <Form className="rounded panel">
            <Form.Label style={{fontWeight: 'bold'}}>Sort By</Form.Label>
            <Form.Group controlId='sorting-categories'>
                    <Form.Check style={{fontWeight: 'bold'}}
                        type='radio'
                        id='start-year'
                        label='Sort by Start of Reign (Oldest -> Newest)'
                        name="sort"
                        value="Start"
                        checked={props.sort === "Start"}
                        onChange={handleSortChange}
                    />
                    <Form.Check style={{fontWeight: 'bold'}}
                        type='radio'
                        id='duration'
                        name="sort"
                        value="Duration"
                        label='Sort by Duration of Reign (Longest -> Shortest)'
                        checked={props.sort === "Duration"}
                        onChange={handleSortChange}
                    />
             </Form.Group>
        </Form>
        <Form className="rounded panel">
            <Form.Label style={{fontWeight: 'bold'}}>Ruled During</Form.Label>
             <Form.Group>
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-period-all'
                    label="All"
                    value="All"
                    checked={props.period === "All"}
                    onChange={handlePeriodChange}
                    name="period"
                />
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-archaic'
                    label="Archaic"
                    value="Archaic"
                    checked={props.period === "Archaic"}
                    onChange={handlePeriodChange}
                    name="period"
                />
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-old-kingdom'
                    label="Old Kingdom"
                    value="Old Kingdom"
                    checked={props.period === "Old Kingdom"}
                    onChange={handlePeriodChange}
                    name="period"
                />
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-middle-kingdom'
                    label="Middle Kingdom"
                    value="Middle Kingdom"
                    checked={props.period === "Middle Kingdom"}
                    onChange={handlePeriodChange}
                    name="period"
                />
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-new-kingdom'
                    label="New Kingdom"
                    value="New Kingdom"
                    checked={props.period === "New Kingdom"}
                    onChange={handlePeriodChange}
                    name="period"
                />
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-hellenistic'
                    label="Hellenistic Kingdom"
                    value="Hellenistic Kingdom"
                    checked={props.period === "Hellenistic Kingdom"}
                    onChange={handlePeriodChange}
                    name="period"
                />
            </Form.Group>
            </Form>
            <Form className="rounded panel">
            <Form.Group>
            <Form.Label>Gender</Form.Label>
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-gender-all'
                    label="All"
                    name="gender"
                    value="All"
                    checked={props.gender === "All"}
                    onChange={handleGenderChange}
                />
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-gender-female'
                    label="Female"
                    name="gender"
                    value="Female"
                    checked={props.gender === "Female"}
                    onChange={handleGenderChange}
                />
                <Form.Check style={{fontWeight: 'bold'}}
                    type='radio'
                    id='filter-gender-male'
                    label="Male"
                    name="gender"
                    value="Male"
                    checked={props.gender === "Male"}
                    onChange={handleGenderChange}
                />
            </Form.Group>
        </Form>
           <Form className="rounded panel">
           <Form.Group>
            <Form.Label style={{fontWeight: 'bold'}}>Favorites</Form.Label>
               <Form.Check style={{fontWeight: 'bold'}}
                   type='checkbox'
                   id='filter-favorites'
                   label="Show Favorites"
                   value="True"
                   checked={props.favoriteOn === "True"}
                   onChange={handleFavoriteChange}
               />
               <Form.Label style={{fontWeight: 'bold'}} >{"Total Time Ruled by Favorite Pharaohs: " + calcDurationTotal() + " years"}</Form.Label>
           </Form.Group>
           </Form>
           </div>
    );
}

export default ControlPanel;