console.log('Test')


const nxtBtn = [...document.querySelectorAll('.games__slider--nxt-btn')];
const prevBtn = [...document.querySelectorAll('.games__slider--prev-btn')];
const slideShow = [...document.querySelectorAll('.games__slider')];
const games = document.querySelector('.background-image')

slideShow.forEach((item,i)=>{
    let slideShowDimensions = item.getBoundingClientRect();
    let slideShowWidth = slideShowDimensions.width;
    let count=1;

    nxtBtn[i].addEventListener('click',() => {
   
        item.scrollLeft += slideShowWidth;  
        if(count<3){
        count++;
        // console.log(count);
         }
         games.style. backgroundImage=`url("assets/images/${count}.jpeg")`;
     
    })
    prevBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= slideShowWidth; 
        if(count>1){
            count--;
            // console.log(count);

             }
        games.style. backgroundImage=`url("assets/images/${count}.jpeg")`;
        // console.log(slideShowWidth);

    })

})

window.onresize = (event) => {
  
    
  };



  const tvImage = async () => {
    try{
     const res = await axios.get('https://api.tvmaze.com/search/shows?q=vampire')
     const tvImage = res.data;
    return makeImage(tvImage);
    
     }  catch(e){
     return "NO IMAGES AVAILABLE SORRY!!!"
   }
 } 



const makeImage=(images) => {
    for(let result of images){
    console.log(result.show.image.medium)
    const img = document.createElement('img')
    img.src=result.show.image.original;

    const slider = document.querySelector(".games__slider");
    img.classList.add('col-12')
    
    slider.append(img);
   
    // const slider = document.querySelector(".tvImageTest");
    // slider.style.backgroundImage=`url(${img})`;
 

}
    
}
document.addEventListener('DOMContentLoaded', ()=> {tvImage()});


    






// const form = document.querySelector('#searchForm')
// form.addEventListener('submit',async function (e){
// e.preventDefault();
// const searchTerm = form.elements.query.value


// images(searchTerm)

// })

// const images = async (searchTerm) =>{    
//     const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
//     makeImage(res.data);
//     form.elements.query.value=''
// }
