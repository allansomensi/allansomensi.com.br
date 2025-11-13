import { NextResponse } from "next/server";
import MailerLite from "@mailerlite/mailerlite-nodejs";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY || "",
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!email || !groupId) {
      return NextResponse.json(
        { error: "E-mail ou ID do grupo não configurado." },
        { status: 400 },
      );
    }

    const params = {
      email,
      groups: [groupId],
      status: "active" as const,
    };

    await mailerlite.subscribers.createOrUpdate(params);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "response" in error &&
      error.response &&
      typeof error.response === "object" &&
      "data" in error.response
    ) {
      console.error(
        "Erro na API do MailerLite (data):",
        (error as { response: { data: unknown } }).response.data,
      );
    } else if (error instanceof Error) {
      console.error("Erro na API do MailerLite (message):", error.message);
    } else {
      console.error("Erro desconhecido na API do MailerLite:", error);
    }

    return NextResponse.json(
      { error: "Falha ao inscrever o e-mail." },
      { status: 500 },
    );
  }
}
