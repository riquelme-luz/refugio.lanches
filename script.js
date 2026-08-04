// CONFIGURACAO
const numeroWhatsapp = "554499407307";

// PRODUTOS
const dogao = [
  { nome: "Simples", preco: 13.00, descricao: "1 salsicha, alface, tomate, batata palha e molho." },
  { nome: "Duplo", preco: 15.00, descricao: "2 salsichas, alface, tomate, batata palha e molho." },
  { nome: "Frango", preco: 20.00, descricao: "1 salsicha, frango, alface, tomate, batata palha e molho." },
  { nome: "Calaboiza", preco: 22.00, descricao: "1 salsicha, calaboiza, alface, tomate, batata palha e molho." },
  { nome: "Frangopiry", preco: 22.00, descricao: "1 salsicha, frango, catupiry, alface, tomate, batata palha e molho." },
  { nome: "Paulista", preco: 25.00, descricao: "1 salsicha, filé de carne acebolado, alface, tomate e molho." }
];

const lanches = [
  { nome: "X-Burguer", preco: 20.00, descricao: "hamburguer, muçarela, maionese e catchup." },
  { nome: "X-Salada", preco: 22.00, descricao: "hamburguer, tomate, alface, muçarela, maionese ecatchup." },
  { nome: "X-Egg", preco: 24.00, descricao: "Hambúrguer, tomate, alface, muçarela, 1 ovo, maionese e catchup." },
  { nome: "X-Frango", preco: 26.00, descricao: "tomate, alface, muçarela, frango, maionese e catchup." },
  { nome: "X-Calaboiza", preco: 28.00, descricao: "tomate,alface, muçarela, calabpiza, maionese e catchup." },
  { nome: "X-Paulista", preco: 34.00, descricao: "tomate, alface, muçarela, filé de carne acebolado, maionese e catchup." },
  { nome: "X-Tudo", preco: 36.00, descricao: "Hambúrguer, tomate, alface, muçarela, ovo, frango, calaboiza, maionese e catchup." }
];

const especiais = [
  { nome: "Smash Burguer", preco: 20.00, descricao: "Hambúrguer goumet de costela, cheddar, muçarela, e molho especial." },
  { nome: "Smash Turbo", preco: 26.00, descricao: "2 hamburguers goumet decostela, cheddar, muçarela, e molho especial." },
  { nome: "Smash Ultra", preco: 32.00, descricao: "3 hamburguers goumet de costela, cheddar, muçarela, e molho especial." },
  { nome: "Smash Supreme", preco: 37.00, descricao: "1 hamburguer goumet de costela, 1 hamburguer de queijo empanado, geléia de pimenta doce, pickles, tomate, cebola e molho especial." },
  { nome: "+Q Donalds", preco: 32.00, descricao: "Hambúrguer goumet de costela, cebola, alface, tomate, pepino em conserva, muçarela, cheddar e molho especial." },
  { nome: "Natural", preco: 30.00, descricao: "hamburguer natural, cebola, alface, tomate, pepino em conserva, muçarela, cheddar e molho especial." }
];

const porcoes = [
  { nome: "Polenta-Inteira (500g)", preco: 13.00, descricao: "Polenta frita crocante e temperada." },
  { nome: "Polenta-Media (250g)", preco: 9.00, descricao: "Polenta frita crocante e temperada." },
  { nome: "Batata-Inteira (500g)", preco: 22.00, descricao: "Batata frita crocante com sal." },
  { nome: "Batata-Media (250g)", preco: 14.00, descricao: "Batata frita crocante com sal." },
  { nome: "Mandioca-Inteira (500g)", preco: 20.00, descricao: "Mandioca frita crocante." },
  { nome: "Mandioca-Media (250g)", preco: 13.00, descricao: "Mandioca frita crocante." },
  { nome: "Nuggets-Inteira (500g)", preco: 29.00, descricao: "Nuggets crocantes e dourados." },
  { nome: "Nuggets-Media (250g)", preco: 18.00, descricao: "Nuggets crocantes e dourados." },
  { nome: "Linguiça Calaboiza-Inteira (500g)", preco: 30.00, descricao: "Linguiça calabresa frita e temperada." },
  { nome: "Linguiça Calaboiza-Media (250g)", preco: 19.00, descricao: "Linguiça calabresa frita e temperada." },
  { nome: "File de Tilapia-Inteira (500g)", preco: 43.00, descricao: "Filé de tilapia empanado e crocante." },
  { nome: "File de Tilapia-Media (250g)", preco: 24.00, descricao: "Filé de tilapia empanado e crocante." },
  { nome: "Carne Acebolada-Inteira (500g)", preco: 50.00, descricao: "Carne bovina com cebola caramelizada." },
  { nome: "Carne Acebolada-Media (250g)", preco: 30.00, descricao: "Carne bovina com cebola caramelizada." },
  { nome: "Anéis de Cebola-Inteira (400g)", preco: 28.00, descricao: "Anéis de cebola empanados e crocantes." },
  { nome: "Anéis de Cebola-Media (200g)", preco: 17.00, descricao: "Anéis de cebola empanados e crocantes." },
  { nome: "Frango Frito Americano-Inteiro (1kg)", preco: 40.00, descricao: "Frango frito estilo americano, dourado e crocante." }
];

