'use client';
import Prevencao1 from "../../assets/Prevencao1.png"
import Prevencao2 from "../../assets/Prevencao2.png"
import { Header } from "../../presentation/shared/Header/header";
import * as S from "./Prevenao-styler"




export function Prevencao() {
    return(
       <><Header/>
       <S.Container>
            
            <S.Imapre>
            <img src={Prevencao1} alt="" />
            <img src={Prevencao2} alt="" />
            </S.Imapre>

            <S.ContentWrapper>
                
                <S.TextContent>

                <h1>Profissionalizar para Todos os <br />
                    Futuros: quando o sonho coletivo se <br />
                    transforma em oportunidade real</h1>

                <S.Textoprevencao>
                    <p>Na tarde de 13 de novembro de 2016, o silêncio de São <br />
                        Luís foi quebrado por um grito que nunca deveria ter <br />
                        existido. Mariana Costa, uma jovem publicitária cheia de <br />
                        sonhos, teve sua vida brutalmente interrompida, vítima <br />
                        de feminicídio. Naquele momento, não sabíamos, mas o <br />
                        eco daquele grito iria se transformar em um movimento <br />
                        que mudaria para sempre a luta contra a violência de <br />
                        gênero no Maranhão...</p>
                </S.Textoprevencao>
                </S.TextContent>
            </S.ContentWrapper>
        </S.Container>   
</> 
    )
}