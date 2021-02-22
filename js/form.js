let arr=[]
function add(){
    let a=document.getElementById("p11").value
    let b=document.getElementById("pnamm").value
    let c=document.getElementById("pric1").value
    let t= new Product(a,b,c)
    JSON.stringify(t)
    // localStorage.setItem("name1",JSON.stringify(t))
    
    if(localStorage.length==0){
        localStorage.setItem("name1",JSON.stringify(t))
    }else{
        let l=localStorage.length
        let key=l+1
        localStorage.setItem(key.toString(),JSON.stringify(t))
    }

    for(let i=1;i<=localStorage.length;i++){
        console.log(localStorage.getItem(i.toString()))
    }
    let s=localStorage.getItem("name1")
    console.log(typeof s,s)
    let o=JSON.parse(s)
    console.log(o,typeof o)
    console.log(t)
    arr.push(t)
    console.log(arr)
}
function Product(pid,pname,price){
    
    this.Pid=pid
    this.Pname=pname
    this.Price=price
    }



function view(){

   for(product of arr){
       let para=document.createElement("p")
       para.innerHTML=product.Pid+"<br>"+product.Pname+"<br>"+product.Price
    document.getElementById("p2").appendChild(para)
   }
}