const bebidas = [
  { nome: "Refrigerante 2L (Coca-Cola)", preco: 16.00, descricao: "Refrigerante de cola em garrafa de 2 litros." },
  { nome: "Refrigerante 2L (Ouro Verde)", preco: 10.00, descricao: "Refrigerante limonada em garrafa de 2 litros." },
  { nome: "Guarana/Sprite 2L", preco: 14.00, descricao: "Guaraná ou Sprite em garrafa de 2 litros." },
  { nome: "Refrigerante 1L (Vidro)", preco: 8.00, descricao: "Refrigerante em vidro de 1 litro." },
  { nome: "Refrigerante 1L (PET)", preco: 10.00, descricao: "Refrigerante em PET de 1 litro." },
  { nome: "Coca-Cola 600ml", preco: 8.00, descricao: "Lata ou garrafa de 600 ml de cola." },
  { nome: "Suco de Laranja/Uva integral 310ml", preco: 6.00, descricao: "Suco natural de laranja ou uva, 310 ml." },
  { nome: "Tubaina Garrafa", preco: 5.00, descricao: "Bebida tropical em garrafa, gelada." },
  { nome: "Agua sem gas", preco: 3.00, descricao: "Água mineral sem gás de 500 ml." },
  { nome: "Agua com gas", preco: 3.50, descricao: "Água mineral com gás de 500 ml." },
  { nome: "Refrigerante 200ml", preco: 3.00, descricao:"Qualquer efrigerante de 200 ml"},
  { nome: "Cerveja sem alcool brahma lata", preco: 6.00, descricao: "cerveja sem alcool brahma lata"},
  { nome: "cerveja sem alcool long neck", preco: 9.00, descricao: "cerveja sem alcool long neck"},
  { nome: "gatorade/h20 limoneto", preco: 7.00, descricao:"Gatorade/h2o limonate"},
  { nome: "Energetico monster 473ml", preco: 13.00, descricao:"energetico monster 473ml"},
  { nome: "Energetico furioso 250ml", preco: 4.00, descricao:"energetico furioso 250ml"},
  { nome: "tampico/ chá", preco: 6.00, descricao:"tampico/chá"},
  { nome: "coca cola ks 290ml", preco: 4.50, descricao:"coca cola ks 290ml"},
  { nome: "chweppes 1,5L", preco: 13.00, descricao:"schweppes 1,5L"}, 
];

const acrescimos = [
  { nome: "Hamburguer", preco: 7.00, descricao: "Adicional de hambúrguer artesanal." },
  { nome: "Carne bovina", preco: 8.00, descricao: "Adicional de carne bovina grelhada." },
  { nome: "Hamburguer veg", preco: 9.00, descricao: "Adicional de hambúrguer vegetariano." },
  { nome: "Frango", preco: 6.00, descricao: "Adicional de frango desfiado." },
  { nome: "Calaboiza", preco: 7.00, descricao: "Adicional de calabresa frita." },
  { nome: "Mussarela", preco: 5.00, descricao: "Adicional de queijo mussarela." },
  { nome: "Outros", preco: 2.00, descricao: "Adicional simples para personalizar." },
  { nome: "Limao/Gelo", preco: 1.00, descricao: "Limão e gelo para drinks e sucos." },
  { nome: "Molho verde", preco: 2.00, descricao: "Molho verde especial para acompanhar." }
];

const sobremesas = [
  { nome: "Açai Polpa Norte 200ml", preco: 14.00, descricao: "Açaí puro com polpa de fruta, 200 ml." },
  { nome: "Açai Polpa Norte 330ml", preco: 18.00, descricao: "Açaí puro com polpa de fruta, 330 ml." },
  { nome: "Açai Polpa Norte 550ml", preco: 25.00, descricao: "Açaí puro com polpa de fruta, 550 ml." },
  { nome: "Açai Polpa Norte 700ml", preco: 35.00, descricao: "Açaí puro com polpa de fruta, 700 ml." },
  { nome: "Barca de Açai 500ml", preco: 37.00, descricao: "Açaí com leite condensado, leite ninho, banana, morango, paçoca, amendoim, disquete e choco ball." },
  { nome: "Batida de Açai Tradicional 475ml", preco: 17.50, descricao: "Açaí, leite, leite condensado, leite ninho e banana." },
  { nome: "Batida de Açai Paçocuda 475ml", preco: 17.50, descricao: "Açaí, leite, leite condensado, leite ninho, banana e paçoca." },
  { nome: "Milkshake 330ml", preco: 18.00, descricao: "Milkshake de ovomaltine, capuccino ou oreo." },
  { nome: "Milkshake 550ml", preco: 23.00, descricao: "Milkshake de ovomaltine, capuccino ou oreo." }
];

