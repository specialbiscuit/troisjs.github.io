import{k as e,a,M as r,d as t,S as o}from"./trois.module.2e161c81.js";import{r as s,o as n,c as i,w as f,a as d}from"./app.50a82873.js";import"./OrbitControls.9727ee0a.js";const m={components:{Box:e,Camera:a,MatcapMaterial:r,Renderer:t,Scene:o},mounted(){const e=this.$refs.renderer,a=this.$refs.mesh.mesh;e.onBeforeRender((()=>{a.rotation.x+=.01}))}};m.render=function(e,a,r,t,o,m){const c=s("Camera"),l=s("MatcapMaterial"),p=s("Box"),u=s("Scene"),h=s("Renderer");return n(),i(h,{ref:"renderer",antialias:"","orbit-ctrl":""},{default:f((()=>[d(c,{position:{x:0,y:0,z:10}}),d(u,{background:"#ffffff"},{default:f((()=>[d(p,{ref:"mesh",size:3,rotation:{y:Math.PI/4,z:Math.PI/4}},{default:f((()=>[d(l,{name:"2E763A_78A0B7_B3D1CF_14F209"})])),_:1},8,["rotation"])])),_:1})])),_:1},512)};export default m;
