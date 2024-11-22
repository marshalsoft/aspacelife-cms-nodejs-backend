// Define the interface for a User
export interface UserSchema {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    dateOfBirth?: string;
    isActive?: boolean;
    address?: AddressSchema;
    phoneNumbers?: string[];
    newsletter?: boolean;
    profession?: string;
    city?: string;
    state?: string;
    country?: string;
    gender?: "male" | "female";
    createdAt?: string;
    updatedAt?: string;
    avatar?: string;
    dialCode?: string;
    phoneNumber?: string;
    userVerified?: boolean;
    accountType?: UserRoleSchema;
    bvnVerified?: boolean;
    accessToken?: string;
    biometricLogin?: boolean;
}

// Define the Address interface (nested object in the User interface)
interface AddressSchema {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export interface APIResponseSchema {
    status: boolean;
    message: string;
    data?: any;
    code?: "SUCCESS" | "CHANGE_DEVICE" | "FAILED" | "INACTIVE" | "INVALID_ACCESS_TOKEN";
}

export interface DBSettingsSchema {
    user?: string;
    password?: string;
    host?: string;
    port?: number;
    database?: string;
}

export interface DBResponseSchema {
    status: boolean;
    message: string;
    data: [key: any][] | [key: any]
}

export interface UserRoleSchema {
    name: UserRolesType;
    description: string;
    permissions: PrivilegesType[];
}

export type  UserRolesType = "Guest" | "Subscriber" | "Author" | "Editor" | "Administrator";
export type PrivilegesType = "edit" | "delete" | "view" | "comment";

export interface PostProps {
    id?: string;
    property_id?: string;
    category?: string;
    title?: string;
    address?: string;
    type?: string;
    liked?: boolean;
    price?: string;
    currency?: string;
    featured?: boolean;
    hot?: boolean;
    trendy?: boolean;
    amenities?: AmenitylistProps[];
    resourceList?: ResourcesProps[];
    description?: string;
    numberOfItems?: number;
    agentObject?: AgentDetailProps;
    give_out?: string;
    booked?: string;
    thumbnail?: string,
    images?: ResourcesProps[];
    country?: string;
    state?: string;
    city?: string;
    rating?: string;
    date?: string;
    host_id?: string;
    longitude?: string;
    latitude?: string;
    sub_type?: string,
    purpose?: string,
    land_mark?: string,
    land_mark_longitude?: string,
    land_mark_latitude?: string,
    furnised?: boolean,
    serviced?: boolean,
    promote?: boolean,
    newly_build?: boolean,
    accept_installment?: boolean,
    payment_expiry?: string,
    numberOfBeds?: string,
    numberOfBathrooms?: string,
    numberOfToilets?: string,
    size?: string;
    virtualTour?: boolean;
    videoTour?: boolean;
}

export interface AmenitylistProps {
    title?: string;
    value?: string;
    iconType?: string;
    icon?: string;
    name?: string;
    selected?: boolean;
    iconName?: "tv" | "dinner-dining" | "wine-bar" | "local-parking" | "restaurant" | "car" | "fitness-center" | "free-breakfast" | "cctv" | "shield" | "warehouse";
}

export interface ResourcesProps {
    icon?: string;
    uri?: string;
    name?: string;
    blob?: string;
    size?: string;
    path?: File;
    resourceUrl?: string;
    resourcesSize?: number;
    resourceType?: string;
}

export interface AgentDetailProps {
    moreDetails: { name: string; value: string }[];
}

export interface EmailPayloadSchema {
    to: string;
    subject: string;
    html: string;
    from?: string;
    userData?: UserSchema;
}

export interface EmailsSchema {
    default: {
        email?: string;
        password?: string;
    },
    support: {
        email?: string;
        password?: string;
    },
    noreply: {
        email?: string;
        password?: string;
    }
}

export interface MailServerSchema {
    host: string | undefined;
    port: number | undefined;
    secure: boolean | undefined;
    authUser: string | undefined;
    authPass: string | undefined;
}

export interface FirebaseConfigSchema {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
    databaseURL: string;
}

export interface CategorySchema {
    name: string;
    value: string;
    sub: ItemsSchema[];
}

export interface ItemsSchema {
    name?: string;
    icon?: string;
    selected?: boolean;
    value?: string;
}

export interface SmokingGuideSchema {
    tagname?: string;
    title?: string;
    sub?: string;
}

export interface SubscriptionSchema {
    id?: string;
    name?: string;
    amount?: string;
    date?: string;
    description?: string;
    duration?: string;
    currency?: string;
    pushNotification?: string;
}
export interface LoginProp {
    email:string;
    password:string;
}


export interface EncryptProp {
    data:string;
    key:string;
}
export interface EncryptResponse {
    iv:string;
    encryptedData:string;
}
export const perPageLimit = 50;
