'use client' 
import foto from "../../assets/voluntário.png"
import { ButtonGroup } from "../../presentation/shared/ButtonPreVol/ButtonPre-styles"
import { ButtonLink } from "../../presentation/shared/ButtonPreVol/ButtonPreVol"
import { Header } from "../../presentation/shared/Header/header"
import { BotaoVoluntario } from "../botao_voluntario/BotaoVoluntario"
import { Button } from "../SejaUmApoiador/Apoiador-styler"
import { Container, DivContainer, ImagemFoto, Section, Texto, Textoh1 } from "./SejaVoluntariostyle"


export function SejaVoluntario () {
    return (
                <Container>
                        <DivContainer>
                            <Texto>
                            <Textoh1>Seja um Voluntário</Textoh1>
                            <p>Como Sua Doação Faz a Diferença <br /> Sua doação é mais do que um gesto; é um investimento direto na <br />
                             vida de mulheres que precisam de apoio. Cada real doado é <br />
                             utilizado de forma estratégica para maximizar o impacto e garantir <br />
                             que os recursos cheguem a quem mais precisa. Priorizamos a <br />
                             eficiência e a transparência em todas as etapas, desde a captação <br />
                             até a aplicação dos recursos.
                            </p>

                             <ButtonGroup>   
                    
                         
                            <ButtonLink href="/voluntario" variant="filled">
                               Cadastre-se
                            </ButtonLink>
                        </ButtonGroup>
                        </Texto>
                    
                
                        <ImagemFoto>
                            <img src={foto} alt="" />
                        </ImagemFoto>

                        </DivContainer>
                </Container>


    )
}