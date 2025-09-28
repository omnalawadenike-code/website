export function initModals(carData){
  const carsContainer = document.getElementById("cars-container");
  carData.forEach(car=>{
    const card = document.createElement("div");
    card.className = "car-card fade-up";
    card.dataset.name = car.name;
    card.dataset.desc = car.desc;
    card.dataset.img = car.img;
    card.innerHTML = `<img src="${car.img}" alt="${car.name}">
                      <div class="car-card-content"><h3>${car.name}</h3><p>${car.desc}</p></div>`;
    carsContainer.appendChild(card);
  });

  const modal = document.getElementById('carModal');
  const modalImg = document.getElementById('modalImg');
  const modalName = document.getElementById('modalName');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.car-card').forEach(card=>{
    card.addEventListener('click',()=>{
      modal.classList.add('active');
      modalImg.src = card.dataset.img;
      modalName.textContent = card.dataset.name;
      modalDesc.textContent = card.dataset.desc;
    });
  });

  closeBtn.addEventListener('click',()=> modal.classList.remove('active'));
  modal.addEventListener('click', e=> {if(e.target===modal) modal.classList.remove('active')});
}
