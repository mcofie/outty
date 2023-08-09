export const CreateEventResponse = {
    data: {
        event: {
            id: 0,
            name: "Strawberry Shows",
            description: "",
            theme_color: "",
            background_color: "",
            text_color: "",
            slug: "",
            primary_typeface: "",
            secondary_typeface: "",
            date: "",
            created: "",
            updated: ""
        }, amount: 0.0, payment_url: "https://p.hbtl.co/MQp4d5"
    }, message: "", status: 200
}

const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
};

export const ListOfEvents = {
    events: [
        {
            id: 0,
            name: "",
            description: "",
            slug: "",
            background_color: "#FFFFFF",
            text_color: "#222222",
            primary_typeface: "",
            secondary_typeface: "",
            theme_color: "#CECECE",
            category: '',
            image_id: "",
            date: ""
        }
    ],
    organizer: {
        id: 0,
        name: "",
        email: "",
        phone_number: ""
    }
}

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
        category: '',
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


export const GetEvent = {
    data: {
        organizer: {
            name: "",
            email: "",
            phone_number: ""
        },
        event: {
            name: "",
            description: "",
            slug: "",
            template_id: "",
            registers_guests: '',
            background_color: "#FFFFFF",
            text_color: "#222222",
            primary_typeface: "",
            secondary_typeface: "",
            theme_color: "#CECECE",
            category: '',
            image_id: "",
            date: ""
        },
        line_ups: [
            {
                title: "",
                description: "",
                start_time: '',
                end_time: ''
            }
        ]
    },
    message: "Event details successfully retrieved",
    status: 200
}

export const GetTemplate = {
    data: {
        id: '',
        directory: '',
        name: ''
    }
}


export const ComponentEventObject = {
    page: "",
    data: CreateEventLineUp
}


