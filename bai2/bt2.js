function KTra(){
    var s1 =document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var year = document.getElementById('year').value
    if((s1 < 0 || s1 > 10) || (s2 < 0 || s2 > 10)){
        alert('Nhập sai vui lòng nhập lại !')
        return;
    }
    else{
        var heso = Number(year) + 1
        var dtb = (Number(s1) + Number(s2) * heso) / (heso+1)
        dtb = dtb.toFixed(1)
        document.getElementById('summary').innerHTML = dtb
        if(dtb > 9){
            document.getElementById('dat').innerHTML= 'Hoc sinh xuat xac'
        }else if(dtb >= 8){
            document.getElementById('dat').innerHTML= 'Hoc sinh goi'
        }else if(dtb >=6){
            document.getElementById('dat').innerHTML= 'Hoc sinh kha'
        }else if(dtb >=5){
            document.getElementById('dat').innerHTML= 'Hoc sinh trung binh'
        }else{
            document.getElementById('dat').innerHTML= 'Hoc sinh yeu'
        }
    }
        
    }
    function Trove() {
        document.getElementById("point").reset();
        document.getElementById('dat').innerHTML = '';
        document.getElementById('summary').innerHTML = '';
     }