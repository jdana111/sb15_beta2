// QQ - Empty!
// QQ Show Natho the ChatGPT response.
const schema = {
  cities: {
    type: "cities",
    fields: {
      city_name: "string", // shorthand
      state: "string", // shorthand
    },
    relationships: {
      user: {
        type: "users",
      },
    },
  },
};

export default schema;
