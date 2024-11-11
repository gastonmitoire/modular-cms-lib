// src/core/cms.ts
export class CMS {
  private plugins: any[] = []; // Especifica el tipo adecuado si conoces la estructura

  registerPlugin(plugin: any) {
    this.plugins.push(plugin);
  }

  initialize() {
    console.log("CMS Initialized with plugins 123:", this.plugins);
  }
}
