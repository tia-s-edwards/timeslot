import React from "react";
import {Button, Card} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const Activity = ({
    id,
    activityName,
    date,
    startTime,
    endTime,
    numMaxGuests,
    handleCancelTimeslot
}) => {
    const history = useHistory();
    
    return (
        <Card style={{ width: '18rem' }} className="activity">
            <Card.Body>
                <Card.Title className="activity-Title">{activityName}</Card.Title>
                <div className="activity-details">
                    <div>Date: {date}</div>
                    <div>Start Time: {startTime}</div>
                    <div>End Time: {endTime}</div>
                    <div>Number of Guests: {numMaxGuests}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                    Update
                </Button>{' '}
                <Button variant="danger" onClick={() => handleCancelTimeslot(id)}>
                    Cancel
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Activity