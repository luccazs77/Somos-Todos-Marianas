export function ButaoTopo() {
    return(
        <button onClick={ ()=>window.scrollTo({ top: 0, behavior: "smooth" })}>Voltar ao Topo</button>
    )
}