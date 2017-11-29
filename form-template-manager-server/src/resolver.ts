import {
    TemplateQueryArgs,
} from './schema/schema';
import { Template } from './api/Template';

const fakeTemplateDatabase = {
    '59f31a53926fb6a5f350d251': {
        "_id" : "59f31a53926fb6a5f350d251",
        "headerPrimary" : "lightblue",
        "backgroundColor" : "red",
        "buttonColor" : "green",
        "buttonTextColor" : "white",
        "hasHeader" : true,
        "hasConcept" : true,
        "hasReference" : true,
        "commerce" : "59ad3fd1fbb8c8356172c880",
    }
}

export default {
    Query: {
        async template(obj: undefined, args: TemplateQueryArgs) {
            return await fakeTemplateDatabase[args.id]; // mongo service getTemplate(args.id)
        },
    },
    Template: {
        id: (template: Template) => template._id,
    },
}