function r(...e){return window.enmity.getModuleByProps(e)}function n(e){window.enmity.plugins.registerPlugin(e)}const t=r("isDeveloper");n({name:"experiments",onStart(){Object.defineProperty(t.default,"isDeveloper",{get:()=>!0,set:()=>{},configurable:!0})},onStop(){Object.defineProperty(t.default,"isDeveloper",{get:()=>!1,set:()=>{},configurable:!0})}});