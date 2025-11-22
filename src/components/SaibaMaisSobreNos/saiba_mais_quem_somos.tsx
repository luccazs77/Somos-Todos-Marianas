'use client'
import { BotaoTopo } from "../../components/botao_topo/BotaoTopo";
import Img16 from "/imagens/image16.png"
import * as S from '../../components/SaibaMaisSobreNos/saiba_mais_quem_somos.styled'       
import { BotaoVoluntario } from "../../components/botao_voluntario/BotaoVoluntario";



export function SaibaMaisQuemSomos() {
    return(
<>  
    <S.AllContainer>
        <S.ContainerInicial>

            
            
        
                <S.TextosSobreNosInicio>
                <S.SobreNos>A Jornada Transformadora da Associação Somos Todos Marianas: Do Luto à Luta Contra o Feminicídio.

                </S.SobreNos>
        
        
                    <S.Texto>A Associação Somos Todos Marianas nasceu do luto pela morte de Mariana Costa, vítima de feminicídio em 2016. O sofrimento de familiares e amigos transformou-se em força para a mudança, resultando na fundação da associação em 14 de fevereiro de 2019. Desde então, o movimento atua como instrumento de conscientização, prevenção e luta contra a violência de gênero no Maranhão. </S.Texto>
        
                    <S.Titulo>Cultivando Mudanças, Colhendo Esperança</S.Titulo>

                    <S.Texto>Com ações educativas em escolas, universidades e comunidades, a associação acredita que a educação é a arma mais poderosa contra o machismo estrutural. Um dos maiores marcos de sua atuação foi a aprovação da Lei Mariana Costa, em 2023, que protege a imagem e a memória das vítimas de feminicídio. A Semana de Combate ao Feminicídio, já em sua 8ª edição, tornou-se um importante momento de reflexão e mobilização social. Apesar dos desafios, como a pandemia, a associação se reinventou e seguiu oferecendo apoio, inclusive por meio de parcerias como as Justiceiras.</S.Texto>
                    <S.Titulo>Desafios e Conquistas: Dois Lados da Mesma Moeda</S.Titulo>
                
                <S.Texto>Cada reconhecimento que recebemos – o título de Utilidade Pública, as medalhas, as homenagens – são lembranças agridoces. Por um lado, mostram que nosso trabalho está fazendo a diferença. Por outro, são um lembrete constante de por que precisamos existir.A pandemia nos desafiou a reinventar nossa atuação. Através da parceria com as Justiceiras, conseguimos manter nossos atendimentos online, provando que nem mesmo o isolamento social poderia silenciar nossa causa.</S.Texto>
                
                <S.Titulo>O Futuro que Sonhamos Construir</S.Titulo>

                <S.Texto>O movimento segue firme no propósito de construir um futuro em que nenhuma mulher tema por sua vida. A Associação Somos Todos Marianas representa resistência, esperança e união — um grito coletivo de que nenhuma mulher está sozinha e que a luta por justiça e igualdade continua.</S.Texto>
            </S.TextosSobreNosInicio>
            <S.Img16 src={Img16} alt="Foto de Mariana em pé"/>
        </S.ContainerInicial>
        
        <S.BotoesContainer>
             <div>
            <BotaoTopo></BotaoTopo>
          </div>
          <div>
            <BotaoVoluntario></BotaoVoluntario>
          </div>
        </S.BotoesContainer>
    </S.AllContainer>
</>
    )
}