function SayMyName(props)
{
    return (
        <div>
            <p>Fala aí {props.nome}, suave?</p> {/* Deixando o componente dinâmico com o props */}
        </div>
    )
}

export default SayMyName