"use client";
import { Button } from "@/app/_components/ui/button";
import { DownloadIcon } from "lucide-react";

export default function DownloadPage() {
  const handleDownload = async () => {
    const response = await fetch("/api/downloads/cv");
    if (!response.ok) {
      console.error("Erro ao baixar o arquivo");
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cv.pdf"); // Nome do arquivo
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        className="gap-2 bg-purple-900 text-white text-base hover:bg-purple-600 font-semibold"
        onClick={handleDownload}
      >
        <DownloadIcon /> <h2>Download CV</h2>
      </Button>
    </div>
  );
}
