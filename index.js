// listeyi şimdilik böyle tanımladım fakat bir kelimeler.txt dosyası da
// oluşturdum ordan okutma işlemi daha iyi olur ona bakacağım

let kelimeler = ["RADYO", "SEHPA", "DOLAP", "KALEM", "KAVUN", "KÖPEK", "MERAK", "GAZAP", "ROMAN", "CEVİZ"] 
var DogruKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
let tahminler = []

let sayac = 0;

const guessInput = document.querySelector('.guess-control');

function ClickMe() {  // butona tıklanınca çalışacak fonksiyon
    // boşluğa girilen string değerini büyük harflere dönüştürüp
    // kelimeler listesinin içinde var mı diye sorguluyor
    // eğer varsa direkt oyunu bitirecek yoksa hangi harfler 
    // yerler vb uyuşuyor diye bir geri dönüş yapacak.

    let inputValue = guessInput.value.toUpperCase();

    tahminler.push(inputValue)
    if (sayac < 6) {

        if ((/\d/.test(inputValue))) { // TAHMİN SAYI İÇERİYORSA
          guessInput.value = "";
          alert("Kutucukta sayı olmamalı.");
          return 0;
        }

        if (inputValue.length != 5) { // TAHMİN 5 HARFLİ DEĞİLSE
          guessInput.value = "";
          alert("Girdiğiniz kelime 5 harfli olmalı.");
          return 0;
        }

        if (inputValue == DogruKelime) { // TAHMİN DOĞRUYSA
          const cellStyle = document.querySelectorAll('.cell');
          cellStyle[i + (sayac*5)].style.backgroundColor = 'green';
          sayac = 5;
        } 

        else {
            for (var i = 0; i < inputValue.length; i++) {
                var letter = inputValue[i];
                if (DogruKelime.includes(letter)) { // DOĞRU KELİME : GAZAP TAHMİN : KALFA 
                    var index = DogruKelime.indexOf(letter);
                    if (index == i) {
                        console.log(letter, " harfi kelime içinde var ve yeri doğru. Kelime: ", DogruKelime);
                        const cellStyle = document.querySelectorAll('.cell');
                        cellStyle[i + (sayac*5)].style.backgroundColor = 'green';
                        
                    } else {
                        console.log(letter, " harfi kelime içinde var ama yeri doğru değil. Kelime: ", DogruKelime); 
                        const cellStyle = document.querySelectorAll('.cell');
                        cellStyle[i + (sayac*5)].style.backgroundColor = 'yellow';
                    }
                } else {
                    console.log(letter, " harfi kelimede yok. Kelime: ", DogruKelime);
                    const cellStyle = document.querySelectorAll('.cell');
                    cellStyle[i + (sayac*5)].style.backgroundColor = 'gray';
                }
            }
        }
        const cells = document.querySelectorAll('.cell');
        
        let tahminlerString = tahminler.join("");
        
        var i = 0;
        for(let tahminHarf of tahminlerString){
          cells[i].textContent = tahminHarf;
          i++;
        }

        // var k = 0;
        // for(let word of tahminler){ // AHMET, FATMA, DEFNE
        //     var j = k+5;
        //     var harf = 0;

        //     for(i = k; i<j; i++){
        //         cells[i].textContent = word[harf];
        //         harf++;
        //     }
        //     k += 5;
        // }
        sayac++;
    }
    else{ // toplam deneme hakları biterse alert veriyor.
      guessInput.value = "";
      alert("Tüm deneme haklarınız bitti. ");
    }
}

document.querySelector('#check-button').addEventListener('click', ClickMe);


function KeyboardActivies() {
    const buttons = document.querySelectorAll(".keyboard-row button");
    const input = document.querySelector(".guess-control");
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.getAttribute("data-key");
        if (key === "enter") {
          click_me();
        } else if (key === "del") {
          // Burada inputtan son karakteri silmek için bir kod yazabilirsiniz.
          input.value = input.value.slice(0, -1);
        } else {
          // Butona basıldığında inputa key değerini ekleme
          input.value += key;
        }
      });
    });
  }
  
  KeyboardActivies();
  
  