import React from "react";
import ActivityForm from './ActivityForm';

const AddTimeSlot = ({history, activities, setActivities}) => {
    const handleOnSubmit = (activity) => {
        setActivities([...activities, activity]);
        history.push('/');
    }

    return (
        <React.Fragment>
            <ActivityForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );
};
export default AddTimeSlot;
