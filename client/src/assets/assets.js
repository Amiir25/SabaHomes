import calenderIcon from './calenderIcon.svg';
import closeIcon from './closeIcon.svg';

// Logo
import hero from './hero.jpg';
import logo from './logo.png';
import logoDark from './logo-dark.png';
import logoGreen from './logo-green.png';
import logoPink from './logo-pink.png';
import menuIcon from './menuIcon.svg';
import searchIcon from './searchIcon.svg';

// Houses
import house1 from './houses/house-1.jpg';
import house2 from './houses/house-2.jpg';
import house3 from './houses/house-3.jpg';
import house4 from './houses/house-4.jpg';
import house5 from './houses/house-5.jpg';
import house6 from './houses/house-6.jpg';


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
    },
];

// Exclusive Offers
export const exclusiveOffers = [
    {
        _id: 1,
        location: "Lebu",
        description: "Enjoy a complimentary night and daily breakfast",
        priceOff: 25, expiryDate: "Aug 31",
        image: exclusiveOfferCardImg1
    }
];