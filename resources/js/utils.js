export const PrimaryFonts = [
    "KoHo",
    "Roboto",
    "Open Sans",
    "Montserrat",
    "Lato",
    "Poppins",
    "Ubuntu",
    "Nunito",
    "Quicksand",
    "Dosis",
    "Bitter",
    "EB Garamond",
    "Maven Pro",
    "Varela Round",
    "Cormorant"
]

export const SecondaryFonts = [
    "Caveat",
    "Acme",
    "Permanent Marker",
    "Kalam",
    "Gloria Hallelujah",
    "MuseoModerno",
    "Special Elite",
    "Rubik Mono One",
    "Luckiest Guy",
    "Merienda One",
    "Bangers",
    "Black Ops One",
    "Nanum Pen Script",
    "Aclonica",
    "Bitter"
]

export const EventTypes = [
    "Wedding",
    "Conference",
    "Church"
]

export const slugify = text =>
    text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
