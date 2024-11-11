"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMS = void 0;
// src/core/cms.ts
class CMS {
    constructor() {
        this.plugins = []; // Especifica el tipo adecuado si conoces la estructura
    }
    registerPlugin(plugin) {
        this.plugins.push(plugin);
    }
    initialize() {
        console.log("CMS Initialized with plugins 123:", this.plugins);
    }
}
exports.CMS = CMS;
