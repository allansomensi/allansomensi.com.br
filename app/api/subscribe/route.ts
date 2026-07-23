import { NextResponse } from "next/server";

const KIT_API_BASE = "https://api.kit.com/v4";

export async function POST(request: Request) {
  try {
    const bodyText = await request.text();
    const { email } = JSON.parse(bodyText);

    const apiKey = process.env.KIT_API_KEY;
    const formId = process.env.KIT_FORM_ID;

    if (!email || !apiKey || !formId) {
      console.error(`Variáveis: API Key [${!!apiKey}], Form ID [${!!formId}]`);
      return NextResponse.json(
        { error: "Configuração do servidor incompleta." },
        { status: 400 },
      );
    }

    const kitHeaders = {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    };

    const createResponse = await fetch(`${KIT_API_BASE}/subscribers`, {
      method: "POST",
      headers: kitHeaders,
      body: JSON.stringify({ email_address: email }),
    });

    const createText = await createResponse.text();

    if (!createResponse.ok) {
      console.error(
        `Kit recusou a criação do subscriber (Status ${createResponse.status}):\n${createText.substring(0, 500)}`,
      );
      return NextResponse.json(
        { error: "Falha ao registrar o e-mail." },
        { status: createResponse.status },
      );
    }

    const addToFormResponse = await fetch(
      `${KIT_API_BASE}/forms/${formId}/subscribers`,
      {
        method: "POST",
        headers: kitHeaders,
        body: JSON.stringify({ email_address: email }),
      },
    );

    const addToFormText = await addToFormResponse.text();

    if (!addToFormResponse.ok) {
      console.error(
        `Kit recusou a inscrição no form (Status ${addToFormResponse.status}):\n${addToFormText.substring(0, 500)}`,
      );
      return NextResponse.json(
        { error: "Falha ao inscrever o e-mail na newsletter." },
        { status: addToFormResponse.status },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro interno na Route Handler:", error.message);
    }
    return NextResponse.json(
      { error: "Falha na comunicação com o servidor." },
      { status: 500 },
    );
  }
}