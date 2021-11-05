const getters = {
  tagsList: (state: any) => state.navTab.tagsList,
  roles: (state: any) => state.user.roles,
  permissionRoutes: (state: any) => state.permission.routes
};
export default getters;
