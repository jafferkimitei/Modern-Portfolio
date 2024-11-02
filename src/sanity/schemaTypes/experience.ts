import {DocumentTextIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const Experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name:"companyImage",
      title:"CompanyImage",
      type:"image",
      options: {
        hotspot: true,
      }
    },
    {
      name:"company",
      title:"Company",
      type:"text",
    },
    {
      name:"dateStarted",
      title:"DateStarted",
      type:"date",
    },
    {
      name:"dateEnded",
      title:"DateEnded",
      type:"date",
    },
    {
      name:"isCurrentlyWorkingHere",
      title:"IsCurrentlyWorkingHere",
      type:"boolean",
    },
    {
      name:"technologies",
      title:"Technologies",
      type:"array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name:"points",
      title:"Points",
      type:"array",
      of: [{  type: "string" } ],
    },
  ],

})
