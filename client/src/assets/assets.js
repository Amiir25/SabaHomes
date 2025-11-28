import calenderIcon from './calenderIcon.svg';
import closeIcon from './closeIcon.svg';
import villa from './villa.png';

// Logo
import hero from './hero.jpg';
import logo from './logo.png';
import logoDark from './logo-dark.png';
import logoGreen from './logo-green.png';
import logoPink from './logo-pink.png';
import menuIcon from './menuIcon.svg';
import searchIcon from './searchIcon.svg';

// Houses
import house1 from './houses/house-1.webp';
import house2 from './houses/house-2.webp';
import house3 from './houses/house-3.webp';
import house4 from './houses/house-4.webp';
import house5 from './houses/house-5.jpg';
import house6 from './houses/house-6.jpg';

// Rooms
import room1 from './livingRooms/room-1.webp';
import room2 from './livingRooms/room-2.webp';
import room3 from './livingRooms/room-3.webp';


export const assets = {
    calenderIcon,
    closeIcon,
    hero,
    house1,
    house2,
    house3,
    house4,
    house5,
    house6,
    logo,
    logoDark,
    logoGreen,
    logoPink,
    menuIcon,
    searchIcon,
    villa,
}

// Locations
export const locations = [
    "Mexico",
    "Gerji",
    "Lebu",
    "Piassa",
    "Summit",
    "Bethel",
    "Kazanchis",
    "Megenagna",
];

// Properties
export const houses = [
    {
        "_id": "Ger00AD1",
        "type": "Villa",
        "location": "Gerji",
        "price": "25,240,000",
        "bedRoom": 3,
        "bathRoom": 2,
        "size": "1587 sq ft",
        "image": house2,
        "rooms": [room1, room2, room3, house1, house2, house3, house4, house5],
    },
    {
        "_id": "Bet00A14",
        "type": "Villa",
        "location": "Bethel",
        "price": "32,450,000",
        "bedRoom": 4,
        "bathRoom": 3,
        "size": "1587 sq ft",
        "image": house5,
        "rooms": [room1, room2, room3, house1, house2, house3, house4, house5],
    },
    {
        "_id": "sum0BAD4",
        "type": "Villa",
        "location": "Summit",
        "price": "23,250,000",
        "bedRoom": 2,
        "bathRoom": 2,
        "size": "1587 sq ft",
        "image": house4,
        "rooms": [room1, room2, room3, house1, house2, house3, house4, house5],
    },
    {
        "_id": "leb00AD1",
        "type": "Villa",
        "location": "Lebu",
        "price": "25,870,000",
        "bedRoom": 4,
        "bathRoom": 2,
        "size": "1587 sq ft",
        "image": house3,
        "rooms": [room1, room2, room3, house1, house2, house3, house4, house5],
    },
];

// Exclusive Offers
export const exclusiveOffers = [
    {
        id: 1,
        location: "Lebu",
        description: "Enjoy a complimentary night and daily breakfast",
        priceOff: 25, expiryDate: "Aug 31",
        image: house1
    },
    {
        id: 2,
        location: "Kazanchis",
        description: "Enjoy a complimentary night and daily breakfast",
        priceOff: 25, expiryDate: "Aug 31",
        image: house3
    },
    {
        id: 3,
        location: "Ayat",
        description: "Enjoy a complimentary night and daily breakfast",
        priceOff: 25, expiryDate: "Aug 31",
        image: house6
    },
];

// Happy Clients
export const happyClients = [
    {
        id: 1,
        name: "Emma Rodriguez",
        address: "Addis Ababa, Ethiopia",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        rating: 5,
        review: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
    },
    {
        id: 2,
        name: "Liam Johnson",
        address: "Addis Ababa, Ethiopia",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        rating: 4, review: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!"
    },
    {
        id: 3,
        name: "Sophia Lee",
        address: "Addis Ababa, Ethiopia",
        image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
        rating: 5, review: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results."
    }
];

// Common Specifications
export const commonSpecifications = [
    {
        icon: "House",
        title: "Clean & Safe Stay",
        description: "A well-maintained and hygienic space just for you."
    },
    {
        icon: "Right",
        title: "Enhanced Cleaning",
        description: "This host follows Staybnb's strict cleaning standards."
    },
    {
        icon: "Location",
        title: "Excellent Location",
        description: "90% of guests rated the location 5 stars."
    },
    {
        icon: "Heart",
        title: "Smooth Check-In",
        description: "100% of guests gave check-in a 5-star rating."
    },
];