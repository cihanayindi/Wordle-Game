// listeyi şimdilik böyle tanımladım fakat bir kelimeler.txt dosyası da
// oluşturdum ordan okutma işlemi daha iyi olur ona bakacağım

let kelimeler = ["RADYO", "SEHPA", "DOLAP", "KALEM", "KAVUN", "KÖPEK", "MERAK", "GAZAP", "ROMAN", "CEVİZ"]

// html kodunda yapılan kelime girişini yakalıyor

const guessInput = document.querySelector('.guess-control');

// butona tıklanınca çalışacak fonksiyon
document.querySelector('#check-button').addEventListener('click', function() {
    
    // boşluğa girilen string değerini büyük harflere dönüştürüp
    // kelimeler listesinin içinde var mı diye sorguluyor
    // eğer varsa direkt oyunu bitirecek yoksa hangi harfler 
    // yerler vb uyuşuyor diye bir geri dönüş yapacak.

    if (kelimeler.includes(guessInput.value.toUpperCase())) {
        console.log("evet içeride")
    } else {
        console.log("hayır içerde değil")
    }
});