const sucosDrinks = [
  { nome: "Pink Lemonade", preco: 17.00, descricao: "Limão, xarope de groselha e soda ou água com gás." },
  { nome: "Lagoa Azul", preco: 17.00, descricao: "Limão, powerade e soda ou água com gás." },
  { nome: "The Beache", preco: 17.00, descricao: "Suco de laranja, suco de pêssego, groselha e soda ou água com gás." },
  { nome: "Soda Italiana", preco: 18.00, descricao: "Frutas vermelhas, morango, maçã verde ou maracujá, limão, xarope e soda." }
];

const adicionaisAcai = {
  tradicionais: {
    titulo: "Adicionais Tradicionais",
    preco: 3.00,
    itens: ["Banana", "Uva", "Granola", "Paçoca", "Leite Ninho", "Amendoim", "Leite Condensado", "Disquete", "ChocoBall"]
  },
  especiais: {
    titulo: "Adicionais Especiais",
    preco: 4.50,
    itens: ["Morango", "Mini Oreo", "Kiwi"]
  },
  extra: {
    titulo: "Adicional Extra",
    preco: 5.50,
    itens: ["Nutella"]
  }
}

const saboresMilkshake = {
  basicos: {
    titulo: "Sabores Básicos",
    adicional: 0.00,
    itens: ["Chocolate", "Morango"]
  },
  premium: {
    titulo: "Sabores Premium",
    adicional: 1.00,
    itens: ["Ovomaltine","Capuccino","Oreo"]
  }
};
const saboresSucos = {
  sucosDrinks: {
    titulo: "Sucos e Drinks",
    adicional: 0.00,
    itens: ["Pink Lemonade", "Lagoa Azul", "The Beache", "Soda Italiana"]
  }
};
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
carrinho = carrinho.map(item => ({
  ...item,
  quantidade: Number(item.quantidade) || 1,
  preco: Number(item.preco) || 0
}));
let total = 0;

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function formatarPreco(valor) {
  return valor.toFixed(2).replace('.', ',');
}

