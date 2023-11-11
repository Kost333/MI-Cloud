import {
    Clients,
    FooterList,
    GlobalInformation,
    HeaderListItems,
    OurProducts,
    QuestionsStandard,
    Servers,
    Service
} from "@/types/types";

export const services: Service[] = [
    {
        id: 1,
        title: "Administration",
        description: 'Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.',
        backgroundImage: "/assets/aboutUs.svg",
        serviceLogo: "/assets/administration.svg"
    },
    {
        id: 2,
        title: "Support",
        description: 'Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.',
        backgroundImage: "/assets/services.svg",
        serviceLogo: "/assets/Support.svg"
    },
    {
        id: 3,
        title: "IP Announcement",
        description: 'Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur.',
        backgroundImage: "/assets/aboutUs.svg",
        serviceLogo: "/assets/ipAnnouncement.svg"
    },
];

export const globalInformation: GlobalInformation[] = [
    {
        id: 1,
        title: "99.9% Uptime Guarantee",
        image: "/assets/global-information/global-information-1.svg",
    },
    {
        id: 2,
        title: "SSD M.2",
        image: "/assets/global-information/global-information-2.svg",
    },
    {
        id: 3,
        title: "Unlimited Bandwidth",
        image: "/assets/global-information/global-information-3.svg",
    },
    {
        id: 4,
        title: "Cyber Defense",
        image: "/assets/global-information/global-information-4.svg",
    },
    {
        id: 5,
        title: "Our Value for Money",
        image: "/assets/global-information/global-information-5.svg",
    },
    {
        id: 6,
        title: "Free Product Packs",
        image: "/assets/global-information/global-information-6.svg",
    }
]

export const ourProducts: OurProducts[] = [
    {
        id: 1,
        title: "Virtual servers",
        description: "Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.",
        image: "/assets/header/product.svg"
    },
    {
        id: 2,
        title: "Virtual servers",
        description: "Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.",
        image: "/assets/header/product.svg"
    },
    {
        id: 3,
        title: "Virtual servers",
        description: "Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.",
        image: "/assets/header/product.svg"
    },
    {
        id: 4,
        title: "Virtual servers",
        description: "Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.",
        image: "/assets/header/product.svg"
    },
    {
        id: 5,
        title: "Virtual servers",
        description: "Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.",
        image: "/assets/header/product.svg"
    },
    {
        id: 6,
        title: "Virtual servers",
        description: "Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.",
        image: "/assets/header/product.svg"
    }
];

export const servers: Servers[] = [
    {
        id: 1,
        title: "Sign up",
        description: "Lorem ipsum dolor sit amet consectetur." +
            " Phasellus pharetra in id at tristique velit eget lacus." +
            " Ut donec etiam aliquam mattis lacus rhoncus viverra.",
        image: "/assets/signUpFile.svg"
    },
    {
        id: 2,
        title: "Create your server",
        description: "Lorem ipsum dolor sit amet consectetur." +
            " Phasellus pharetra in id at tristique velit eget lacus." +
            " Ut donec etiam aliquam mattis lacus rhoncus viverra.",
        image: "/assets/signUpFile.svg"
    },
    {
        id: 3,
        title: "Checkout with 1 click",
        description: "Lorem ipsum dolor sit amet consectetur." +
            " Phasellus pharetra in id at tristique velit eget lacus." +
            " Ut donec etiam aliquam mattis lacus rhoncus viverra.",
        image: "/assets/signUpFile.svg"
    }
];

export const clients: Clients[] = [
    {
        id: 1,
        description: "Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus. Ut donec etiam aliquam mattis lacus rhoncus viverra.",
        name: "Name Surname",
        position: "position",
        profileImage: "/assets/profilePhoto.svg"
    },
    {
        id: 2,
        description: "Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus. Ut donec etiam aliquam mattis lacus rhoncus viverra.",
        name: "Name Surname",
        position: "position",
        profileImage: "/assets/profilePhoto.svg"
    },
    {
        id: 3,
        description: "Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus. Ut donec etiam aliquam mattis lacus rhoncus viverra.",
        name: "Name Surname",
        position: "position",
        profileImage: "/assets/profilePhoto.svg"
    }
];

export const headerListItems: HeaderListItems[] = [
    {
        id: 1,
        title: "Products",
        children: [
            {
                id: 11,
                hasImage: true,
                title: "Virtual servers",
                description: "Adjust resources and workloads with our virtual servers.",
            },
            {
                id: 12,
                hasImage: true,
                title: "Virtual servers with GPU",
                description: "Adjust resources and workloads with our virtual servers.",
            },
            {
                id: 13,
                hasImage: true,
                title: "Dedicated servers",
                description: "Adjust resources and workloads with our virtual servers.",
            },
            {
                id: 14,
                hasImage: true,
                title: "Dedicated servers with GPU",
                description: "Adjust resources and workloads with our virtual servers.",
            },
            {
                id: 15,
                hasImage: true,
                title: "Dedicated servers with GPU",
                description: "Adjust resources and workloads with our virtual servers.",
            },
            {
                id: 16,
                hasImage: true,
                title: "Dedicated servers with GPU",
                description: "Adjust resources and workloads with our virtual servers.",
            },
        ],
    },
    {
        id: 2,
        title: "Services",
        children: [
            {
                id: 21,
                hasImage: true,
                title: "Virtual servers",
                description: "Adjust resources and workloads with our virtual servers.",
            },
            {
                id: 22,
                hasImage: true,
                title: "Virtual servers with GPU",
                description: "Adjust resources and workloads with our virtual servers.",
            },
            {
                id: 23,
                hasImage: true,
                title: "Dedicated servers",
                description: "Adjust resources and workloads with our virtual servers.",
            },
        ],
    },
    {
        id: 3,
        title: "ML Cloud",
        children: [
            {
                id: 31,
                hasImage: false,
                title: "About us ",
                description: "",
            },
            {
                id: 32,
                hasImage: false,
                title: "Roadmap",
                description: "",
            },
            {
                id: 33,
                hasImage: false,
                title: "Career",
                description: "",
            },
        ],
    },
    {
        id: 4,
        title: "Blog",
        children: [],
    },
    {
        id: 5,
        title: "Contact us",
        children: [],
    },
];

export const footerList: FooterList[] = [
    {
        title: "The Company",
        list: [
            "About us",
            "Roadmap",
            "Contact us",
            "News",
            "Changelog",
            "Privacy Policy",
            "Terms of use",
        ],
    },
    {
        title: "Services",
        list: [
            "Virtual Servers",
            "Dedicated Servers",
            "Remote Desktop",
            "Cloud Databases",
            "Cloud Storage",
            "Kubernetes clusters",
            "Iaas, Cloud Private",
        ],
    },
    {
        title: "Products",
        list: [
            "Load balancer",
            "DNS",
            "CDN",
            "Neural Networks",
            "Administration",
            "Support",
            "IP announcement",
        ],
    },
];

export const questionsStandard: QuestionsStandard[] = [
    {
        id: 1,
        title: 'What do you need to get started?',
        answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
        opened: false
    },
    {
        id: 2,
        title: 'What do you need to get started?',
        answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
        opened: false

    },
    {
        id: 3,
        title: 'What do you need to get started?',
        answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
        opened: false
    },
    {
        id: 4,
        title: 'What do you need to get started?',
        answer: 'You can access your hosting services using your username and password that you receive after signing up. You can also use our web-based control panel to manage your hosting services.',
        opened: false
    },
];