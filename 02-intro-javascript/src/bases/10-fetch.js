const apiKey='YtvvAE8NGSd66nvEIWSqIGQcP5ipbXzr';
//https://api.giphy.com/v1/gifs/random?api_key=YtvvAE8NGSd66nvEIWSqIGQcP5ipbXzr

const  peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
peticion.then(resp=>resp.json())
        .then(({data:{images:{original:{url}}}})=>{
            const img=document.createElement('img');
            img.src=url;
            document.body.append(img);
        })
        .catch(console.error)