import { list } from "@keystone-6/core";
import {
  select,
  relationship,
  text,
  timestamp,
  integer,
  password,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const lists = {
  Page: list({
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ isIndexed: "unique", isFilterable: true }),
      content: document({
        formatting: true,
        links: true,
      }),
      order: integer(),
    },
  }),
  Person: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      // Added an email and password pair to be used with authentication
      // The email address is going to be used as the identity field, so it's
      // important that we set isRequired and isIndexed: 'unique'.
      email: text({ isIndexed: "unique", validation: { isRequired: true } }),
      // The password field stores a hash of the supplied password, and
      // we want to ensure that all people have a password set, so we use
      // the validation.isRequired flag.
      password: password({ validation: { isRequired: true } }),
    },
  }),
};
