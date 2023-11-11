export type Service = {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    serviceLogo: string;
}

export type GlobalInformation = {
    id: number;
    title: string;
    image: string;
}

export type OurProducts = {
    id: number;
    title: string;
    description: string;
    image: string;
}

export type Servers = {
    id: number;
    title: string;
    description: string;
    image: string;
}

export type Clients = {
    id: number;
    description: string;
    name: string;
    position: string;
    profileImage: string;
}

export type childrenHeaderListItems = {
    id: number;
    hasImage: boolean;
    title: string;
    description: string;
}

export type HeaderListItems = {
    id: number;
    title: string;
    children: childrenHeaderListItems[];
}

export type FooterList = {
    title: string;
    list: string[];
}

export type QuestionsStandard = {
    id: number;
    title: string;
    answer: string;
    opened: boolean;
}

export type IProps = {
    title: string;
    description: string;
    hasImage: boolean;
}

export type QuestionType = {
    id: number | string;
    title: string,
    answer: string,
    opened: boolean
}

export type MenuIcon = {
    open: {
        src: string;
        alt: string;
    };
    close: {
        src: string;
        alt: string;
    };
}