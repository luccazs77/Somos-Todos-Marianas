import * as S from "../../pages/saiba-mais-edu/saiba_mais_educacao.styled";
import imageAcao3 from "/imagens/acao_do_projeto3.png";
import imageAcao1 from "/imagens/acao_do_projeto1.png";
import videoCasos from "/imagens/video_casos.png";
import { BotaoTopo } from "../../components/botao_topo/BotaoTopo";
import { BotaoVoluntario } from "../../components/botao_voluntario/BotaoVoluntario";

export function SaibaMaisEdu() {
  return (
    <>
      <S.AllBody>
        <S.UmGritoJustica>
          Somos Todos Marianas: <br /> Um Grito por Justiça e Transformação
          Social
        </S.UmGritoJustica>
        <S.InfoInicial>
          <S.VideoCasos src={videoCasos} alt="imagem_acao" />
          
          <S.TextoMeio> 
            
            <S.TituloMeio>Projeto Somos Todos Marianas</S.TituloMeio>
            
            <S.TextoMeio>
              O Somos Todos Marianas é mais do que uma iniciativa; é um
              movimento de resistência e transformação social. Nascido da dor e
              da indignação diante da crescente violência contra a mulher, o
              projeto se dedica a:
            </S.TextoMeio>

            <S.ListaUl>

              <S.ItensLista>
                Utilizando informação como ferramenta de prevenção, empoderamento e orientação para que mulheres reconheçam sinais de abuso e conheçam seus direitos.
              </S.ItensLista>

              <S.ItensLista>
                Promover a equidade de gênero em todos os níveis da sociedade:
                Acreditamos que a igualdade de gênero é fundamental para
                construir uma sociedade mais justa e pacífica.
              </S.ItensLista>

              <S.ItensLista>
                Realizar ações práticas que promovem equidade e proteção, como workshops e campanhas de conscientização: Incluindo atividades de autodefesa, debates sobre direitos das mulheres, conteúdos educativos e mobilização social para combater o ciclo da violência e incentivar a denúncia.
              </S.ItensLista>

            </S.ListaUl></S.TextoMeio>
           

        </S.InfoInicial>

        <S.TextosMeio>


          
          
          <S.AllContainer>
            <S.ContainerTexto>

              <S.TituloMeio>
                A Sinergia com “Profissionalizar para Todos os Futuros”
              </S.TituloMeio>

              <S.TextoMeio>
                Reconhecendo que a dependência financeira é um dos pilares que sustentam relações abusivas, o movimento ampliou seu impacto ao firmar parceria com o “Profissionalizar para Todos os Futuros”. Juntas, as iniciativas oferecem cursos profissionalizantes e apoio à inserção no mercado de trabalho. Essa colaboração reforça a autonomia das mulheres, permitindo que elas não apenas deixem situações violentas, mas construam novas possibilidades de vida com dignidade e independência.
              </S.TextoMeio>

              <S.TituloMeio>O Papel da Educação na Transformação Social</S.TituloMeio>

              <S.TextoMeio>A educação é uma ferramenta essencial contra a violência e a desigualdade, pois cria oportunidades profissionais, fortalece a autonomia das mulheres e promove redes de apoio. Ao profissionalizar para todos os futuros, incentivamos independência financeira, troca de experiências e a superação de estereótipos de gênero, permitindo que mais mulheres ocupem espaços antes negados a elas.
              </S.TextoMeio>
              
              
              <S.TituloMeio>Como você pode ajudar: </S.TituloMeio>

              <S.ListaUl>

                <S.ItensLista>
                  Voluntarie-se: Compartilhe suas habilidades em workshops, no apoio administrativo ou oferecendo mentoria às participantes.
                </S.ItensLista>
                
                <S.ItensLista>
                  Doe: Contribua financeiramente para ampliar nossas ações, ajudando a custear materiais, espaços e bolsas de estudo.
                </S.ItensLista>

                <S.ItensLista>
                  Compartilhe: Divulgue nossas campanhas nas redes sociais para aumentar o alcance e fortalecer a conscientização.
                </S.ItensLista>
                
                <S.ItensLista>
                  Eduque-se: Busque conhecimento sobre violência de gênero por meio de livros, documentários e palestras, fortalecendo sua capacidade de agir.
                </S.ItensLista>

                <S.ItensLista>
                  Denuncie: Não silencie a violência. Ligue 180 e ajude a proteger vítimas e responsabilizar agressores.
                </S.ItensLista>

              </S.ListaUl>
              

            </S.ContainerTexto>



            <S.ContainerFoto>
              <S.ImagensAcoes src= {imageAcao3} alt="Acao projeto 3 " width= {"100%"} />
              <S.ImagensAcoes src= {imageAcao1} alt="Acao projeto 1 " />

            </S.ContainerFoto>
          </S.AllContainer>
          
            <S.TituloMeio>Uma mensagem de esperança</S.TituloMeio>
            <S.TextoMeio>Apesar dos números alarmantes, acreditamos na possibilidade de mudança. Cada vida transformada, cada consciência despertada, é um passo em direção a um futuro onde seremos, verdadeiramente, todos Marianas – unidos contra a violência e pela igualdade. Acreditamos que, com a união de esforços e a aplicação de estratégias eficazes, podemos construir um Brasil mais justo e seguro para todas as mulheres.
            </S.TextoMeio>
        </S.TextosMeio>
        
        <S.BotoesContainer> 
          <div>
            <BotaoTopo></BotaoTopo>
          </div>
          <div>
            <BotaoVoluntario></BotaoVoluntario>
          </div>
        </S.BotoesContainer>

      </S.AllBody>
    </>
  );
}