function gerarNomeImagem(nomeProduto, categoria = '') {
  const nomeNormalizado = nomeProduto
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const mapeamento = {
    simples: 'dogao_simples',
    duplo: 'dogao_duplo',
    'x-calaboiza': 'X-calaboiza',
    'x-paulista': 'x-paulista',
    'x-tudo': 'x_tudo',
    'polenta-inteira (500g)': 'polenta',
    'polenta-media (250g)': 'polenta',
    'batata-inteira (500g)': 'batata',
    'batata-media (250g)': 'batata',
    'mandioca-inteira (500g)': 'mandioca',
    'mandioca-media (250g)': 'mandioca',
    'nuggets-inteira (500g)': 'nugget',
    'nuggets-media (250g)': 'nugget',
    'linguica calaboiza-inteira (500g)': 'linguiça_calaboiza',
    'linguica calaboiza-media (250g)': 'linguiça_calaboiza',
    'linguica acebolada-inteira (500g)': 'linguiça_calaboiza',
    'linguica acebolada-media (250g)': 'linguiça_calaboiza',
    'file de tilapia-inteira (500g)': 'file_tilapia',
    'file de tilapia-media (250g)': 'file_tilapia',
    'carne acebolada-inteira (500g)': 'carne_acebolada',
    'carne acebolada-media (250g)': 'carne_acebolada',
    'aneis de cebola-inteira (400g)': 'aneis_cebola',
    'aneis de cebola-media (200g)': 'aneis_cebola',
    'frango frito americano-inteiro (1kg)': 'frango_frito_americano',
    'pink lemonade': 'pink_lemonade',
    'lagoa azul': 'lagoa_azul',
    'the beache': 'the_beach',
    'soda italiana': 'soda_italiana',
    'acai polpa norte 200ml': 'açai_200ml',
    'acai polpa norte 330ml': 'açai_330ml',
    'acai polpa norte 550ml': 'açai_550ml',
    'acai polpa norte 700ml': 'açai_700ml',
    'barca de acai 500ml': 'barca_açai',
    'batida de acai tradicional 475ml': 'batida_tradicional',
    'batida de acai pacocuda 475ml': 'batida_paçocuda',
    'milkshake 330ml': 'milkshake_330ml_trd',
    'milkshake 550ml': 'milkshake_550ml_trd'
  };

  const mapeamentoNormalizado = Object.fromEntries(
    Object.entries(mapeamento).map(([chave, valor]) => [
      chave
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase(),
      valor
    ])
  );

  if (mapeamentoNormalizado[nomeNormalizado]) {
    return mapeamentoNormalizado[nomeNormalizado];
  }

  return nomeNormalizado
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function obterCaminhoImagemFlexivel(nomeImagem) {
  // Tenta diferentes extensões
  const extensoes = ['svg', 'jpg', 'jpeg', 'png', 'webp'];
  
  // Retorna um srcset com todas as possibilidades
  // O navegador vai carregar a primeira que existir
  return `
    imagens/${nomeImagem}.jpg 1x,
    imagens/${nomeImagem}.png 1x,
    imagens/${nomeImagem}.svg 1x,
    imagens/${nomeImagem}.jpeg 1x,
    imagens/${nomeImagem}.webp 1x
  `;
}

function mostrarNotificacao(mensagem, tipo = 'aviso', duracao = 3000) {
  const toast = document.getElementById('toast');
  
  toast.textContent = mensagem;
  toast.style.background = tipo === 'aviso' ? '#7a0000' : tipo === 'sucesso' ? '#2e7d32' : '#7a0000';
  toast.classList.add('mostrar');
  
  setTimeout(() => {
    toast.classList.remove('mostrar');
  }, duracao);
}

function filtrarProdutos(lista, termoBusca = '') {
  const termo = termoBusca.trim().toLowerCase();

  if (!termo) {
    return lista
      .map(produto => ({ produto, prioridade: 1 }))
      .sort((a, b) => a.produto.nome.localeCompare(b.produto.nome));
  }

  const termoNormalizado = termo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

  return lista
    .map(produto => {
      const nomeLower = produto.nome.toLowerCase();
      const descLower = produto.descricao.toLowerCase();
      const nomeNormalizado = nomeLower
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
      const descNormalizado = descLower
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');

      let prioridade = 0;
      if (nomeNormalizado === termoNormalizado) prioridade = 5;
      else if (nomeNormalizado.startsWith(termoNormalizado)) prioridade = 4;
      else if (nomeNormalizado.includes(termoNormalizado)) prioridade = 3;
      else if (descNormalizado === termoNormalizado) prioridade = 2;
      else if (descNormalizado.includes(termoNormalizado)) prioridade = 1;

      return { produto, prioridade };
    })
    .filter(item => item.prioridade > 0)
    .sort((a, b) => b.prioridade - a.prioridade || a.produto.nome.localeCompare(b.produto.nome));
}

function criarCardProduto(produto, categoria = '', exibirImagem = true) {
  const ehAcai = produto.nome.toLowerCase().includes("açai");
  const ehBarcaOuBatida = produto.nome.toLowerCase().includes("barca") || produto.nome.toLowerCase().includes("batida");
  const ehMilkshake = produto.nome.toLowerCase().includes("milkshake");
  const ehSuco = produto.nome.toLowerCase().includes("suco") || produto.nome.toLowerCase().includes("drink");

  const nomeImagem = gerarNomeImagem(produto.nome, categoria);
  const populares = ['X-Calaboiza', 'X-Paulista', 'X-Tudo', 'Smash Burguer', 'Batida de Açai Tradicional 475ml'];
  const tagPopular = populares.includes(produto.nome) ? '<span class="tag-popular">Mais pedido</span>' : '';
  const caminhoImagemJpeg = encodeURI(`imagens/${nomeImagem}.jpeg`);
  const caminhoImagemJpg = encodeURI(`imagens/${nomeImagem}.jpg`);
  const caminhoImagemPng = encodeURI(`imagens/${nomeImagem}.png`);
  const caminhoImagemSvg = encodeURI(`imagens/${nomeImagem}.svg`);

  return `
    <div class="card">
      ${exibirImagem ? `
      <div class="card-imagem" onclick="abrirModalImagem(this.querySelector('img').src, '${produto.nome}')">
        <img src="${caminhoImagemJpeg}" 
             onerror="if(!this.dataset.tentouJpg){this.dataset.tentouJpg='true'; this.src='${caminhoImagemJpg}';} else if(!this.dataset.tentouPng){this.dataset.tentouPng='true'; this.src='${caminhoImagemPng}';} else if(!this.dataset.tentouSvg){this.dataset.tentouSvg='true'; this.src='${caminhoImagemSvg}';} else {this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAiIGhlaWdodD0iMjAwIj48cmVjdCBmaWxsPSIjZWVlIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TZW0gaW1hZ2VtPC90ZXh0Pjwvc3ZnPg==';}"
             alt="${produto.nome}">
      </div>` : ''}
      ${tagPopular}
      <h4>${produto.nome}</h4>
      <p class="descricao">${produto.descricao}</p>
      <p><b>R$ ${formatarPreco(produto.preco)}</b></p>
      ${
        ehAcai && !ehBarcaOuBatida
        ? `<button onclick="abrirModalAcai('${produto.nome}', ${produto.preco})">Escolher Adicionais</button>`
        : ehMilkshake
        ? `<button onclick="abrirModalMilkshake('${produto.nome}', ${produto.preco})">Escolher Sabor</button>`
        : ehSuco
        ? `<button onclick="abrirModalSuco('${produto.nome}', ${produto.preco})">Escolher Sabor</button>`
        : `<button onclick="adicionarCarrinho(this, '${produto.nome}', ${produto.preco})">Adicionar ao Carrinho</button>`
      }
    </div>
  `;
}

function mostrarProdutos(lista, idDiv, termoBusca = '') {
  const div = document.getElementById(idDiv);
  if (!div) return;

  div.innerHTML = '';
  const itensFiltrados = filtrarProdutos(lista, termoBusca);

  itensFiltrados.forEach(({ produto }) => {
    const categoria = idDiv === 'dogaoLista' ? 'dogao' : '';
    const exibirImagem = !(idDiv === 'bebidasLista' || idDiv === 'acrescimosLista');
    div.innerHTML += criarCardProduto(produto, categoria, exibirImagem);
  });
}

function renderizarResultadosBusca(termoBusca = '') {
  const container = document.getElementById('resultadoBusca');
  if (!container) return;

  container.innerHTML = '';
  if (!termoBusca.trim()) {
    container.classList.remove('ativo');
    return;
  }

  const itens = [
    ...filtrarProdutos(dogao, termoBusca).map(item => ({ ...item, categoria: 'dogao' })),
    ...filtrarProdutos(lanches, termoBusca).map(item => ({ ...item, categoria: 'lanches' })),
    ...filtrarProdutos(especiais, termoBusca).map(item => ({ ...item, categoria: 'especiais' })),
    ...filtrarProdutos(porcoes, termoBusca).map(item => ({ ...item, categoria: 'porcoes' })),
    ...filtrarProdutos(bebidas, termoBusca).map(item => ({ ...item, categoria: 'bebidas' })),
    ...filtrarProdutos(sucosDrinks, termoBusca).map(item => ({ ...item, categoria: 'sucosDrinks' })),
    ...filtrarProdutos(acrescimos, termoBusca).map(item => ({ ...item, categoria: 'acrescimos' })),
    ...filtrarProdutos(sobremesas, termoBusca).map(item => ({ ...item, categoria: 'sobremesas' }))
  ].sort((a, b) => b.prioridade - a.prioridade || a.produto.nome.localeCompare(b.produto.nome));

  container.classList.toggle('ativo', itens.length > 0);

  if (!itens.length) {
    container.innerHTML = '<p class="resultado-vazio">Nenhum item encontrado.</p>';
    return;
  }

  container.innerHTML = '<h3 class="resultado-titulo">Resultados da busca</h3>';
  itens.forEach(({ produto, categoria }) => {
    const exibirImg = !(categoria === 'bebidas' || categoria === 'acrescimos');
    container.innerHTML += criarCardProduto(produto, categoria, exibirImg);
  });
}

function abrirModalImagem(caminhoImagem, nomeProduto) {
  const imagem = document.getElementById("imagemAmpliada");
  imagem.onerror = null;
  imagem.src = caminhoImagem;
  document.getElementById("nomeImagemModal").innerText = nomeProduto;
  document.getElementById("modalImagem").classList.add("ativo");
}

function fecharModalImagem() {
  document.getElementById("modalImagem").classList.remove("ativo");
}

let acaiSelecionado = null;

function abrirModalAcai(nome, preco){

  acaiSelecionado = {
    nome,
    preco
  };

  document.getElementById("tituloAcai").innerText = nome;

  const lista = document.getElementById("listaAdicionais");

  lista.innerHTML = "";

  Object.values(adicionaisAcai).forEach(categoria => {
    
    // Adiciona o título e preço da categoria
    lista.innerHTML += `
      <div class="categoria-header">
        <h3>${categoria.titulo} - R$ ${formatarPreco(categoria.preco)}</h3>
      </div>
    `;
    
    // Adiciona os itens da categoria
    categoria.itens.forEach(itemNome => {
      lista.innerHTML += `
        <label>
          <div class="adicional-info">
            <div class="adicional-nome">${itemNome}</div>
          </div>
          <input type="checkbox"
                 value="${itemNome}"
                 data-preco="${categoria.preco}">
        </label>
      `;
    });
  });

  document.getElementById("modalAcai")
          .classList.add("ativo");
}

function fecharModal(){
  document.getElementById("modalAcai")
          .classList.remove("ativo");
}

function confirmarAcai(){

  let precoFinal = acaiSelecionado.preco;

  let adicionaisTexto = "";

  const checks = document.querySelectorAll(
    "#listaAdicionais input:checked"
  );

  checks.forEach(check => {

    const nome = check.value;
    const preco = Number(check.dataset.preco);

    precoFinal += preco;

    adicionaisTexto += ` + ${nome}`;
  });

  adicionarCarrinho(
    acaiSelecionado.nome + adicionaisTexto,
    precoFinal
  );

  fecharModal();
}

let milkshakeSelecionado = null;

function abrirModalMilkshake(nome, preco){

  milkshakeSelecionado = {
    nome,
    preco
  };

  document.getElementById("tituloMilkshake").innerText = nome;

  const lista = document.getElementById("listaSabores");

  lista.innerHTML = "";

  Object.values(saboresMilkshake).forEach(categoria => {
    
    // Adiciona o título e preço da categoria
    let precoTexto = categoria.adicional > 0 ? `+R$ ${formatarPreco(categoria.adicional)}` : "Incluído";
    
    lista.innerHTML += `
      <div class="categoria-header">
        <h3>${categoria.titulo} - ${precoTexto}</h3>
      </div>
    `;
    
    // Adiciona os itens da categoria
    categoria.itens.forEach(saborNome => {
      lista.innerHTML += `
        <label>
          <div class="sabor-info">
            <div class="sabor-nome">${saborNome}</div>
          </div>
          <input type="radio"
                 name="sabor"
                 value="${saborNome}"
                 data-adicional="${categoria.adicional}"
                 required>
        </label>
      `;
    });
  });

  document.getElementById("modalMilkshake")
          .classList.add("ativo");
}

function fecharModalMilkshake(){
  document.getElementById("modalMilkshake")
          .classList.remove("ativo");
}

function confirmarMilkshake(){

  const saborSelecionado = document.querySelector(
    "#listaSabores input[name='sabor']:checked"
  );

  if(!saborSelecionado){
    mostrarNotificacao("🎯 Selecione um sabor!", "aviso", 2500);
    return;
  }

  const sabor = saborSelecionado.value;
  const adicional = Number(saborSelecionado.dataset.adicional);
  const precoFinal = milkshakeSelecionado.preco + adicional;

  adicionarCarrinho(
    milkshakeSelecionado.nome + ` (${sabor})`,
    precoFinal
  );

  fecharModalMilkshake();
}

let sucoSelecionado = null;

function abrirModalSuco(nome, preco){

  sucoSelecionado = {
    nome,
    preco
  };

  document.getElementById("tituloSuco").innerText = nome;

  const lista = document.getElementById("listaSaboresSuco");

  lista.innerHTML = "";

  Object.values(saboresSucos).forEach(categoria => {
    
    // Adiciona o título e preço da categoria
    let precoTexto = categoria.adicional > 0 ? `+R$ ${formatarPreco(categoria.adicional)}` : "Incluído";
    
    lista.innerHTML += `
      <div class="categoria-header">
        <h3>${categoria.titulo} - ${precoTexto}</h3>
      </div>
    `;
    
    // Adiciona os itens da categoria
    categoria.itens.forEach(saborNome => {
      lista.innerHTML += `
        <label>
          <div class="sabor-info">
            <div class="sabor-nome">${saborNome}</div>
          </div>
          <input type="radio"
                 name="saborSuco"
                 value="${saborNome}"
                 data-adicional="${categoria.adicional}"
                 required>
        </label>
      `;
    });
  });

  document.getElementById("modalSuco")
          .classList.add("ativo");
}

function fecharModalSuco(){
  document.getElementById("modalSuco")
          .classList.remove("ativo");
}

function confirmarSuco(){

  const saborSelecionado = document.querySelector(
    "#listaSaboresSuco input[name='saborSuco']:checked"
  );

  if(!saborSelecionado){
    mostrarNotificacao("🎯 Selecione um sabor!", "aviso", 2500);
    return;
  }

  const sabor = saborSelecionado.value;
  const adicional = Number(saborSelecionado.dataset.adicional);
  const precoFinal = sucoSelecionado.preco + adicional;

  adicionarCarrinho(
    sucoSelecionado.nome + ` (${sabor})`,
    precoFinal
  );

  fecharModalSuco();
}

function atualizarCardapio() {
  const termo = document.getElementById("busca").value.trim().toLowerCase();

  renderizarResultadosBusca(termo);

  mostrarProdutos(dogao, "dogaoLista", termo);
  mostrarProdutos(lanches, "lanchesLista", termo);
  mostrarProdutos(especiais, "especiaisLista", termo);
  mostrarProdutos(porcoes, "porcoesLista", termo);
  mostrarProdutos(bebidas, "bebidasLista", termo);
  mostrarProdutos(sucosDrinks, "sucosDrinksLista", termo);
  mostrarProdutos(acrescimos, "acrescimosLista", termo);
  mostrarProdutos(sobremesas, "sobremesasLista", termo);

  document.querySelectorAll('.produtos').forEach(lista => {
    const temItens = lista.querySelector('.card');
    if (termo) {
      lista.classList.add('ativo');
      const titulo = document.querySelector(`.tituloCategoria[id="${lista.id.replace('Lista', '')}"]`);
      if (titulo) titulo.classList.add('ativo');
    } else {
      lista.classList.remove('ativo');
      const titulo = document.querySelector(`.tituloCategoria[id="${lista.id.replace('Lista', '')}"]`);
      if (titulo) titulo.classList.remove('ativo');
    }
  });
}

function toggleCategoria(idLista, titulo) {
  const todasListas = document.querySelectorAll(".produtos");
  const todosTitulos = document.querySelectorAll(".tituloCategoria");

  todasListas.forEach(lista => {
    if (lista.id !== idLista) lista.classList.remove("ativo");
  });

  todosTitulos.forEach(t => {
    if (t !== titulo) t.classList.remove("ativo");
  });

  const listaSelecionada = document.getElementById(idLista);
  if (!listaSelecionada) return;

  listaSelecionada.classList.toggle("ativo");
  titulo.classList.toggle("ativo");
}

function calcularTaxa() {
  const tipoEntrega = document.getElementById("tipoEntrega").value;
  if (tipoEntrega === "refugio") return 3.00;
  if (tipoEntrega === "fap") return 5.00;
  return 0;
}

function onEntregaChange() {
  const enderecoWrap = document.getElementById("enderecoWrap");
  const tipoEntrega = document.getElementById("tipoEntrega").value;

  enderecoWrap.style.display = tipoEntrega === "retirada" ? "none" : "block";
  atualizarCarrinho();
}

function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");

  toast.innerText = mensagem;
  toast.classList.add("mostrar");

  setTimeout(() => {
    toast.classList.remove("mostrar");
  }, 2000);
}

