function responder() {
  let pergunta = document.getElementById("pergunta").value.toLowerCase();
  let resposta = "";

  if (pergunta.includes("dinheiro") || pergunta.includes("trabalho")) {
    resposta = "O melhor caminho é começar com uma habilidade digital e buscar renda extra progressiva.";
  }
  else if (pergunta.includes("triste") || pergunta.includes("ansiedade")) {
    resposta = "O melhor caminho é cuidar da mente primeiro e organizar pequenos passos diários.";
  }
  else if (pergunta.includes("negócio") || pergunta.includes("empreender")) {
    resposta = "O melhor caminho é começar simples e validar uma ideia antes de crescer.";
  }
  else {
    resposta = "Me dê mais detalhes para eu te orientar melhor.";
  }

  document.getElementById("resposta").innerText = resposta;
}
