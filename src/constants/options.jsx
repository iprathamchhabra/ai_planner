export const SelectTravelsList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1 People'
    },
    {
        id:2,
        title:'A couple',
        desc:'A couple in tandem',
        icon:'👫',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'👨🏻‍👩🏻‍👧🏻',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'😀',
        people:'6 to 10 People'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Budget friendly',
        icon:'🪙',
    },
    {
        id:2,
        title:'Mid-range',
        desc:'Keep cost on the average side',
        icon:'💸',
        },
    {
        id:3,
        title:'Luxury',
        desc:'High-end travel: Dont worry about cost',
        icon:'🤑',
    }
]

export const AI_PROMPT= 'Generate Travel Plan for Location : {location} for {totalDays} Days for {traveller} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in json format.'