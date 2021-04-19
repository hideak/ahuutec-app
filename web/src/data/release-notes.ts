import ReleaseItem from "@/model/release-item.model";

export const releaseNotes: ReleaseItem[] = [
  {
    version: "1.00",
    descriptions: [
      "Primeiro Acesso!",
      "Olá! Este é o seu primeiro acesso ao app.",
      "* Para instalar o app no celular, toque em 'Acicionar o app Ahuutec à tela inicial'",
      "* Para instalar o app no computador, clique em 'Instalar' na parte superior direita "
      + "da tela do seu navegador.",
      "Esta é a versão inicial do aplicativo, com funções de registro de vendas "
      + "e produtos de forma simplificada."
    ]
  },
  {
    version: "1.01",
    descriptions: [
      "Agora é possível controlar o estoque dos seus produtos!",
      "* Insira o estoque atual do seu produto acessando 'Meus Produtos', clicando no produto "
      + "desejado e inserindo a quantidade em 'Quantidade atual em estoque'",
      "* Após realizar uma venda, clique em 'Sim, atualize!' para atualizar seu estoque "
      + "automaticamente.",
      "* Itens com estoque em branco não são afetados."
    ]
  },
];
