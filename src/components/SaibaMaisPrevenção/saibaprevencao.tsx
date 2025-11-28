import * as S from './saibaprevencaostyled'
import { ButtonLink } from '../../presentation/buttons/ButtonPreVol/ButtonPreVol'

export function SaibaMaisProfissionalizante() {
    return(

    <S.AllContainer>
        <S.TituloPrincipal>
            Profissionalizar para Todos os Futuros: Quando o sonho coletivo se transforma em oportunidade real
        </S.TituloPrincipal>

        <S.DivContainer>
            
            <S.DivContainerTextos>
                <S.TituloPage>Um Marco Histórico para as Comunidades Rurais</S.TituloPage>
                <S.TextosPage>
                Em 2 de abril de 2025, a formatura da primeira turma do projeto “Profissionalizar para Todos os Futuros” marcou um momento histórico para as comunidades rurais de São Luís. A iniciativa, idealizada pelo Instituto Somos Todos Marianas e realizada com o apoio do Instituto Alcoa, Alumar e execução técnica do CEMP, nasceu com o propósito de democratizar o acesso à educação profissional em regiões frequentemente esquecidas pelas políticas públicas. Levando os cursos diretamente às comunidades, o projeto removeu barreiras como transporte, custos e tempo, permitindo que mães, pais, jovens e adultos participassem de forma acessível e digna.
                </S.TextosPage>
            </S.DivContainerTextos>
        </S.DivContainer>

        <S.DivContainerTextos>
            <S.TituloPage>Impacto Real e Histórias de Superação</S.TituloPage>
            <S.TextosPage>
                O impacto dessa estratégia foi transformador: 300 pessoas foram capacitadas em cinco comunidades rurais, recebendo qualificação em áreas importantes para o mercado de trabalho. Mais do que números, o projeto revelou histórias de superação e renascimento profissional, como a de formandos que, após anos de dificuldade para conseguir emprego, voltaram a acreditar em si mesmos e encontraram novas oportunidades. Esses relatos reforçam o poder da educação quando ela chega onde realmente é necessária, respeitando a realidade local e valorizando o potencial de cada participante.
            </S.TextosPage>
        </S.DivContainerTextos>

        <S.DivContainer>
            
            <S.DivContainerTextos>
                <S.TituloPage>A Celebração de um Futuro Promissor</S.TituloPage>
                <S.TextosPage>
                A cerimônia de formatura simbolizou não apenas a conclusão dos cursos, mas a celebração do esforço coletivo e da esperança renovada. Com a presença de representantes das instituições parceiras, lideranças comunitárias e da equipe do Instituto Somos Todos Marianas, o evento destacou o compromisso conjunto em promover transformação social contínua. O sucesso desta primeira edição confirma que parcerias responsáveis e iniciativas centradas na comunidade podem gerar mudanças duradouras, impulsionando a expansão do projeto para alcançar ainda mais pessoas e fortalecer o desenvolvimento das comunidades rurais de São Luís.
                </S.TextosPage>
            </S.DivContainerTextos>
        </S.DivContainer>

        <S.AreaBotoes>
           <ButtonLink to="/" variant="outlined">
            Voltar Topo
            </ButtonLink>
           
        <ButtonLink to="/voluntario" variant="filled">
            Seja um voluntário
        </ButtonLink>
        </S.AreaBotoes>

    </S.AllContainer>
    )
}