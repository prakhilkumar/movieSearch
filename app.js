
let input=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.querySelector('#list');

input.addEventListener('keydown',function(e){
    console.log(e);
    
    if(e.which===13){
    let searchText=input.value;
    console.log(searchText);
    let data=fetchdata(searchText);
    input.value='';
    }

})

btn.addEventListener('click',function(){
    let searchText=input.value;
    let data=fetchdata(searchText);
    input.value='';
})
function fetchdata(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(res){
        //  console.log(res.data);
        manipulateDom(res.data);
    })

}
function  manipulateDom(datas){
    while(list.lastChild){
        list.lastChild.remove();
    }
      for(let data of datas){
        let figure=document.createElement('figure');
        if(data.show.image){
            figure.innerHTML=`
            <img src=${data.show.image.original}>
            <h2>${data.show.name}</h2>
            
            `
            // <p>${data.show.summary}</p>
            list.appendChild(figure);
        }
      }
}