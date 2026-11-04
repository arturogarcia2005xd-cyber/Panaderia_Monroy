// Base de datos extendida a 16 variedades con fotos reales + fotos genericas HD
const products = [
  // --- FOTOS REALES (Comprimido adjunto) ---
  {
    id: 1,
    name: "Conchas Tradicionales",
    category: "dulce",
    price: 0.35,
    desc: "Pan dulce esponjoso horneado con la cobertura clásica de pasta dulce de vainilla y chocolate.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Semita de Piña Artesanal",
    category: "dulce",
    price: 0.50,
    desc: "Capa crujiente de semita baja rellena de jalea dulce de piña natural hecha en casa.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.22 AM.jpeg"
  },
  {
    id: 3,
    name: "Pan Francés (Bolsa de 10)",
    category: "salado",
    price: 1.00,
    desc: "Pan francés tradicional, de cáscara crujiente y miga suave. Horneado tres veces al día.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.23 AM.jpeg"
  },
  {
    id: 4,
    name: "Relámpagos de Crema",
    category: "especial",
    price: 0.60,
    desc: "Pasta choux horneada rellena con crema pastelera casera y lustrada con dulce de chocolate.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.24 AM.jpeg"
  },
  {
    id: 5,
    name: "Novias / Pecados",
    category: "dulce",
    price: 0.40,
    desc: "Masa fina enrollada en capa de azúcar y canela molida, crujiente al morder.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.24 AM (1).jpeg"
  },
  {
    id: 6,
    name: "Donas Glaseadas",
    category: "dulce",
    price: 0.45,
    desc: "Donas fritas de contextura suave y liviana con cubierta glaseada de azúcar.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.25 AM.jpeg"
  },
  {
    id: 7,
    name: "Cacho de Requesón",
    category: "especial",
    price: 0.50,
    desc: "Pan hojaldrado en forma de cuerno con abundante relleno suave de queso dulce casero.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.27 AM.jpeg"
  },
  {
    id: 8,
    name: "Polvorones de Mantequilla",
    category: "dulce",
    price: 0.25,
    desc: "Galletas desmoronables horneadas a baja temperatura con toque de vainilla y colores.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.28 AM.jpeg"
  },
  {
    id: 9,
    name: "Trenza de Yema",
    category: "dulce",
    price: 0.75,
    desc: "Pan esponjoso trenzado a mano preparado con huevo de campo y toque de jalea.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.29 AM.jpeg"
  },
  {
    id: 10,
    name: "Salpores de Arroz",
    category: "especial",
    price: 0.35,
    desc: "Salpor tostado elaborado con harina de arroz tostado, canela y ajonjolí.",
    image: "imagenes/WhatsApp Image 2026-11-04 at 9.25.30 AM.jpeg"
  },

  // --- FOTOS GENÉRICAS ADICIONALES (Unsplash HD) ---
  {
    id: 11,
    name: "Croissant de Mantequilla",
    category: "especial",
    price: 0.65,
    desc: "Hojaldre artesanal horneado con capas de mantequilla natural.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 12,
    name: "Pan Integral de Semillas",
    category: "salado",
    price: 1.25,
    desc: "Barra de pan saludable elaborado con granos enteros, linaza y chía.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 13,
    name: "Muffin de Arándanos",
    category: "dulce",
    price: 0.70,
    desc: "Magdalena húmeda y esponjosa cargada con arándanos frescos.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 14,
    name: "Baguette Rústica",
    category: "salado",
    price: 0.85,
    desc: "Pan largo rústico de fermentación lenta, ideal para cenas o sándwiches.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 15,
    name: "Empanada de Manzana",
    category: "especial",
    price: 0.55,
    desc: "Empanada de masa hojaldrada rellena de manzanas troceadas con canela.",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 16,
    name: "Orejas de Hojaldre",
    category: "dulce",
    price: 0.30,
    desc: "Piezas crujientes de hojaldre caramelo tostado con capa de azúcar.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
  }
];

let cart = [];

// Selección de Elementos DOM
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const tabBtns = document.querySelectorAll('.tab-btn');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');

// Renderizado de productos con fallback si falta la imagen
function renderProducts(items) {
  productsGrid.innerHTML = '';
  items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80'">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-bottom">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="btn-add" onclick="addToCart(${product.id})">
            + Agregar
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// Agregar al Carrito
function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

// Modificar cantidades y refrescar UI del Carrito
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = count;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  updateCart();
}

// Redirección y formato de mensaje a WhatsApp
sendWhatsappBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Por favor agrega al menos un producto a tu carrito.');
    return;
  }

  const name = document.getElementById('customerName').value;
  const address = document.getElementById('customerAddress').value;
  const method = document.getElementById('deliveryMethod').value;

  if (!name.trim()) {
    alert('Escribe tu nombre para saber a quién entregar el pedido.');
    return;
  }

  let message = `*NUEVO ENCARGO - PANADERÍA MONROY*\n\n`;
  message += `*Nombre:* ${name}\n`;
  message += `*Forma de Entrega:* ${method}\n`;
  if (address) message += `*Dirección/Ruta:* ${address}\n`;
  message += `\n*Detalle del pedido:*\n`;

  let total = 0;
  cart.forEach(item => {
    const sub = item.price * item.qty;
    total += sub;
    message += `• ${item.qty}x ${item.name} ($${sub.toFixed(2)})\n`;
  });

  message += `\n*TOTAL FINAL: $${total.toFixed(2)}*`;

  // Número oficial o de prueba del negocio (remplaza por el de la Sra. Mariela)
  const phone = "50370000000"; 
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

// Búsqueda interactiva
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term));
  renderProducts(filtered);
});

// Filtrado por pestañas
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    if (category === 'todos') {
      renderProducts(products);
    } else {
      renderProducts(products.filter(p => p.category === category));
    }
  });
});

// Control del Carrito Lateral
cartBtn.addEventListener('click', () => {
  cartDrawer.classList.add('open');
  cartOverlay.style.display = 'block';
});

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.style.display = 'none';
}

closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Modal de Evaluación y Generación Real del Código QR
const evalModal = document.getElementById('evalModal');
const evalModalBtn = document.getElementById('evalModalBtn');
const closeEvalBtn = document.getElementById('closeEvalBtn');

evalModalBtn.addEventListener('click', () => {
  evalModal.style.display = 'flex';
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = ""; // Limpia QR previas
  
  // Generación directa con librería qrcode.js usando la URL actual de la página
  new QRCode(qrDiv, {
    text: window.location.href,
    width: 170,
    height: 170,
    colorDark : "#c2185b",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
});

closeEvalBtn.addEventListener('click', () => {
  evalModal.style.display = 'none';
});

// Inicialización inicial
renderProducts(products);