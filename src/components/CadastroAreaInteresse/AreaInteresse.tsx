 
import React, { useState, type FormEvent } from "react";
import {
  PageContainer,
  FormCard,
  FormTitle,
  InterestsList,
  InterestItem,
  InterestLabel,
  InterestCircle,
  OutrosWrapper,
  FieldLabel,
  TextInput,
  ActionsRow,
  PrimaryButton,
  SecondaryButton,
} from "./AreaInteresseStyle";

// Áreas de interesse disponíveis
const AREAS_INTERESSE = [
  "Ações educativas",
  "Apoio psicológico e social",
  "Apoio jurídico",
  "Comunicação e redes sociais",
  "Logística e eventos",
  "Captação de recursos / parcerias",
  "Ações comunitárias (visitas, distribuição, campanhas)",
];

type AreasInteresseForm = {
  selecionadas: string[]; // nomes das áreas escolhidas
  outros: string;
};

export function VoluntarioAreasInteresse() {
  const [formData, setFormData] = useState<AreasInteresseForm>({
    selecionadas: [],
    outros: "",
  });

  // Alterna seleção de uma área (liga/desliga)
  function toggleArea(area: string) {
    setFormData((prev) => {
      const jaSelecionada = prev.selecionadas.includes(area);

      return {
        ...prev,
        selecionadas: jaSelecionada
          ? prev.selecionadas.filter((a) => a !== area)
          : [...prev.selecionadas, area],
      };
    });
  }

  // Atualiza o campo "Outros"
  function handleOutrosChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      outros: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log("Áreas de interesse selecionadas:", formData);

    // Aqui você pode:
    // - enviar para API
    // - salvar num contexto/global state
    // - navegar para o resumo da inscrição, por exemplo
  }

  function handleBack() {
    // Exemplo com react-router:
    // navigate("/voluntario/informacoes-gerais");
    console.log("Voltar para etapa anterior");
  }

  return (
    <PageContainer>
      <FormCard as="form" onSubmit={handleSubmit}>
        <FormTitle>ÁREA DE INTERESSE PARA ATUAÇÃO</FormTitle>

        <InterestsList>
          {AREAS_INTERESSE.map((area) => {
            const ativa = formData.selecionadas.includes(area);

            return (
              <InterestItem key={area}>
                <InterestLabel>{area.toUpperCase()}</InterestLabel>

                <InterestCircle
                  type="button"
                  active={ativa}
                  onClick={() => toggleArea(area)}
                  aria-pressed={ativa}
                  aria-label={
                    ativa
                      ? `Remover área ${area}`
                      : `Selecionar área ${area}`
                  }
                />
              </InterestItem>
            );
          })}
        </InterestsList>

        <OutrosWrapper>
          <FieldLabel htmlFor="outros">Outros:</FieldLabel>
          <TextInput
            id="outros"
            name="outros"
            type="text"
            placeholder="Descreva outras áreas em que gostaria de atuar"
            value={formData.outros}
            onChange={handleOutrosChange}
          />
        </OutrosWrapper>

        <ActionsRow>
          <SecondaryButton type="button" onClick={handleBack}>
            Voltar
          </SecondaryButton>

          <PrimaryButton type="submit">Próximo</PrimaryButton>
        </ActionsRow>
      </FormCard>
    </PageContainer>
  );
}
