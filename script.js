// CONFIGURACAO
const numeroWhatsapp = "5541989017551";

// PRODUTOS
const dogao = [
  { nome: "Simples", preco: 13.00, descricao: "Pao, salsicha, molho, batata palha" },
  { nome: "Duplo", preco: 15.00, descricao: "2 salsichas, molho, batata palha" },
  { nome: "Frango", preco: 20.00, descricao: "Frango desfiado, molho, batata palha" },
  { nome: "Calaboiza", preco: 20.00, descricao: "Calabresa, molho, batata palha" },
  { nome: "Frangopiry", preco: 22.00, descricao: "Frango + catupiry, molho, batata palha" },
  { nome: "Paulista", preco: 24.00, descricao: "Completo com adicionais especiais" }
];

const lanches = [
  { nome: "X-Burguer", preco: 20.00, descricao: "Pao, hamburguer, queijo, molho" },
  { nome: "X-Salada", preco: 22.00, descricao: "Hamburguer, queijo, alface, tomate" },
  { nome: "X-Egg", preco: 24.00, descricao: "Hamburguer, queijo, ovo" },
  { nome: "X-Frango", preco: 26.00, descricao: "Frango, queijo, salada" },
  { nome: "X-Calaboiza", preco: 26.00, descricao: "Calabresa, queijo, salada" },
  { nome: "X-Paulista", preco: 32.00, descricao: "Completo especial" },
  { nome: "X-Tudo", preco: 35.00, descricao: "Tudo que tem direito" }
];

const especiais = [
  { nome: "Smash Burguer", preco: 20.00, descricao: "Smash burger artesanal" },
  { nome: "Smash Turbo", preco: 26.00, descricao: "Smash + queijo extra" },
  { nome: "Smash Ultra", preco: 32.00, descricao: "Duplo smash + bacon" },
  { nome: "Smash Supreme", preco: 37.00, descricao: "Supreme completo premium" },
  { nome: "+Q Donalds", preco: 29.00, descricao: "Estilo McDonald's caseiro" },
  { nome: "Natural", preco: 29.00, descricao: "Lanche leve com salada" }
];

const porcoes = [
  { nome: "Polenta (500g)", preco: 13.00, descricao: "Porcao de polenta frita" },
  { nome: "Batata (500g)", preco: 21.00, descricao: "Batata frita crocante" },
  { nome: "Mandioca (500g)", preco: 20.00, descricao: "Mandioca frita" },
  { nome: "Nuggets (500g)", preco: 29.00, descricao: "Nuggets crocantes" },
  { nome: "Linguiça Calaboiza (500g)", preco: 30.00, descricao: "Calabresa frita" },
  { nome: "File de Tilapia (500g)", preco: 42.00, descricao: "Tilapia empanada" },
  { nome: "Carne Acebolada (500g)", preco: 45.00, descricao: "Carne com cebola" },
  { nome: "Aneis de Cebola (400g)", preco: 28.00, descricao: "Aneis empanados" },
  { nome: "Frango Frito Americano (1kg)", preco: 40.00, descricao: "Frango estilo americano" }
];

const bebidas = [
  { nome: "Refrigerante 2L (Coca-Cola)", preco: 16.00, descricao: "2 litros" },
  { nome: "Refrigerante 2L (Ouro Verde)", preco: 10.00, descricao: "2 litros" },
  { nome: "Guarana/Sprite 2L", preco: 14.00, descricao: "2 litros" },
  { nome: "Refrigerante 1L (Vidro)", preco: 8.00, descricao: "1 litro vidro" },
  { nome: "Refrigerante 1L (PET)", preco: 10.00, descricao: "1 litro PET" },
  { nome: "Coca-Cola 600ml", preco: 8.00, descricao: "600ml" },
  { nome: "Suco de Laranja/Uva integral 310ml", preco: 6.00, descricao: "310ml" },
  { nome: "Tubaina Garrafa", preco: 5.00, descricao: "garrafa" },
  { nome: "Agua sem gas", preco: 3.00, descricao: "500ml" },
  { nome: "Agua com gas", preco: 3.50, descricao: "500ml" }
];

