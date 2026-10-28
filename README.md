# Yâren

> Her fincanda ortak bir hikâye.

- **Canlı site:** https://sonmez9.github.io/Yaren/
- **Kaynak kod:** https://github.com/sonmez9/Yaren

Yâren, geleneksel Türk kahvesini espresso ve modern demleme kültürüyle birleştiren hayali bir kahve markası. Bu depo, marka için hazırlanmış modern, sıcak ve mobil uyumlu **tek sayfalık web sitesini** içerir.

## Özellikler

- **Hero:** marka adı, slogan ve ürünlere yumuşak kaydırmayla inen **"Kahveleri Keşfet"** butonu
- **Hikâyemiz:** markanın "gelenek + modernlik" anlatısı
- **Kahvelerimiz:** Türk Kahvesi, Espresso ve Filtre Kahve için görsel, kısa açıklama ve örnek fiyat
- **İletişim formu:** ad, e-posta ve mesaj alanları
  - boş alan (yalnızca boşluk girilenler dahil) ve e-posta biçimi kontrol edilir
  - hatalı alanın altında açıklayıcı mesaj gösterilir, odak ilk hatalı alana gider
  - geçerli gönderimde başarı mesajı gösterilir ve form sıfırlanır
  - sunucu bağlantısı yoktur, her şey tarayıcıda çalışır
- Sabit header, mobil hamburger menü, kaydırınca beliren bölümler (`prefers-reduced-motion` desteğiyle)
- Mobil öncelikli, 360px'ten geniş ekranlara uyumlu düzen

## Çalıştırma

Kurulum ya da derleme adımı yoktur.

**En kolayı:** `index.html` dosyasını tarayıcıda açın.

**Yerel sunucuyla** (isteğe bağlı):

```bash
python3 -m http.server 8000
# ardından http://localhost:8000 adresini açın
```

Telefonda denemek için bilgisayar ve telefon aynı ağdayken sunucuyu başlatıp telefonda `http://<bilgisayarın-IP-adresi>:8000` adresini açın.

> Yazı tipleri Google Fonts'tan yüklenir, bu yüzden ilk açılışta internet bağlantısı gerekir. Bağlantı yoksa sayfa yedek sistem fontlarıyla çalışmaya devam eder.

## Proje yapısı

```
├── index.html            # sayfa iskeleti ve içerik
├── css/
│   ├── variables.css     # renk, font ve boşluk tokenları
│   ├── base.css          # sıfırlama, tipografi, odak stilleri
│   ├── layout.css        # header, hero, bölümler, footer
│   └── components.css    # buton, kart, form, animasyon
├── js/
│   ├── main.js           # sticky header, mobil menü, kaydırma animasyonu
│   └── form.js           # form doğrulama
└── assets/
    ├── images/           # WebP'ye çevrilmiş, boyutlandırılmış fotoğraflar
    ├── favicon.svg
    └── og-image.jpg      # paylaşım önizleme görseli (1200x630)
```

## Teknik kararlar

- **Sade HTML, CSS ve JavaScript.** Kapsam küçük olduğu için framework ya da derleme adımı kullanılmadı, kod doğrudan okunabilir.
- **CSS değişkenleri** (`variables.css`): tüm renk ve boşluk değerleri tek yerden yönetilir.
- **Mobil öncelikli** yazılmış CSS, kırılım noktaları 768px ve 1024px.
- **Erişilebilirlik:** anlamsal etiketler, `label` bağlantıları, `aria-invalid` / `aria-describedby`, ekran okuyucuya duyurulan hata ve başarı mesajları, görünür odak halkası, "İçeriğe geç" bağlantısı. Metin renkleri WCAG AA kontrastını sağlar.
- **Performans:** görseller WebP'ye çevrildi (hero 1600px, diğerleri 900px), alt bölümlerdeki görseller `loading="lazy"`, tüm görsellerde `width` / `height` tanımlı.

## Ne yapıldı, hangi araçlar kullanıldı

Yâren için sade HTML, CSS ve JavaScript ile, framework kullanmadan tek sayfalık bir site hazırlandı. Sıcak bir palet (krem, koyu kahve, zeytin yeşili ve bakır), Fraunces ve Inter yazı tipleri ve Pexels fotoğraflarıyla marka atmosferi kuruldu. İletişim formundaki doğrulama, mobil menü ve kaydırma animasyonları saf JavaScript ile yazıldı. Proje, yapay zekâ asistanı Claude Code ile adım adım birlikte geliştirildi. Sonuçlar gerçek Chrome üzerinde otomatik testlerle (form senaryoları, klavye gezinmesi, 360–1440px taşma kontrolü) ve Lighthouse ile (Performans, Erişilebilirlik, En İyi Uygulamalar ve SEO için 99–100 puan) doğrulandı.

## Görsel kaynakları

Tüm fotoğraflar [Pexels](https://www.pexels.com) üzerinden, Pexels lisansıyla kullanılmıştır.

| Dosya | Fotoğrafçı | Kaynak |
|---|---|---|
| `hero.webp` | Việt Anh Nguyễn | [Pexels](https://www.pexels.com/tr-tr/fotograf/dogal-isik-ve-bitkilerle-rahat-kafe-ic-mekani-31133774/) |
| `hikaye.webp` | Meryemce | [Pexels](https://www.pexels.com/tr-tr/fotograf/kol-silah-insanlar-kafein-22033532/) |
| `turk-kahvesi.webp` | Oben Kural | [Pexels](https://www.pexels.com/tr-tr/fotograf/plaka-tabak-fincan-kupa-17777276/) |
| `espresso.webp` | Pew Nguyen | [Pexels](https://www.pexels.com/tr-tr/fotograf/ahsap-yuzey-uzerinde-kahve-cekirdekleri-bulunan-estetik-kahve-fincani-36871273/) |
| `filtre.webp` | Vinícius Vieira ft | [Pexels](https://www.pexels.com/tr-tr/fotograf/kahve-fincan-kupa-su-22608836/) |
| `og-image.jpg` | Việt Anh Nguyễn | `hero.webp` ile aynı fotoğrafın paylaşım önizlemesi için kırpılmış hâli |

Sitedeki adres, çalışma saatleri ve fiyatlar örnek amaçlıdır.
