
import 'dotenv/config';
import { DBSettingsSchema, MailServerSchema, UserRoleSchema, EmailsSchema } from './types';
console.log(process.env.NODE_ENV);
export const development: boolean = process.env.NODE_ENV !== "production";
import {version} from "../../package.json"
export const AppConstants = {
    appName: "Abaa Technology Solutions",
    baseUrl: `http://localhost:3002/v${version}/`,
    version:version,
    phoneNumberSize: 11,
    routes: {
        login: `/v${version}/login`,
        register: `/v${version}/register`,
        contact_us: `/v${version}/contact-us`,
        setup: `/v${version}/setup`,
        get_users: `/v${version}/get-users`,
        get_enquiries: `/v${version}/get-enquiries`,
        get_applications: `/v${version}/get-applications`,
        resume: `/v${version}/submit-application`,
        newsletter: `/v${version}/newsletter`,
    },
    txnPinSize:4
}
export const UserRoles: UserRoleSchema[] = [
    {
        name: "Administrator",
        description: "Full access to system settings, user management, content management, plugins, and backup/restore options.",
        permissions: ["delete", "edit"]
    },
    {
        name: "Editor",
        description: "Create, edit, and publish content; approve drafts; manage media; moderate content; view basic analytics.",
        permissions: ["delete", "edit"]
    },
    {
        name: "Author",
        description: "Create and save drafts of content; submit content for review and approval; limited media access.",
        permissions: ["delete", "edit"]
    },
    {
        name: "Subscriber",
        description: "View public content; comment on posts; access exclusive/member-only content.",
        permissions: ["delete", "edit"]
    }
    ,
    {
        name: "Guest",
        description: "View public content; no comment privileges or access to private areas of the site.",
        permissions: ["view","comment"]
    }
]
export const DBSettings: DBSettingsSchema = {
    host: "localhost",
    user: process.env.DBUser,
    password: process.env.DBPassword,
    port: !development ? 3306 : parseInt(String(process.env.DBDevPort)),
    database: process.env.DBDatabase
}
export const EmailSettings: EmailsSchema = {
    default: {
        email: process.env.ContactsSettingsDefaultEmail,
        password: process.env.ContactsSettingsDefaultPassword
    },
    noreply: {
        email: process.env.ContactsSettingsSupportNoreplyEmail,
        password: process.env.ContactsSettingsSupportNoreplyPassword
    },
    support: {
        email: process.env.ContactsSettingsSupportEmail,
        password: process.env.ContactsSettingsSupportPassword
    }
}
export const MailServerSettings: MailServerSchema = {
    authUser: development ? "" : process.env.MailserverAuthUser,
    authPass: development ? "" : process.env.MailserverAuthPass,
    host: development ? process.env.MailDevServerHost : process.env.DBDevDatabase,
    port: development ? parseInt(String(process.env.MailDevServerPort)) : parseInt(String(process.env.MailserverPort)),
    secure: Boolean(process.env.MailserverSecure)
}
export const GetUrl = (path: string): string => {
    return String(path).replace("/v1/", "")
}
export const ProtectedRoutes: string[] = [
    GetUrl(AppConstants.routes.get_users),
    GetUrl(AppConstants.routes.get_enquiries)
];
export const SECRET_KEY = "";

