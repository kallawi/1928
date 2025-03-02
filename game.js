
sorulansoru = {}
var suankiTur = 1;
let takimsecimi = 0;
    mutabik = !1,
    verilencevap = "";
    savasilanbolge = null
let sorusayisi = 1;
var kalanSure = 45;
let surecalisiyormu = !1;
var saldiriturindex = 0;
let bitti = !1;
var saldirituru = !1;
let dogrumu = !1;
var textpos = 0;
function galip(){
    close(".oyun")
    open(".galip")
    $(".galiptakim")[0].innerHTML = suankitakim.ad
    return
  }
let soz = 0,
    suankitakim, fullekran = !1;
    var soruSayaci = setInterval(function(){
        if(surecalisiyormu){
        if(kalanSure <= 0){
            open(".surebitti")
        } else {
          document.getElementById("sayac").innerHTML = kalanSure
        }
        kalanSure -= 1;
        }
      }, 1000);
      $(".tekraroyna").click(() => {
        window.location.href = "index.html"
    })
var nasiloynanirmis = "1928, sorulan sorulara do\u011Fru cevap vererek se\xe7ti\u011Finiz renkte olan bar\u0131 fulleyip kazanmaya \xe7al\u0131\u015Ft\u0131\u011F\u0131n\u0131z bir oyundur.Puanlara g\xf6re \xfcstteki bar tak\u0131mlara do\u011Fru ilerler.Bar\u0131 dolduran kazan\u0131r! \xdcstelik oyunda jokerler de bulunmakta.Jokerleri kullanarak kendinize veya rakibinize kar\u015F\u0131 kullanabilirsiniz.",
    elem = document.documentElement,
    sesefekti = document.getElementById("sesefekti"),
    devmode = !0;
    function cal(dosyaIsmi,volume = 1){
  
        sesefekti.childNodes[1].src = "./ses/efektler/" + dosyaIsmi
        sesefekti.load()
        sesefekti.volume = volume
        sesefekti.play()
      
      }
function hexToRgb(b) {
    var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);
    return a ? {
        r: parseInt(a[1], 16),
        g: parseInt(a[2], 16),
        b: parseInt(a[3], 16)
    } : null
}
var yeniSoruyaGec = () => {
    sira = 0 == sira ? 1 : 0;
    suankiTur += 1;
    surecalisiyormu = true;
    kalanSure = 45;
    sorulansoru = sorular[Math.floor(Math.random() * sorular.length)]
    var cevaplar = sorulansoru.yanliscevaplar
    cevaplar.push(sorulansoru.cevap)
    var karistirilmisCevaplar = karistir(cevaplar)  
    $(".cevaplar").each(function( index ) {
        $(".cevaplar")[index].style.backgroundColor = "rgba(255, 255, 255, 0.14)"
        $(".cevaplar")[index].innerHTML = karistirilmisCevaplar[index]
        if($(".cevaplar")[index].innerHTML == sorulansoru.cevap){
        $(".cevaplar")[index].style.backgroundColor = "red"
        }
        
    })
    
    ekraniGuncelle();
  }
$(".yenisoru").click(() => {
    yeniSoruyaGec()
    close(".dogru")
    close(".yanlis")
    close(".surebitti")
}), $(".sorudegistir").click(() => {
    suankitakim.para >= 40 && (sorulansoru = sorular[Math.floor(Math.random() * sorular.length)], $(".soruyazi").html(sorulansoru.soru), 3 == sorulansoru.yanliscevaplar.length && (sorulansoru.yanliscevaplar.push(sorulansoru.cevap), shuffle(sorulansoru.yanliscevaplar)), $(".cevaplar")[0].innerHTML = sorulansoru.yanliscevaplar[0], $(".cevaplar")[1].innerHTML = sorulansoru.yanliscevaplar[1], $(".cevaplar")[2].innerHTML = sorulansoru.yanliscevaplar[2], $(".cevaplar")[3].innerHTML = sorulansoru.yanliscevaplar[3], suankitakim.para -= 40, $(".takim1para").html(takim1.para), $(".takim2para").html(takim2.para)), suankitakim.para < 40 && $(".sorudegistir").css("opacity", .3), suankitakim.para < 30 && $(".15sn").css("opacity", .3), suankitakim.para < 20 && $(".eksi10").css("opacity", .3)
}), $(".15sn").click(() => {
    suankitakim.para >= 30 && (suankitakim.para -= 30, $(".takim1para").html(takim1.para), $(".takim2para").html(takim2.para), kalanSure += 15), suankitakim.para < 40 && $(".sorudegistir").css("opacity", .3), suankitakim.para < 30 && $(".15sn").css("opacity", .3), suankitakim.para < 20 && $(".eksi10").css("opacity", .3)
}), $(".eksi10").click(() => {
    suankitakim.para >= 20 && (suankitakim.para -= 20, suankitakim == takim1 ? takim2.para -= 10 : takim1.para -= 10, $(".takim1para").html(takim1.para), $(".takim2para").html(takim2.para)), suankitakim.para < 40 && $(".sorudegistir").css("opacity", .3), suankitakim.para < 30 && $(".15sn").css("opacity", .3), suankitakim.para < 20 && $(".eksi10").css("opacity", .3)
});
let bolgeler = [{
    id: "1",
    isim: "Marmara",
    sahip: null
}, {
    id: "2",
    isim: "Ege",
    sahip: null
}, {
    id: "3",
    isim: "Ic Anadolu",
    sahip: null
}, {
    id: "4",
    isim: "Karadeniz",
    sahip: null
}, {
    id: "5",
    isim: "KKTC",
    sahip: null
}, {
    id: "6",
    isim: "Akdeniz",
    sahip: null
}, {
    id: "7",
    isim: "Do\u011Fu Anadolu",
    sahip: null
}, {
    id: "8",
    isim: "G\xfcney D. Anadolu",
    sahip: null
}];

function play_(a) {
    sesefekti.childNodes[1].src = a, sesefekti.load(), sesefekti.volume = 1, sesefekti.play()
}

