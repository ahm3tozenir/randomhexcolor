// hex oluşturacak array elemanlarının tanımı
let arr = ['A','B','C','D','E','F',1,2,3,4,5,6];
// boş array oluşturuldu push() yapıp içine atabilmek için
let hex = [];
// hex kodların 3 ve 6 arasında rastgele biçimde gelmesini sağlayan array oluşturuldu
let size = [3,4,5,6];

// 3 ve 6 arasında hex kodu oluşmasını sağlayan fonksiyon
function sizeSet(){

    let indexSize = Math.round(Math.random()*(size.length-1)); //burdan gelen sayı
    let sizeVal = size[indexSize];  //3,4,5 veya 6 dan birinin seçilmesini sağlıyor
    // console.log(sizeVal)
    return sizeVal // fonksiyonda bu gelen değerlerden birini döndürüyor

}

// size setten gelen değer kadar 'arr' isimli arraydan eleman seçen fonksiyon
function hexCode(){

    for(let i=0; i<sizeSet(); i++){
        let random = arr[Math.round(Math.random()*(arr.length-1))]; // arr dizisindeki rastgele elemanların seçimi
        hex.push(random); // push() ile boş olan hex dizisine eleman eklendi
    }
    return hex // bu fonksiyon yeni oluşan hex arrayını döndürdü
}

alert(`#${hexCode().join('')}`); //.join('') ile , den kurtalırdı ve ` kullanılıp alertin başına # yerleşmesi sağlanıldı

