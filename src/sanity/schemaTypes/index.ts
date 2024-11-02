import { type SchemaTypeDefinition } from 'sanity'
import {PageInfo} from './pageInfo'
import { Experience } from './experience'
import { Skill } from './skill'
import { Social } from './social'
import { Project } from './project'


export const schema: { types: SchemaTypeDefinition[] } = {

  types: [
    PageInfo,
    Experience,
    Skill,
    Social,
    Project, 
  ],
}
