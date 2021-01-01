function nhap(so) {
    document.querySelector(".text").value=document.querySelector(".text").value + so;
}
const btn = document.querySelectorAll('.nums');
console.log(btn)
    for (let index = 0; index < btn.length; index++) {
        btn[index].addEventListener("click",function() {
            nhap(btn[index].value)
        })
        
    }
const btnxoa = document.querySelector(".xoa")
btnxoa.addEventListener("click",function() {
    let a = document.querySelector(".text").value
    document.querySelector(".text").value = a.substring(0,a.length-1)
})
const btn_clear = document.querySelector('.clear')
btn_clear.addEventListener("click",function() {
    document.querySelector(".text").value = ""
})
const btn_kq = document.querySelector('.result')
btn_kq.addEventListener("click",function() {
    let a = document.querySelector(".text").value
    if(a!= ""){
    try {
        var kq = eval(a)
        document.querySelector(".text").value = kq
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.querySelector(".text").value = "NaN"
        }
    }
    }
    else{
        document.querySelector(".text").value = ""
    }
})
