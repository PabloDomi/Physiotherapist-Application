import{r}from"./index-Cu9bd8lq.js";import{G as n}from"./GetDataService-Bc2cEZCe.js";import{u as i}from"./useGlobalState-BC4VoH9w.js";function m(){const[o,a]=r.useState(!0),e=i(s=>s.setPatients);return r.useEffect(()=>{(async()=>{try{const t=await n.getPatients();e(t)}catch(t){throw console.error(t),new Error("Error al obtener los pacientes")}})(),setTimeout(()=>{a(!1)},1e3)},[e]),{isLoading:o}}export{m as u};
