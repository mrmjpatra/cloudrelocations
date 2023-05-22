import React from "react"
import Experience from "./AboutCR/Experience"
import History from "./AboutCR/History"
import Values from "./AboutCR/Values"
import Investments from "./AboutCR/Investments"
import Advisory from "./AboutCR/Advisory"
import Management from "./AboutCR/Management"
import CoreManagement from "./AboutCR/CoreManagement"
import MiddleManagement from "./AboutCR/MiddleManagement"
import Base from "./AboutCR/Base"
import SocialActivities from "./AboutCR/SocialActivities"
import Clients from "./AboutCR/Clients"
import CRClients from "./AboutCR/CRClients"
import USP from "./Why/USP"
import Profile from "./Why/Profile"
import ValueAddedService from "./Why/ValueAddedService"
import Safety from "./Why/Safety"
import ExpertsAdvice from "./Why/ExpertsAdvice"
import TeamCommitment from "./Why/TeamCommitment"
import TypeVechile from "./Why/TypeVechile"
import Advantages from "./Why/Advantages"
import FAQS from "./Why/FAQS"
import QualityAssurance from "./Why/QualityAssurance"
import IsoPolicty from "./Policies/IsoPolicty"
import ServicePolicy from "./Policies/ServicePolicy"
import QualityPolicy from "./Policies/QualityPolicy"
import PackingPolicy from "./Policies/PackingPolicy"
import TrainingPolicy from "./Policies/TrainingPolicy"

type aboutMenuContentType={
    id:number,
    path:string,
    component:React.FC
}
export const aboutMenuContent:aboutMenuContentType[]=[
    {
        id:1,
        path:'experience',
        component:Experience
    },
    {
        id:2,
        path:'history',
        component:History
    },
    {
        id:3,
        path:'values',
        component:Values
    },
    {
        id:4,
        path:'investments',
        component:Investments
    },
    {
        id:5,
        path:'advisory',
        component:Advisory
    },
    {
        id:6,
        path:'management',
        component:Management
    },
    {
        id:7,
        path:'core-management',
        component:CoreManagement
    },
    {
        id:8,
        path:'middle-management',
        component:MiddleManagement
    },
    {
        id:9,
        path:'base',
        component:Base
    },
    {
        id:10,
        path:'social-activities',
        component:SocialActivities
    },
    {
        id:11,
        path:'clients',
        component:Clients
    },
    {
        id:12,
        path:'cloud-clients',
        component:CRClients
    },
    {
        id:13,
        path:'usp',
        component:USP
    },
    {
        id:14,
        path:'profile',
        component:Profile
    },
    {
        id:15,
        path:'value-added-service',
        component:ValueAddedService
    },
    {
        id:16,
        path:'safety',
        component:Safety
    },
    {
        id:17,
        path:'experts-advice',
        component:ExpertsAdvice
    },
    {
        id:18,
        path:'team-commitment',
        component:TeamCommitment
    },
    {
        id:19,
        path:'type-vechiles',
        component:TypeVechile
    },
    {
        id:20,
        path:'advantages',
        component:Advantages
    },
    {
        id:21,
        path:'faqs',
        component:FAQS
    },
    {
        id:22,
        path:'quality-assurance',
        component:QualityAssurance
    },
    {
        id:23,
        path:'type-vechiles',
        component:TypeVechile
    },
    {
        id:24,
        path:'iso-policy',
        component:IsoPolicty
    },
    {
        id:25,
        path:'service-policy',
        component:ServicePolicy
    },
    {
        id:26,
        path:'quality-policy',
        component:QualityPolicy
    },
    {
        id:27,
        path:'packing-policy',
        component:PackingPolicy
    },
    {
        id:28,
        path:'training-policy',
        component:TrainingPolicy
    },
    
]