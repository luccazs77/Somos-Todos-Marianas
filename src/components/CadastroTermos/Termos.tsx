// src/pages/VoluntarioDeclaracao/index.tsx
import React, { useRef, useState, type FormEvent } from "react";
import {
  PageContainer,
  FormCard,
  FormTitle,
  TermsText,
  AttachmentsRow,
  UploadButton,
  DownloadButton,
  ActionsRow,
  PrimaryButton,
  SecondaryButton,
  FileName,
} from "./TermosStyle";

type DeclaracaoForm = {
  termoAssinado?: File; // arquivo anexado (opcional)
};

export function VoluntarioDeclaracao() {
  const [formData, setFormData] = useState<DeclaracaoForm>({});
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Abre o seletor de arquivo ao clicar no botão estilizado
  function handleOpenFilePicker() {
    fileInputRef.current?.click();
  }

  // Quando um arquivo é escolhido
  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (file) {
      setFormData({ termoAssinado: file });
      setFileName(file.name);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    // Aqui você pode montar um FormData para enviar o arquivo à API
    // const payload = new FormData();
    // if (formData.termoAssinado) {
    //   payload.append("termoAssinado", formData.termoAssinado);
    // }

    console.log("Termo de adesão enviado:", formData);

    // Depois, navegar para tela de agradecimento / resumo
  }

  function handleBack() {
    // Exemplo:
    // navigate("/voluntario/certificado");
    console.log("Voltar para etapa anterior");
  }

  return (
    <PageContainer>
      <FormCard as="form" onSubmit={handleSubmit}>
        <FormTitle>
          DECLARAÇÃO E TERMO DE ADESÃO AO TRABALHO VOLUNTÁRIO
        </FormTitle>

        <TermsText>
          <p>
            Declaro que presto serviços de forma espontânea e sem vínculo
            empregatício ao Instituto Somos Todos Marianas, ciente de que a
            atividade voluntária não gera obrigações trabalhistas,
            previdenciárias ou afins.
          </p>
          <p>
            Comprometo-me a atuar com ética, sigilo, respeito e
            comprometimento com os valores e a missão do Instituto, zelando
            pela integridade dos públicos atendidos e pela imagem da
            organização.
          </p>
          <p>
            Autorizo o uso de minha imagem e nome em registros fotográficos,
            vídeos e materiais de divulgação das atividades sociais, sem fins
            lucrativos.
          </p>
          <p>
            Estou ciente de que poderei, a qualquer tempo, solicitar meu
            desligamento mediante simples comunicação.
          </p>
        </TermsText>

        {/* Botões de anexo / download */}
        <AttachmentsRow>
          {/* input file escondido */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <UploadButton type="button" onClick={handleOpenFilePicker}>
            Espaço para anexo do documento
          </UploadButton>

          <DownloadButton
            href="/modelos/termo-voluntario.pdf" // ajuste o caminho do seu PDF
            download
          >
            Modelo .PDF para baixar
          </DownloadButton>
        </AttachmentsRow>

        {fileName && <FileName>Arquivo selecionado: {fileName}</FileName>}

        {/* Botões Voltar / Enviar */}
        <ActionsRow>
          <SecondaryButton type="button" onClick={handleBack}>
            Voltar
          </SecondaryButton>

          <PrimaryButton type="submit">Enviar</PrimaryButton>
        </ActionsRow>
      </FormCard>
    </PageContainer>
  );
}
