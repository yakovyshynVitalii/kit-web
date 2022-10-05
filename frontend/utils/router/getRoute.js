const ROUTES = {
  Home: {
    name: "locale",
  },
  Projects: {
    name: "locale-projects",
  },
  Contacts: {
    name: "locale-contacts",
  },
};

export function getRoute(key) {
  return ROUTES[key];
}
