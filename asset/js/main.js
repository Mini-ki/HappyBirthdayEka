let formNama = document.getElementById('formNama')
formNama.classList.add('show')

function displayText(){
    const text = ['TAPII KAMUU MAUU TAUU GAA SIAPAA ORANGNYAA??','HMMMMM....','COBAA LIATT TANGGAL DI HP KAMUU SEKARANGG','UDAHH??','ORANGG YANGG KUU SAYANGG LAHIRR DITANGGAL INII', 'DANN KAMUU TAUU SIAPAA??','IYAAAA ITUU EKAA SAYANGGKUU CINTAAKUU']
    document.getElementById('displayText').style.display = "flex"
    
    let displayText = document.getElementById('displayText')
    displayText.classList.add('show')
    for(let i = 0; i < text.length; i++){
        setTimeout(() => {
            displayText.innerHTML = text[i];
            if (i === text.length - 1) {
                setTimeout(() => {
                    displayText.style.display = "none";
                    setTimeout(() => {
                        document.getElementById('wrappermasonry').style.display = 'flex';
                        document.getElementById('wrappermasonry').classList.add('show');
                    }, 1000);
                }, 3000);
            }
        }, i*3000);
    }
}

function showmessage(message){
    document.getElementById('cobalagi').style.display = "none"
    document.getElementById('kalimatKedua').style.display = "flex"

    let kalimatKedua = document.getElementById('kalimatKedua')
    kalimatKedua.classList.add('show')
    kalimatKedua.innerHTML = message;
    setTimeout(() => {
        document.getElementById('kalimatKedua').style.display = "none"
        setTimeout(() => {
            displayText();
        }, 3000);
    }, 3000);
    
}

let attempt = 0
document.getElementById('formNama').addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        event.preventDefault()
        attempt++
        alert('SALAHH!!!')
    }
    
    if(attempt === 3){
        alert("HMMMMM")
        alert("MASAAA GITUU AJAA GAA TAUU SII")
    }

    if(attempt === 5){
        alert("DAHH LAHH CAPEKK!!!")
        document.getElementById('formNama').style.display = "none";
        setTimeout(() => {
            document.getElementById('kalimatPertama').style.display = "flex"
            let kalimatPertama = document.getElementById('kalimatPertama')
            kalimatPertama.classList.add('show')
            setTimeout(() => {
                document.getElementById('kalimatPertama').style.display = "none"
                document.getElementById('cobalagi').style.display = "flex"
                document.getElementById('cobalagi').classList.add('show')
            }, 3000);
        }, 3000);
        
    }
});


