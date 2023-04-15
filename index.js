// listeyi şimdilik böyle tanımladım fakat bir kelimeler.txt dosyası da
// oluşturdum ordan okutma işlemi daha iyi olur ona bakacağım

let kelimeler = ["RADYO", "SEHPA", "DOLAP", "KALEM", "KAVUN", "KÖPEK", "MERAK", "GAZAP", "ROMAN", "CEVİZ"]
var kelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
// html kodunda yapılan kelime girişini yakalıyor

let sayac = 1;

const guessInput = document.querySelector('.guess-control');

// butona tıklanınca çalışacak fonksiyon
document.querySelector('#check-button').addEventListener('click', function() {
    // boşluğa girilen string değerini büyük harflere dönüştürüp
    // kelimeler listesinin içinde var mı diye sorguluyor
    // eğer varsa direkt oyunu bitirecek yoksa hangi harfler 
    // yerler vb uyuşuyor diye bir geri dönüş yapacak.
    if (sayac < 7) {
        if (inputValue == kelime) {
            console.log("doğru tahmin");
        } else {
            for (var i = 0; i < inputValue.length; i++) {
                var letter = inputValue[i];
                if (kelime.includes(letter)) {
                    var index = kelime.indexOf(letter);
                    if (index == i) {
                        console.log(letter, " harfi kelime içinde var ve yeri doğru. Kelime: ", kelime);
                    } else {
                        console.log(letter, " harfi kelime içinde var ama yeri doğru değil. Kelime: ", kelime); 
                    }
                } else {
                    console.log(letter, " harfi kelimede yok. Kelime: ", kelime);
                }
            }
        }
        sayac++;
    }
});
