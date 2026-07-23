export default function Grid({ rows = "auto", content }) {

     
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "10px",
        gridAutoRows: rows,
        width: "95vw",
        margin: "auto",
      }}
    >
      {/* conditional to avoid rendering with content = null */}
      {content && <Cards content={content}></Cards>}
    </div>
  );
  
}



function Cards({content}){

    const c = content.sort(


        (a,b)=>{

            if (Number(a.cost_in_credits) == "unkonwn") return -1;
            else return Number(a.cost_in_credits) - Number(b.cost_in_credits);
        }
    ).map((c) => (
      <div key={c.name} style={{rows:"span 1", height:"200px", backgroundColor:"blue", color:"white", border: "solid 2px grey", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <h2>{c.name}</h2>
        <p>Model: {c.model}</p>
        <p>Cost: ${c.cost_in_credits}</p>
      </div>
    ));

    return (

       c
    )


}