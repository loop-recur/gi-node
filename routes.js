exports.routes = {
  '/': { 'index': Controllers.root.index},

  'store': { 'search': Controllers.store.search },

  'product': {':id': Controllers.product.show },

  'dashboard': {'home': Controllers.dashboard.home}
};

