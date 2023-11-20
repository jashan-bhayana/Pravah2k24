import {
    jassigill, kumarvishwas, instagram, youtube, twitter, facebook, gajendra, shruti, ravindra, naushad, rawaz, thirak, dj, sur, celebrityNight, aaveg, aftermovie, logoreveal, football, volleyball, basketball, chess, carrom, cricket, tabletennis, tugofwar, kabbadi, badminton, cosplay, bhagirath, masterchef, clashofband, paintball, kavyanjali, trailer, artexhi, rapbazzi, startupexpo, nora, sunil, chinmay, gaurav, prashant, jashan, vishal
} from "./assets/index"

const previousCelebrities = [
    {
        celebrityName: "Gajendra Verma",
        celebrityPhoto: gajendra,
        celebrityYear: "",
    },
    {
        celebrityName: "Shruti Sinha",
        celebrityPhoto: shruti,
        celebrityYear: "",
    },
    {
        celebrityName: "Kumar Vishwas",
        celebrityPhoto: kumarvishwas,
        celebrityYear: "",
    },
    {
        celebrityName: "Ravindra Upadhyay",
        celebrityPhoto: ravindra,
        celebrityYear: "",
    },
    {
        celebrityName: "Nora Fatehi",
        celebrityPhoto: nora,
        celebrityYear: "",
    },
    {
        celebrityName: "Sunil Shetty",
        celebrityPhoto: sunil,
        celebrityYear: "",
    },
    {
        celebrityName: "Jassie Gill",
        celebrityPhoto: jassigill,
        celebrityYear: "",
    },
    {
        celebrityName: "Naushad Ali kawa",
        celebrityPhoto: naushad,
        celebrityYear: "",
    },


]

const socialContact = [
    {
        socialName: "Twitter",
        socialIcon: twitter,
        socialLink: "https://twitter.com/@pravah_skit"
    },
    {
        socialName: "Instagram",
        socialIcon: instagram,
        socialLink: "https://www.instagram.com/skitpravah/"
    },
    {
        socialName: "Facebook",
        socialIcon: facebook,
        socialLink: ""
    },
    {
        socialName: "YouTube",
        socialIcon: youtube,
        socialLink: "https://www.youtube.com/@skitpravah4946"
    },
]


const majorEvents = [
    {
        id: 'eventOne',
        imgUrl: thirak,
        title: 'Thirak',
        titleInfo: "Colleges collide in a rhythmic battleground, an electrifying dance competition that captivates with unparalleled talent.",
    },
    {
        id: 'eventTwo',
        imgUrl: dj,
        title: 'DJ Night',
        titleInfo: "Dive into euphoria at our DJ Night—an unforgettable nocturnal symphony of beats and brilliance",
    },
    {
        id: 'eventThree',
        imgUrl: rawaz,
        title: 'Rawaz',
        titleInfo: "A runway transformed into a poetic symphony of avant-garde elegance.",
    },
    {
        id: 'eventFour',
        imgUrl: sur,
        title: 'Sur',
        titleInfo: "Ignite passion in a dazzling vocal symphony, as the stage transforms into an exhilarating arena for musical prowess.",
    },
    {
        id: 'eventFive',
        imgUrl: celebrityNight,
        title: 'Celebrity Night',
        titleInfo: "A dazzling rendezvous with stardom, where glamour meets charisma in an electrifying spectacle.",
    },
];

const glimpsesCard = [
    {
        title: "Pravah 23 After Story",
        displayState: false,
        thumbnail: aftermovie,
        youtubeLink: "https://youtu.be/V-094flkqjI?si=3I2KrRDReWjNbfxq",
    },
    {
        title: "Aaveg",
        displayState: false,
        thumbnail: aaveg,
        youtubeLink: "",

    },
    {
        title: "Pravah 2024 Logo Reveal",
        displayState: true,
        thumbnail: logoreveal,
        youtubeLink: "",

    },
    {
        title: "Pravah Trailer",
        displayState: false,
        thumbnail: trailer,
        youtubeLink: "https://youtu.be/DyuUx1obJ_M?si=uOPCONycuEP8fEnW",

    },
]

