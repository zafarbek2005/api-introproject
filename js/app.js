const api_url = 'https://fakestoreapi.com/products';
const loading = document.querySelector('.load');

async function fetchData(api) {
  try {
      const response = await fetch(api);
      const data = await response.json();
      createCards(data);
  } catch (error) {
      console.log(error);
  }
  finally {
      loading.style.display = "none";
  }
}

function createCards(data) {
    const container = document.querySelector('.big-card');
    let fragment = document.createDocumentFragment();

    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="label">НОВИНКА</div>
            <img src="${product.image}" alt="Product Image">
            <div class="title">${product.title}</div>
            <div class="price">${product.price} сум</div>
            <div class="installment">${product.installment} сум x ${product.installmentPeriod} мес</div>
            <button style="cursor:pointer !important">Купить сейчас</button>
        `;
        fragment.appendChild(card);
    });
    container.innerHTML = '';
    container.appendChild(fragment);
}

fetchData(api_url);
