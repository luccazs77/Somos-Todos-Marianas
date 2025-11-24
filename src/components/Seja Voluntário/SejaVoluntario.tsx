'use client' 
import foto from "../../assets/voluntário.png"
import { ButtonGroup } from "../../presentation/buttons/ButtonPreVol/ButtonPre-styles"
import { ButtonLink } from "../../presentation/buttons/ButtonPreVol/ButtonPreVol"
import { Container, DivContainer, ImagemFoto, Section, Texto, Textoh1 } from "./SejaVoluntariostyle"


export function SejaVoluntario () {
    return (
                <Container>
                        <DivContainer>
                            <Texto>
                            <Textoh1>Seja um Voluntário</Textoh1>
                            <p>Como Sua Doação Faz a Diferença Sua doação é mais do que um gesto; é um investimento direto na vida de mulheres que precisam de apoio. Cada real doado é utilizado de forma estratégica para maximizar o impacto e garantir
                            que os recursos cheguem a quem mais precisa. Priorizamos a
                            eficiência e a transparência em todas as etapas, desde a captação até a aplicação dos recursos.
                            </p>

                             <ButtonGroup>   
                    
                         
                            <ButtonLink to="/formulario" variant="filled">
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