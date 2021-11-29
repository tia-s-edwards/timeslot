import React from "react";
import _ from 'lodash';
import Activity from "./Activity";

const TimeSlotList = ({activities, setActivities}) => {
    const handleCancelTimeslot = (id) =>{
        setActivities(activities.filter((activity) => activity.id !== id));
    } 

    return (
        <React.Fragment>
        <h2>List of Scheduled Activities</h2>
        <div className="activity-list">
            {!_.isEmpty(activities) ? (
                activities.map((activity) => (
                    <Activity key={activity.id} {...activity} handleCancelTimeslot={handleCancelTimeslot}/>
                ))
            ) : ( <p className="message">No activities booked. Please add a timeslot.</p>         
        )}
        </div>
        </React.Fragment>    
    )
}

export default TimeSlotList;