import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {v4 as uuidv4} from "uuid";

const ActivityForm = (props) => {
    const [activity, setActivity] = useState({
        activityName: props.activity ? props.activity.activityName : '',
        date: props.activity ? props.activity.date : '',
        startTime: props.activity ? props.activity.startTime : '',
        endTime: props.activity ? props.activity.endTime : '',
        numMaxGuests: props.activity ? props.activity.numMaxGuests : ''
    });

   const [errorMsg, setErrorMsg] = useState('');
    const { activityName, date, startTime, endTime, numMaxGuests} = activity;

    const handleOnSubmit = (e) => {
        e.preventDefault();
       const values = [activityName,date,startTime,endTime,numMaxGuests];
        let errorMsg = '';

        const formFilled = values.every((field)=> {
            const value = `${field}`.trim();
            return value !== '' && value !=='0';
        }); 

       if (formFilled && startTime < endTime) {
            const activity = {
                id: uuidv4(),
                activityName,
                date,
                startTime,
                endTime,
                numMaxGuests
            };
            props.handleOnSubmit(activity);
       } 
        else {
            if (!formFilled){
                errorMsg = "Please fill out all fields"
            }
           else if (startTime > endTime || startTime === endTime){
                errorMsg = "Start time must be earlier than end time"
           } 
       }
       setErrorMsg(errorMsg);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setActivity(prevState =>({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="main-form">
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="activityName">
                <Form.Label>Activity Name</Form.Label>
                <Form.Control 
                    className="input-control"
                    type="text"
                    name="activityName"
                    defaultValue={activityName}
                    placeholder="Enter name of activity"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="Date">
                <Form.Label>Date</Form.Label>
                <Form.Control 
                    className="input-control"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    name="date"
                    value={date}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="startTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control 
                    className="input-control"
                    type="time"
                    name="startTime"
                    value={startTime}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="endTime">
                <Form.Label>End Time</Form.Label>
                <Form.Control 
                    className="input-control"
                    type="time"
                    min="00:00"
                    max="23:59"
                    name="endTime"
                    value={endTime}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="numMaxGuests">
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control 
                    className="input-control"
                    type="number"
                    name="numMaxGuests"
                    defaultValue={numMaxGuests}
                    placeholder="Enter number of guests"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
            Schedule
            </Button>
        </Form>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>} 
        </div>
    );

}
export default ActivityForm;