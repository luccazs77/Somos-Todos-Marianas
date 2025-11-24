// src/pages/VoluntarioInformacoesGerais/index.tsx
import React, { useState, type FormEvent } from "react";
import {
  PageContainer,
  FormCard,
  FormTitle,
  FieldsColumn,
  FieldWrapper,
  FieldLabel,
  LongTextInput,
  ExperienceQuestion,
  ExperienceOptions,
  ExperienceOption,
  ExperienceLegend,
  LegendItem,
  ActionsRow,
  PrimaryButton,
  SecondaryButton,
} from "./InfoGeraisStyle";

// Tipo de dados para esta etapa do formulário
type InformacoesGeraisForm = {
  profissaoArea: string;
  formacaoAcademica: string;
  habilidadesEspecificas: string;
  temExperiencia: "sim" | "nao" | ""; // estado da pergunta Sim/Não
  tipoAtuacao: string;
};

export function VoluntarioInformacoesGerais() {
  // Estado local da tela
  const [formData, setFormData] = useState<InformacoesGeraisForm>({
    profissaoArea: "",
    formacaoAcademica: "",
    habilidadesEspecificas: "",
    temExperiencia: "",
    tipoAtuacao: "",
  });

  // Atualiza campos de texto
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Quando usuário clica em "Sim" ou "Não"
  function handleExperienciaChange(opcao: "sim" | "nao") {
    setFormData((prev) => ({
      ...prev,
      temExperiencia: opcao,
      // se marcar "não", limpamos o campo de tipo de atuação
      tipoAtuacao: opcao === "nao" ? "" : prev.tipoAtuacao,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log("Informações gerais do voluntário:", formData);

    // Aqui você pode:
    // - enviar para API
    // - salvar num contexto/global state
    // - navegar para a próxima tela do fluxo
  }

  // Exemplo de callback para o botão Voltar
  function handleBack() {
    // Exemplo usando react-router (ajuste se for o seu caso):
    // navigate("/voluntario/dados-pessoais");
    console.log("Voltar para a etapa anterior");
  }

  const isTipoAtuacaoDisabled = formData.temExperiencia !== "sim";

  return (
    <PageContainer>
      <FormCard as="form" onSubmit={handleSubmit}>
        <FormTitle>INFORMAÇÕES GERAIS</FormTitle>

        <FieldsColumn>
          {/* PROFISSÃO OU ÁREA DE ATUAÇÃO */}
          <FieldWrapper>
            <FieldLabel htmlFor="profissaoArea">
              Profissão ou área de atuação:
            </FieldLabel>
            <LongTextInput
              id="profissaoArea"
              name="profissaoArea"
              type="text"
              placeholder="Ex.: Assistente social, Psicólogo(a), Estudante de Direito..."
              value={formData.profissaoArea}
              onChange={handleChange}
              required
            />
          </FieldWrapper>

          {/* FORMAÇÃO ACADÊMICA */}
          <FieldWrapper>
            <FieldLabel htmlFor="formacaoAcademica">
              Formação acadêmica:
            </FieldLabel>
            <LongTextInput
              id="formacaoAcademica"
              name="formacaoAcademica"
              type="text"
              placeholder="Ex.: Graduação em Pedagogia, Ensino médio completo..."
              value={formData.formacaoAcademica}
              onChange={handleChange}
            />
          </FieldWrapper>

          {/* HABILIDADES ESPECÍFICAS */}
          <FieldWrapper>
            <FieldLabel htmlFor="habilidadesEspecificas">
              Habilidades específicas:
            </FieldLabel>
            <LongTextInput
              id="habilidadesEspecificas"
              name="habilidadesEspecificas"
              type="text"
              placeholder="Ex.: Organização de eventos, atendimento ao público, mídias sociais..."
              value={formData.habilidadesEspecificas}
              onChange={handleChange}
            />
          </FieldWrapper>

          {/* EXPERIÊNCIA EM VOLUNTARIADO */}
          <ExperienceQuestion>
            <FieldLabel>Tem experiência prévia em voluntariado?</FieldLabel>

            <ExperienceOptions>
              <ExperienceOption
                type="button"
                active={formData.temExperiencia === "sim"}
                onClick={() => handleExperienciaChange("sim")}
              />
              <ExperienceOption
                type="button"
                active={formData.temExperiencia === "nao"}
                onClick={() => handleExperienciaChange("nao")}
              />
            </ExperienceOptions>

            <ExperienceLegend>
              <LegendItem>Sim</LegendItem>
              <LegendItem>Não</LegendItem>
            </ExperienceLegend>
          </ExperienceQuestion>

          {/* TIPO DE ATUAÇÃO, SE TIVER EXPERIÊNCIA */}
          <FieldWrapper>
            <FieldLabel htmlFor="tipoAtuacao">
              Se sim, em que tipo de atuação:
            </FieldLabel>
            <LongTextInput
              id="tipoAtuacao"
              name="tipoAtuacao"
              type="text"
              placeholder="Ex.: Visitas em hospitais, ações com crianças, atendimento jurídico..."
              value={formData.tipoAtuacao}
              onChange={handleChange}
              disabled={isTipoAtuacaoDisabled}
            />
          </FieldWrapper>
        </FieldsColumn>

        <ActionsRow>
          <SecondaryButton
            type="button"
            onClick={handleBack}
          >
            Voltar
          </SecondaryButton>

          <PrimaryButton type="submit">Próximo</PrimaryButton>
        </ActionsRow>
      </FormCard>
    </PageContainer>
  );
}
