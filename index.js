// listeyi şimdilik böyle tanımladım fakat bir kelimeler.txt dosyası da
// oluşturdum ordan okutma işlemi daha iyi olur ona bakacağım

let kelimeler = ["RADYO", "SEHPA", "DOLAP", "KALEM", "KAVUN", "KÖPEK", "MERAK", "GAZAP", "ROMAN", "CEVİZ"]
var kelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
let tahminler = []

// html kodunda yapılan kelime girişini yakalıyor


let sayac = 0;

const guessInput = document.querySelector('.guess-control');

// butona tıklanınca çalışacak fonksiyon

function click_me() {
    // boşluğa girilen string değerini büyük harflere dönüştürüp
    // kelimeler listesinin içinde var mı diye sorguluyor
    // eğer varsa direkt oyunu bitirecek yoksa hangi harfler 
    // yerler vb uyuşuyor diye bir geri dönüş yapacak.

    let inputValue = guessInput.value.toUpperCase();

    if ((/\d/.test(inputValue))) {
        alert("Kutucukta sayı olmamalı.");
        return 0;
    }

    tahminler.push(inputValue)
    if (sayac < 6) {
        if (inputValue == kelime) {
            console.log("doğru tahmin");
            console.log(tahminler)
            const cellStyle = document.querySelectorAll('.cell');
            cellStyle[i + (sayac*5)].style.backgroundColor = 'green';
            sayac = 5;
        } 
        else {
            for (var i = 0; i < inputValue.length; i++) {
                var letter = inputValue[i];
                if (kelime.includes(letter)) {
                    var index = kelime.indexOf(letter);
                    if (index == i) {
                        console.log(letter, " harfi kelime içinde var ve yeri doğru. Kelime: ", kelime);
                        const cellStyle = document.querySelectorAll('.cell');
                        cellStyle[i + (sayac*5)].style.backgroundColor = 'green';
                        
                    } else {
                        console.log(letter, " harfi kelime içinde var ama yeri doğru değil. Kelime: ", kelime); 
                        const cellStyle = document.querySelectorAll('.cell');
                        cellStyle[i + (sayac*5)].style.backgroundColor = 'yellow';
                    }
                } else {
                    console.log(letter, " harfi kelimede yok. Kelime: ", kelime);
                    const cellStyle = document.querySelectorAll('.cell');
                    cellStyle[i + (sayac*5)].style.backgroundColor = 'gray';
                }
            }
        }
        const cells = document.querySelectorAll('.cell');
        var k = 0;
    
        for(let word of tahminler){
            var j = k+5;
            var harf = 0;

            for(i = k; i<j; i++){
                cells[i].textContent = word[harf];
                harf++;
            }

            k += 5;
        }
        sayac++;
    }
  }

document.querySelector('#check-button').addEventListener('click', click_me);


function addButtonClickHandler() {
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
  
  addButtonClickHandler();
  
  