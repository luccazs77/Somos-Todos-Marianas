'use client' 
import foto from "../../assets/img01.png"
import foto2 from "../../assets/img02.png"
import { ButtonGroup } from "../../presentation/shared/ButtonPreVol/ButtonPre-styles"
import { ButtonLink } from "../../presentation/shared/ButtonPreVol/ButtonPreVol"
import { Header } from "../../presentation/shared/Header/header"
import { BotaoVoluntario } from "../botao_voluntario/BotaoVoluntario"
import { Button } from "../SejaUmApoiador/Apoiador-styler"
import { Container, DivContainer, ImagemFoto, Section, Texto, Textoh1 } from "./nossaDor-styled"


export function Dor () {
    return (
                <Container>
                        <DivContainer>
                            <Texto>
                            <Textoh1>NOSSA DOR</Textoh1>
                            <p>Na tarde de 13 de novembro de 2016, o silêncio de São <br /> Luís foi quebrado por um grito que nunca
                            deveria ter <br /> existido. Mariana Costa, uma jovem publicitária cheia de <br /> sonhos, teve sua vida 
                            brutalmente interrompida, vítima <br /> de feminicídio. Naquele momento, não sabíamos, mas o <br /> eco daquele 
                            grito iria se transformar em um movimento <br /> que mudaria para sempre a luta contra a violência de <br />
                            gênero no Maranhão. <br /> Das Cinzas, Nasce uma Esperança...
                            </p>

                             <ButtonGroup>   
                    
                            <ButtonLink href="/sobre" variant="outlined">
                                Saiba mais
                            </ButtonLink>

                            <ButtonLink href="/voluntario" variant="filled">
                                Seja um voluntário
                            </ButtonLink>
                        </ButtonGroup>
                        </Texto>
                    
                
                        <ImagemFoto>
                            <img src={foto} alt="" />
                            <img src={foto2} alt="" />
                        </ImagemFoto>

                        </DivContainer>
                </Container>


    )
}