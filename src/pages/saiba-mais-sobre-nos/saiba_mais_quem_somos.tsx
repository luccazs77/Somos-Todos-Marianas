'use client'
import { BotaoTopo } from "../../components/botao_topo/BotaoTopo";
import Img16 from "/imagens/image16.png"
import FestaMariana from "/imagens/Sem título 5.png"
import Img8 from "/imagens/Sem título 8.png"
import * as S from './saiba_mais_quem_somos.styled'       
import { BotaoVoluntario } from "../../components/botao_voluntario/BotaoVoluntario";
import { Header } from "../../presentation/shared/Header/header";

export function SaibaMaisQuemSomos() {
    return(
<>  
    <S.AllContainer>
        <Header/>
        <S.ContainerInicial>

            <S.Img16 src={Img16} alt="Foto de Mariana em pé" />
            
        
                <S.TextosSobreNosInicio>
                <S.SobreNos>A Jornada Transformadora da Associação Somos Todos Marianas: Do Luto à Luta Contra o Feminicídio.

                </S.SobreNos>
        
        
                    <S.Texto>Na tarde de 13 de novembro de 2016, o silêncio de São Luís foi quebrado por um grito que nunca deveria ter existido. Mariana Costa, uma jovem publicitária cheia de sonhos, teve sua vida brutalmente interrompida, vítima de feminicídio. Naquele momento, não sabíamos, mas o eco daquele grito iria se transformar em um movimento que mudaria para sempre a luta contra a violência de gênero no Maranhão. </S.Texto>
        
                    <S.Titulo>Das Cinzas, nasce uma Esperança</S.Titulo>
                    <S.Texto>Como uma fênix que renasce das cinzas, a dor insuportável da perda de Mariana se transformou em uma força motriz para a mudança. Em 14 de fevereiro de 2019 – data que não por acaso simboliza o amor – 19 corações partidos se uniram para fundar a Associação Somos Todos Marianas. Éramos mães, pais, irmãs, amigos, todos unidos por um vínculo invisível de dor, mas também de esperança. A Jornada Transformadora da Associação Somos Todos Marianas: Do Luto à Luta Contra o Feminicídio.Na tarde de 13 de novembro de 2016, o silêncio de São Luís foi quebrado por um grito que nunca deveria ter existido. Mariana Costa, uma jovem publicitária cheia de sonhos, teve sua vida brutalmente interrompida, vítima de feminicídio. Naquele momento, não sabíamos, mas o eco daquele grito iria se transformar em um movimento que mudaria para sempre a luta contra a violência de gênero no Maranhão.</S.Texto>
                    <S.Titulo>Cultivando Mudanças, Colhendo Esperança</S.Titulo>
                    <S.Texto>Nossa jornada tem sido como cultivar um jardim em solo árido. Cada semente plantada – seja uma palestra em uma escola, uma ação social ou um projeto de lei – exigiu dedicação incansável. Houve momentos em que o desânimo ameaçou nos consumir, mas então nos lembrávamos do sorriso de Mariana, e de tantas outras mulheres que não tiveram a chance de sorrir novamente.A aprovação da Lei Mariana Costa em 2023 foi um marco que jamais esqueceremos. Quando a lei que preserva a imagem e a honra das vítimas de feminicídio foi sancionada, senti como se um pedaço de Mariana estivesse sendo eternizado, protegendo outras mulheres mesmo após sua partida.</S.Texto>
        
        
            <S.ImgFesta src={FestaMariana} alt="Mariana em uma festa" />
        
                    <S.Texto>Educação: Nossa Arma Mais Poderosa. Se o feminicídio é fruto da ignorância e do preconceito, a educação é nosso antídoto mais potente. Nossas palestras em escolas, universidades e comunidades são como gotas d’água constantes, capazes de perfurar até a rocha mais dura do machismo estrutural. Ver os olhos de jovens se abrirem para essa realidade é como acender velas na escuridão – cada uma ilumina um pouco mais o caminho para um futuro sem violência.Educação: Nossa Arma Mais Poderosa. Se o feminicídio é fruto da ignorância e do preconceito, a educação é nosso antídoto mais potente. Nossas palestras em escolas, universidades e comunidades são como gotas d’água constantes, capazes de perfurar até a rocha mais dura do machismo estrutural. Ver os olhos de jovens se abrirem para essa realidade é como acender velas na escuridão – cada uma ilumina um pouco mais o caminho para um futuro sem violência.A Semana de Combate ao Feminicídio, que já está em sua 8ª edição, tornou-se um farol de conscientização. É uma semana em que toda a sociedade maranhense é convidada a refletir e agir. Como dizemos sempre: “O silêncio mata. Fale por elas, fale por você.”</S.Texto>
            </S.TextosSobreNosInicio>
        </S.ContainerInicial>
        
        
        <S.ContainerFinal>
            <S.TextosSobreNosFinal>
                <S.Titulo>Desafios e Conquistas: Dois Lados da Mesma Moeda</S.Titulo>
                <S.Texto>Cada reconhecimento que recebemos – o título de Utilidade Pública, as medalhas, as homenagens – são lembranças agridoces. Por um lado, mostram que nosso trabalho está fazendo a diferença. Por outro, são um lembrete constante de por que precisamos existir.A pandemia nos desafiou a reinventar nossa atuação. Através da parceria com as Justiceiras, conseguimos manter nossos atendimentos online, provando que nem mesmo o isolamento social poderia silenciar nossa causa.</S.Texto>
                <S.Titulo>O Futuro que Sonhamos Construir</S.Titulo>
                <S.Texto>Olhando para o futuro, nossa visão é clara: um Maranhão, e um Brasil, onde nenhuma mulher tema por sua vida pelo simples fato de ser mulher. Sabemos que é um sonho ambicioso, mas como dizia Mariana, “sonhos não têm limites quando acreditamos neles”.Nossos desafios continuam enormes. A prevenção através da educação, o apoio jurídico às vítimas, a sustentabilidade financeira da associação e a ampliação do nosso alcance são batalhas diárias. Mas cada vida salva, cada lei aprovada, cada consciência transformada nos dá a certeza de que estamos no caminho certo.A Associação Somos Todos Marianas não é apenas uma organização; é um movimento, um grito de esperança, um abraço coletivo que diz a cada mulher: “Você não está sozinha”. Enquanto houver uma única mulher em risco, continuaremos nossa luta. Porque, no fim das contas, a verdade que descobrimos nessa jornada é que realmente somos todos Marianas – e juntos, somos invencíveis.</S.Texto>
            </S.TextosSobreNosFinal>
            

            
            <S.Img8 src={Img8} alt="Mariana com buque"/>
        </S.ContainerFinal>
            <S.footer>
                <S.Titulo> PIX PARA DOAÇÕES :institutosomostodosmarianas@gmail.com</S.Titulo>
                <BotaoTopo />
                <BotaoVoluntario/>
                
            </S.footer>
    </S.AllContainer>
</>
    )
}