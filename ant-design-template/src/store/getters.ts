const getters = {
  roles: (state: any) => state.user.roles,
  prrmissions: (state: any) => state.user.prrmissions,
  rolesRoutes: (state: any) => state.roles.routes
};
export default getters;
