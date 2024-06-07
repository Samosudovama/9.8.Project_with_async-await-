const btnStart = document.querySelector(".btn-start");
const wrap = document.querySelector(".wrap");

btnStart.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random/20")
    .then((res) => res.json())
    .then((res) => {
        res.message.forEach(img => {
            let elem = `<img src="${img}" />`;
            wrap.innerHTML += elem;            
        });        
    })
    .catch(err => console.log("Err>>", err.message)) 
});