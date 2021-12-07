function calcular(){
    let s = document.getElementById('sel')
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    
    if(valor1.value.length == 0 || valor2.value.length == 0){
        window.alert('Preencha todos os campos!')
        res.innerHTML = ''
   }else {
       let v1 = Number(valor1.value)
       let v2 = Number(valor2.value)
    
       if(s.value == "+"){
           res.innerHTML = `${v1 + v2}`
        }
       else if(s.value == "-"){
           res.innerHTML = `${v1 - v2}`
        }
        else if(s.value == "*"){
            res.innerHTML = `${v1 * v2}`
        }
        else{
            res.innerHTML = `${v1 / v2}`
        }
    
        
    }
}