function atualizarBotaoTopo() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  btn.style.display = window.scrollY > 250 ? 'block' : 'none';
}

function animarCarrinho() {
  const carrinhoBox = document.getElementById("carrinhoBox");
  if (!carrinhoBox) return;

  carrinhoBox.classList.add("animar");
  setTimeout(() => {
    carrinhoBox.classList.remove("animar");
  }, 300);
}

function adicionarCarrinho(botaoOuNome, nomeOuPreco, precoOpcional) {
  let botao = null;
  let nome;
  let preco;

  if (botaoOuNome instanceof HTMLElement) {
    botao = botaoOuNome;
    nome = nomeOuPreco;
    preco = precoOpcional;
  } else {
    nome = botaoOuNome;
    preco = nomeOuPreco;
  }

  if (botao instanceof HTMLElement) {
    animarProdutoParaCarrinho(botao);
  }

  preco = Number(preco) || 0;

  const itemExistente = carrinho.find(item => item.nome === nome);

  if (itemExistente) {
    itemExistente.quantidade = Number(itemExistente.quantidade) + 1;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }

  salvarCarrinho();
  atualizarCarrinho();
  animarCarrinho();
  mostrarToast(`✅ ${nome} adicionado ao carrinho!`);
}

function alterarQtd(nome, acao) {
  const item = carrinho.find(item => item.nome === nome);
  if (!item) return;

  item.quantidade = Number(item.quantidade) || 0;

  if (acao === "mais") {
    item.quantidade++;
  } else {
    item.quantidade--;
    if (item.quantidade <= 0) {
      carrinho = carrinho.filter(prod => prod.nome !== nome);
    }
  }

  salvarCarrinho();
  atualizarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  salvarCarrinho();
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itensCarrinho = document.getElementById("itensCarrinho");
  const totalEl = document.getElementById("total");

  itensCarrinho.innerHTML = "";

  if (carrinho.length === 0) {
    itensCarrinho.innerHTML = `<div class="carrinho-vazio"><span>🛒</span>Seu carrinho está vazio</div>`;
    totalEl.innerText = "0,00";
    total = 0;
    return;
  }

  let totalFinal = 0;

  carrinho.forEach(item => {
    totalFinal += item.preco * item.quantidade;

    itensCarrinho.innerHTML += `
      <div class="itemCarrinho">
        <b>${item.nome}</b>
        <span class="preco">R$ ${formatarPreco(item.preco * item.quantidade)}</span>
        <div class="controlesQtd">
          <button class="btnQtd" onclick="alterarQtd('${item.nome}', 'menos')">-</button>
          <span class="qtd">${item.quantidade}</span>
          <button class="btnQtd" onclick="alterarQtd('${item.nome}', 'mais')">+</button>
        </div>
      </div>
    `;
  });

  const taxa = calcularTaxa();
  if (taxa > 0) {
    itensCarrinho.innerHTML += `
      <div class="itemCarrinho taxaEntrega">
        <b>Taxa de entrega</b>
        <span class="preco">R$ ${formatarPreco(taxa)}</span>
      </div>
    `;
    totalFinal += taxa;
  }

  total = totalFinal;
  totalEl.innerText = formatarPreco(total);
}

