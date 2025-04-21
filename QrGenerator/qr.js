// You can Create a qr Image Generator  and download it. 
// I haven't shown css and html becuase you can also create it and easy to create 

// storing the varaibles at first from the html 

const input = document.getElementById("input");
const imgGroupEl = document.querySelectorAll("img-group");
const imgEl = document.querySelector(".img");
const submitEl = document.querySelector(".qr-btn");
const downloadEl = document.querySelector(".download-image");

submitEl.addEventListener("click",()=>{
    if(input.value.length > 0) {
        const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%22vim%22"; 
        imgEl.src = qrUrl;

        imgEl.onload = () => {
            fetch(qrUrl)
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                downloadEl.href = url;
                downloadEl.download = "qr-vim.png";
            })
        }
    } else {
        alert("Please Enter Text ")
    }
})