function shuffle(a) {
    let b = a.length,
        c;
    for (; 0 != b;) c = Math.floor(Math.random() * b), b--, [a[b], a[c]] = [a[c], a[b]];
    return a
}
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  }
});
function open(id){
  $(id).css('display','flex');
}
function close(id){
  $(id).hide();
}
$(".baslat").click(() => {
  close(".baslat")
  open(".anamenu")
  open(".cenkLogo")
}), document.fullscreenEnabled = !1;
let sozler = ["Cesaret insan\u0131 zafere, karars\u0131zl\u0131k tehlikeye, korkakl\u0131k ise \xf6l\xfcme g\xf6t\xfcr\xfcr. -Yavuz Sultan Selim", "Benim kudretimin ula\u015Ft\u0131\u011F\u0131 yere onlar\u0131n hayalleri bile ula\u015Famaz! -Yavuz Sultan Selim", "Bayku\u015Ftan pervam\u0131z yok, biz \u015Fahinler s\xfcr\xfcs\xfcy\xfcz. -Fatih Sultan Mehmet", "Bir yeri elde tutmak, o yeri fethetmekten daha zordur. -Osman Gazi", "Yenilece\u011Finden korkan daima yenilir. -Y\u0131ld\u0131r\u0131m Beyaz\u0131d", "Egemenlik verilmez, al\u0131n\u0131r. - M. Kemal Atat\xfcrk", "Bir ulus sanattan ve sanat\xe7\u0131dan yoksunsa, tam bir hayata sahip olamaz. - M. Kemal Atat\xfcrk"];
setInterval(() => {
    9 == soz && (soz = 0), $(".soz").text(sozler[soz]), soz += 1
}, 1e4);
let sorular = [{
        soru: `İstanbul deyince aklıma Sait Faik gelir
    Burgaz adasında kıyıda
    Mavi g\xf6zl\xfc bir \xe7ocuk b\xfcy\xfcr d\xf6ne d\xf6ne
    Mavi g\xf6zl\xfc bir ihtiyar balık\xe7ı gencelir k\xfc\xe7\xfcl\xfcr
    Bu dizelerde aşağıdaki ses olaylarından hangisi yoktur?`,
        cevap: `\xdcnl\xfc Daralması`,
        yanliscevaplar: [`\xdcnl\xfc D\xfcşmesi`, `\xdcns\xfcz Sertleşmesi`, `\xdcns\xfcz Yumuşaması`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde bir ses olayının uygulanmamasından
    kaynaklanan bir yazım yanlışı vardır?`,
        cevap: `\xd6nemli olan hayatınızın i\xe7indeki yıllar değil, yıllarınızın
    i\xe7indeki hayatdır.`,
        yanliscevaplar: [`G\xfcl\xfcmseme iki kişi arasındaki en kısa mesafedir.`, `R\xfczg\xe2rın y\xf6n\xfcn\xfc değiştiremediğinde yelkenlerini r\xfczg\xe2ra
      g\xf6re ayarla.`, `Amcam Fars\xe7ayı \xe7ok g\xfczel konuşuyordu.`]
    }, {
        soru: `(I) Karbon atomlarından oluşan elmasın atom yapısı
    farklıdır. (II) Kayda değer bir \xf6zelliği, sıcağı en iyi ileten
    madenlerden biri olması iken diğer bir \xf6zelliği d\xfcnyadaki
    en sert cisim olmasıdır. (III) Renksiz elmasların yanısıra
    yeşil, pembe, mavi, kanarya sarısı ya da siyah elmaslar
    da vardır. (IV) Bir elmasın t\xfcm g\xfczelliğinin ortaya \xe7ıkması
    i\xe7in kesilip cilalanması gerekir. (V) Elmasın adı Yunanca
    “yenilmez ve yola getirilmez” anlamına gelen “adamas”
    s\xf6zc\xfcğ\xfcnden t\xfcremiştir.
    Numaralanmış c\xfcmlelerin hangisinde yazım yanlışı
    yapılmıştır?`,
        cevap: "III.",
        yanliscevaplar: ["I.", "II.", "IV."]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde kısaltmaların yazımı
    ile ilgili yanlışlık vardır?`,
        cevap: `Hakkında daha geniş bir bilgi i\xe7in bkz. Edebiyatımızda
    İsimler S\xf6zl\xfcğ\xfc.`,
        yanliscevaplar: [`Buluntular tahminen M\xd6 5. y\xfczyıldan kalma.`, `B\xf6lgede bir\xe7ok geniş yapraklı ağa\xe7 t\xfcr\xfc vardır. (\xd6r.
        kayın ve kestane).`, `TV’de harika bir belgesel izledim.`]
    }, {
        soru: `Hamza, dokuz on yaşlarındaydı. \xc7ok iyi bir \xe7ocuktu. Yazın,
    her k\xf6y \xe7ocuğunun yaptığı gibi, yalınayak gezerdi. O
    yaştaki t\xfcm k\xf6yl\xfc oğlanları gibi kurdelesiz f\xf6tr şapka takardı.
    Kısalmış pantolonunun pa\xe7aları, ayak bileklerinden
    bir karış yukarıdaydı. Alacalı mintanının esmer y\xfcz\xfcnde
    ışıl ışıl, kara g\xf6zleri vardı. Hasan’la Fadiş’i g\xf6r\xfcnce dişlerini
    g\xf6stererek g\xfcld\xfc.
    Bu par\xe7adaki yazım yanlışı aşağıdakilerden hangisi
    ile d\xfczeltilebilir?`,
        cevap: `“yalınayak” s\xf6zc\xfcğ\xfc “yalın” ve “ayak” şeklinde ayrılarak`,
        yanliscevaplar: [`“kurdele” s\xf6zc\xfcğ\xfc “kurdela” şeklinde yazılarak`, `“yukarıdaydı” s\xf6zc\xfcğ\xfcndeki “ı” sesi d\xfcş\xfcr\xfclerek`, `“Hasan’la” yerine “Hasan ile” ifadesi kullanılarak`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde yazım yanlışı yapılmıştır?`,
        cevap: `Karab\xfck’te Zonguldak gibi Batı Karadeniz’dedir.`,
        yanliscevaplar: [`O da ben de seksen \xfc\xe7l\xfcyd\xfck.`, `Hayatta en hakiki m\xfcrşit ilimdir.`, `İkisi de aynı iş de ben birinciyi tercih ederim.`]
    }, {
        soru: `Birleşme sırasında hi\xe7biri veya ikinci kelimesi anlam değişikliğine
    uğramayan birleşik kelimeler ayrı yazılır.
    Buna g\xf6re aşağıdaki c\xfcmlelerin hangisinde birleşik
    s\xf6zc\xfcklerin yazımı ile ilgili bir yanlışlık vardır?`,
        cevap: `Ahırın her yanında atsinekleri u\xe7uşuyor.`,
        yanliscevaplar: [`\xdczerinde yavruağzı bir kazak vardı.`, `Ne zamandır ke\xe7iboynuzu yemedim.`, `Akşamsefaları, adı \xfczerinde, gece a\xe7ar.`]
    }, {
        soru: `\xc7evremize bakıyoruz. Nereden \xe7ıktı ve yayıldı bu arap\xe7a
    k\xf6kenli “aynen” s\xf6z\xfc? İnsanların duyduğu hemen her
    c\xfcmleyi bir zarf olan “aynen” kelimesiyle tasdik etmek
    kolaylarına mı geliyor? Konuşmuyor, katıldığı durumu
    kendiside bir c\xfcmleyle ifade edemiyor, “aynen” ile yetini
    veriyor. Okul \xe7ağında ki \xf6ğrencilerde de bu s\xf6z\xfc \xe7ok
    duyuyorum. Artık kulakları rahatsız eden hastalık derecesindeki
    bu “aynen” s\xf6z\xfc sokaklarda, şehir otob\xfcslerinde
    y\xfcksek sesle konuşanların dilinde.
    Bu par\xe7ada aşağıdakilerin hangisinin yazımı ile ilgili
    yanlışlık yapılmamıştır?`,
        cevap: "Soru ekinin",
        yanliscevaplar: [`B\xfcy\xfck Harflerin`, `Ki Bağlacının`, `Birleşik Fiillerin`]
    }, {
        soru: `I. Haymana Platomuz İ\xe7 Anadolu’dadır.
    II. Atmosfer d\xfcnyayı \xe7epe\xe7evre kuşatmıştır.
    III. O g\xfcn tarihler 3 mayısı g\xf6stermekteydi.
    IV. \xd6yle hoş bir sesi vardı ki hepimiz keyfettik.
    Numaralanmış c\xfcmlelerin hangilerinde yazım yanlışı
    vardır?`,
        cevap: "II ve III.",
        yanliscevaplar: [`Yalnız I.`, "II ve IV.", "III ve IV."]
    }, {
        soru: `(I) İstanbul tarih boyunca pek\xe7ok uygarlığa ev sahipliği
    yapmış bir kent. (II) Nitekim g\xfcn\xfcm\xfcze odaklandığımız
    da bile farklı k\xfclt\xfcrlerden bir\xe7ok insana ev sahipliği yaptığı
    g\xf6r\xfcl\xfcyor. (III) Ancak İstanbul’un yanlızca insanları
    değil başka canlı t\xfcrlerini de barındırdığını hatırlamak
    gerekiyor. (IV) İşte Yunuslar, İstanbul’la \xf6zdeşleşmiş bu
    canlıların başında gelir. (V) Yunusları, \xf6zellikle eyl\xfcl-ekim
    ve haziran-temmuz aylarında k\xfc\xe7\xfck gruplar h\xe2linde Boğaz’da
    y\xfczerken g\xf6rebilirsiniz.
    Numaralanmış c\xfcmlelerin hangisinde yazım yanlışı
    yoktur?`,
        cevap: "V.",
        yanliscevaplar: ["IV.", "III.", "II."]
    }, {
        soru: `( ) Bir dost bulunca delilik etmek hoşuma gider ( ) diyor
    Horatius ( ) Bu s\xf6z\xfc herkes onaylar mı ( ) bilemiyorum
    ama hi\xe7 ş\xfcphesiz benim sloganlarımdan biri ( )
    Bu par\xe7ada yay ayra\xe7la belirtilen yerlere sırasıyla
    aşağıdakilerden hangisinde verilen noktalama işaretleri
    getirilmelidir?`,
        cevap: `( — ) ( , ) ( . ) ( , ) ( . )`,
        yanliscevaplar: [`( “ ) ( ” ) ( . ) ( , ) ( . )`, `( “ ) ( ” ) ( . ) ( , ) ( … )`, `( — ) ( , ) ( . ) ( , ) ( ... )`]
    }, {
        soru: `Beh\xe7et Necatigil, “Barbaros Meydanı” adlı şiirinde Barbaros
    Meydanından sahile kadar inen anne kız \xe7evresinde
    şehri sosyal ve k\xfclt\xfcrel tezatları ve değişmeleri ile yansıtır.
    Noktalama işaretleri eksik bırakılan bu par\xe7ada aşağıdakilerden
    hangisi kullanılamaz?`,
        cevap: `\xdc\xe7 Nokta`,
        yanliscevaplar: [`Tırnak İşareti`, `Virg\xfcl`, `Kesme İşareti`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde iki noktanın kullanımıyla
    ilgili bir yanlışlık yapılmıştır?`,
        cevap: `Bundan dolayıdır ki: b\xf6lgede hububat \xfcretimi olduk\xe7a
    fazladır.`,
        yanliscevaplar: [`S\xf6zleri h\xe2l\xe2 kulağımdadır: “Hepimiz en \xe7ok zaman
      ge\xe7irdiğimiz beş kişinin ortalamasıyız evlat.”`, `Kamp i\xe7in en gerekli malzemeler şunlardır: \xe7adır,
      kafa feneri, uyku tulumu ve ilk yardım seti.`, `S\xf6zl\xfcklere http://tdk.gov.tr adresinden ulaşabilirsiniz.`]
    }, {
        soru: `Hi\xe7birini unutamam (I) Cicirya’nın domates, ceviz (II) turun\xe7
    ve bergamot re\xe7elleri (III) G\xfcl Abla Mantı Salonu’ndaki
    zeytinyağlıları (IV) kızartmaları (IV) kekikleri (V)
    Bu par\xe7ada numaralanmış yerlerden hangisine noktalı
    virg\xfcl getirilmelidir?`,
        cevap: "III.",
        yanliscevaplar: ["I.", "II.", "IV."]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde bir noktalama hatası
    vardır?`,
        cevap: `Yazar, 6. ve 7. sınıfları Şebinkarahisar’da okumuş.`,
        yanliscevaplar: [`Peki, bu bazlamayı da mı Sarı Begonvil Bakkaliyesinden
      aldın?`, `Halikarnas Balık\xe7ısı [Cevat Şakir Kabaağa\xe7lı (1886-
        1973)] en g\xfczel eserlerini Bodrum’da yazmıştır.`, `Sana uğurlar olsun... Ayrılıyor yolumuz!`]
    }, {
        soru: `Aşağıda ayra\xe7la g\xf6sterilen yerlerden hangisine kesme
    işareti getirilemez?`,
        cevap: `T\xfcrkiye T\xfcrk\xe7e ( ) sindeki bir diğer kural, iki \xfcnl\xfcn\xfcn
    yan yana gelmemesidir.`,
        yanliscevaplar: [`Diğer maddelerin bir kısmının, c ( ) nin ise tamamının
      altını \xe7izdim.`, `BM ( ) ye oy birliği ile yeni bir genel sekreter se\xe7ildi.`, `Halit Ziya Uşaklıgil’in Mai ve Siyah’ı 1897 ( ) de tefrika
      edilmiştir.`]
    }, {
        soru: `Afrika’nın batısında, İspanya’ya bağlı Kanarya Adaları’ndan
    biri olan La Gomera’da yaşayan insanlar “Silbo Gomera”
    adı verilen bir ıslık dili kullanıyorlar. Bu dilin Kuzey
    Afrikada yaşayan Berberilerin dili olan Berbericeden k\xf6ken
    aldığı ve 15. yy.dan daha eskiye dayandığı d\xfcş\xfcn\xfcl\xfcyor.
    Silbo Gomera g\xfcn\xfcm\xfczde İspanyolca gramer kurallarına
    uygun olarak kullanılıyor, buranın eski sakinlerince
    ise neredeyse bir cep telefonu kadar kullanışlı olduğu
    s\xf6yleniyor.
    Bu par\xe7ada aşağıdakilerden hangisi ile ilgili bir noktalama
    hatası yapılmıştır?`,
        cevap: `\xd6zel adlara getirilen iyelik, durum ve bildirme eklerinin
    kesme işaretiyle ayrılması`,
        yanliscevaplar: [`Sayılardan sonra sıra bildirmek i\xe7in nokta konması`, `Bazı kısaltmaların sonuna nokta konması`, `\xd6zel olarak vurgulanmak istenen s\xf6zlerin tırnak i\xe7ine
      alınması`]
    }, {
        soru: `(I) Tasarım yaparken \xe7eşitli ara\xe7lar ve malzemeler kullanırız,
    değil mi? (II) İşte; oyuncak tasarımı da b\xf6yle bir şey.
    (III) Bir de atık malzemelerle yapılırsa, oyuncak tasarımı
    bir t\xfcr “geri kazanım sanatı” h\xe2line d\xf6n\xfcş\xfcr. (IV) Gazoz
    kapakları, kavanozlar, yumurta kutuları, teller, \xe7ubuklar...
    (V) Hepsi bir anda bir oyuncağa/oyun gerecine d\xf6n\xfcşebilir.
    Bu par\xe7ada numaralanmış c\xfcmlelerin hangilerinde
    noktalama yanlışı vardır?`,
        cevap: "II ve III.",
        yanliscevaplar: [`Yalnız I.`, "III ve VI.", "IV ve V."]
    }, {
        soru: `\xc7izgi romanın masal t\xfcr\xfc ile benzeyen y\xf6nlerini yazar
    ş\xf6yle a\xe7ıklamıştır ( ) “\xc7izgi romanlar romantik \xe7ocukluğun
    resimli masalları mıydı ( ) masallarını yitirmekte olan
    \xe7ocukluğu besleyen deve g\xfcc\xfc, tazı hızı şerbeti mi ( )”
    \xc7izgi roman ( ) bi\xe7imi, yapısı ve işlevi a\xe7ısından masalla
    ilişkilendirilmekte ( ) Bu y\xfczden \xe7izgi roman i\xe7in masalın
    yerine ikame edilmiş resimli edebiyat denebilir.
    Bu par\xe7ada yay ayra\xe7la belirtilen yerlere sırasıyla
    aşağıdakilerden hangisinde verilen noktalama işaretleri
    getirilmelidir?`,
        cevap: "(:) (,) (?) (;) (.)",
        yanliscevaplar: ["(;) (?) (?) (;) (.)", "(;) (,) (?) (;) (.)", "(:) (,) (?) (,) (.)"]
    }, {
        soru: `● Tarihlerin yazılışında g\xfcn, ay ve yılı g\xf6steren sayıları
    birbirinden ayırmak i\xe7in - - - - kullanılır.
    ● C\xfcmle i\xe7inde ara s\xf6zleri veya ara c\xfcmleleri ayırmak
    i\xe7in ara s\xf6zlerin veya ara c\xfcmlelerin başına ve sonuna
    - - - - kullanılır.
    Aşağıdaki noktalama işaretlerinden hangisi bu boşluklardan
    herhangi birine getirilemez?`,
        cevap: `Yay ayra\xe7`,
        yanliscevaplar: [`Eğik \xe7izgi`, `Virg\xfcl`, "Nokta"]
    }, {
        soru: `Değerli Kardeşim,
    Mektubunu 09.15’te aldım. Mektubunda “Fuzuli’nin en
    sevdiğim şiiri “Su Kasidesi”dir cancağızım.” demişsin.
    Seninle aynı fikirde miyim, bilmiyorum. \xc7\xfcnk\xfc t\xfcm kasidelerini,
    gazellerini okumadım. Mesnevilerini de...
    Bu par\xe7adaki noktalama yanlışı aşağıdaki değişikliklerin
    hangisiyle d\xfczeltilir?`,
        cevap: `“Su Kasidesi” ifadesi tek tırnak i\xe7ine alınarak`,
        yanliscevaplar: ["Saat bildiren ifadeye nokta yerine iki nokta getirilerek", `“Fikirde miyim” den sonra soru işareti konarak`, `Par\xe7a nokta ile bitirilerek`]
    }, {
        soru: `(I) Bursa’da bir ahbabı g\xf6rmek ve bir m\xfcddet edebiyattan
    başka mevzularda konuşmak i\xe7in yola \xe7ıkmıştım. (II) Yalova’da
    bir kamyoncuyla anlaşıp Orhangazi’ye gelmiştim.
    (III) Bu k\xfc\xe7\xfck kasabaya inerken uzaktan g\xf6rd\xfcğ\xfcm İznik
    G\xf6l\xfc beni garip bir cazibe ile kendine \xe7ekti. (IV) Hi\xe7 sebep
    yokken otob\xfcs\xfc ka\xe7ırıp burada kaldım. (V) Bu davranış,
    benim gibiler i\xe7in bir t\xfcr kahramanlıktı.
    Bu par\xe7ada numaralanmış c\xfcmlelerle ilgili aşağıdakilerden
    hangisi s\xf6ylenemez?`,
        cevap: `V. c\xfcmlede bir isim, \xe7oğul eki almıştır.`,
        yanliscevaplar: [`I. c\xfcmlede iyelik eki kullanılmamıştır.`, `II. c\xfcmlede birden \xe7ok \xf6zel isim vardır.`, `III. c\xfcmlede h\xe2l eki almış isim vardır.`]
    }, {
        soru: `Okuyorum. Boş kaldık\xe7a d\xfckk\xe2nımda, geceleri evimde
    hep okuyorum. Fransızca, anlayabildiğim kadar Yunanca,
    elime ge\xe7tiği kadar T\xfcrk\xe7e… Daima okuyorum. Dediklerim
    hep sevdiğim bilim insanlarının, yazarların g\xf6r\xfcşleri.
    Bu par\xe7adaki s\xf6zc\xfcklerle ilgili,
    I. “yazarların” s\xf6zc\xfcğ\xfc 3. \xe7oğul şahıs iyelik eki ile \xe7ekimlenmiştir.
    II. “Yunanca” s\xf6zc\xfcğ\xfc t\xfcremiş bir \xf6zel isimdir.
    III. “d\xfckk\xe2nımda” s\xf6zc\xfcğ\xfc iki farklı t\xfcrde \xe7ekim eki almıştır.
    IV. “g\xf6r\xfcşleri” s\xf6zc\xfcğ\xfc soyut bir cins isimdir.
    yargılarından hangileri yanlıştır?`,
        cevap: `Yalnız I.`,
        yanliscevaplar: [`Yalnız III.`, "II. ve III.", "II. ve IV."]
    }, {
        soru: `Misafirperverliğin, dostluğun ve muhabbetin sembol\xfc
    olan \xe7ay; \xfcş\xfcd\xfcğ\xfcm\xfczde, yorulduğumuzda, sıcacık bir
    dost sohbeti aradığımızda hep yanı başımızdadır. Kullanımı
    son derece yaygın, yediden yetmişe herkesin, g\xfcn\xfcn
    her saatinde i\xe7tiği bu şifalı bitki, g\xfcndelik hayatımızın
    vazge\xe7ilmez zevkleri arasında. Bir dizi karakterinin dediği
    gibi “\xc7ay varsa umut var demektir.”
    Bu par\xe7ada aşağıdakilerden hangisi yoktur?`,
        cevap: `\xd6zel isim`,
        yanliscevaplar: [`\xc7oğul isim`, `Birleşik isim`, `T\xfcremiş isim`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde “doğru” s\xf6zc\xfcğ\xfc
    isim g\xf6revinde kullanılmıştır?`,
        cevap: `Bunları daha sonra ele almak bence daha doğru.`,
        yanliscevaplar: [`İki tarafından dere ge\xe7en yoldan k\xf6ye doğru y\xfcr\xfcd\xfcm.`, `Doğru s\xf6yl\xfcyorsun ama kazın ayağı \xf6yle değil.`, `Doğru işi yapmak işleri doğru yapmaktan daha \xf6nemlidir.`]
    }, {
        soru: `I. G\xfcnlerce aradıktan sonra nihayet buldum.
    II. Beni soracak olursan, uğraşıyoruz işte.
    III. Daha ne iyilikler yapılabilir ki onun i\xe7in
    Numaralanmış c\xfcmlelerin hangilerinde isim kullanılmamıştır?`,
        cevap: "I ve II.",
        yanliscevaplar: ["II ve III.", `Yalnız I.`, `Yalnız II.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde soyut isim vardır?`,
        cevap: `Halının \xfczerinde bağdaş kurup aklından ertesi g\xfcn
    yapılacakları ge\xe7iriyordu.`,
        yanliscevaplar: [`K\xf6şeyi d\xf6nerken rastladığım bir duvar resmi sanki
      b\xfcy\xfcd\xfcğ\xfcm sokağın kuş bakışı bir \xe7izimiydi.`, `Halının \xfczerinde bağdaş kurup aklından ertesi g\xfcn
      yapılacakları ge\xe7iriyordu.`, `B\xf6yle sabahlarda, daha g\xfcn doğmadan, anası yayığın
      ilk tereyağı topağını ona verirdi.`]
    }, {
        soru: `(I) \xc7ocukken annem bana hep hayatın anahtarının mutluluk
    olduğunu anlatırdı. (II) Okula giderken bana “B\xfcy\xfcy\xfcnce
    ne olmak istiyorsun?” diye sorarlardı. (III) Ben de
    onlara daima, mutlu olmak istediğimi s\xf6ylerdim. (IV) Onlar
    bana, soruyu anlamadığımı s\xf6ylerdi. (V) Bense onlara
    bu hayatı anlamadıklarını s\xf6ylerdim.
    Bu par\xe7ada numaralanmış c\xfcmlelerin hangisinde sıfat
    kullanılmıştır?`,
        cevap: "V.",
        yanliscevaplar: ["II.", "III.", "IV."]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde bir ismin birden \xe7ok
    sıfatı vardır?`,
        cevap: `Malatyalı, yan komşumuzun oğlu Ali’ye yıllar sonra
    Ankara Garı’nda rastladım.`,
        yanliscevaplar: [`Bah\xe7eye girildiğinde sizi \xf6nce beyaz zambaklar ve
      renk renk s\xfcmb\xfcller karşılıyordu.`, `O g\xfcn gazete idaresinde biriken edeb\xee dergilerin yapraklarını
      karıştırıyordum.`, `Emin amcam b\xfct\xfcn kelimeleri tam manasıyla, usul\xfcnce
      kullanmayı bilirmiş.`]
    }, {
        soru: `Ben bir g\xfcn bu dağ k\xf6y\xfcnde
    Bakılacak en g\xfczel şeye baktım.
    Dağ havasında, geniş yapraklı \xfcmitlerin \xfczerine
    Yattım, g\xf6ky\xfcz\xfcn\xfcn altına
    Hi\xe7bir \xe7ağda bu kadar mavi olmamıştı.
    Baktım da vuruldum maviliğine
    Bu dizelerde aşağıdakilerden hangisi yoktur?`,
        cevap: `Sayı sıfatı`,
        yanliscevaplar: [`Belgisiz sıfat`, `İşaret sıfatı`, `Niteleme sıfatı`]
    }, {
        soru: `I. Pembe u\xe7urtmalar yolladığından beri
    II. sarardı tiryaki menekşeleri
    III. sonbaharın tozlu kafeslerinde
    IV. sevgi turnaları yakalıyorum
    V. turnalar gidiyor; ben kalıyorum
    Numaralanmış dizelerin hangilerinde sıfat kullanılmıştır?`,
        cevap: "I ve III.",
        yanliscevaplar: ["II ve IV.", "I ve II.", "III ve V."]
    }, {
        soru: `Adlaşmış sıfat, niteleme veya sayı sıfatıyla kurulan sıfat
    tamlamalarında tamlanan ismin d\xfcşmesi ve varsa d\xfcşen
    isimdeki ekin sıfata ge\xe7mesi şeklinde oluşur.
    Buna g\xf6re aşağıdaki c\xfcmlelerin hangisinde adlaşmış
    sıfat vardır?`,
        cevap: `İkinci, \xfcst\xfcnde daha iyi durdu.`,
        yanliscevaplar: [`Haşlanmış h\xe2li daha lezzetlidir.`, `\xdc\xe7 ağa\xe7 meşe, bir ağa\xe7 \xe7ınardı.`, `Yeğenim yarın Bursa’ya u\xe7acak.`]
    }, {
        soru: `Bir sıfatın kendisinden sonra gelen kelime veya kelime
    gruplarıyla yapı ve anlam bakımından bağlantısı olmadığını
    g\xf6stermek ve anlam karışıklığını \xf6nlemek i\xe7in virg\xfcl
    kullanılır.
    Aşağıdaki c\xfcmlelerin hangisinde bu kurala uymamaktan
    doğan bir anlam karışıklığı vardır?`,
        cevap: `Dosdoğru yolun karşısına ge\xe7erek bağırdım.`,
        yanliscevaplar: [`Gemide bulaşık yıkamak kolay iş değildi.`, `Limana bakan penceresinden deniz g\xf6r\xfcn\xfcrm\xfcş.`, `Hayat sahnesinde altmış yaşın basamaklarındayım.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde birden fazla sıfat
    kullanılmıştır?`,
        cevap: `B\xfct\xfcn g\xf6zlerden manalı ışıklar sı\xe7rıyordu.`,
        yanliscevaplar: [`Piyanonun mor kadifeden şamdanlıkları vardı.`, `Tiyatrocular yan uğraş olarak sinemayla uğraşıyordu.`, `Dışarıda nemli bir r\xfczg\xe2r esiyordu.`]
    }, {
        soru: `Aşağıdaki s\xf6zc\xfcklerden hangisi sıfat g\xf6revinde kullanılamaz?`,
        cevap: "Biri",
        yanliscevaplar: ["Sulak", "Hangi", `\xd6teki`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde edat \xf6beği, y\xfcklem
    g\xf6revindedir?`,
        cevap: `Yeni evleri avu\xe7 i\xe7i kadardı.`,
        yanliscevaplar: [`Başarmak i\xe7in inanmak gerekir.`, `Belirtildiği \xfczere \xf6nceliği eğitime verdik.`, `D\xfckk\xe2na kadar sana eşlik edeyim.`]
    }, {
        soru: `Bu treni ilk kim nasıl g\xf6rd\xfc, duydu - - - - okudu kimse \xf6ğrenemedi
    - - - - herkesin emin olduğu tek bir şey vardı: Bunun
    \xe7ocuklarını uyutmak i\xe7in \xe7ok g\xfczel bir masal olması. Ger\xe7ek
    olup olmaması - - - - yetişkinlerin umrunda - - - - değildi,
    onlar zaten hayal kurmayı \xe7oktan unutmuşlardı.
    Aşağıdaki bağla\xe7lardan hangisi bu par\xe7adaki boşluklardan
    herhangi birine getirilemez?`,
        cevap: `eğer`,
        yanliscevaplar: ["ancak", "veya", "bile"]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde “gerek ... gerek” bağlacı
    kelime gruplarını birbirine bağlamaktadır?`,
        cevap: `Gerek hızıyla gerek g\xfcc\xfcyle hepimizin dikkatini \xe7ekmişti.`,
        yanliscevaplar: [`Gerek ailesi gerek arkadaşları onu y\xfcreklendiriyordu.`, `Eserleri gerek sanatımızı gerek d\xfcş\xfcnce d\xfcnyamızı
      derinden etkilemiştir.`, `Gerek susuşu gerek g\xfcl\xfcş\xfc daima bir şeyler anlatırdı.`]
    }, {
        soru: `(I) Şimdiye kadar hem hazırlık hem uygulama bakımından
    birka\xe7 saati aşmayan etkinlikler paylaştık. (II) Bu sefer
    ise k\xfct\xfcphane şenlikleri, yıl sonu g\xf6sterileri, veli g\xfcn\xfc
    gibi vesilelerle daha uzun soluklu bir faaliyet planlamaktayız.
    (III) \xd6rneğin bu cumaki buluşmamızda sizler i\xe7in
    okuma alışkanlığınızı pekiştirecek bir uygulama ger\xe7ekleştireceğiz.
    Numaralanmış c\xfcmlelerin hangilerinde hem edat hem
    bağla\xe7 kullanılmıştır?`,
        cevap: "I ve II.",
        yanliscevaplar: [`Yalnız III.`, "II ve III.", `Yalnız I.`]
    }, {
        soru: `I. Pamuk gibi bir kalbi vardır. (Benzetme)
    II. Saatlerce aramasına karşın bir t\xfcrl\xfc bulamıyordu.
    (Koşul)
    III. Amcam ile yarın k\xf6ye gideceğiz. (Birliktelik)
    IV. \xc7i\xe7ek demetini annesi i\xe7in almıştı. (\xd6zg\xfcl\xfck)
    V. Hi\xe7biri bu işi senin kadar \xf6ğrenemedi. (Karşılaştırma)
    Numaralanmış c\xfcmlelerin hangisinde edatın c\xfcmleye
    kattığı anlam yanlış verilmiştir?`,
        cevap: "II.",
        yanliscevaplar: ["III.", "I.", "IV."]
    }, {
        soru: `I. Bizi sen sevgisiz, susuz, havasız
    Ve vatansız bırakma Allah’ım!
    II. İlmi \xf6yle b\xfcy\xfckt\xfcr ki (!) kimseyi dinlemesi gerekmez.
    III. Aferin, dayısının bir tanesine!
    \xdcnlemin numaralanmış c\xfcmlelere kattığı anlamlar
    aşağıdakilerin hangisinde sırasıyla verilmiştir?`,
        cevap: `Dilek – Alay – Gurur`,
        yanliscevaplar: [`Korku – \xd6vg\xfc – Sevin\xe7`, `Mutluluk – K\xfc\xe7\xfcmseme – Şefkat`, `Saygı – Kınama – Beğeni`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde soru anlamı bir
    edatla sağlanmıştır?`,
        cevap: `G\xf6zleri her şeyi s\xf6yl\xfcyor olabilir miydi?`,
        yanliscevaplar: [`Neden b\xf6yle bir karar verdi ki?`, `Tabiatı ondan daha iyi kim anlatabilir?`, `Hangi g\xfczerg\xe2hı kullanacaksın?`]
    }, {
        soru: `● Aman efendim, \xf6yle şeyler işittim ki kalakaldım!
    ● Aman, kimse duymasın!
    ● Aman, ne akıllı şey!
    ● Aman, bıktık bu tavırlardan!
    Bu c\xfcmlelerde aşağıdaki anlamlardan hangisi yoktur?`,
        cevap: `Pişmanlık`,
        yanliscevaplar: ["Rica", `Şaşkınlık`, `Beğeni`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde bir edat isim \xe7ekim
    eki almıştır?`,
        cevap: `Bu kadarına dayanabilmesi bir mucizeydi.`,
        yanliscevaplar: [`Ona g\xfczel bir gelecek bırakmak i\xe7in \xe7abalıyoruz.`, `Gelenlerden bazılarına tanıyor gibi kafa sallıyordu.`, `Aması maması yok kardeşim, diyecek oldum.`]
    }, {
        soru: `I. hatta
    II. amma vel\xe2kin
    III. yani
    IV. keşke
    V. şayet
    Numaralanmış s\xf6zlerden hangisi bağlama işlevine
    sahip değildir?`,
        cevap: "IV.",
        yanliscevaplar: ["III.", "II.", "I."]
    }, {
        soru: `Aşağıdaki dizelerin hangisinde bağlacın yazımıyla ilgili
    bir yanlışlık yapılmıştır?`,
        cevap: `Bir akşam\xfcst\xfc yanımızda kimsecikler olmaz
    Yada olması gerekenler yanımızdakiler değildir`,
        yanliscevaplar: [`Hadi git, ne bir adres ne bir hatıra bırak
      Zannetme ki pişmanlık, mutluluk kadar ırak!`, `\xd6yle bir ilkyaz ol ki korkut yaprakları,
      \xd6yle bir son yaz ol ki tut yaprakları`, `Tahir olmak da ayıp değil Z\xfclal olmak da
      hatta sevda y\xfcz\xfcnden \xf6lmek de ayıp değil,
      b\xfct\xfcn iş Tahir’le Z\xfclal olabilmekte
      yani y\xfcrekte.`]
    }, {
        soru: `Aşağıdaki dizelerin hangisinde ayra\xe7 i\xe7inde belirtilen
    t\xfcrde bir zamir yoktur?`,
        cevap: `Gurbet elde bir h\xe2l geldi başıma
    Derman ararken derde d\xfcş oldum
    (belgisiz)`,
        yanliscevaplar: [`\xd6lenler yeniden doğarmış, ger\xe7ek
      Tabut değildir bu, bir tahta kundak
      (işaret)`, `Bеn sаnа mеcburum bilеmеzsin
      Adını mıh gibi аklımdа tutuyorum
      (iyelik)`, `Sana yerden g\xf6kten b\xfcy\xfck nasihat
      G\xf6rd\xfcğ\xfcn \xf6rt, g\xf6rmediğin s\xf6yleme
      (kişi)`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde kişi zamiri kullanılmamıştır?`,
        cevap: `Ne ekersen onu bi\xe7ersin.`,
        yanliscevaplar: [`Bug\xfcn bana gelen ikinci e-postaydı bu.`, `Biz kırk kişiyiz, birbirimizi biliriz.`, `İşe giderken onu da okuluna bırakacağım.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde s\xf6zc\xfck veya ek bi\xe7iminde
    zamir kullanılmamıştır?`,
        cevap: `Sultandan \xfc\xe7 istekte bulunmuş Keloğlan.`,
        yanliscevaplar: [`Ağaca \xe7ıkanlardan hi\xe7biri, dalın ucundaki elmaya
      uzanamamıştı.`, `Şuradakilere de bakmanı \xf6neririm.`, `T\xfcm hazırlıklarda kendisinin birikiminden faydalandık.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde tamlamayı oluşturan
    s\xf6zc\xfcklerin tamamı zamir g\xf6revindedir?`,
        cevap: `Onlardan bazılarını tanıyorum?`,
        yanliscevaplar: [`Bu semtin kedileri insanlardan ka\xe7mıyor.`, `O kişi beni de birka\xe7 kez aradı.`, `Bu şehir o eski İstanbul mudur?`]
    }, {
        soru: `(I) Sufl\xf6r kişilikler bazen ana baba, bazen m\xfchendis, bazen
    herhangi biri olup bizlere sadece birtakım alışkanlıkları
    fısıldarlar. (II) Bu dogmaların dışına \xe7ıkabilenler, olaylara
    alışılmışın dışında bakabilenler, bilimde ve sanatta
    yeni ufuklar a\xe7arlar. (III) \xd6rneğin y\xfczyıllar boyunca insanların
    hepsi havada bıraktıkları cisimlerin aşağıya d\xfcşt\xfcğ\xfcn\xfc
    s\xf6ylediler. (IV) Bu, son derece doğal ve basit bir
    şeydi ve elbette ki her şey aşağıya d\xfcşerdi. (V) G\xfcn\xfcn birinde
    Newton \xe7ıkıp bu olaya yeni bir bakış tarzı getirerek
    “Havada bırakılan bir cisim aşağıya mı d\xfcşm\xfcyor yoksa
    d\xfcnyaya doğru mu \xe7ekiliyor?” dedi.
    Bu par\xe7ada numaralanmış c\xfcmlelerle ilgili aşağıdakilerden
    hangisi s\xf6ylenemez`,
        cevap: `Beşinci c\xfcmlede soru anlamı bir zamirle sağlanmaktadır.`,
        yanliscevaplar: [`Birinci c\xfcmlede birden \xe7ok zamir kullanılmıştır.`, `İkinci c\xfcmlede herhangi bir zamir yoktur.`, `D\xf6rd\xfcnc\xfc c\xfcmlede işaret zamiri yer almaktadır.`]
    }, {
        soru: `Aşağıdaki dizelerin hangisinde farklı t\xfcrde zamirler
    bir arada kullanılmıştır?`,
        cevap: `Kendimi kendi akrostişime adadım
    Kendimi gerek\xe7esiz oralara buralara`,
        yanliscevaplar: [`Ben g\xfczelim diye havadan u\xe7ma
      İndirirler seni el yaman olur`, `Kimi ufak kimi iri
      Her biri tutmuş bir yeri`, `Nuşirevan-ı \xc2dil nerede tahtı
      S\xfcleyman rn\xfchr\xfcn\xfc kime bıraktı`]
    }, {
        soru: `(I) Duyuruncaya dek bastım en \xfcstteki isimsiz zile. (II) Bu
    kadar kat aşağıdan zil duyulmuyordu (III) Derken arabalar
    ge\xe7meye başladılar arkamdaki yoldan. (IV) Kediler,
    k\xf6pekler sağda solda g\xf6r\xfcn\xfcr oldu. (V) Birden zilinkini
    bastıran cızırtılı bir ses yankılandı sabahın sessizliğinde.
    Bu par\xe7ada numaralanmış c\xfcmlelerin hangilerinde
    ek h\xe2linde zamir kullanılmıştır?`,
        cevap: "III ve V.",
        yanliscevaplar: ["I ve II.", "I ve III", "II ve IV."]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde zamir y\xfcklem g\xf6revinde
    kullanılmıştır?`,
        cevap: `Bir \xe7i\xe7eğin kokusu neyse bir insanın kişiliği de odur.`,
        yanliscevaplar: [`Şik\xe2yet ettiğiniz yaşam belki de başka birinin hayalidir.`, `Hi\xe7 kimse, hi\xe7bir şey s\xf6ylemeyen karıncadan daha iyi
      \xf6ğ\xfct veremez.`, `D\xfcr\xfcstl\xfck ağacının meyvesi g\xfcvendir.`]
    }, {
        soru: `(I) Bir adam her g\xfcn bir sopanın u\xe7larına astığı testilerle
    dereden evine su taşırmış. (II) Ancak bu testilerden birinin
    yan kısmında \xe7atlak varmış. (III) Diğeri ise kusursuzmuş.
    (IV) Ve her seferinde kusursuz testi adamın doldurduğu
    suyun t\xfcm\xfcn\xfc eve ulaştırırmış. (V) Taşıdığı testilerden
    \xe7atlak olanı ise eve yarı dolu olarak varırmış.
    Numaralanmış c\xfcmlelerin hangilerinde zarf yoktur?`,
        cevap: "II ve III.",
        yanliscevaplar: ["I ve II.", "III ve IV.", "III ve V."]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde farklı t\xfcrde zarflar
    bir arada kullanılmıştır?`,
        cevap: `Kuşlar g\xf6\xe7 sırasında yollarını yıldızlara bakarak bulurlar.`,
        yanliscevaplar: [`Reng\xe2renk balıklar okyanusun derinliklerinde gezintiye
      \xe7ıkmış.`, `Papağanların olduk\xe7a kuvvetli bir hafızası vardır.`, `Kapadokya, turizm a\xe7ısından b\xfcy\xfck bir \xf6neme sahiptir.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde yer - y\xf6n bildiren
    s\xf6zc\xfck zarf g\xf6reviyle kullanılmıştır?`,
        cevap: `Bu \xf6nlem sayesinde mikroplar i\xe7eri giremez.`,
        yanliscevaplar: [`Oraya ne zaman gelmek istesem yolu şaşırırım.`, `İstersen temizliğe yukarıdan başlayalım.`, `İleride b\xfcy\xfck bir ağa\xe7 g\xf6receksin.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde soru anlamı bir zarfla
    sağlanmıştır?`,
        cevap: `Sosyal paylaşım imk\xe2nı ni\xe7in bağımlılığa d\xf6n\xfcş\xfcyor?`,
        yanliscevaplar: [`Teknolojinin b\xfct\xfcn hayatı ele ge\xe7irmemesi i\xe7in ne t\xfcr
      tedbirler almalıyız?`, `Gen\xe7lik d\xf6nemi, merak ve bilme isteğinin arttığı bir
      d\xf6nem midir?`, `Ruh sağlığı a\xe7ısından baktığımızda nedir sos-yal
      paylaşım?`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde zarf bir sıfatı belirtmiştir?`,
        cevap: `\xc7ok g\xfczel g\xfcnler bekliyor bizi.`,
        yanliscevaplar: [`Orası bana epey uzak g\xf6r\xfcn\xfcyor.`, `Anılarını harfi harfine anlatmış.`, `Sonra bir tiyatro bileti aldım.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde zaman bildiren s\xf6zc\xfck
    zarf g\xf6revinde değildir?`,
        cevap: "Sabah, zihnin en iyi zinde vaktidir.",
        yanliscevaplar: [`Ablam ve eniştem az evvel \xe7ıktı.`, `Neredeyse her sabah bir tas \xe7orba i\xe7er.`, `Şair 1954’te Sinop’ta doğmuş.`]
    }, {
        soru: `Ne yapmalıyız, nasıl yapmalıyız? Mesela bug\xfcnden itibaren
    elimizi vicdanımıza koymalıyız ve bu fazlaca t\xfcketme
    \xe7ılgınlığından vazge\xe7meliyiz. Biz “komşusu a\xe7ken tok
    yatmayı” ayıp sayan bir terbiyeden geliyoruz. Bir milyar
    a\xe7 yatanın olduğu bir d\xfcnyada tıka basa yiyen i\xe7en insanın
    vicdanının hormonlu olduğuna inanıyoruz.
    Bu metinde aşağıdaki zarf t\xfcrlerinden hangisi yoktur?`,
        cevap: `Yer - y\xf6n zarfı`,
        yanliscevaplar: [`Durum zarfı`, `Zaman zarfı`, `Soru zarfı`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde s\xf6z grubu bi\xe7iminde
    bir zarf kullanılmamıştır?`,
        cevap: `Bu şaşkın h\xe2llerine bir anlam veremedik.`,
        yanliscevaplar: [`Karlı tepeler yavaş yavaş aydınlanıyordu.`, `Tam o sıra otob\xfcs perondan ayrılıyordu.`, `On d\xf6rt yaşından beri bu lokantada \xe7alışıyormuş.`]
    }, {
        soru: `(I) S\xfcrekli televizyon izleyen \xe7ocukların odaklanma zorluğu
    \xe7ektiği, durmaksızın ve d\xfcş\xfcnmeden hareket ettiği ve \xe7abucak
    kafalarının karıştığı bir ger\xe7ektir. (II) Haftada 10 saat
    ve \xfczeri televizyon izlemenin zihin faaliyetini olumsuz etkilediği
    g\xf6sterilmiştir. (III) Ayrıca televizyon seyretmek i\xe7in
    ge\xe7 saatlere kadar oturan \xe7ocukların uyku d\xfczensizlikleri
    yaşadıkları g\xf6zlemlenmiştir. (IV) Kişisel gelişimcilere g\xf6re
    eğer evlerinde televizyon olmasaydı \xe7ocuklarımız b\xfcy\xfck
    ihtimalle farklı olacaklardı. (V) Daha mutlu, daha konuşkan
    ve a\xe7ık y\xfcrekli, daha \xfcretken, daha rahat insanlar…
    Bu par\xe7a ile ilgili aşağıdakilerden hangisi s\xf6ylenemez?`,
        cevap: `III. c\xfcmlede zarf yoktur.`,
        yanliscevaplar: [`I. c\xfcmlede birden \xe7ok zarf vardır.`, `II. c\xfcmlede durum zarfı kullanılmıştır.`, `IV. c\xfcmlede birleşik yapılı bir zarf kullanılmamıştır.`]
    }, {
        soru: `(I) “K\xfcndek\xe2ri”, par\xe7alar arasında herhangi bir bağlantı
    elemanının kullanılmadığı ve b\xfct\xfcn\xfc oluşturan par\xe7aların
    birbirine ge\xe7ecek şekilde tasarlandığı bir ağa\xe7 işleme sanatı
    şeklinde tanımlanmaktadır. (II) Tarihi, Orta Asya T\xfcrk
    toplumlarına kadar uzanmaktadır. (III) K\xfcndek\xe2ri sanatıyla
    uğraşan \xe7ok az usta var bug\xfcn. (IV) Ahşabı maharetli
    elleriyle \xe2deta yoğuran amcam da bu sanatı icra eden \xfc\xe7
    beş ustadan biridir. (V) K\xfcndek\xe2ri sanatını konuşmak i\xe7in
    amcamı, at\xf6lyesinde ziyaret ettik.
    Bu par\xe7ada numaralanmış c\xfcmlelerle ilgili aşağıdakilerden
    hangisi yanlıştır?`,
        cevap: `III. c\xfcmlede birden fazla fiilimsi kullanılmıştır.`,
        yanliscevaplar: [`I. c\xfcmlenin y\xfcklemi edilgen \xe7atılıdır.`, `II. c\xfcmlenin y\xfcklemi, t\xfcremiş bir fiildir.`, `IV. c\xfcmlenin y\xfcklemi sıfat-fiil grubu i\xe7eren
      belirtili isim tamlamasıdır.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisi \xe7atı bakımından diğerlerinden
    farklıdır?`,
        cevap: `G\xfcneş ışığı pencereden odaya yayılıyor.`,
        yanliscevaplar: [`Konserin iptal edildiği, e-posta yoluyla duyurulacak.`, `Burada 08.00 ila 10.00 arasında hizmet veriliyor.`, `Meselenin i\xe7 y\xfcz\xfc nihayet anlaşılmış.`]
    }, {
        soru: `(I) İnsanlık son 100 yılda, en b\xfcy\xfck adımını iletişim konusunda
    attı, dersek yanlış olmaz. (II) Yeni keşfedilen ve
    insanoğlunun o g\xfcne kadar g\xf6rd\xfcğ\xfc en hızlı “şey” olarak
    kabul edilen elektriğin, iletişim aracı olarak kullanılmasıyla
    ortaya \xe7ıkan telgraf, yeni bir \xe7ağı başlattı. (III) İletişimin;
    kolay, hızlı ve ucuz h\xe2le gelmesiyle d\xfcnyanın d\xf6rt bir yanındaki
    insanlar d\xfcş\xfcncelerini ve yaşamlarını paylaşır h\xe2le
    geldi. (IV) Telgrafın yerini radyo alırken de asıl ama\xe7 bu iletişimi
    daha da kolaylaştırmak ve hızlandırmaktı. (V) 1960’lı
    yıllarda kullanımı yaygın h\xe2le gelen televizyon da aslında,
    daha iyi, hızlı ve kolay iletişim amacıyla ortaya \xe7ıktı.
    Bu par\xe7ada numaralanmış c\xfcmlelerden hangisinin
    y\xfcklemi fiil değildir?`,
        cevap: "IV.",
        yanliscevaplar: ["III.", "II.", "I."]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde yapılmakta olan bir
    iş bildirilmektedir?`,
        cevap: `Usta, birka\xe7 dakikadan beri demirin bir tarafını yontuyor.`,
        yanliscevaplar: [`Ankara’nın Kızılcahamam il\xe7esinde bulunan Şahinler
      Tabiat Parkı, 2009 yılında kurulmuş.`, `Yazar, 1954 yılında Ankara’da d\xfcnyaya geldi.`, `Mersin'in Silifke il\xe7esinde 2 bin yıl \xf6nce inşa edilen
      tarih\xee taş k\xf6pr\xfc, restore edilecek.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde y\xfcklem, yapı y\xf6n\xfcyle
    diğerlerinden farklıdır?`,
        cevap: `T\xfcrk-İslam medeniyetinin zirvesine yerleşmiş Osmanlı
    Devleti, cenk meydanında dahi estetikten taviz
    vermemiş.`,
        yanliscevaplar: [`At\xf6lye dışında resim yapmak XIX. y\xfczyılda \xf6zellikle
      empresyonistlerle gelişmiştir.`, `İşe, dikd\xf6rtgen şeklindeki b\xfcy\xfck bir kurşun kalem
      ucunu andıran sıkıştırılmış m\xfcrekkep \xe7ubuğu ezmekle
      başlıyorsunuz.`, `Mimaride Sinan, şiirde Fuzuli hatta Karahisari ve musikide
      Itri mutlaka bilinmeli.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde eylemde kip kayması
    vardır?`,
        cevap: `Her sabah, soluğu aynanın karşısında alıyorum.`,
        yanliscevaplar: [`Onu en son ge\xe7en bayram durakta g\xf6rd\xfcm.`, `Onlar Balkan Savaşı’nın b\xfct\xfcn acılarını yaşamışlar.`, `Bu gidişle ablasından daha başarılı olacak.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerden hangisi nesne-y\xfcklem ilişkisine
    g\xf6re diğerlerinden farklıdır?`,
        cevap: `Kitaplığın solunda duran masadaki k\xe2ğıtlara baktım.`,
        yanliscevaplar: [`Eve girince menekşe kokusunu iyice i\xe7ime \xe7ektim.`, `Bahar gelince uzak ufukları izleriz.`, `Bir ip gerdi badem ağacıyla s\xf6ğ\xfct ağacının dallarına.`]
    }, {
        soru: `Aşağıdaki atas\xf6zlerinden hangisinin y\xfcklemi oluş fiilidir?`,
        cevap: `\xc7ocuk d\xfcşe kalka b\xfcy\xfcr.`,
        yanliscevaplar: [`Sayılı koyunu kurt kapmaz.`, "Sel ile gelen, yel ile gider.", `\xd6fkeyle kalkan, zararla oturur.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde fiil kullanılmamıştır?`,
        cevap: `Zor g\xfcn\xfcmde \xe2deta can simidimdi.`,
        yanliscevaplar: [`Yine o t\xfcrk\xfcy\xfc mırıldanıyordu.`, "Aralanan pencereden temiz hava girdi.", `Hayata d\xf6rt elle sarılmak gerekiyor.`]
    }, {
        soru: `Aşağıdaki dizelerin hangisinde anlamca kaynaşmış
    birleşik fiil vardır?`,
        cevap: `D\xfcn gece, d\xfcn gece g\xf6rd\xfcm d\xfcş\xfcmde
    K\xf6m\xfcr g\xf6zl\xfcmden ayrı d\xfcşm\xfcşt\xfcm.`,
        yanliscevaplar: [`Burda, Hindistan'da, Afrika'da,
      Her şey birbirine benzemektedir.`, `Ben ki kıtalar keşfetmişim, nesillerden,
      Ben ki cihan kadar.`, `Sessizdi yery\xfcz\xfc
      Yery\xfcz\xfcnde biricik Akdeniz vardı.`]
    }, {
        soru: `Hayatım boyunca ninemin g\xf6zleri beni takip etti. O g\xf6zlerin
    her zaman \xf6zlemini duyuyorum. K\xfc\xe7\xfckken onların
    anlamını kavrayamıyordum. Bir şekilde, geleceğe dair
    işaretler taşıdıklarını b\xfcy\xfcd\xfcğ\xfcmde anlayacaktım. Kimi
    yakınlarımızın “Adiviye Hanım” diye seslendikleri ninem;
    az konuşan, sessiz ve etrafa g\xf6ky\xfcz\xfc kadar canlı mavi
    g\xf6zleriyle bakan bir kadındı.
    Bu par\xe7ada aşağıdakilerden hangisinin \xf6rneği yoktur?`,
        cevap: `Anlamca kaynaşmış birleşik fiil`,
        yanliscevaplar: [`Ge\xe7işli fiil`, "Edilgen fiil", "Fiilimsi"]
    }, {
        soru: `(I) Yusuf’un imdadına yine o dağlar yetişir. (II) U\xe7urumlar,
    d\xfcmd\xfcz bir yol olur. (III) Sonra kartallar gelir. (IV) Kulaklarında
    hissettiği, \xe7ocukluk denizinin dinmeyen uğultusudur.
    (V) Aradan \xe7ağlar, masallar, efsaneler, nesiller ge\xe7er.
    Bu par\xe7adaki c\xfcmlelerin hangisinde \xe7atı \xf6zelliği
    aranmaz?`,
        cevap: "IV.",
        yanliscevaplar: ["I.", "II.", "III."]
    }, {
        soru: `Aşağıdaki dizelerin hangisinde yardımcı fiille kurulmuş
    bir y\xfcklem kullanılmıştır?`,
        cevap: `\xc7ok zaman sabrettim t\xfckenmez derdim
    G\xf6n\xfcl mihnet pınarında gam \xe7alar`,
        yanliscevaplar: [`Ankara'da yedim taze meyveyi
      Boşa \xe7iğnemişim yalan d\xfcnyayı`, `Allı turnam bizim ele varırsan
      Şeker s\xf6yle, kaymak s\xf6yle, bal s\xf6yle`, `G\xf6ky\xfcz\xfcnde b\xf6l\xfck b\xf6l\xfck turnalar
      Yok mu insafınız, aldı dert beni`]
    }, {
        soru: `(I) D\xf6rt mevsimin de kendine has bir kokusu ve tınısı olduğu
    doğrudur. (II) İlkbaharı g\xf6ren insan, onu hi\xe7 b\xf6yle
    farklı g\xf6rmemiş olduğunu d\xfcş\xfcn\xfcr. (III) Yaz bereketi, her
    yıl yeni ve b\xfcy\xfcl\xfcd\xfcr. (IV) Sonbahara daha \xf6nce hi\xe7 bu
    yılki gibi alıcı g\xf6zle bakmamışsınızdır. (V) Ve elbette kış
    da yeniler her yıl kendini.
    Bu par\xe7ada numaralanmış c\xfcmlelerle ilgili aşağıdaki
    \xe7ıkarımlardan hangisi yanlıştır?`,
        cevap: `IV. c\xfcmlenin y\xfcklemi birleşik zamanlıdır.`,
        yanliscevaplar: [`I. c\xfcmlede fiilimsi vardır.`, `II. c\xfcmlenin y\xfcklemi iş bildiren bir fiildir.`, `III. c\xfcmlede ek fiil kullanılmıştır.`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerden hangisinin y\xfcklemi durum fiilidir?`,
        cevap: `\xc7eşmenin başında bir m\xfcddet dinlendi.`,
        yanliscevaplar: [`Yağlı iftar \xe7\xf6reklerini kapının koluna asmış.`, `İ\xe7ine ufarak bir patates doğrayacaksın.`, `Yanındaki yaşlı adamın elini \xf6pt\xfcm.`]
    }, {
        soru: `Osmanlı İmparatorluğu’nda cam işleri bir sanat h\xe2line - - - -.
    Camcılar ocağı kurulmuş, cam işiyle uğraşan ustalara
    “c\xe2mger” adı - - - -. Cam \xfcr\xfcnlerinin \xfcretimi Beykoz ve
    Paşabah\xe7e’de kurulan cam at\xf6lyelerinde - - - -.
    Bu par\xe7adaki boşluklara sırasıyla aşağıdaki fiillerden
    hangileri getirilmelidir?`,
        cevap: `gelmiştir – verilmiştir – yapılmıştır`,
        yanliscevaplar: [`b\xfcr\xfcnm\xfcşt\xfcr – tasarlanmıştır – uygulanmıştır`, `almıştır – uygulanmıştır – d\xfcş\xfcn\xfclm\xfcşt\xfcr`, `kavuşmuştur – d\xfcş\xfcn\xfclm\xfcşt\xfcr – ger\xe7ekleştirilmiştir`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerin hangisinde y\xfcklem şart kipinin
    hik\xe2yesiyle \xe7ekimlenmiştir?`,
        cevap: `Keşke bu yaylayı daha \xf6nce g\xf6rseydim.`,
        yanliscevaplar: [`Buraya da bir \xe7ay bah\xe7esi a\xe7ılacakmış.`, `Kuvvetli bir hafızası olduğu s\xf6ylenmekte.`, `Bilgisayarı tamirciye bırakır mısın?`]
    }, {
        soru: `Aşağıdaki c\xfcmlelerden hangisinin y\xfcklemi sıfat-fiil
    eki almış kelime ile yardımcı fiilin birleşmesi sonucunda
    oluşmuştur?`,
        cevap: `G\xf6z\xfcm\xfcn i\xe7ine bakıp bir şeyler s\xf6yleyecek oldu.`,
        yanliscevaplar: [`\xc7ocukluğumuzdan beri onunla i\xe7tiğimiz su ayrı gitmez.`, `Ben daima diğer yoldan gitmeyi tercih ederim.`, `Bu sorunun \xfcstesinden pek\xe2l\xe2 gelebilir.`]
    }, {
        soru: `G\xfczel bir haber almış\xe7asına aniden neşelendi.
    Bu c\xfcmledeki fiilin \xe7atı \xf6zelliği aşağıdakilerin hangisinde
    doğru verilmiştir?`,
        cevap: `D\xf6n\xfcşl\xfc - ge\xe7işsiz`,
        yanliscevaplar: [`Etken - ge\xe7işsiz`, `Edilgen – ge\xe7işsiz`, `İşteş – ge\xe7işli`]
    }, {
        soru: `Aşağıdakilerin hangisinde ek fiil c\xfcmleye tahmin anlamı
    katmıştır?`,
        cevap: `Sabah yola \xe7ıktıysa \xe7oktan varmıştır.`,
        yanliscevaplar: [`Hayat, başımızdan ge\xe7enlerin toplamıdır.`, `G\xfcn aşırı kasabaya inerlerdi.`, `Bu masalı k\xfc\xe7\xfckl\xfcğ\xfcnde anlatırlarmış.`]
    }],
    sira = 0,
    takim1 = {
        ad: "",
        logo: "",
        renk: "",
        para: 0,
        puan: 0,
        ilerleme: 50
    },
    takim2 = {
        ad: "",
        logo: "",
        renk: "",
        para: 0,
        puan: 0,
        ilerleme: 50
    },
    rengiKoyulastir = (hex, percent) => {
        // Hex kodu, # işareti ile başlıyorsa onu kaldırıyoruz
        hex = hex.replace('#', '');
      
        // Renk kodunun uzunluğunu kontrol et
        if (hex.length !== 6) {
          throw new Error('Geçerli bir hex kodu girin (örneğin #RRGGBB)');
        }
      
        // Hex'i RGB'ye çeviriyoruz
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
      
        // Koyu yapma işlemi
        r = Math.max(0, Math.min(255, r * (1 - percent)));
        g = Math.max(0, Math.min(255, g * (1 - percent)));
        b = Math.max(0, Math.min(255, b * (1 - percent)));
      
        // Yeni hex kodunu döndür
        return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
      }
$(".dropdowns").click(a => {
    openclose("close", ".section-dropdown"), $(".for-dropdown").before().text(this.innerHTML)
}), $(".for-dropdown").click(() => {
    openclose("open", ".section-dropdown")
}), 
$(".cevaplar").click(function(event) {
    dogrumu = this.innerHTML == sorulansoru.cevap
    open(dogrumu ? ".dogru" : ".yanlis")
    open(".transparan")
    surecalisiyormu = false
    if(dogrumu){
        if(suankitakim.ilerleme == 95){
            galip()
            arkaplanmuzigi.pause()
            return
        }
        suankitakim.puan += 25
        suankitakim.para += 10
        suankitakim.ilerleme += 5
        suankitakim == takim1 ? takim2.ilerleme -= 5 : takim1.ilerleme -= 5
        cal("dogrucevap.m4a")
        confetti({
            particleCount: 200,
            spread: 300,
            origin: { y: 0.5 },
          });
        //takimIsmineGoreCal("galip")
    }else{
        cal("yanliscevap.m4a")
    }
    suankitakim = suankitakim == takim1 ? takim2 : takim1
});

$(".takimadisec").click(() => {
  if (0 == takimsecimi) {
    takim1.ad = $("#takimlar").val(), takim1.renk = $("#renkPaleti").val(), $("#takimlar").children("." + takim1.ad).remove(), takim1.logo = $(".swiper-slide-active")[0].src, alert("1.Tak\u0131m se\xe7ildi : " + takim1.ad + ". 2.Tak\u0131m\u0131 se\xe7iniz."), takimsecimi += 1, $(".isimgiris").val(""), $(".isimgiris").attr("placeholder", "2.Tak\u0131m\u0131 se\xe7iniz.");
    suankitakim = takim1
    takim1.id = takim1.ad == "Akıncılar" ? "akincilar" 
    : takim1.ad == "Lağımcılar" ? "lagimcilar"
    : takim1.ad == "Mezarcılar" ? "mezarcilar"
    : takim1.ad == "Yeni Çeriler" ? "yeniceriler" : null
    return
}
if (1 == takimsecimi) {
    takim2.ad = $("#takimlar").val(), takim2.renk = $("#renkPaleti").val(), $("#takimlar").children("." + takim2.ad).remove(), takim2.logo = $(".swiper-slide-active")[0].src
    takim2.id = takim2.ad == "Akıncılar" ? "akincilar" 
    : takim2.ad == "Lağımcılar" ? "lagimcilar"
    : takim2.ad == "Mezarcılar" ? "mezarcilar"
    : takim2.ad == "Yeni Çeriler" ? "yeniceriler" : null
    open(".oyun")
    open("#takimBari")
    close(".takimekrani")
    close(".back")
    cal("oyunbaslasin.mp3")
    arkaPlanMuziginiAyarla("muzik.mp3",1)
    surecalisiyormu = true;
    kalanSure = 45;
    sorulansoru = sorular[Math.floor(Math.random() * sorular.length)]
    var cevaplar = sorulansoru.yanliscevaplar
    cevaplar.push(sorulansoru.cevap)
    var karistirilmisCevaplar = karistir(cevaplar)  
    $(".cevaplar").each(function( index ) {
        $(".cevaplar")[index].style.backgroundColor = "rgba(255, 255, 255, 0.14)"
        $(".cevaplar")[index].innerHTML = karistirilmisCevaplar[index]
        if($(".cevaplar")[index].innerHTML == sorulansoru.cevap){
            
        $(".cevaplar")[index].style.backgroundColor = "red"
        }
    })
    surecalisiyormu = true;
    kalanSure = 45;
    ekraniGuncelle();
}
}), $(".menubtn")[0].addEventListener("click", () => {
  close(".anamenu"), open(".takimekrani"), close(".cenkLogo"),open(".back")
})
function arkaPlanMuziginiAyarla(src,volume){
    arkaplanmuzigi.pause()
    arkaplanmuzigi.childNodes[1].src = "./ses/arkaplan/" + src
    arkaplanmuzigi.load()
    arkaplanmuzigi.volume = volume
    arkaplanmuzigi.play()
  
  }
  $(".menubtn")[1].addEventListener("click", () => {
    close(".anamenu")
    close(".logobuyuk")
    open(".nasiloynanir")
    open(".back")
})
ekraniGuncelle = () => {
    $(".sorusayi")[0].innerHTML = `Soru ${suankiTur}`
    $(".soruyazi")[0].innerHTML = sorulansoru.soru + "";
    $(".takimresim")[0].src = takim1.logo;
    $(".takimresim")[1].src = takim2.logo;
    $(".takimisim")[0].innerHTML = takim1.ad;
    $(".takimisim")[1].innerHTML = takim2.ad;
    if(sira == 0){
        $(".ikincitakim").removeClass("sirabizdeKutu")
        $('.ikincitakim').attr('style', `background-color:none!important`);
        $(".birincitakim").addClass("sirabizdeKutu")
        $('.sirabizdeKutu').attr('style', `background-color:rgba(${hexToRgb(takim1.renk).r},${hexToRgb(takim1.renk).g},${hexToRgb(takim1.renk).b},0.3)!important`);

    }else{
        $(".birincitakim").removeClass("sirabizdeKutu")
        $('.birincitakim').attr('style', `background-color:none!important`);
        $(".ikincitakim").addClass("sirabizdeKutu")
        $('.sirabizdeKutu').attr('style', `background-color:rgba(${hexToRgb(takim2.renk).r},${hexToRgb(takim2.renk).g},${hexToRgb(takim2.renk).b},0.3)!important`);
    }
    $(".bar1").css("background-color",takim1.renk) 
    $(".bar2").css("background-color",takim2.renk)
    $(".bar1").css("width", takim1.ilerleme + "%")
    $(".takim1puan").html(takim1.ilerleme + "%")
    $(".takim2puan").html(takim2.ilerleme + "%")
    $(".takim1para").html(takim1.para)
    $(".takim2para").html(takim2.para)
}
function karistir(array) {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}