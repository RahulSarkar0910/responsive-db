import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import MonitorIcon from '@mui/icons-material/Monitor';

export const SidebarData = [
    {
        title: "Incident Monitoring",
        icon: <MonitorIcon />,
        link: "/"
    },
    {
        title: "Service Request",
        icon: <MiscellaneousServicesIcon />,
        link: "/Service"
    },
    {
        title: "Graph",
        icon: <TrendingUpOutlinedIcon />,
        link: "/Graph"
    },
    {
        title: "About Us",
        icon: <InfoOutlinedIcon />,
        link: "/aboutus"
    },
    {
        title: "Contact Us",
        icon: <PermContactCalendarOutlinedIcon />,
        link: "/contactus"
    }
]


