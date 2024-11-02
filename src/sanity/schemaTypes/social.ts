import {DocumentTextIcon} from '@sanity/icons'
import {defineType} from 'sanity'

export const Social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      description: "platform for each social media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],

})