function limparErros() {
  document.querySelectorAll("input, textarea, select").forEach(field => {
    field.classList.remove("erro");
  });
  document.querySelectorAll(".erro-msg").forEach(msg => {
    msg.classList.remove("ativo");
  });
}

function mostrarErro(fieldId, mensagemId) {
  const field = document.getElementById(fieldId);
  const msg = document.getElementById(mensagemId);
  if (field) field.classList.add("erro");
  if (msg) msg.classList.add("ativo");
}

function finalizarPedido() {
  limparErros();
  
  const nome = document.getElementById("nome").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const pagamento = document.getElementById("pagamento").value;
  const obs = document.getElementById("obs").value;
  const tipoEntrega = document.getElementById("tipoEntrega").value;

  let temErro = false;

  if (carrinho.length === 0) {
    mostrarNotificacao("🛒 Seu carrinho está vazio!", "aviso", 2500);
    return;
  }

  if (nome === "") {
    mostrarErro("nome", "erro-nome");
    temErro = true;
  }

  if (pagamento === "") {
    mostrarErro("pagamento", "erro-pagamento");
    temErro = true;
  }

  if (tipoEntrega !== "retirada" && endereco === "") {
    mostrarErro("endereco", "erro-endereco");
    temErro = true;
  }

  if (temErro) {
    return;
  }

  const taxa = calcularTaxa();
  const tipoEntregaTexto = tipoEntrega === "retirada" ? "Retirada no local" : tipoEntrega === "refugio" ? "Entrega Refugio" : "Entrega FAP";

  let mensagem = "🛒 *NOVO PEDIDO*\n\n";
  mensagem += `👤 Nome: ${nome}\n`;
  mensagem += `🚚 Tipo: ${tipoEntregaTexto}\n`;

  if (taxa > 0) {
    mensagem += `📦 Taxa de entrega: R$ ${formatarPreco(taxa)}\n`;
  }

  if (tipoEntrega !== "retirada") {
    mensagem += `📍 Endereco: ${endereco}\n`;
  }

  mensagem += `💳 Pagamento: ${pagamento}\n\n`;
  mensagem += "📌 *Itens do Pedido:*\n";

  carrinho.forEach(item => {
    mensagem += `- ${item.quantidade} nid. ${item.nome} (R$ ${formatarPreco(item.preco * item.quantidade)})
`;
  });

  mensagem += `
💰 Total: R$ ${formatarPreco(total)}
`;

  if (obs !== "") {
    mensagem += `
📝 Observacoes: ${obs}
`;
  }

  window.location.href = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  atualizarBotaoTopo();
  window.addEventListener('scroll', atualizarBotaoTopo, { passive: true });
  atualizarCardapio();
  document.getElementById("busca").addEventListener("input", atualizarCardapio);
  document.getElementById("tipoEntrega").addEventListener("change", onEntregaChange);
  onEntregaChange();
  document.querySelectorAll(".produtos").forEach(lista => lista.classList.add("ativo"));
  
  // Remover erros quando o usuário interage com os campos
  document.getElementById("nome").addEventListener("input", function() {
    if (this.value.trim() !== "") {
      this.classList.remove("erro");
      document.getElementById("erro-nome").classList.remove("ativo");
    }
  });
  
  document.getElementById("endereco").addEventListener("input", function() {
    if (this.value.trim() !== "") {
      this.classList.remove("erro");
      document.getElementById("erro-endereco").classList.remove("ativo");
    }
  });
  
  document.getElementById("pagamento").addEventListener("change", function() {
    if (this.value !== "") {
      this.classList.remove("erro");
      document.getElementById("erro-pagamento").classList.remove("ativo");
    }
  });
});

//animar produto para o carrinho

function animarProdutoParaCarrinho(botao) {
  const card = botao.closest('.card');
  const img = card.querySelector('img');

  if (!img) return;

  const imgClone = img.cloneNode(true);

  const imgRect = img.getBoundingClientRect();
  const carrinhoRect = document.getElementById('carrinhoBox').getBoundingClientRect();

  imgClone.style.position = 'fixed';
  imgClone.style.left = imgRect.left + 'px';
  imgClone.style.top = imgRect.top + 'px';
  imgClone.style.width = imgRect.width + 'px';
  imgClone.style.height = imgRect.height + 'px';
  imgClone.style.zIndex = '99999';
  imgClone.style.pointerEvents = 'none';
  imgClone.style.transition = 'all 0.8s ease';

  document.body.appendChild(imgClone);

  setTimeout(() => {
    imgClone.style.left = carrinhoRect.left + 'px';
    imgClone.style.top = carrinhoRect.top + 'px';
    imgClone.style.width = '20px';
    imgClone.style.height = '20px';
    imgClone.style.opacity = '0';
  }, 10);

  setTimeout(() => {
    imgClone.remove();
  }, 850);
}

