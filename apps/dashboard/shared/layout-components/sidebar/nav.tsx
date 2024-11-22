import { ROUTES } from "@/shared/constants";
import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>
const PartnerIcon = <i className="bx bx-group side-menu__icon"></i>;
const UserIcon = <i className="bx bx-user side-menu__icon"></i>;
const DistressIcon = <i className="bx bx-alarm side-menu__icon"></i>;
const SafeWordIcon = <i className="bx bx-lock side-menu__icon"></i>;
const SubscriptionIcon = <i className="bx bx-dollar-circle side-menu__icon"></i>;
const APIIcon = <i className="bx bx-key side-menu__icon"></i>;
const NotificationIcon = <i className="bx bx-bell side-menu__icon"></i>;
const ReportsIcon = <i className="bx bx-bar-chart-alt-2 side-menu__icon"></i>;
const SettingsIcon = <i className="bx bx-cog side-menu__icon"></i>;
const RoleIcon = <i className="bx bx-shield-alt-2 side-menu__icon"></i>;
const SupportIcon = <i className="bx bx-help-circle side-menu__icon"></i>;
const ActivityIcon = <i className="bx bx-list-ul side-menu__icon"></i>;
const badge = <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">12</span>

export const MenuItems: any[] = [
    { menutitle: "DASHBOARD" },
    {
        icon: DashboardIcon, badgetxt: null, title: 'AbaaTech Solution', type: "sub", active: false, 
        children: 
        [
            {path: "/dashboard/abaatechsolutions/header", type: "link", active: false, selected: false, title: "Header" },
            {path: "/dashboard/abaatechsolutions/body", type: "link", active: false, selected: false, title: "Body" },
            {path: "/dashboard/abaatechsolutions/products", type: "link", active: false, selected: false, title: "Products" },
            {path: "/dashboard/abaatechsolutions/board", type: "link", active: false, selected: false, title: "Board Members" },
            {path: "/dashboard/abaatechsolutions/enquiries", type: "link", active: false, selected: false, title: "Enquiries / Applications" },
            {path: "/dashboard/abaatechsolutions/news", type: "link", active: false, selected: false, title: "News" },
            {path: "/dashboard/partners/abaatechsolutions/settings", type: "link", active: false, selected: false, title: "Settings" },
            {path: "/dashboard/partners/abaatechsolutions/newsletter", type: "link", active: false, selected: false, title: "News letters" }
        ]
    },
    {
        icon: UserIcon, 
        badgetxt: null, 
        title: 'Users', 
        type: "sub", 
        active: false, 
        children: [
            { path: "/dashboard/users", type: "link", active: false, selected: false, title: "User list" },
        ],
    },
    {
        icon: DistressIcon, 
        badgetxt: null, 
        title: 'Career', 
        type: "sub", 
        active: false, 
        children: [
            { path: "/dashboard/applications", type: "link", active: false, selected: false, title: "Applications" },
        ],
    },
    {
        icon: SafeWordIcon, 
        badgetxt: null, 
        title: 'Settings', 
        type: "sub", 
        active: false, 
        children: [
        ],
    },
    {
        icon: SubscriptionIcon, 
        badgetxt: null, 
        title: 'Notifications', 
        type: "sub", 
        active: false, 
        children: [
           ],
    },
    {
        icon: ActivityIcon, 
        badgetxt: null, 
        title: 'Activity Feed', 
        type: "sub", 
        active: false, 
        children: [
            { path: "/dashboard/activity", type: "link", active: false, selected: false, title: "View Recent Activity" },
        ],
    },
];
export default MenuItems
