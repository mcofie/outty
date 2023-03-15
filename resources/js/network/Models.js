import {formatTime, todaysTime} from "../helper";

const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
};

export const CreateEventLineUp = {
    user: {
        name: "",
        email: "",
        phone_number: ""
    },
    event: {
        name: "",
        description: "",
        slug: "",
        background_color: "#FFFFFF",
        text_color: "#222222",
        primary_typeface: "",
        secondary_typeface: "",
        theme_color: "#CECECE",
        event_type: '',
        image_id: "",
        date: ""
    },
    lineups: [
        {
            title: "",
            description: "",
            start_time: time,
            end_time: time
        }
    ]
}


export const ComponentEventObject = {
    page: "",
    data: CreateEventLineUp
}


