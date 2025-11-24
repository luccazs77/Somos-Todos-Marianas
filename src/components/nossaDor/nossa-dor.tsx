'use client' 
import foto from "../../assets/FotoMarianaIrmas.png"
import foto2 from "../../assets/FotoMarianaFamilia.png"
import { ButtonGroup } from "../../presentation/buttons/ButtonPreVol/ButtonPre-styles"
import { ButtonLink } from "../../presentation/buttons/ButtonPreVol/ButtonPreVol"
import { Container, DivContainer, ImagemFoto, Section, Texto, Textoh1 } from "./nossaDor-styled"


export function Dor () {
    return (
                <Container>
                        <DivContainer>
                            <Texto>
                            <Textoh1>NOSSA DOR</Textoh1>
                            <p>Na tarde de 13 de novembro de 2016, o silêncio de São Luís foi quebrado por um grito que nunca deveria ter existido. Mariana Costa, uma jovem publicitária cheia de sonhos, teve sua vida 
                            brutalmente interrompida, vítima de feminicídio. Naquele momento, não sabíamos, mas o eco daquele 
                            grito iria se transformar em um movimento que mudaria para sempre a luta contra a violência de gênero no Maranhão. Das Cinzas, Nasce uma Esperança...
                            </p>

                             <ButtonGroup>   
                    
                            <ButtonLink to="/sobrenos" variant="outlined">
                                Saiba mais
                            </ButtonLink>

                            <ButtonLink to="/voluntario" variant="filled">
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