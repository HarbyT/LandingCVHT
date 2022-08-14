const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCwWxFt2ZvFrE3LgvY7VIEIQ&part=snippet%2Cid&order=date&maxResults=15'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87b3244f79msh0fcd48a8cd5d7cfp1f952djsn91f2ec709f1d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// código como viene de rapid API, uso de fetch
// fetch('', options)
//	.then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));


// Función asincrónica que hace uso de urlApi como datos iterables en json
async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `)}

        `;
        content.innerHTML = view;
    } catch (error) { 
        console.log(error);
    }
} )();