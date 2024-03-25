const api_url = 'https://fakestoreapi.com/products';

async function Fetch_data(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        create_card(data);
    } catch (error) {
        console.log(error);
    }
}

function create_card(data) {
    const container = document.querySelector('.big-card');
    let fragment = document.createDocumentFragment();

    data.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        card.innerHTML = `
            <img src="${post.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        `;
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

Fetch_data(api_url);
