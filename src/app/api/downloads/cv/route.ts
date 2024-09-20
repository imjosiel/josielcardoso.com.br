import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  // Caminho completo para o arquivo
  const filePath = path.join(process.cwd(), "src/app/files/cv.pdf");

  try {
    // Lê o arquivo
    const file = await fs.readFile(filePath);

    // Define os headers para download
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=cv.pdf",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Arquivo não encontrado" },
      { status: 404 }
    );
  }
}
