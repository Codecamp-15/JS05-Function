function login(){
    let username = prompt(`Username`)
    let password = prompt(`password`)
    if(username==`admin`&&password==`P@ssw0rd`){
        alert(`login สำเร็จ`)
    }else{
        alert(`ไม่สำเร็จ`)
    }
}