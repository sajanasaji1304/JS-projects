let arr1=[]
function see(){
    let a=document.getElementById("name1").value
    let n=document.getElementById("id1").value
    let d=document.getElementById("dept1").value
    let f=document.getElementsByName("gender"[0]).value
    let newarr=new Employee(a,n,d,f)
    // JSON.stringify(newarr)
    console.log(newarr)
    arr1.push(newarr)
    console.log(arr1)
}
    function view(){
        for(emp of arr1){

        
            let Li=document.createElement("p")
            Li.innerHTML=emp.Ename+"<br>"+emp.Eid+"<br>"+emp.Dept+"<br"+emp.Gen
            document.getElementById("pp").appendChild(Li)
            }
    }
    


function Employee(ename,eid,dept,gen){
    this.Ename=ename
    this.Eid=eid
    this.Dept=dept
    this.Gen=gen

}