const acrescimos = [
  { nome: "Hamburguer", preco: 7.00, descricao: "Adicional hamburguer" },
  { nome: "Carne bovina", preco: 8.00, descricao: "Adicional carne" },
  { nome: "Hamburguer veg", preco: 9.00, descricao: "Adicional vegetariano" },
  { nome: "Frango", preco: 6.00, descricao: "Adicional frango" },
  { nome: "Calaboiza", preco: 7.00, descricao: "Adicional calabresa" },
  { nome: "Mussarela", preco: 5.00, descricao: "Adicional queijo" },
  { nome: "Outros", preco: 2.00, descricao: "Adicional simples" },
  { nome: "Limao/Gelo", preco: 1.00, descricao: "Limao e gelo" },
  { nome: "Molho verde", preco: 2.00, descricao: "Molho verde" }
];

const sobremesas = [
  { nome: "Açai Polpa Norte 200ml", preco: 13.50, descricao: "200ml polpa de açai" },
  { nome: "Açai Polpa Norte 330ml", preco: 26.50, descricao: "330ml polpa de açai" },
  { nome: "Açai Polpa Norte 550ml", preco: 22.50, descricao: "550ml polpa de açai" },
  { nome: "Açai Polpa Norte 700ml", preco: 31.50, descricao: "700ml polpa de açai" },
  { nome: "Barca de Açai 500ml", preco: 35.50, descricao: "Leite Condensado, Leite Ninho, Banana, Morango, Paçoca, Amendoim, disquete e ChocoBall." },
  { nome: "Batida de Açai Tradicional 475ml", preco: 17.50, descricao: "Açai, leite, leite condensado, leite ninho e banana." },
  { nome: "Batida de Açai Paçocuda 475ml", preco: 17.50, descricao: "Açai, Leite, Leite Condensado, Leite Ninho, Banana e Paçoca." },
  { nome: "Milkshake 330ml", preco: 17.50, descricao: "Milkshake de Ovomaltine, Capuccino, Doce de Leite ou Oreo." },
  { nome: "Milkshake 550ml", preco: 22.50, descricao: "Milkshake de Ovomaltine, Capuccino, Doce de Leite ou Oreo." }
];

const sucosDrinks = [
  { nome: "Pink Lemonade", preco: 17.00, descricao: "Limão, Xarope de Groselha e Soda ou Agua com Gás" },
  { nome: "Lagoa Azul", preco: 17.00, descricao: "Limão, Powerade, Soda ou Agua com Gás" },
  { nome: "The Beache", preco: 17.00, descricao: "Suco de Laranja, Suco de Pêssego, groselia, Soda ou Agua com Gás" },
  { nome: "Soda Italiana", preco: 18.00, descricao: "Frutas Vermlhas, Morango, Maça Verde ou Maracujá, Limão, Xarope, Açúcar, Soda ou Agua com Gás" }
];

const adicionaisAcai = {
  tradicionais: {
    titulo: "Adicionais Tradicionais",
    preco: 2.00,
    itens: ["Banana", "Uva", "Granola", "Paçoca", "Leite Ninho", "Amendoim", "Leite Condensado", "Disquete", "ChocoBall"]
  },
  especiais: {
    titulo: "Adicionais Especiais",
    preco: 4.00,
    itens: ["Nutella", "Morango", "Mini Oreo", "Kiwi"]
  }
};

