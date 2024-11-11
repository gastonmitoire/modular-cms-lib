// src/core/cms.js
class CMS {
    constructor() {
      this.plugins = [];
    }
  
    registerPlugin(plugin) {
      this.plugins.push(plugin);
    }
  
    initialize() {
      this.plugins.forEach(plugin => plugin.init());
    }
  }
  
  module.exports = CMS;
  