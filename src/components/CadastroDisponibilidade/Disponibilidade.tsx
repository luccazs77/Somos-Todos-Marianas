// src/pages/VoluntarioDisponibilidade/index.tsx
import React, { useState, type FormEvent } from "react";
import {
  PageContainer,
  FormCard,
  FormTitle,
  FieldWrapper,
  FieldLabel,
  TextInput,
  GroupWrapper,
  GroupTitle,
  OptionsRow,
  OptionItem,
  OptionLabel,
  OptionCircle,
  ActionsRow,
  PrimaryButton,
  SecondaryButton,
} from "./DisponibilidadeStyle";

type Turno = "manha" | "tarde" | "noite";
type Modalidade = "presencial" | "online" | "ambos" | "";

type DisponibilidadeForm = {
  diasSemana: string;
  turnos: Turno[];      // pode marcar mais de um turno
  modalidade: Modalidade;
};

export function VoluntarioDisponibilidade() {
  const [formData, setFormData] = useState<DisponibilidadeForm>({
    diasSemana: "",
    turnos: [],
    modalidade: "",
  });

  // Atualiza o campo de texto "Dias da semana disponíveis"
  function handleDiasChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      diasSemana: event.target.value,
    }));
  }

  // Alterna seleção de um turno (pode ser múltiplo)
  function toggleTurno(turno: Turno) {
    setFormData((prev) => {
      const jaSelecionado = prev.turnos.includes(turno);

      return {
        ...prev,
        turnos: jaSelecionado
          ? prev.turnos.filter((t) => t !== turno)
          : [...prev.turnos, turno],
      };
    });
  }

  // Define a modalidade (apenas uma pode ficar ativa)
  function selecionarModalidade(nova: Modalidade) {
    setFormData((prev) => ({
      ...prev,
      modalidade: nova,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log("Disponibilidade do voluntário:", formData);

    // Aqui você pode:
    // - enviar para API
    // - salvar num contexto/global state
    // - navegar para tela de resumo/finalização
  }

  function handleBack() {
    // Exemplo com react-router:
    // navigate("/voluntario/areas-interesse");
    console.log("Voltar para etapa anterior");
  }

  const turnoAtivo = (turno: Turno) => formData.turnos.includes(turno);
  const modalidadeAtiva = (m: Modalidade) => formData.modalidade === m;

  return (
    <PageContainer>
      <FormCard as="form" onSubmit={handleSubmit}>
        <FormTitle>DISPONIBILIDADE</FormTitle>

        {/* Dias da semana disponíveis */}
        <FieldWrapper>
          <FieldLabel htmlFor="diasSemana">
            Dias da semana disponíveis:
          </FieldLabel>
          <TextInput
            id="diasSemana"
            name="diasSemana"
            type="text"
            placeholder="Ex.: Segunda a sexta, apenas finais de semana..."
            value={formData.diasSemana}
            onChange={handleDiasChange}
            required
          />
        </FieldWrapper>

        {/* TURNOS */}
        <GroupWrapper>
          <GroupTitle>Turnos:</GroupTitle>

          <OptionsRow>
            <OptionItem>
              <OptionLabel>Manhã:</OptionLabel>
              <OptionCircle
                type="button"
                active={turnoAtivo("manha")}
                onClick={() => toggleTurno("manha")}
                aria-pressed={turnoAtivo("manha")}
                aria-label={
                  turnoAtivo("manha")
                    ? "Remover turno manhã"
                    : "Selecionar turno manhã"
                }
              />
            </OptionItem>

            <OptionItem>
              <OptionLabel>Tarde:</OptionLabel>
              <OptionCircle
                type="button"
                active={turnoAtivo("tarde")}
                onClick={() => toggleTurno("tarde")}
                aria-pressed={turnoAtivo("tarde")}
                aria-label={
                  turnoAtivo("tarde")
                    ? "Remover turno tarde"
                    : "Selecionar turno tarde"
                }
              />
            </OptionItem>

            <OptionItem>
              <OptionLabel>Noite:</OptionLabel>
              <OptionCircle
                type="button"
                active={turnoAtivo("noite")}
                onClick={() => toggleTurno("noite")}
                aria-pressed={turnoAtivo("noite")}
                aria-label={
                  turnoAtivo("noite")
                    ? "Remover turno noite"
                    : "Selecionar turno noite"
                }
              />
            </OptionItem>
          </OptionsRow>
        </GroupWrapper>

        {/* MODALIDADE */}
        <GroupWrapper>
          <GroupTitle>Modalidade:</GroupTitle>

          <OptionsRow>
            <OptionItem>
              <OptionLabel>Presencial:</OptionLabel>
              <OptionCircle
                type="button"
                active={modalidadeAtiva("presencial")}
                onClick={() => selecionarModalidade("presencial")}
                aria-pressed={modalidadeAtiva("presencial")}
                aria-label="Selecionar modalidade presencial"
              />
            </OptionItem>

            <OptionItem>
              <OptionLabel>Online:</OptionLabel>
              <OptionCircle
                type="button"
                active={modalidadeAtiva("online")}
                onClick={() => selecionarModalidade("online")}
                aria-pressed={modalidadeAtiva("online")}
                aria-label="Selecionar modalidade online"
              />
            </OptionItem>

            <OptionItem>
              <OptionLabel>Ambos:</OptionLabel>
              <OptionCircle
                type="button"
                active={modalidadeAtiva("ambos")}
                onClick={() => selecionarModalidade("ambos")}
                aria-pressed={modalidadeAtiva("ambos")}
                aria-label="Selecionar modalidade presencial e online"
              />
            </OptionItem>
          </OptionsRow>
        </GroupWrapper>

        {/* Botões Voltar / Próximo */}
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