const saboresMilkshake = {
  basicos: {
    titulo: "Sabores Básicos",
    adicional: 0.00,
    itens: ["Chocolate", "Morango"]
  },
  premium: {
    titulo: "Sabores Premium",
    adicional: 1.00,
    itens: ["Ovomaltine", "Capuccino", "Doce de Leite", "Oreo"]
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
carrinho = carrinho.map(item => ({ ...item, quantidade: item.quantidade || 1 }));
let total = 0;

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function formatarPreco(valor) {
  return valor.toFixed(2).replace('.', ',');
}

function gerarNomeImagem(nomeProduto, categoria = '') {
  const nomeOriginal = nomeProduto.toLowerCase().trim();

  const mapeamento = {
    simples: 'dogao_simples',
    duplo: 'dogao_duplo',
    'x-calaboiza': 'x_calaboiza',
    'x-paulista': 'x_paulista',
    'x-tudo': 'x_tudo',
    'polenta (500g)': 'polenta',
    'batata (500g)': 'batata',
    'mandioca (500g)': 'mandioca',
    'nuggets (500g)': 'nugget',
    'linguiça calaboiza (500g)': 'linguiça_calaboiza',
    'file de tilapia (500g)': 'file_tilapia',
    'carne acebolada (500g)': 'carne_acebolada',
    'aneis de cebola (400g)': 'aneis_cebola',
    'frango frito americano (1kg)': 'frango_frito_americano',
    'pink lemonade': 'pink_lemonade',
    'lagoa azul': 'lagoa_azul',
    'the beache': 'the_beach',
    'soda italiana': 'soda_italiana',
    'açai polpa norte 200ml': 'açai_200ml',
    'açai polpa norte 330ml': 'açai_330ml',
    'açai polpa norte 550ml': 'açai_550ml',
    'açai polpa norte 700ml': 'açai_700ml',
    'barca de açai 500ml': 'barca_açai',
    'batida de açai tradicional 475ml': 'batida_tradicional',
    'batida de açai paçocuda 475ml': 'batida_paçocuda',
    'milkshake 330ml': 'milkshake_330ml_trd',
    'milkshake 550ml': 'milkshake_550ml_trd'
  };

  if (mapeamento[nomeOriginal]) {
    return mapeamento[nomeOriginal];
  }

  return nomeOriginal
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

function mostrarProdutos(lista, idDiv, termoBusca = '') {
  const div = document.getElementById(idDiv);
  if (!div) return;

  div.innerHTML = '';
  const termo = termoBusca.toLowerCase();

  lista.forEach(produto => {
    const nomeLower = produto.nome.toLowerCase();
    const descLower = produto.descricao.toLowerCase();

    if (nomeLower.includes(termo) || descLower.includes(termo)) {

      const ehAcai = produto.nome.toLowerCase().includes("açai");
      const ehBarcaOuBatida = produto.nome.toLowerCase().includes("barca") || produto.nome.toLowerCase().includes("batida");
      const ehMilkshake = produto.nome.toLowerCase().includes("milkshake");
      const ehSuco = produto.nome.toLowerCase().includes("suco") || produto.nome.toLowerCase().includes("drink");

      const categoria = idDiv === 'dogaoLista' ? 'dogao' : '';
      const nomeImagem = gerarNomeImagem(produto.nome, categoria);
      const exibirImagem = !(idDiv === 'bebidasLista' || idDiv === 'acrescimosLista');
      const populares = ['X-Calaboiza', 'X-Paulista', 'X-Tudo', 'Smash Burguer', 'Batida de Açai Tradicional 475ml'];
      const tagPopular = populares.includes(produto.nome) ? '<span class="tag-popular">Mais pedido</span>' : '';
      // Tenta jpg, jpeg, png e svg automaticamente
      const caminhoImagemJpeg = encodeURI(`imagens/${nomeImagem}.jpeg`);
      const caminhoImagemJpg = encodeURI(`imagens/${nomeImagem}.jpg`);
      const caminhoImagemPng = encodeURI(`imagens/${nomeImagem}.png`);
      const caminhoImagemSvg = encodeURI(`imagens/${nomeImagem}.svg`);

      div.innerHTML += `
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
            ? `<button onclick="abrirModalAcai('${produto.nome}', ${produto.preco})">
                 Escolher Adicionais
               </button>`
            : ehMilkshake
            ? `<button onclick="abrirModalMilkshake('${produto.nome}', ${produto.preco})">
                 Escolher Sabor
               </button>`
            : ehSuco
            ? `<button onclick="abrirModalSuco('${produto.nome}', ${produto.preco})">
                 Escolher Sabor
               </button>`
            : `<button onclick="adicionarCarrinho('${produto.nome}', ${produto.preco})">
                 Adicionar ao Carrinho
               </button>`
          }

        </div>
      `;
    }
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

function adicionarCarrinho(nome, preco) {
  const itemExistente = carrinho.find(item => item.nome === nome);

  if (itemExistente) {
    itemExistente.quantidade++;
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
    mensagem += `- ${item.quantidade}x ${item.nome} (R$ ${formatarPreco(item.preco * item.quantidade)})
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