const EventMenuLinks = [
    {
        navLinkInfo: "Non Technical Events",
        navLinkTarget: "#nonTech"
    },
    {
        navLinkInfo: "Technical Events",
        navLinkTarget: "#tech"
    },
    {
        navLinkInfo: "Cultural Events",
        navLinkTarget: "#cultural"
    },
    {
        navLinkInfo: "Literary Events",
        navLinkTarget: "#literary"
    },
    {
        navLinkInfo: "Social Events",
        navLinkTarget: "#social"
    },
    {
        navLinkInfo: "Esports Events",
        navLinkTarget: "#esports"
    },

]

const priorEvents = [
    {
        eventName: "Rawaz",
        eventPhoto: rawaz,
    },
    {
        eventName: "Thirak",
        eventPhoto: thirak,
    },
    {
        eventName: "Sur",
        eventPhoto: sur,
    },
    {
        eventName: "Clash of Bands",
        eventPhoto: clashofband,
    },
    {
        eventName: "Startup Expo",
        eventPhoto: startupexpo,
    },
    {
        eventName: "Cosplay",
        eventPhoto: cosplay,
    },
    {
        eventName: "Bhagirath",
        eventPhoto: bhagirath,
    },
    {
        eventName: "Rap'arazzi",
        eventPhoto: rapbazzi,
    },
    {
        eventName: "Paintball Battleground",
        eventPhoto: paintball,
    },
    {
        eventName: "Art Exibition",
        eventPhoto: artexhi,
    },
    {
        eventName: "Kavyanjali",
        eventPhoto: kavyanjali,
    },
    {
        eventName: "Masterchef",
        eventPhoto: masterchef,
    },
    {
        eventName: "DJ Night",
        eventPhoto: dj,
    },
    {
        eventName: "Celebrity Night",
        eventPhoto: celebrityNight,
    }
]

const sponsorFormFields = [
    {
        fieldName: 'firstName',
        fieldLabel: 'First name',
        fieldType: 'text',
        fieldPlaceholder: 'First Name'
    },
    {
        fieldName: 'mobileNo',
        fieldLabel: 'Mobile No',
        fieldType: 'tel',
        fieldPlaceholder: 'Mobile No'
    },
    {
        fieldName: 'companyName',
        fieldLabel: 'Company Name',
        fieldType: 'text',
        fieldPlaceholder: 'Company Name'
    },
    {
        fieldName: 'companyAddress',
        fieldLabel: 'Company Full Address',
        fieldType: 'text',
        fieldPlaceholder: 'Company Full Address'
    },
    {
        fieldName: 'queries',
        fieldLabel: 'Queries',
        fieldType: 'textarea',
        fieldPlaceholder: 'Describe your Queries'
    },
    {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        fieldType: 'text',
        fieldPlaceholder: 'Last Name'
    },
    {
        fieldName: 'emailID',
        fieldLabel: 'Email ID',
        fieldType: 'text',
        fieldPlaceholder: 'Email ID'
    },
    {
        fieldName: 'designation',
        fieldLabel: 'Designation',
        fieldType: 'text',
        fieldPlaceholder: 'Designation'
    },
    {
        fieldName: 'monetaryOption',
        fieldLabel: 'Monetary / Non Monetary',
        fieldType: 'text',
        fieldPlaceholder: 'Monetary / Non Monetary'
    },
    {
        fieldName: 'queries',
        fieldLabel: 'Queries',
        fieldType: 'textarea',
        fieldPlaceholder: 'Describe your Queries'
    },
];

const sponsorFormContact = [
    {
        memberName: "Devik Rathore",
        memberPhoto: jassigill,
        memberPhone: "8000342116"
    },
    {
        memberName: "Avantika Bansal",
        memberPhoto: jassigill,
        memberPhone: "9571050287"
    },
    {
        memberName: "Archi Rathore",
        memberPhoto: jassigill,
        memberPhone: "6375061517"
    },
    {
        memberName: "Aman Joshi",
        memberPhoto: jassigill,
        memberPhone: "8764401145"
    },
]

// eventCategory = non_tect, tech, cultural, literary, social, esports
// eventType = Team, Individual

