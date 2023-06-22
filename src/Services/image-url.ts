
const getCroppedImageUrl = (url:string) => {
    //set target to the spot in url you want to specify
    const target = 'media/';
    //find the index of the word 'media' (target) in the url
    const index = url.indexOf(target) + target.length; 
    //insert the 'crop' parameter after the target index
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageUrl;