const getImagen = async()=>{
    try {
        const apiKey='YtvvAE8NGSd66nvEIWSqIGQcP5ipbXzr';
        const  resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data:{images:{original:{url}}}} = await resp.json();
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img);

    } catch (error) {
        console.log(error);
    }
}

getImagen();