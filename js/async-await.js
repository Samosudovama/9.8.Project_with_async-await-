const btnStart = document.querySelector(".btn-start");
const wrap = document.querySelector(".wrap");

btnStart.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random/20");
        if(!res.ok) {
            console.log("Такого поста нет.", res.status);
            throw new Error("Такого поста нет.");
        }
        const data = await res.json();        

        if(data){
            data.message.forEach(img => {
                let elem = `<img src="${img}" />`;
                wrap.innerHTML += elem;            
            })
        }
    } catch (err) { 
        console.log("Errr >>", err.message);
    }
    
});