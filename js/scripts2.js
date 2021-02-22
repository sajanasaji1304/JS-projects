function getname(){
    let name=document.getElementById("username").value
    alert(`hey ${name}`)
    document.getElementById("content").value="my name  is "+name
    
    document.getElementById("p1").innerText=name

}