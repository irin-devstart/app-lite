const WebRoute = {
  home: "/",
  auth: {
    login: "/login",
    profile: "/profile",
    logout: "/logout",
  },
  shippingComps: {
    index: "/shipping-comps",
    create: "/shipping-comps/create",
    update: "/shipping-comps/update/:id",
  },
};

export default WebRoute;
