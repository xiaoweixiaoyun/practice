const getters = {
  name: (state: any) => state.user.name,
  roles: (state: any) => state.user.roles,
  permissionRoutes: (state: any) => state.permission.routes
};
export default getters;
