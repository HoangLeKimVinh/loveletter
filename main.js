// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anhh và anh có những điều muốn gởi gắm đến tình iu của anhh❤️. Cảm ơn em đã xuất hiện và tô thêm màu sắc cho cuộc sống của anh. Cảm ơn em đã cho anh biết thế nào là cảm giác yêu và được yêu. Em làm cho anh luôn cảm thấy đặc biệt và hoàn hảo. Yeah anh thật may mắn khi gặp được em và may mắn hơn khi là người yêu của em. Mong rằng sự may mắn này hãy diễn ra thật lâu. Anh yêu em ❤️.";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 40 

// Hàm để chèn chữ "Anh yêu em" xuống dòng
function insertLineBreak() {
    var boxLetter = document.querySelector(".letterContent");
    boxLetter.insertAdjacentHTML("beforeend", "<br><br>Gửi Lam Nhii xinh iu của Bii💕");
}

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val
            if (index === letterContentSplited.length - 1) {
                insertLineBreak();
            }    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})