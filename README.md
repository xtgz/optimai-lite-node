# Optimai Lite Node Bot

Bu bot, Optimai Lite Node'unuzu otomatik olarak yönetmenizi sağlar. Node'unuzun sürekli çalışır durumda kalmasını ve günlük/haftalık ödüllerinizi otomatik olarak toplamasını sağlar.

## Özellikler

* 🔄 Otomatik ping (varsayılan: her 5 dakikada bir)
* 📅 Otomatik günlük check-in
* 🎁 Otomatik haftalık ödül toplama
* 💰 Bakiye takibi
* 📊 Detaylı işlem logları
* 🔀 Çoklu hesap desteği
* 🌐 Proxy desteği
* 🎲 Doğal davranış için rastgele zamanlama
* 🔐 Güvenli token yönetimi
* 🌍 WebSocket bağlantısı ile gerçek zamanlı iletişim
* 🔑 X-Client-Authentication desteği
* 📱 Farklı tarayıcı profilleri desteği

## Gereksinimler

* NodeJS 16 veya üzeri
* Optimai hesabı ve refresh token
* (Opsiyonel) Proxy listesi

## Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/getcakedieyoungx/optimai-lite-node-bot.git
cd optimai-lite-node-bot
```

2. Gerekli paketleri yükleyin:
```bash
npm install
```

3. Konfigürasyon:
   * `.env.example` dosyasını `.env` olarak kopyalayın
   * `.env` dosyasını düzenleyerek gerekli bilgileri girin
   * `accounts.json.example` dosyasını `accounts.json` olarak kopyalayın ve hesap bilgilerinizi ekleyin
   * (Opsiyonel) Proxy kullanımı için `proxy.txt` oluşturun

## Kullanım

Botu başlatmak için:
```bash
npm start
```

## Özelleştirme

### Çoklu Hesap

Birden fazla hesabı yönetmek için `accounts.json` dosyasını düzenleyin:

```json
[
  {
    "refreshToken": "hesap1_refresh_token",
    "nodeToken": []
  },
  {
    "refreshToken": "hesap2_refresh_token",
    "nodeToken": []
  }
]
```

### Proxy Kullanımı

Proxy kullanmak için `proxy.txt` dosyası oluşturun:

```
http://kullanici:sifre@ip:port
http://kullanici:sifre@ip:port
```

### Zamanlama

Bot, her hesap için farklı rastgele zamanlarda işlem yapar:

* Ping: Her 5 dakikada bir
* Daily Claim: Her hesap için günde bir kez, rastgele bir saatte
* Weekly Claim: Her hesap için haftada bir kez, rastgele bir gün ve saatte

İsterseniz `.env` dosyasından CRON ayarlarını özelleştirebilirsiniz.

## Token Alma

Optimai hesabınızdan refresh token almak için:

1. https://node.optimai.network adresine gidin
2. Tarayıcınızın geliştirici araçlarını açın (F12)
3. Console sekmesine aşağıdaki kodu yapıştırın:

```javascript
const token = localStorage.getItem("opai_refresh_token");
if (token) {
  const textArea = document.createElement("textarea");
  textArea.value = token;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  console.log("%cToken copied to clipboard!", "color: green; font-size: 16px;");
} else {
  console.error("Token not found in localStorage!");
}
```

## İletişim

* Telegram: [@getcakedieyoungx](https://t.me/getcakedieyoungx)

## Bağış

Projeyi desteklemek isterseniz:

* EVM: `0xE065339713A8D9BF897d595ED89150da521a7d09`
* SOLANA: `CcBPMkpMbZ4TWE8HeUWyv9CkEVqPLJ5gYe163g5SR4Vf`

## Yasal Uyarı

Bu bot eğitim amaçlıdır. Kendi sorumluluğunuzda kullanın.