// script.js
document.getElementById('getRoute').addEventListener('click', async () => {
    const prefecture = document.getElementById('prefecture').value;
    
    const response = await fetch(`/.netlify/functions/getTouristSpots?prefecture=${prefecture}`);
    const data = await response.json();
    
    // 観光地のリストを表示
    const spotsContainer = document.getElementById('spots');
    spotsContainer.innerHTML = '';  // 既存のリストをクリア
    data.spots.forEach(spot => {
        spotsContainer.innerHTML += `<div><h3>${spot.name}</h3><p>${spot.description}</p></div>`;
    });

    // 経路を表示（仮にリストとして）
    const routeContainer = document.getElementById('route');
    routeContainer.innerHTML = '<h3>おすすめルート</h3>';
    data.route.forEach((spot, index) => {
        routeContainer.innerHTML += `<p>${index + 1}. ${spot.name}</p>`;
    });
});
