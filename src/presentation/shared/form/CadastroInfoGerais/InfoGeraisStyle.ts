// src/pages/VoluntarioInformacoesGerais/styles.ts
import styled from "styled-components";
import fundo from "../../assets/wallpaper.png"

// Container geral da página, igual ao da tela anterior
export const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 16px 40px;
  /*background-color: #f4dfe4; // tom de rosa do tema*/
  background-image: url(${fundo});

  @media (min-width: 900px) {
    padding: 140px 40px 60px;
  }
`;

// "Card" branco centralizado
export const FormCard = styled.section`
  width: 100%;
  max-width: 960px;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  padding: 32px 20px 28px;
  position: relative;

  @media (min-width: 900px) {
    padding: 40px 48px 32px;
  }
`;

// Título "INFORMAÇÕES GERAIS"
export const FormTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #222;

  @media (min-width: 900px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
`;

// Stack de campos em coluna (nessa tela não há grid 2 colunas)
export const FieldsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

// Label + input
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// Label de cada campo
export const FieldLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

// Input de texto
export const TextInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #d0c4c4;
  background-color: #f2f2f2;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: #f18aa2;
    box-shadow: 0 0 0 2px rgba(241, 138, 162, 0.35);
    background-color: #ffffff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

// Campo que poderia ser maior (se quiser transformar em textarea depois)
export const LongTextInput = styled(TextInput)`
  /* por enquanto é igual ao TextInput; pode ser trocado para textarea no futuro */
`;

// Pergunta "Tem experiência prévia em voluntariado?"
export const ExperienceQuestion = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

// Wrapper dos botões "Sim" / "Não"
export const ExperienceOptions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;
`;

// Cada opção circular (inspirada nos círculos do layout)
export const ExperienceOption = styled.button<{ active?: boolean }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ active }) => (active ? "#f18aa2" : "#e4dcdc")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.22);
  }
`;

// Texto abaixo dos círculos (Sim / Não)
export const ExperienceLegend = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 32px;
  font-size: 0.9rem;
  color: #444;
`;

// "Sim" fica abaixo do primeiro círculo, "Não" do segundo
export const LegendItem = styled.span`
  min-width: 40px;
`;

// Linha dos botões Voltar / Próximo
export const ActionsRow = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column-reverse; // no mobile, "Voltar" em cima de "Próximo"
  }
`;

// Base reaproveitável de botão (igual à outra tela)
const BaseButton = styled.button`
  padding: 10px 32px;
  border-radius: 999px;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.03em;
  font-family: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// Botão principal (Próximo)
export const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #f06b8a, #e23a60);
  color: #ffffff;
`;

// Botão secundário (Voltar)
export const SecondaryButton = styled(BaseButton)`
  background: #f7b8c0;      // rosa claro
  color: #6a3a3a;
`;
