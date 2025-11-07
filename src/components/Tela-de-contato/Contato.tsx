import { Instagram, Mail, Youtube } from "lucide-react";
import Arte from "../../assets/Logo_SomosTodosMariana(1) 3.png";
import { Contact, Container, LeftSide, List, Partners, RightSide } from "./Contato-styler";
export function Contato() {
  return(
    <Container>
        <LeftSide>
            <img src={Arte} alt="" />
        </LeftSide>

        <RightSide>
            <Contact>
                <h3>Email</h3>
                <p>
                    <Mail size={60} /> 
                    institutosomostodosmarianas@gmail.com
                </p>

                 <h3>Instagran</h3>
                <p>
                    <Instagram size={60} /> 
                    somos_todos_marianas_
                </p>

                <h3>Youtube</h3>
                <p>
                    <Youtube size={60} /> 
                    somostodosmarianas
                </p>
            </Contact>

            <Partners>
                <p><strong>Parceiros: </strong></p>
                <List>
                    <span>Equatorial</span>
                    <span>Instituto Alcoa</span>
                    <span>Governo do Estado do Maranhão</span>
                </List>
            </Partners>
        </RightSide>
    </Container>
  ) 
}