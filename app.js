const lei = new Intl.NumberFormat('ro-MD', {
  style: 'currency',
  currency: 'MDL',
  maximumFractionDigits: 0
});

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function cart() {
  return JSON.parse(localStorage.getItem('cosLumiere') || '[]');
}

function saveCart(items) {
  localStorage.setItem('cosLumiere', JSON.stringify(items));
  updateCartCount();
}

function updateCartCount() {
  const n = cart().reduce((s, i) => s + i.qty, 0);
  $$('.cart-count').forEach(el => el.textContent = n);
}

function showToast(msg = 'Produs adăugat în coș') {
  let t = $('.toast');

  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }

  t.textContent = msg;
  t.classList.add('show');

  setTimeout(() => t.classList.remove('show'), 1800);
}

function addToCart(id, qty = 1) {
  const p = products.find(x => x.id === Number(id));
  if (!p) return;

  const items = cart();
  const ex = items.find(i => i.id === p.id);

  ex ? ex.qty += qty : items.push({ id: p.id, qty });

  saveCart(items);
  showToast();
}

function removeFromCart(id) {
  saveCart(cart().filter(i => i.id !== Number(id)));
  renderCart?.();
}

function changeQty(id, delta) {
  const items = cart();
  const item = items.find(i => i.id === Number(id));

  if (!item) return;

  item.qty += delta;

  if (item.qty < 1) {
    item.qty = 1;
  }

  saveCart(items);
  renderCart?.();
}

function productCard(p) {
  return `
    <article class="card product">
      <div class="product-img">
        <a href="produs.html?id=${p.id}">
          <img src="${p.img}" alt="${p.name}">
        </a>
        <span class="new-badge">Premium</span>
      </div>

      <div class="card-body">
        <div class="meta">
          <span class="tag">${labelCat(p.category)}</span>
          <span class="stars">★ ${p.rating}</span>
        </div>

        <h3>
          <a href="produs.html?id=${p.id}">${p.name}</a>
        </h3>

        <p>${p.desc}</p>

        <div class="price">${lei.format(p.price)}</div>

        <button class="btn small" onclick="addToCart(${p.id})">
          Adaugă în coș
        </button>
      </div>
    </article>
  `;
}

function labelCat(c) {
  return {
    ten: 'Îngrijire ten',
    par: 'Îngrijire păr',
    corp: 'Îngrijire corp',
    machiaj: 'Machiaj'
  }[c] || c;
}

function renderFeatured() {
  const box = $('#featuredProducts');

  if (box) {
    box.innerHTML = products.slice(0, 8).map(productCard).join('');
  }
}

function renderCatalog() {
  const box = $('#catalogProducts');
  if (!box) return;

  const urlCat = new URLSearchParams(location.search).get('cat');

  if (
    urlCat &&
    $('#categoryFilter') &&
    $('#categoryFilter').dataset.ready !== '1'
  ) {
    $('#categoryFilter').value = urlCat;
    $('#categoryFilter').dataset.ready = '1';
  }

  const search = ($('#searchInput')?.value || '').toLowerCase();
  const cat = $('#categoryFilter')?.value || 'all';
  const max = Number($('#priceFilter')?.value || 700);
  const sort = $('#sortFilter')?.value || 'default';

  let list = products.filter(p =>
    (cat === 'all' || p.category === cat) &&
    p.price <= max &&
    (
      p.name.toLowerCase().includes(search) ||
      p.desc.toLowerCase().includes(search) ||
      p.brand.toLowerCase().includes(search)
    )
  );

  if (sort === 'priceAsc') {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === 'priceDesc') {
    list.sort((a, b) => b.price - a.price);
  }

  if (sort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  if ($('#productCount')) {
    $('#productCount').textContent = `${list.length} produse găsite`;
  }

  box.innerHTML = list.length
    ? list.map(productCard).join('')
    : `<div class="empty">Nu am găsit produse după aceste filtre.</div>`;
}

function renderProductPage() {
  const box = $('#productDetails');
  if (!box) return;

  const id = Number(new URLSearchParams(location.search).get('id') || 1);
  const p = products.find(x => x.id === id) || products[0];

  document.title = p.name + ' | Lumière';

  box.innerHTML = `
    <div class="gallery-main zoom-box">
      <img src="${p.img}" alt="${p.name}">
    </div>

    <div>
      <p class="eyebrow">${labelCat(p.category)} • ${p.brand}</p>

      <h1>${p.name}</h1>

      <p class="muted">${p.desc}</p>

      <div class="price">${lei.format(p.price)}</div>

      <p class="stars">★★★★★ ${p.rating}/5</p>

      <div class="qty">
        <button onclick="qtyMinus()">−</button>
        <input id="qtyInput" value="1" readonly>
        <button onclick="qtyPlus()">+</button>
      </div>

      <button 
        class="btn" 
        onclick="addToCart(${p.id}, Number(document.getElementById('qtyInput').value))"
      >
        Adaugă în coș
      </button>

      <a class="btn light" href="catalog.html">
        Înapoi la catalog
      </a>

      <ul class="info-list">
        <li>Potrivit pentru utilizare zilnică</li>
        <li>Ambalaj elegant și reciclabil</li>
        <li>Livrare rapidă în Moldova</li>
      </ul>
    </div>
  `;
}

function qtyPlus() {
  const i = $('#qtyInput');
  i.value = Number(i.value) + 1;
}

function qtyMinus() {
  const i = $('#qtyInput');
  i.value = Math.max(1, Number(i.value) - 1);
}

function renderCart() {
  const list = $('#cartItems');
  if (!list) return;

  const items = cart()
    .map(i => ({
      ...products.find(p => p.id === i.id),
      qty: i.qty
    }))
    .filter(i => i.id);

  if (!items.length) {
    list.innerHTML = `
      <div class="empty">
        Coșul este gol. Adaugă produse din catalog.
      </div>
    `;
  } else {
    list.innerHTML = items.map(i => `
      <div class="cart-row">
        <img src="${i.img}" alt="${i.name}">

        <div>
          <h3>${i.name}</h3>
          <p class="muted">${lei.format(i.price)} / buc.</p>

          <div class="qty">
            <button onclick="changeQty(${i.id}, -1)">−</button>
            <strong>${i.qty}</strong>
            <button onclick="changeQty(${i.id}, 1)">+</button>
          </div>
        </div>

        <div class="price">${lei.format(i.price * i.qty)}</div>

        <button 
          class="btn small light remove" 
          onclick="removeFromCart(${i.id})"
        >
          Șterge
        </button>
      </div>
    `).join('');
  }

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal ? 45 : 0;
  const discount = subtotal >= 500 ? 50 : 0;
  const total = subtotal + delivery - discount;

  if ($('#subtotal')) {
    $('#subtotal').textContent = lei.format(subtotal);
  }

  if ($('#delivery')) {
    $('#delivery').textContent = lei.format(delivery);
  }

  if ($('#discount')) {
    $('#discount').textContent = '-' + lei.format(discount);
  }

  if ($('#total')) {
    $('#total').textContent = lei.format(total);
  }
}

function initNav() {
  $('.burger')?.addEventListener('click', () => {
    $('.menu')?.classList.toggle('open');
  });

  const page = location.pathname.split('/').pop() || 'index.html';

  $$(`.menu a[href="${page}"]`).forEach(a => {
    a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  updateCartCount();
  renderFeatured();
  renderCatalog();
  renderProductPage();
  renderCart();

  $$('[data-filter]').forEach(el => {
    el.addEventListener('input', renderCatalog);
  });
});