const eventCategoryDesc = [
    {
        eventCategoryName: "Non Technical Events",
        eventCategoryID: "non_tech"
    },
    {
        eventCategoryName: "Technical Events",
        eventCategoryID: "tech"
    },
    {
        eventCategoryName: "Cultural Events",
        eventCategoryID: "cultural"
    },
    {
        eventCategoryName: "Literary Events",
        eventCategoryID: "literary"
    },
    {
        eventCategoryName: "Social Events",
        eventCategoryID: "social"
    },
    {
        eventCategoryName: "Esports Events",
        eventCategoryID: "esports"
    },
]

const testEventDetails = [
    {
        eventName: "Startup Expo",
        eventPhotoLink: dj,
        eventCategoryID: "tech",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 80,
        eventMaxParicipationLimit: 80,
    },
    {
        eventName: "Sur",
        eventPhotoLink: dj,
        eventCategoryID: "cultural",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    },
    {
        eventName: "TOGGLE",
        eventPhotoLink: dj,
        eventCategoryID: "literary",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    },
    {
        eventName: "Bhagirath",
        eventPhotoLink: dj,
        eventCategoryID: "social",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    },
    {
        eventName: "Valorant",
        eventPhotoLink: dj,
        eventCategoryID: "esports",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    }
]

// eventRegStatus - live, closed, upcoming
const aavegEventDetails = [
    {
        eventName: "Badminton",
        eventPhotoLink: badminton,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Basketball",
        eventPhotoLink: basketball,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Chess",
        eventPhotoLink: chess,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Carrom",
        eventPhotoLink: carrom,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Football",
        eventPhotoLink: football,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Gully Circket",
        eventPhotoLink: cricket,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Table Tennis",
        eventPhotoLink: tabletennis,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Tug of War",
        eventPhotoLink: tugofwar,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Volleyball",
        eventPhotoLink: volleyball,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Kabaddi",
        eventPhotoLink: kabbadi,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    }

]

const pravahWebTeam = [
    {
        memberName: "@ChinmayBhatnagar",
        memberPhoto: chinmay,
        memberIntroStack: "Full Stack Developer",
        memberGithub: "https://github.com/ChinmayBhatnagar",
        memberLinkedIn: "https://www.linkedin.com/in/chinmay-bhatnagar-4140a424a/",
        memberPhone: "7976227748",
    },
    {
        memberName: "@PrashantSingh",
        memberPhoto: prashant,
        memberIntroStack: "MERN Stack Developer",
        memberGithub: "https://github.com/Prashant-S29",
        memberLinkedIn: "https://www.linkedin.com/in/prashant-singh-529391250/",
        memberPhone: "9079215052",
    },
    {
        memberName: "@Jashan",
        memberPhoto: jashan,
        memberIntroStack: "Frontend Developer",
        memberGithub: "https://github.com/jashan-bhayana",
        memberLinkedIn: "https://www.linkedin.com/in/jashan-bhayana-6b1348226/",
        memberPhone: "9680433825",
    },
    {
        memberName: "@VishalRawat",
        memberPhoto: vishal,
        memberIntroStack: "Backend Developer",
        memberGithub: "https://github.com/Vicky2114",
        memberLinkedIn: "https://www.linkedin.com/in/vishal-rawat-13739823a",
        memberPhone: "9376744239",
    },
    {
        memberName: "@GauravSharma",
        memberPhoto: gaurav,
        memberIntroStack: "Frontend Developer",
        memberGithub: "https://github.com/gauravsharma25404",
        memberLinkedIn: "https://www.linkedin.com/in/gaurav-sharma-476173229/",
        memberPhone: "8690574054",
    },
]

const centralWorkingCommittee = [
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    }
]

const coreTeam = [
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
]




export {
    sponsorFormContact,
    previousCelebrities,
    socialContact,
    majorEvents,
    glimpsesCard,
    EventMenuLinks,
    priorEvents,
    sponsorFormFields,
    testEventDetails,
    eventCategoryDesc,
    aavegEventDetails,
    pravahWebTeam,
    centralWorkingCommittee,
    coreTeam
}



