import{i as t,_ as e,$ as s}from"./OrbitControls.9727ee0a.js";import{A as i,B as a,a as n,E as o,H as r,I as m,f as h,c as l,d,g as c,e as u,S as p,h as f,U as y}from"./trois.module.2e161c81.js";import{r as g,o as x,c as S,w as M,a as N}from"./app.50a82873.js";const{randFloat:O,randFloatSpread:_}=s,A={components:{AmbientLight:i,BoxGeometry:a,Camera:n,EffectComposer:o,HalftonePass:r,InstancedMesh:m,PhongMaterial:h,PointLight:l,Renderer:d,RenderPass:c,StandardMaterial:u,Scene:p,Text:f,UnrealBloomPass:y},setup(){const s=[],i=new t,a=new e,n=new t;for(let e=0;e<2e3;e++)s.push({position:new t(_(200),_(200),_(200)),scale:O(.2,1),scaleZ:O(.1,1),velocity:new t(_(2),_(2),_(2)),attraction:.03+O(-.01,.01),vlimit:1.2+O(-.1,.1)});return{NUM_INSTANCES:2e3,instances:s,target:i,dummyO:a,dummyV:n}},mounted(){this.renderer=this.$refs.renderer,this.imesh=this.$refs.imesh.mesh,this.light=this.$refs.light.light,this.init()},methods:{init(){for(let t=0;t<this.NUM_INSTANCES;t++){const{position:e,scale:s,scaleZ:i}=this.instances[t];this.dummyO.position.copy(e),this.dummyO.scale.set(s,s,i),this.dummyO.updateMatrix(),this.imesh.setMatrixAt(t,this.dummyO.matrix)}this.imesh.instanceMatrix.needsUpdate=!0,this.renderer.onBeforeRender(this.animate)},animate(){this.target.copy(this.renderer.three.mouseV3),this.light.position.copy(this.target);for(let t=0;t<this.NUM_INSTANCES;t++){const{position:e,scale:s,scaleZ:i,velocity:a,attraction:n,vlimit:o}=this.instances[t];this.dummyV.copy(this.target).sub(e).normalize().multiplyScalar(n),a.add(this.dummyV).clampScalar(-o,o),e.add(a),this.dummyO.position.copy(e),this.dummyO.scale.set(s,s,i),this.dummyO.lookAt(this.dummyV.copy(e).add(a)),this.dummyO.updateMatrix(),this.imesh.setMatrixAt(t,this.dummyO.matrix)}this.imesh.instanceMatrix.needsUpdate=!0}}};A.render=function(t,e,s,i,a,n){const o=g("Camera"),r=g("AmbientLight"),m=g("PointLight"),h=g("BoxGeometry"),l=g("StandardMaterial"),d=g("InstancedMesh"),c=g("PhongMaterial"),u=g("Text"),p=g("Scene"),f=g("RenderPass"),y=g("UnrealBloomPass"),O=g("HalftonePass"),_=g("EffectComposer"),A=g("Renderer");return x(),S(A,{ref:"renderer","orbit-ctrl":"","mouse-move":"","mouse-raycast":""},{default:M((()=>[N(o,{position:{z:200}}),N(p,null,{default:M((()=>[N(r,{color:"#808080"}),N(m,{color:"#ff6000"}),N(m,{ref:"light",color:"#0060ff",intensity:.5},null,8,["intensity"]),N(m,{color:"#ff6000",intensity:.5,position:{x:100}},null,8,["intensity"]),N(m,{color:"#0000ff",intensity:.5,position:{x:-100}},null,8,["intensity"]),N(d,{ref:"imesh",count:i.NUM_INSTANCES},{default:M((()=>[N(h,{width:2,height:2,depth:10}),N(l,{transparent:!0,opacity:.9,metalness:.8,roughness:.5},null,8,["opacity","metalness","roughness"])])),_:1},8,["count"]),N(u,{text:"TroisJS","font-src":"/assets/helvetiker_regular.typeface.json",align:"center",size:30,height:5,position:{x:0,y:0,z:0},"cast-shadow":!0},{default:M((()=>[N(c)])),_:1})])),_:1}),N(_,null,{default:M((()=>[N(f),N(y,{strength:1}),N(O,{radius:1,scatter:0})])),_:1})])),_:1},512)};export default A;
