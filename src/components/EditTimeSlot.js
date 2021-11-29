import React from 'react';
import ActivityForm from './ActivityForm';
import { useParams } from 'react-router-dom';

const EditTimeSlot = ({history, activities, setActivities}) => {
    const {id} = useParams();
    const activityToEdit = activities.find((activity)=> activity.id === id);

    const handleOnSubmit = (activity) => {
        const filteredActivities = activities.filter((activity)=> activity.id !== id);
        setActivities([...filteredActivities, activity]);
        history.push('/');
    }

    return (
        <div>
            <ActivityForm activity={activityToEdit} handleOnSubmit={handleOnSubmit}/>
        </div>
    )

}
export default EditTimeSlot