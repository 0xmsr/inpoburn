const TRANSLATIONS = {
  en: {
    'nav.how': 'How It Works',
    'nav.tos': 'ToS',
    'nav.faq': 'FAQ',
    'nav.risk': 'Risks',
    'wallet.sub': '// choose your wallet //',
    'wallet.detecting': 'Detecting...',
    'wallet.detected': 'Detected ✔',
    'wallet.notFound': 'Not Detected',
    'hero.badge': '🔴 Live on Blockchain',
    'hero.sub': '// burn any erc20 token → claim 1 IB token instantly //',
    'stats.tokens': 'All Tokens Supported',
    'stats.ratio': 'Burn → IB Ratio',
    'stats.standard': 'Standard',
    'sidebar.guide': 'Quick Guide',
    'sidebar.step1': 'Connect your wallet to a supported network (auto-switch)',
    'sidebar.step2': 'Enter the ERC20 token address to burn',
    'sidebar.step3': 'Set the amount (min. 1 whole token)',
    'sidebar.step4': 'Approve & Burn — receive 1 IB token!',
    'sidebar.copy': 'Click to copy',
    'sidebar.explorer': 'View on Explorer ↗',
    'card.title': 'Burn & Claim',
    'card.tagline': '// approve → burn → receive 1 IB //',
    'card.connect': '⚡ Connect Wallet',
    'card.tokenLabel': 'Token Address to Burn',
    'card.pickerHint': '📂 SELECT FROM WALLET — or type manually below',
    'card.pickerLoading': '⏳ Loading tokens...',
    'card.tokenPlaceholder': '0x123... (or select from list above)',
    'card.amountLabel': 'Amount (Min 1 Token, Integer Only)',
    'card.tosAgree': 'I have read and agree to the',
    'card.tosTos': 'Terms of Service',
    'card.tosRisk': 'Risk Disclaimer',
    'card.burnBtn': '🔥 Approve & Burn',
    'card.statusWaiting': '[ Waiting for wallet connection... ]',
    'modal.how.title': 'How It Works',
    'modal.how.sub': '// burn & claim mechanism //',
    'modal.how.p1': 'Inpoburn Hub allows anyone to burn any ERC20 token on a supported blockchain network and receive 1 IB (Inpoburn) token in return.',
    'modal.how.steps': 'Steps',
    'modal.how.s1': '1. Connect your wallet to a supported network.',
    'modal.how.s2': '2. Enter the ERC20 token address you want to burn.',
    'modal.how.s3': '3. Set the amount (min. 1 whole token).',
    'modal.how.s4': '4. Click Approve & Burn — wallet will prompt two transactions: approve and burn.',
    'modal.how.s5': '5. After blockchain confirmation, 1 IB token is sent to your wallet automatically.',
    'modal.how.sc': 'Smart Contract',
    'modal.how.scp': 'The burn process is fully on-chain through the UniversalBurner contract. Burned tokens are sent to the dead address (0x000...dEaD) and cannot be recovered.',
    'modal.tos.title': 'Terms of Service',
    'modal.tos.sub': '// terms & conditions of use //',
    'modal.tos.h1': '1. Acceptance of Terms',
    'modal.tos.p1': 'By using Inpoburn Hub, you agree to all applicable terms and conditions. If you disagree, please stop using this service.',
    'modal.tos.h2': '2. Nature of Service',
    'modal.tos.p2': 'Inpoburn Hub is an experimental dApp running on supported blockchain networks. This service is provided "as is" without any warranty.',
    'modal.tos.h3': '3. User Risk',
    'modal.tos.p3': 'You are solely responsible for every transaction made. Burned tokens cannot be returned under any circumstance.',
    'modal.tos.h4': '4. Limitation of Liability',
    'modal.tos.p4': 'The Inpoburn team is not responsible for asset loss, transaction failure, or any damage arising from use of this platform.',
    'modal.tos.h5': '5. Prohibited Uses',
    'modal.tos.l1': 'Using the platform for illegal purposes',
    'modal.tos.l2': 'Attempting to exploit the smart contract',
    'modal.tos.l3': 'Spreading false information about the platform',
    'modal.tos.h6': '6. Service Changes',
    'modal.tos.p6': 'We reserve the right to modify, suspend, or terminate the service at any time without prior notice.',
    'modal.tos.h7': '7. Governing Law',
    'modal.tos.p7': 'These terms are governed by generally applicable international contract law principles.',
    'modal.faq.title': 'FAQ',
    'modal.faq.sub': '// frequently asked questions //',
    'modal.faq.q1': 'What tokens can be burned?',
    'modal.faq.a1': 'Any valid ERC20 token on the supported network. Make sure you have enough tokens and ETH for gas fees.',
    'modal.faq.q2': 'What is the minimum burn amount?',
    'modal.faq.a2': 'Minimum 1 whole token (integer). Decimal values like 0.5 or 0.9 are not accepted.',
    'modal.faq.q3': 'Can I receive more than 1 IB?',
    'modal.faq.a3': 'Each burn transaction yields exactly 1 IB token, regardless of how many tokens you burn.',
    'modal.faq.q4': 'Which networks are supported?',
    'modal.faq.a4': 'Inpoburn Hub supports major blockchain networks. The platform will show available network options when you connect your wallet.',
    'modal.faq.q5': 'Are there platform fees?',
    'modal.faq.a5': 'No platform fees. You only pay the gas fee of the blockchain network you are using.',
    'modal.faq.q6': 'What network does Inpoburn use?',
    'modal.faq.a6': 'Inpoburn Hub runs on Base Mainnet (Chain ID 8453). Make sure your wallet is connected to Base and you have ETH on Base for gas fees.',
    'modal.faq.q7': 'Why did my transaction fail?',
    'modal.faq.a7': 'Possible causes: invalid token, insufficient balance, or a congested network. Check your transaction on the block explorer.',
    'modal.risk.title': 'Risk Disclaimer',
    'modal.risk.sub': '// important risk information //',
    'modal.risk.h1': 'Irreversibility Risk',
    'modal.risk.p1': 'Blockchain transactions are permanent and cannot be reversed. Once tokens are burned, the process cannot be undone under any circumstance.',
    'modal.risk.h2': 'Smart Contract Risk',
    'modal.risk.p2': 'Although the contract has been tested, all smart contracts carry potential bugs. Use only amounts you are prepared to lose.',
    'modal.risk.h3': 'Network Risk',
    'modal.risk.p3': 'Network congestion can cause transactions to be delayed or fail. Gas fees can fluctuate significantly.',
    'modal.risk.h4': 'Token Risk',
    'modal.risk.p4': 'Always verify the token address before burning. Fake tokens or tokens with special mechanics (fee-on-transfer, rebase) may not work correctly.',
    'modal.risk.h5': 'Live Mainnet Platform',
    'modal.risk.p5': 'Inpoburn runs on Base Mainnet. IB tokens claimed are live on-chain and carry real network value. All transactions are final.',
    'modal.risk.h6': 'Important Advice',
    'modal.risk.l1': 'Always verify the contract address before transacting',
    'modal.risk.l2': 'Never burn tokens that have important value to you',
    'modal.risk.l3': 'Make sure you are connected to the correct network',
    'modal.risk.l4': 'Use the minimum amount for your first attempt',
    'footer.desc': 'Experimental burn-to-claim ERC20 token platform on blockchain. Not financial advice. Use wisely.',
    'footer.platform': 'Platform',
    'footer.legal': 'Legal',
    'footer.community': 'Community',
    'footer.faucet': 'Bridge to Base ↗',
    'footer.copy': '© 2025 Inpoburn Hub · All rights reserved',
    'lang.label': '🌐 Language',
    'status.waiting':     '[ Waiting for wallet connection... ]',
    'status.connecting':  '[ ⏳ Connecting wallet... ]',
    'status.checknet':    '[ 🔄 Checking network... ]',
    'status.addnet':      '[ ➕ Adding network to wallet... ]',
    'status.wrongnet':    '[ ⚠️ Wrong network, transactions may fail! ]',
    'status.connected':   '[ ✅ Connected to Base. Check ToS to start! ]',
    'status.wrongchain':  '[ ⚠️ Connected, but wrong network. Please switch manually. ]',
    'status.rejected':    '[ ❌ Connection rejected by user. ]',
    'status.failconn':    '[ ❌ Failed to connect wallet. ]',
    'status.notoken':     '[ ❌ Token address cannot be empty! ]',
    'status.badaddr':     '[ ❌ Invalid token address! ]',
    'status.badamount':   '[ ❌ Amount must be a whole number ≥ 1 (e.g. 1, 2, 10) ]',
    'status.notERC20':    '[ ❌ Not a valid ERC20 token on this network. ]',
    'status.txcancel':    '[ ❌ Transaction cancelled by user. ]',
    'status.notos':       '[ ❌ Please check ToS & Risk Disclaimer first! ]',
    'status.nosigner':    '[ ❌ Signer unavailable! ]',
    'status.checkdec':    '[ 🔍 Checking token decimals... ]',
    'status.checkallow':  '[ 🔓 Checking allowance... ]',
    'status.approving':   "[ ✍️ Click 'Approve' in your wallet... ]",
    'status.waitapprove': '[ ⏳ Waiting for approve confirmation... ]',
    'status.approved':    '[ ✅ Approval granted! ]',
    'status.burning':     '[ 🔥 Burning & Claiming... ]',
    'status.waitburn':    '[ ⏳ Waiting for blockchain confirmation... ]',
    'status.success':     '[ 🎉 Success! 1 IB has been sent to your wallet. ]',
    'status.selected':    (name, sym, bal) => `[ 🎯 Token selected: ${name} (${sym}) — balance: ${bal} ]`,
    'status.copied':      '✅ Copied!',
    'status.signinRequired': '[ 🔐 Sign the message in your wallet to unlock burn! ]',
    'status.signedIn':    '[ ✅ Verified! Wallet confirmed — ready to burn. ]',
    'status.signSkipped': '[ 🔒 Burn locked. Sign message to verify you\'re human. ]',
    'picker.detecting': '⏳ Detecting ERC20 tokens in wallet...',
    'picker.scanning':  (from, to, i, max) => `🔍 Scanning block ${from}–${to} (${i}/${max})...`,
    'picker.checking':  (n) => `🔎 Checking ${n} token contracts...`,
    'picker.none':      (n) => `⚠️ No ERC20 tokens detected in last ~${n} blocks.`,
    'picker.empty':     '⚠️ No ERC20 tokens with balance > 0 found.',
    'picker.error':     '❌ Failed to load tokens. Type address manually.',
    'wallet.install':   (key) => `${key} not detected.\nOpen installation page?`,
    'wallet.nowallet':  '[ ❌ No wallet detected. ]',
	'footer.community': 'Community',
    'footer.coffee': '☕ Buy Me a Coffee (Base/ETH)',
    'footer.copyMsg': 'Address Copied! Thanks for the coffee! ☕',
  },
  id: {
    'nav.how': 'Cara Kerja',
    'nav.tos': 'ToS',
    'nav.faq': 'FAQ',
    'nav.risk': 'Risiko',
    'wallet.sub': '// pilih dompet kamu //',
    'wallet.detecting': 'Mendeteksi...',
    'wallet.detected': 'Terdeteksi ✔',
    'wallet.notFound': 'Tidak Terdeteksi',
    'hero.sub': '// bakar token erc20 apapun → klaim 1 IB token seketika //',
    'stats.tokens': 'Token Didukung',
    'stats.ratio': 'Rasio Burn → IB',
    'stats.standard': 'Standar',
    'sidebar.guide': 'Panduan Cepat',
    'sidebar.step1': 'Hubungkan wallet ke jaringan yang didukung (auto-switch)',
    'sidebar.step2': 'Masukkan alamat token ERC20 yang ingin dibakar',
    'sidebar.step3': 'Tentukan jumlah (min. 1 token bulat)',
    'sidebar.step4': 'Approve & Burn — terima 1 IB token!',
    'sidebar.copy': 'Klik untuk copy',
    'sidebar.explorer': 'Lihat di Explorer ↗',
    'card.title': 'Burn & Klaim',
    'card.tagline': '// approve → bakar → terima 1 IB //',
    'card.connect': '⚡ Hubungkan Wallet',
    'card.tokenLabel': 'Alamat Token yang Akan Dibakar',
    'card.pickerHint': '📂 PILIH DARI WALLET — atau ketik manual di bawah',
    'card.pickerLoading': '⏳ Memuat token...',
    'card.tokenPlaceholder': '0x123... (atau pilih dari daftar atas)',
    'card.amountLabel': 'Jumlah (Min 1 Token, Bilangan Bulat)',
    'card.tosAgree': 'Saya telah membaca dan menyetujui',
    'card.tosTos': 'Syarat & Ketentuan',
    'card.tosRisk': 'Disclaimer Risiko',
    'card.burnBtn': '🔥 Setujui & Bakar',
    'card.statusWaiting': '[ Menunggu koneksi wallet... ]',
    'modal.how.title': 'Cara Kerja',
    'modal.how.sub': '// mekanisme burn & claim //',
    'modal.how.p1': 'Inpoburn Hub memungkinkan siapa saja untuk membakar token ERC20 apapun di jaringan blockchain yang didukung dan menerima 1 IB (Inpoburn) token sebagai gantinya.',
    'modal.how.steps': 'Langkah-langkah',
    'modal.how.s1': '1. Hubungkan wallet kamu ke jaringan yang didukung.',
    'modal.how.s2': '2. Masukkan alamat token ERC20 yang ingin dibakar.',
    'modal.how.s3': '3. Tentukan jumlah token (min. 1 token bulat).',
    'modal.how.s4': '4. Klik Approve & Burn — wallet akan meminta dua transaksi: approve dan burn.',
    'modal.how.s5': '5. Setelah konfirmasi blockchain, 1 IB token masuk ke wallet kamu secara otomatis.',
    'modal.how.sc': 'Smart Contract',
    'modal.how.scp': 'Proses burn dilakukan sepenuhnya on-chain melalui kontrak UniversalBurner. Token yang dibakar dikirim ke alamat dead (0x000...dEaD) dan tidak dapat dikembalikan.',
    'modal.tos.title': 'Syarat & Ketentuan',
    'modal.tos.sub': '// syarat & ketentuan penggunaan //',
    'modal.tos.h1': '1. Penerimaan Syarat',
    'modal.tos.p1': 'Dengan menggunakan Inpoburn Hub, kamu menyetujui seluruh syarat dan ketentuan yang berlaku. Jika tidak setuju, harap hentikan penggunaan layanan ini.',
    'modal.tos.h2': '2. Sifat Layanan',
    'modal.tos.p2': 'Inpoburn Hub adalah dApp eksperimental yang berjalan di jaringan blockchain yang didukung. Layanan ini disediakan "sebagaimana adanya" tanpa jaminan apapun.',
    'modal.tos.h3': '3. Risiko Pengguna',
    'modal.tos.p3': 'Kamu sepenuhnya bertanggung jawab atas setiap transaksi yang dilakukan. Token yang sudah dibakar tidak dapat dikembalikan dalam kondisi apapun.',
    'modal.tos.h4': '4. Batasan Tanggung Jawab',
    'modal.tos.p4': 'Tim Inpoburn tidak bertanggung jawab atas kehilangan aset, kegagalan transaksi, atau kerugian apapun yang timbul dari penggunaan platform ini.',
    'modal.tos.h5': '5. Penggunaan yang Dilarang',
    'modal.tos.l1': 'Menggunakan platform untuk tujuan ilegal',
    'modal.tos.l2': 'Mencoba mengeksploitasi smart contract',
    'modal.tos.l3': 'Menyebarkan informasi palsu tentang platform',
    'modal.tos.h6': '6. Perubahan Layanan',
    'modal.tos.p6': 'Kami berhak mengubah, menangguhkan, atau menghentikan layanan kapan saja tanpa pemberitahuan sebelumnya.',
    'modal.tos.h7': '7. Hukum yang Berlaku',
    'modal.tos.p7': 'Syarat ini diatur oleh prinsip-prinsip umum hukum kontrak yang berlaku secara internasional.',
    'modal.faq.title': 'FAQ',
    'modal.faq.sub': '// pertanyaan yang sering diajukan //',
    'modal.faq.q1': 'Token apa yang bisa dibakar?',
    'modal.faq.a1': 'Semua token ERC20 yang valid di jaringan yang didukung. Pastikan kamu memiliki cukup token dan ETH untuk gas fee.',
    'modal.faq.q2': 'Berapa minimal token yang bisa dibakar?',
    'modal.faq.a2': 'Minimal 1 token bulat (integer). Nilai desimal seperti 0.5 atau 0.9 tidak diterima.',
    'modal.faq.q3': 'Apakah saya bisa mendapat lebih dari 1 IB?',
    'modal.faq.a3': 'Setiap transaksi burn menghasilkan tepat 1 IB token, tidak peduli berapa banyak token yang kamu bakar.',
    'modal.faq.q4': 'Network apa yang didukung?',
    'modal.faq.a4': 'Inpoburn Hub mendukung jaringan blockchain utama. Platform akan menampilkan pilihan network yang tersedia saat kamu menghubungkan wallet.',
    'modal.faq.q5': 'Apakah ada biaya platform?',
    'modal.faq.a5': 'Tidak ada biaya platform. Kamu hanya membayar gas fee jaringan blockchain yang sedang kamu gunakan.',
    'modal.faq.q6': 'Network apa yang digunakan Inpoburn?',
    'modal.faq.a6': 'Inpoburn Hub berjalan di Base Mainnet (Chain ID 8453). Pastikan wallet kamu terhubung ke Base dan memiliki ETH di Base untuk membayar gas fee.',
    'modal.faq.q7': 'Transaksi saya gagal, kenapa?',
    'modal.faq.a7': 'Kemungkinan penyebab: token tidak valid, saldo tidak cukup, atau jaringan sedang sibuk. Cek status transaksi di block explorer.',
    'modal.risk.title': 'Disclaimer Risiko',
    'modal.risk.sub': '// informasi risiko penting //',
    'modal.risk.h1': 'Risiko Irreversibilitas',
    'modal.risk.p1': 'Transaksi blockchain bersifat permanen dan tidak dapat dibatalkan. Setelah token dibakar, proses tidak bisa diurungkan dalam kondisi apapun.',
    'modal.risk.h2': 'Risiko Smart Contract',
    'modal.risk.p2': 'Meskipun kontrak telah diuji, semua smart contract mengandung potensi bug. Gunakan dengan jumlah yang kamu siap kehilangan.',
    'modal.risk.h3': 'Risiko Jaringan',
    'modal.risk.p3': 'Kongestis jaringan dapat menyebabkan transaksi tertunda atau gagal. Gas fee dapat berfluktuasi secara signifikan.',
    'modal.risk.h4': 'Risiko Token',
    'modal.risk.p4': 'Pastikan kamu memverifikasi alamat token sebelum burn. Token palsu atau token dengan mekanisme khusus (fee-on-transfer, rebase) mungkin tidak bekerja dengan benar.',
    'modal.risk.h5': 'Platform Mainnet Live',
    'modal.risk.p5': 'Inpoburn berjalan di Base Mainnet. Token IB yang diklaim bersifat on-chain nyata. Seluruh transaksi bersifat final.',
    'modal.risk.h6': 'Saran Penting',
    'modal.risk.l1': 'Selalu verifikasi alamat kontrak sebelum bertransaksi',
    'modal.risk.l2': 'Jangan pernah burn token yang memiliki nilai penting bagimu',
    'modal.risk.l3': 'Pastikan kamu terhubung ke network yang benar',
    'modal.risk.l4': 'Gunakan jumlah minimal untuk percobaan pertama',
    'footer.desc': 'Platform burn-to-claim ERC20 token eksperimental di blockchain. Bukan financial advice. Gunakan dengan bijak.',
    'footer.platform': 'Platform',
    'footer.legal': 'Legal',
    'footer.community': 'Komunitas',
    'footer.faucet': 'Bridge to Base ↗',
    'footer.copy': '© 2025 Inpoburn Hub · Hak cipta dilindungi',
    'lang.label': '🌐 Bahasa',
    'status.waiting':     '[ Menunggu koneksi wallet... ]',
    'status.connecting':  '[ ⏳ Menghubungkan wallet... ]',
    'status.checknet':    '[ 🔄 Mengecek network... ]',
    'status.addnet':      '[ ➕ Menambahkan network ke wallet... ]',
    'status.wrongnet':    '[ ⚠️ Network tidak sesuai, transaksi mungkin gagal! ]',
    'status.connected':   '[ ✅ Terhubung ke Base. Centang ToS untuk mulai! ]',
    'status.wrongchain':  '[ ⚠️ Terhubung, tapi network tidak sesuai. Harap ganti manual. ]',
    'status.rejected':    '[ ❌ Koneksi ditolak oleh pengguna. ]',
    'status.failconn':    '[ ❌ Gagal menghubungkan wallet. ]',
    'status.notoken':     '[ ❌ Token address tidak boleh kosong! ]',
    'status.badaddr':     '[ ❌ Alamat Token tidak valid! ]',
    'status.badamount':   '[ ❌ Jumlah harus bilangan bulat minimal 1 (contoh: 1, 2, 10) ]',
    'status.notERC20':    '[ ❌ Bukan token ERC20 valid di network ini. ]',
    'status.txcancel':    '[ ❌ Transaksi dibatalkan oleh pengguna. ]',
    'status.notos':       '[ ❌ Harap centang ToS & Risk Disclaimer terlebih dahulu! ]',
    'status.nosigner':    '[ ❌ Signer tidak tersedia! ]',
    'status.checkdec':    '[ 🔍 Mengecek desimal token... ]',
    'status.checkallow':  '[ 🔓 Mengecek izin (allowance)... ]',
    'status.approving':   "[ ✍️ Klik 'Approve' di wallet kamu... ]",
    'status.waitapprove': '[ ⏳ Menunggu konfirmasi approve... ]',
    'status.approved':    '[ ✅ Izin diberikan! ]',
    'status.burning':     '[ 🔥 Proses Burn & Claim... ]',
    'status.waitburn':    '[ ⏳ Menunggu konfirmasi blockchain... ]',
    'status.success':     '[ 🎉 Berhasil! 1 IB telah masuk ke dompet Anda. ]',
    'status.selected':    (name, sym, bal) => `[ 🎯 Token dipilih: ${name} (${sym}) — saldo: ${bal} ]`,
    'status.copied':      '✅ Tersalin!',
    'status.signinRequired': '[ 🔐 Tanda tangani pesan di wallet kamu untuk membuka burn! ]',
    'status.signedIn':    '[ ✅ Terverifikasi! Wallet dikonfirmasi — siap burn. ]',
    'status.signSkipped': '[ 🔒 Burn terkunci. Tanda tangani pesan untuk membuktikan kamu bukan bot. ]',
    'picker.detecting': '⏳ Mendeteksi token ERC20 di wallet...',
    'picker.scanning':  (from, to, i, max) => `🔍 Scan block ${from}–${to} (${i}/${max})...`,
    'picker.checking':  (n) => `🔎 Memeriksa ${n} token kontrak...`,
    'picker.none':      (n) => `⚠️ Tidak ada token ERC20 terdeteksi dalam ~${n} block terakhir.`,
    'picker.empty':     '⚠️ Tidak ada token ERC20 dengan saldo > 0 ditemukan.',
    'picker.error':     '❌ Gagal memuat daftar token. Ketik address manual.',
    'wallet.install':   (key) => `${key} tidak terdeteksi.\nBuka halaman instalasi?`,
    'wallet.nowallet':  '[ ❌ Tidak ada wallet terdeteksi. ]',
	'footer.community': 'Komunitas',
    'footer.coffee': '☕ Traktir Saya Kopi (Base/ETH)',
    'footer.copyMsg': 'Alamat Disalin! Terima kasih kopinya! ☕',
  }
};

let currentLang = localStorage.getItem('ib_lang') || 'en';

function t(key, ...args) {
  const val = TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key];
  if (typeof val === 'function') return val(...args);
  return val || key;
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (typeof val === 'string') el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  document.getElementById('langEN').classList.toggle('active', currentLang === 'en');
  document.getElementById('langID').classList.toggle('active', currentLang === 'id');

  ['metamask','trust','coinbase','browser'].forEach(key => {
    const span = document.getElementById('status-' + key);
    if (!span) return;
    if (span.textContent.includes('✔') || span.textContent.includes('Terdeteksi') || span.textContent.includes('Detected')) {
      span.textContent = t('wallet.detected');
    } else if (span.textContent !== t('wallet.detecting')) {
      span.textContent = t('wallet.notFound');
    } else {
      span.textContent = t('wallet.detecting');
    }
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ib_lang', lang);
  applyLang();
}

applyLang();

const BURNER_CONTRACT_ADDRESS = "0xB5E17d760192Dd896e49022BcC491D167085D61D";

const BURNER_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "burnAndClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minReceive",
				"type": "uint256"
			}
		],
		"name": "burnAndClaimWithMinReceive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ibToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountSent",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountReceivedByContract",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ibClaimed",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BurnAndClaimed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "EmergencyWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldReward",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newReward",
				"type": "uint256"
			}
		],
		"name": "IBRewardChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newToken",
				"type": "address"
			}
		],
		"name": "IBTokenSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "paused",
				"type": "bool"
			}
		],
		"name": "PauseToggled",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_tokens",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "setBatchTokenWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newReward",
				"type": "uint256"
			}
		],
		"name": "setIBRewardPerBurn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ibToken",
				"type": "address"
			}
		],
		"name": "setIBToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_paused",
				"type": "bool"
			}
		],
		"name": "setPaused",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_taxBps",
				"type": "uint256"
			}
		],
		"name": "setTokenTaxOverride",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "setTokenWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setWhitelistEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taxBps",
				"type": "uint256"
			}
		],
		"name": "TokenTaxOverrideSet",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "WhitelistToggled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "WhitelistUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DEAD_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "getTokenStats",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalBurnedAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "taxOverrideBps",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isWhitelisted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserStats",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "burnCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ibRewardPerBurn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ibToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "simulateBurn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "estimatedReceived",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "estimatedTaxBps",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenTaxOverrideBps",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenWhitelist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalBurned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalIBClaimed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userBurnCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const ERC20_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "minters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_minter",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "setMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const connectBtn    = document.getElementById('connectBtn');
const burnBtn       = document.getElementById('burnBtn');
const statusEl      = document.getElementById('status');
const walletBox     = document.getElementById('walletBox');
const walletOverlay = document.getElementById('walletOverlay');
const modalClose    = document.getElementById('modalClose');
const tosCheck      = document.getElementById('tosCheck');

let provider, signer, burnerContract, walletConnected = false, userSigned = false;

function openInfoModal(id) { document.getElementById('modal-' + id).classList.add('open'); }
function closeInfoModal(id) { document.getElementById('modal-' + id).classList.remove('open'); }

document.querySelectorAll('.info-overlay').forEach(el => {
    el.addEventListener('click', (e) => { if (e.target === el) el.classList.remove('open'); });
});
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.info-overlay.open, .wallet-overlay.open').forEach(el => el.classList.remove('open'));
});

function copyContractBURNER_CONTRACT_ADDRESS() {
    navigator.clipboard.writeText(BURNER_CONTRACT_ADDRESS).then(() => {
        const el = document.getElementById('contractAddrDisplay');
        const orig = el.textContent;
        el.textContent = t('status.copied');
        setTimeout(() => { el.textContent = orig; }, 1500);
    });
}

function copyContractIB_TOKEN_CONTRACT() {
    navigator.clipboard.writeText(IB_TOKEN_ADDR).then(() => {
        const el = document.getElementById('contractAddrDisplayIB_TOKEN_CONTRACT_ADDRESS');
        const orig = el.textContent;
        el.textContent = t('status.copied');
        setTimeout(() => { el.textContent = orig; }, 1500);
    });
}

function updateBurnBtn() {
    const ready = walletConnected && tosCheck.checked && userSigned;
    burnBtn.disabled = !ready;

    if (walletConnected && !userSigned) {
        burnBtn.setAttribute('data-locked', 'true');
        burnBtn.textContent = '🔒 Sign to Unlock Burn';
        burnBtn.title = 'Click to open the verification modal and sign a message';
        burnBtn.disabled = false;
    } else {
        burnBtn.removeAttribute('data-locked');
        burnBtn.textContent = currentLang === 'id' ? '🔥 Setujui & Bakar' : '🔥 Approve & Burn';
        burnBtn.title = '';
        burnBtn.disabled = !ready;
    }
}
tosCheck.addEventListener('change', updateBurnBtn);

function hashCode(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = str.charCodeAt(i) + ((h << 5) - h); h |= 0; }
    return Math.abs(h);
}
function symbolToColors(sym) {
    const P = [['#ff5500','#fff7a0'],['#cc1a00','#ffcc55'],['#ff9900','#1a0800'],['#3d0f00','#ff9900'],['#5c3a00','#fff7a0'],['#1a0f05','#ff5500'],['#2a1200','#ffcc55'],['#4a1400','#ff9900']];
    const [bg, fg] = P[hashCode(sym) % P.length];
    return { bg, fg };
}
function createTokenAvatarSVG(sym) {
    const { bg, fg } = symbolToColors(sym);
    const label = sym.length > 3 ? sym.slice(0, 3) : sym;
    const fs = label.length <= 2 ? 11 : 9;
    return `<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="${bg}"/><circle cx="15" cy="15" r="13" fill="${bg}" opacity="0.6"/><text x="15" y="${15 + fs * 0.36}" text-anchor="middle" font-family="Bungee,cursive" font-size="${fs}" fill="${fg}" letter-spacing="0.5">${label}</text></svg>`;
}

async function fetchWalletTokens(userAddress) {
    const wrap = document.getElementById('tokenPickerWrap');
    const list = document.getElementById('tokenPickerList');

    wrap.style.display = 'block';

    const setMsg = (html) => { list.innerHTML = `<div style="padding:14px;font-size:.65rem;color:var(--text-ash);text-align:center;">${html}</div>`; };
    const setError = (msg) => {
        list.innerHTML = `
            <div style="padding:16px;text-align:center;">
                <div style="font-size:.65rem;color:var(--text-ash);margin-bottom:10px;">${msg}</div>
                <button onclick="fetchWalletTokens('${userAddress}')"
                    style="background:var(--fire-outer);color:#fff;border:none;padding:5px 12px;font-size:.6rem;cursor:pointer;border-radius:2px;margin-right:6px;">
                    🔄 ${currentLang === 'id' ? 'Coba Lagi' : 'Retry'}
                </button>
                <button onclick="document.getElementById('tokenPickerWrap').style.display='none'"
                    style="background:#333;color:#aaa;border:none;padding:5px 12px;font-size:.6rem;cursor:pointer;border-radius:2px;">
                    ${currentLang === 'id' ? 'Input Manual' : 'Enter Manually'}
                </button>
            </div>`;
    };

    setMsg('⏳ ' + (currentLang === 'id' ? 'Memuat token dari wallet...' : 'Loading tokens from wallet...'));

    const cleanAddr = userAddress.toLowerCase();
    const endpoints = [
        `https://base.blockscout.com/api/v2/addresses/${cleanAddr}/token-balances`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://base.blockscout.com/api/v2/addresses/${cleanAddr}/token-balances`)}`,
    ];

    let items = [];
    let apiSuccess = false;

    for (const url of endpoints) {
        try {
            const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
            if (!res.ok) continue;
            const data = await res.json();
            items = data.items || (Array.isArray(data) ? data : []);
            apiSuccess = true;
            break;
        } catch (e) {
            console.warn('Token API attempt failed:', url, e.message);
        }
    }

    if (!apiSuccess) {
        setError(currentLang === 'id'
            ? '❌ Gagal terhubung ke Explorer. Coba lagi atau masukkan address token manual.'
            : '❌ Failed to reach Explorer. Retry or enter token address manually.');
        return;
    }

    let tokenResults = [];
    for (const item of items) {
        try {
            const tk  = item.token || item;
            const val = item.value || item.balance;
            const tokenAddr = tk.address_hash || tk.address;
            if (!tokenAddr || !val || val === '0') continue;

            const decimals  = parseInt(tk.decimals || '18', 10);
            const rawBigInt = BigInt(val);
            const divisor   = 10n ** BigInt(decimals);
            const wholeTokens = rawBigInt / divisor;
            if (wholeTokens < 1n) continue;

            const floatBal = parseFloat(ethers.formatUnits(val, decimals));
            tokenResults.push({
                addr:       tokenAddr,
                symbol:     tk.symbol || '???',
                name:       tk.name   || 'Unknown',
                decimals,
                balance:    val,
                displayBal: floatBal.toLocaleString('id-ID', { maximumFractionDigits: 4 })
            });
        } catch(e) { continue; }
    }

    if (tokenResults.length === 0) {
        setError(currentLang === 'id'
            ? '⚠️ Tidak ada token ERC20 dengan saldo ≥ 1 yang terdeteksi.'
            : '⚠️ No ERC20 tokens with balance ≥ 1 detected.');
        return;
    }

    tokenResults.sort((a, b) => a.symbol.localeCompare(b.symbol));

    setMsg('🔍 ' + (currentLang === 'id' ? 'Menyaring token berpajak...' : 'Filtering tax tokens...'));

    const userAddr    = signer ? await signer.getAddress() : userAddress;
    const cleanTokens = [];
    for (const tk of tokenResults) {
        try {
            const tempContract = new ethers.Contract(tk.addr, ERC20_ABI, signer || provider);
            const hasTax = await detectTransferTax(tempContract, userAddr, tk.decimals);
            if (!hasTax) cleanTokens.push(tk);
        } catch {
            cleanTokens.push(tk); // include on detection failure; burn will re-check
        }
    }

    if (cleanTokens.length === 0) {
        setError(currentLang === 'id'
            ? '⚠️ Semua token terdeteksi memiliki transfer tax dan tidak bisa dibakar.'
            : '⚠️ All detected tokens have transfer tax and cannot be burned.');
        return;
    }

    list.innerHTML = '';
    cleanTokens.forEach(tk => {
        const item = document.createElement('div');
        item.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.03);transition:background .15s;';
        item.onmouseenter = () => item.style.background = 'rgba(255,80,0,.06)';
        item.onmouseleave = () => item.style.background = '';
        item.innerHTML = `
            <div style="width:24px;height:24px;background:#331a00;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:7px;color:#ff9900;border:1px solid #552200;flex-shrink:0;">${tk.symbol.slice(0,2)}</div>
            <div style="flex:1;min-width:0;text-align:left;">
                <div style="font-size:.7rem;color:#fff;font-weight:700;">${tk.symbol}</div>
                <div style="font-size:.5rem;color:#555;font-family:monospace;">${tk.addr.slice(0,10)}...</div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
                <div style="font-size:.7rem;color:var(--fire-inner);font-family:'Share Tech Mono';">${tk.displayBal}</div>
            </div>`;
        item.onclick = () => selectToken(tk);
        list.appendChild(item);
    });
}

function selectToken(tk) {
    document.getElementById('tokenAddr').value = tk.addr;
    const badge = document.getElementById('tokenInfoBadge');
    const avatarSVG = createTokenAvatarSVG(tk.symbol);
    badge.innerHTML = `<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:14px;height:14px;border-radius:50%;overflow:hidden;display:inline-flex;">${avatarSVG}</span>${tk.symbol} · ${tk.displayBal}</span>`;
    badge.style.display = 'block';
    statusEl.innerText = t('status.selected', tk.name, tk.symbol, tk.displayBal);
}

document.getElementById('tokenAddr').addEventListener('input', () => {
    document.getElementById('tokenInfoBadge').style.display = 'none';
});

function detectProviders() {
    const eth = window.ethereum;
    const res = { metamask:false, trust:false, coinbase:false, browser:false };
    if (!eth) return res;
    const providers = eth.providers || [eth];
    for (const p of providers) {
        if (p.isMetaMask && !p.isCoinbaseWallet) res.metamask = true;
        if (p.isTrust || p.isTrustWallet)        res.trust    = true;
        if (p.isCoinbaseWallet)                  res.coinbase = true;
    }
    if (!res.metamask && eth.isMetaMask && !eth.isCoinbaseWallet) res.metamask = true;
    if (!res.trust    && (eth.isTrust || eth.isTrustWallet))      res.trust    = true;
    if (!res.coinbase && eth.isCoinbaseWallet)                    res.coinbase = true;
    res.browser = !!eth;
    return res;
}
function getProviderFor(walletKey) {
    const eth = window.ethereum;
    if (!eth) return null;
    const providers = eth.providers || [eth];
    if (walletKey === 'metamask') return providers.find(p => p.isMetaMask && !p.isCoinbaseWallet) || null;
    if (walletKey === 'trust')    return providers.find(p => p.isTrust || p.isTrustWallet) || null;
    if (walletKey === 'coinbase') return providers.find(p => p.isCoinbaseWallet) || null;
    if (walletKey === 'browser')  return eth;
    return null;
}

function openWalletModal() {
    const detected = detectProviders();
    ['metamask','trust','coinbase','browser'].forEach(key => {
        const span = document.getElementById(`status-${key}`);
        const btn  = document.querySelector(`[data-wallet="${key}"]`);
        const ok   = detected[key];
        span.textContent = ok ? t('wallet.detected') : t('wallet.notFound');
        span.className   = 'wallet-status' + (ok ? ' detected' : '');
        btn.classList.toggle('not-found', !ok);
    });
    walletOverlay.classList.add('open');
}
function closeWalletModal() { walletOverlay.classList.remove('open'); }

connectBtn.onclick = openWalletModal;
modalClose.onclick = closeWalletModal;
walletOverlay.addEventListener('click', (e) => { if (e.target === walletOverlay) closeWalletModal(); });

async function connectWallet(walletKey) {
    const rawProvider = getProviderFor(walletKey);
    if (!rawProvider) {
        const urls = { metamask:'https://metamask.io/download/', trust:'https://trustwallet.com/download', coinbase:'https://www.coinbase.com/wallet/downloads', browser:null };
        const url = urls[walletKey];
        if (url && confirm(t('wallet.install', walletKey))) window.open(url, '_blank');
        else if (!url) statusEl.innerText = t('wallet.nowallet');
        return;
    }
    closeWalletModal();
    statusEl.innerText = t('status.connecting');
    try {
        provider = new ethers.BrowserProvider(rawProvider);
        await provider.send("eth_requestAccounts", []);
        statusEl.innerText = t('status.checknet');
        try {
            await rawProvider.request({ method:'wallet_switchEthereumChain', params:[{chainId:'0x2105'}] });
        } catch (switchErr) {
            if (switchErr.code === 4902 || switchErr?.data?.originalError?.code === 4902) {
                statusEl.innerText = t('status.addnet');
                await rawProvider.request({ method:'wallet_addEthereumChain', params:[{ chainId:'0x2105', chainName:'Base', nativeCurrency:{name:'ETH',symbol:'ETH',decimals:18}, rpcUrls:['https://mainnet.base.org'], blockExplorerUrls:['https://basescan.org'] }] });
            } else if (switchErr.code === 4001 || switchErr?.code === "ACTION_REJECTED") {
                statusEl.innerText = t('status.wrongnet');
            } else { throw switchErr; }
        }
        provider = new ethers.BrowserProvider(rawProvider);
        signer   = await provider.getSigner();
        burnerContract = new ethers.Contract(BURNER_CONTRACT_ADDRESS, BURNER_ABI, signer);
        const addr    = await signer.getAddress();
        const network = await provider.getNetwork();
        const onTarget = network.chainId === 8453n;
        document.getElementById('walletAddr').innerText = `${addr.substring(0,6)}...${addr.substring(38)}`;
        connectBtn.style.display = 'none';
        walletBox.classList.add('visible');
        walletConnected = true;
        updateBurnBtn();
        statusEl.innerText = onTarget ? t('status.connected') : t('status.wrongchain');
        fetchWalletTokens(addr);
        refreshIBStockDisplay();
        const existingSession = loadSession();
        if (existingSession && existingSession.address === addr.toLowerCase()) {
            userSigned = true;
            updateNavSignedBadge(existingSession);
            showCardSigninBanner(addr);
            updateBurnBtn();
            statusEl.innerText = onTarget ? t('status.signedIn') : t('status.wrongchain');
        } else {
            statusEl.innerText = t('status.signinRequired');
            const message = buildSignMessage(addr);
            setTimeout(() => openSigninModal(addr, message), 600);
        }
    } catch (err) {
        console.error(err);
        statusEl.innerText = (err?.code === 4001 || err?.code === "ACTION_REJECTED") ? t('status.rejected') : t('status.failconn');
        connectBtn.style.display = '';
    }
}

document.querySelectorAll('.wallet-option').forEach(btn => {
    btn.addEventListener('click', () => connectWallet(btn.getAttribute('data-wallet')));
});

const SESSION_KEY    = 'ib_session_v1';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function buildSignMessage(address) {
    const now = Date.now();
    return `Welcome to 🔥 Inpoburn Hub!\n\nClick "Sign" to verify you own this wallet.\nThis request is free — no gas, no transaction.\n\nWallet:\n${address}\n\nTimestamp:\n${now}\n\nNonce:\n${Math.random().toString(36).slice(2, 10)}`;
}

function saveSession(address, signature, message) {
    const data = {
        address: address.toLowerCase(),
        signature,
        message,
        signedAt: Date.now(),
        expiresAt: Date.now() + SESSION_TTL_MS
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    return data;
}

function loadSession() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (Date.now() > data.expiresAt) {
            localStorage.removeItem(SESSION_KEY);
            return null;
        }
        return data;
    } catch { return null; }
}

function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    updateNavSignedBadge(null);
    const banner = document.getElementById('cardSigninBanner');
    if (banner) banner.remove();
}

function updateNavSignedBadge(session) {
    const badge     = document.getElementById('navSignedBadge');
    const addrSpan  = document.getElementById('navSignedAddr');
    if (!badge) return;
    if (session) {
        const a = session.address;
        addrSpan.textContent = a.slice(0, 6) + '...' + a.slice(-4);
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function showCardSigninBanner(address) {
    const old = document.getElementById('cardSigninBanner');
    if (old) old.remove();
    const banner = document.createElement('div');
    banner.id = 'cardSigninBanner';
    banner.className = 'card-signin-banner';
    banner.innerHTML = `<span>✅</span> Signed in as ${address.slice(0,6)}...${address.slice(-4)}`;
    const card = document.querySelector('.card');
    const ref  = document.getElementById('walletBox');
    if (card && ref) card.insertBefore(banner, ref.nextSibling);
}

function openSigninModal(address, message) {
    const overlay = document.getElementById('signinOverlay');
    document.getElementById('signinAddrBox').textContent = address;
    document.getElementById('signinMsgBox').style.display = 'block';
    document.getElementById('signinMsgBox').textContent   = message;
    document.getElementById('signinStatus').textContent   = '';
    document.getElementById('signinBtn').disabled = false;
    overlay.classList.add('open');
}
function closeSigninModal() {
    document.getElementById('signinOverlay').classList.remove('open');
}

document.getElementById('signinSkip').addEventListener('click', () => {
    closeSigninModal();
    userSigned = false;
    updateBurnBtn();
    statusEl.innerText = t('status.signSkipped');
});

document.getElementById('signinBtn').addEventListener('click', async () => {
    const btn    = document.getElementById('signinBtn');
    const status = document.getElementById('signinStatus');
    const msgBox = document.getElementById('signinMsgBox');
    const message = msgBox.textContent;
    btn.disabled = true;
    status.textContent = '✍️ Check your wallet...';
    try {
        const signature = await signer.signMessage(message);
        const addr      = await signer.getAddress();
        const session   = saveSession(addr, signature, message);
        userSigned = true;
        status.textContent = '✅ Signed in successfully!';
        updateNavSignedBadge(session);
        showCardSigninBanner(addr);
        setTimeout(() => {
            closeSigninModal();
            statusEl.innerText = t('status.signedIn');
            updateBurnBtn();
        }, 900);
    } catch (err) {
        if (err?.code === 4001 || err?.code === 'ACTION_REJECTED') {
            status.textContent = '❌ Signature rejected.';
        } else {
            status.textContent = '❌ Signing failed.';
        }
        btn.disabled = false;
    }
});

(function checkExistingSession() {
    const session = loadSession();
    if (session) {
        updateNavSignedBadge(session);
    }
})();

const MAX_BURN_AMOUNT   = 1_000_000;
const BURN_COOLDOWN_MS  = 30_000;
const LAST_BURN_KEY     = 'ib_last_burn';

const TOKEN_BLACKLIST = new Set([
    '0x0000000000000000000000000000000000000000',
].map(a => a.toLowerCase()));

async function detectHoneypot(tokenContract, userAddr, decimals) {
    try {
        const smallAmount = 10n ** BigInt(decimals);
        const rawBalance  = BigInt(await tokenContract.balanceOf(userAddr));
        if (rawBalance < smallAmount) return false;
        const DEAD = '0x000000000000000000000000000000000000dEaD';
        try {
            await tokenContract.transfer.staticCall(DEAD, smallAmount);
        } catch (err) {
            const msg = (err?.reason || err?.message || '').toLowerCase();
            if (msg.includes('not allowed') || msg.includes('forbidden') ||
                msg.includes('locked') || msg.includes('blacklist') ||
                msg.includes('cannot') || msg.includes('disabled') ||
                msg.includes('paused') || msg.includes('trading')) return true;
            if (!msg.includes('tax') && !msg.includes('fee') && !msg.includes('exceeds')) return true;
        }
        return false;
    } catch (e) {
        console.warn('Honeypot detection error:', e);
        return false;
    }
}

async function simulateBurnTx(tokenAddress, amountFormatted, userAddr) {
    try {
        const iface    = new ethers.Interface(BURNER_ABI);
        const calldata = iface.encodeFunctionData('burnAndClaim', [tokenAddress, amountFormatted]);
        await provider.call({ to: BURNER_CONTRACT_ADDRESS, from: userAddr, data: calldata });
        return { ok: true, error: '' };
    } catch (err) {
        const msg = err?.reason || err?.shortMessage || err?.message || 'Unknown error';
        return { ok: false, error: msg };
    }
}

async function checkContractPaused() {
    try {
        const prov = provider || getPublicProvider();
        const c    = new ethers.Contract(BURNER_CONTRACT_ADDRESS, [
            'function paused() view returns (bool)'
        ], prov);
        return await c.paused();
    } catch { return false; }
}

async function fetchIBTokenStock() {
    try {
        const prov = provider || getPublicProvider();
        const ibC  = new ethers.Contract(IB_TOKEN_ADDR, [
            'function balanceOf(address) view returns (uint256)',
            'function decimals() view returns (uint8)'
        ], prov);
        const [bal, dec] = await Promise.all([
            ibC.balanceOf(BURNER_CONTRACT_ADDRESS),
            ibC.decimals()
        ]);
        return Number(ethers.formatUnits(bal, dec));
    } catch { return null; }
}

async function refreshIBStockDisplay() {
    const el = document.getElementById('ibStockDisplay');
    if (!el) return;
    const stock = await fetchIBTokenStock();
    if (stock === null) { el.textContent = '?'; return; }
    el.textContent = stock.toLocaleString();
    el.style.color = stock < 10 ? '#ff3300' : stock < 100 ? '#ff9900' : 'var(--fire-inner)';
}

function showBurnConfirmModal({ tokenName, tokenSymbol, tokenAddress, amount, userAddr }) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.id = 'burnConfirmOverlay';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);';
        const isId = currentLang === 'id';
        overlay.innerHTML = `
        <div style="background:linear-gradient(160deg,#1a0800,#0f0502);border:1px solid var(--fire-outer);border-radius:10px;padding:28px 24px;max-width:380px;width:90%;font-family:'Share Tech Mono',monospace;box-shadow:0 0 40px rgba(255,80,0,.3);">
            <div style="font-size:1.6rem;text-align:center;margin-bottom:4px;">🔥</div>
            <div style="font-size:.9rem;color:var(--fire-inner);text-align:center;font-weight:700;margin-bottom:4px;">${isId ? 'Konfirmasi Burn' : 'Confirm Burn'}</div>
            <div style="font-size:.55rem;color:var(--text-ash);text-align:center;margin-bottom:18px;letter-spacing:.08em;">// ${isId ? 'periksa detail sebelum lanjut' : 'review details before proceeding'} //</div>
            <div style="background:rgba(255,80,0,.06);border:1px solid rgba(255,80,0,.15);border-radius:6px;padding:14px;margin-bottom:16px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">TOKEN</span>
                    <span style="color:#fff;font-size:.65rem;font-weight:700;">${tokenName} (${tokenSymbol})</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">${isId ? 'ALAMAT' : 'ADDRESS'}</span>
                    <span style="color:var(--fire-inner);font-size:.55rem;">${tokenAddress.slice(0,10)}...${tokenAddress.slice(-8)}</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">${isId ? 'JUMLAH DIBAKAR' : 'AMOUNT TO BURN'}</span>
                    <span style="color:#ff3300;font-size:.65rem;font-weight:700;">${amount.toLocaleString()} ${tokenSymbol}</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">${isId ? 'KAMU TERIMA' : 'YOU RECEIVE'}</span>
                    <span style="color:#66ff99;font-size:.65rem;font-weight:700;">1 IB Token</span>
                </div>
                <div style="display:flex;justify-content:space-between;">
                    <span style="color:var(--text-ash);font-size:.6rem;">WALLET</span>
                    <span style="color:#aaa;font-size:.55rem;">${userAddr.slice(0,6)}...${userAddr.slice(-4)}</span>
                </div>
            </div>
            <div style="background:rgba(255,50,0,.08);border:1px solid rgba(255,50,0,.2);border-radius:4px;padding:10px;margin-bottom:16px;font-size:.58rem;color:#ff9966;line-height:1.5;">
                ⚠️ ${isId ? 'Token yang sudah dibakar <strong style="color:#ff3300">TIDAK BISA dikembalikan</strong>. Pastikan kamu sudah memeriksa alamat token dengan benar.' : 'Burned tokens <strong style="color:#ff3300">CANNOT be recovered</strong>. Make sure you have verified the token address carefully.'}
            </div>
            <div style="display:flex;gap:10px;">
                <button id="burnConfirmCancel" style="flex:1;padding:10px;background:rgba(255,255,255,.05);border:1px solid #333;color:#aaa;font-family:'Share Tech Mono',monospace;font-size:.65rem;cursor:pointer;border-radius:4px;">✕ ${isId ? 'Batalkan' : 'Cancel'}</button>
                <button id="burnConfirmOk" disabled style="flex:2;padding:10px;background:linear-gradient(90deg,#cc1a00,#ff5500);border:none;color:#fff;font-family:'Share Tech Mono',monospace;font-size:.65rem;cursor:not-allowed;border-radius:4px;font-weight:700;opacity:.5;transition:all .3s;">🔥 ${isId ? 'Ya, Bakar (5...)' : 'Yes, Burn (5...)'}</button>
            </div>
        </div>`;
        document.body.appendChild(overlay);
        let countdown = 5;
        const okBtn   = overlay.querySelector('#burnConfirmOk');
        const timer   = setInterval(() => {
            countdown--;
            if (countdown <= 0) {
                clearInterval(timer);
                okBtn.disabled = false;
                okBtn.style.cursor  = 'pointer';
                okBtn.style.opacity = '1';
                okBtn.textContent   = `🔥 ${isId ? 'Ya, Bakar Sekarang' : 'Yes, Burn Now'}`;
            } else {
                okBtn.textContent = `🔥 ${isId ? `Ya, Bakar (${countdown}...)` : `Yes, Burn (${countdown}...)`}`;
            }
        }, 1000);
        overlay.querySelector('#burnConfirmCancel').onclick = () => { clearInterval(timer); overlay.remove(); resolve(false); };
        okBtn.onclick = () => { if (okBtn.disabled) return; overlay.remove(); resolve(true); };
        overlay.addEventListener('click', (e) => { if (e.target === overlay) { clearInterval(timer); overlay.remove(); resolve(false); } });
    });
}

// ─── AUTO-FETCH TOKEN INFO ────────────────────────────────────────────────────
let tokenInfoCache = {};
async function autoFetchTokenInfo(address) {
    if (!address || !ethers.isAddress(address)) return null;
    const key = address.toLowerCase();
    if (tokenInfoCache[key]) return tokenInfoCache[key];
    try {
        const prov = provider || getPublicProvider();
        if (!prov) return null;
        const c    = new ethers.Contract(address, ERC20_ABI, prov);
        const [name, symbol, decimals] = await Promise.all([
            c.name().catch(() => 'Unknown'),
            c.symbol().catch(() => '???'),
            c.decimals().catch(() => 18)
        ]);
        const info = { name, symbol, decimals: Number(decimals) };
        tokenInfoCache[key] = info;
        return info;
    } catch { return null; }
}

(function setupTokenAddrAutoFetch() {
    const inp   = document.getElementById('tokenAddr');
    const badge = document.getElementById('tokenInfoBadge');
    if (!inp) return;
    let debounce;
    inp.addEventListener('input', () => {
        badge.style.display = 'none';
        clearTimeout(debounce);
        const val = inp.value.trim();
        if (!ethers.isAddress(val)) return;
        try {
            const checksummed = ethers.getAddress(val);
            if (val !== checksummed && val !== checksummed.toLowerCase()) {
                badge.innerHTML = '⚠️ Checksum mismatch';
                badge.style.display = 'block';
                return;
            }
        } catch { return; }
        debounce = setTimeout(async () => {
            badge.innerHTML = '⏳';
            badge.style.display = 'block';
            const info = await autoFetchTokenInfo(val);
            if (!info) { badge.innerHTML = '❓ Unknown token'; return; }
            const avatarSVG = createTokenAvatarSVG(info.symbol);
            badge.innerHTML = `<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:14px;height:14px;border-radius:50%;overflow:hidden;display:inline-flex;">${avatarSVG}</span>${info.name} · ${info.symbol}</span>`;
        }, 600);
    });
})();

async function detectTransferTax(tokenContract, userAddr, decimals) {
    try {
        const smallAmount = 10n ** BigInt(decimals); // 1 token unit
        const rawBalance = BigInt(await tokenContract.balanceOf(userAddr));
        if (rawBalance < smallAmount) return false; // can't test with tiny balance, assume clean

        // Use staticCall to simulate transfer to self without spending gas
        // If the received amount would be less than sent, there's a tax
        const balBefore = BigInt(await tokenContract.balanceOf(userAddr));
        
        // Try to detect via callStatic — simulate transfer of 1 token to self
        try {
            await tokenContract.transfer.staticCall(userAddr, smallAmount);
        } catch (err) {
            const msg = (err?.reason || err?.message || '').toLowerCase();
            // If revert mentions tax, fee, or amount mismatch → has tax
            if (msg.includes('tax') || msg.includes('fee') || msg.includes('exceeds') || msg.includes('deflationary')) {
                return true;
            }
        }

        try {
            const iface = tokenContract.interface;
            const calldata = iface.encodeFunctionData('transfer', [userAddr, smallAmount]);
            const result = await tokenContract.runner.provider.call({
                to: await tokenContract.getAddress(),
                from: userAddr,
                data: calldata
            });
            // Decode return bool — if it returns false silently, something is wrong
            if (result === '0x' || result === '0x0000000000000000000000000000000000000000000000000000000000000000') {
                return true;
            }
        } catch (e) {
            const msg = (e?.reason || e?.message || '').toLowerCase();
            if (msg.includes('tax') || msg.includes('fee') || msg.includes('exceeds') || msg.includes('deflationary')) {
                return true;
            }
        }

        return false;
    } catch (e) {
        console.warn('Tax detection error:', e);
        return false;
    }
}

async function doBurn() {
    if (burnBtn.getAttribute('data-locked') === 'true') {
        statusEl.innerText = t('status.signinRequired');
        const addr = await signer?.getAddress?.() || '';
        const message = buildSignMessage(addr);
        openSigninModal(addr, message);
        return;
    }
    if (!userSigned)       { statusEl.innerText = t('status.signinRequired'); return; }
    if (!tosCheck.checked) { statusEl.innerText = t('status.notos');          return; }

    const tokenAddress = document.getElementById('tokenAddr').value.trim();
    const amountStr    = document.getElementById('amount').value.trim();

    if (!tokenAddress)                   { statusEl.innerText = t('status.notoken');  return; }
    if (!ethers.isAddress(tokenAddress)) { statusEl.innerText = t('status.badaddr');  return; }

    if (TOKEN_BLACKLIST.has(tokenAddress.toLowerCase())) {
        statusEl.innerText = currentLang === 'id'
            ? '[ ❌ Token ini ada dalam daftar blokir. ]'
            : '[ ❌ This token is on the blocklist. ]';
        return;
    }

    if (tokenAddress.toLowerCase() === IB_TOKEN_ADDR.toLowerCase()) {
        statusEl.innerText = currentLang === 'id'
            ? '[ ❌ Kamu tidak bisa membakar IB Token itu sendiri! ]'
            : '[ ❌ You cannot burn the IB Token itself! ]';
        return;
    }

    const amountNum = parseFloat(amountStr);
    if (!amountStr || isNaN(amountNum) || amountNum < 1 || !Number.isInteger(amountNum)) {
        statusEl.innerText = t('status.badamount');
        return;
    }

    if (amountNum > MAX_BURN_AMOUNT) {
        statusEl.innerText = currentLang === 'id'
            ? `[ ❌ Jumlah maksimal burn adalah ${MAX_BURN_AMOUNT.toLocaleString()} token per transaksi. ]`
            : `[ ❌ Maximum burn is ${MAX_BURN_AMOUNT.toLocaleString()} tokens per transaction. ]`;
        return;
    }

    const lastBurn = parseInt(localStorage.getItem(LAST_BURN_KEY) || '0', 10);
    const elapsed  = Date.now() - lastBurn;
    if (elapsed < BURN_COOLDOWN_MS) {
        const remaining = Math.ceil((BURN_COOLDOWN_MS - elapsed) / 1000);
        statusEl.innerText = currentLang === 'id'
            ? `[ ⏳ Tunggu ${remaining} detik sebelum burn lagi. ]`
            : `[ ⏳ Please wait ${remaining}s before burning again. ]`;
        return;
    }

    try {
        burnBtn.disabled = true;
        if (!signer) { statusEl.innerText = t('status.nosigner'); return; }

        statusEl.innerText = currentLang === 'id'
            ? '[ 🔄 Memeriksa status kontrak... ]'
            : '[ 🔄 Checking contract status... ]';
        const isPaused = await checkContractPaused();
        if (isPaused) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ⏸️ Kontrak sedang dijeda oleh admin. Coba lagi nanti. ]'
                : '[ ⏸️ Contract is paused by admin. Please try again later. ]';
            return;
        }

        const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);

        statusEl.innerText = t('status.checkdec');
        let decimals;
        try { decimals = await tokenContract.decimals(); } catch { decimals = 18; }

        const userAddr   = await signer.getAddress();
        const rawBalance = BigInt(await tokenContract.balanceOf(userAddr));
        const divisor    = 10n ** BigInt(decimals);
        const maxWhole   = rawBalance / divisor;
        const requested  = BigInt(amountNum);

        if (requested > maxWhole) {
            statusEl.innerText = currentLang === 'id'
                ? `[ ❌ Saldo tidak cukup. Saldo on-chain kamu: ${maxWhole.toString()} token ]`
                : `[ ❌ Insufficient balance. Your on-chain balance: ${maxWhole.toString()} whole token(s) ]`;
            return;
        }

        const amountFormatted = requested * divisor;

        statusEl.innerText = currentLang === 'id'
            ? '[ 🔍 Memeriksa pajak transfer token... ]'
            : '[ 🔍 Checking token transfer tax... ]';
        const hasTax = await detectTransferTax(tokenContract, userAddr, decimals);
        if (hasTax) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ❌ Token ini memiliki pajak transfer. Tidak diizinkan untuk dibakar. ]'
                : '[ ❌ This token has a transfer tax and cannot be burned. ]';
            return;
        }

        // ── Cek honeypot ────────────────────────────────────────────────────
        statusEl.innerText = currentLang === 'id'
            ? '[ 🔍 Memeriksa potensi honeypot... ]'
            : '[ 🔍 Checking for honeypot... ]';
        const isHoneypot = await detectHoneypot(tokenContract, userAddr, decimals);
        if (isHoneypot) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ❌ Token ini terdeteksi sebagai honeypot! Transfer tidak bisa dilakukan. ]'
                : '[ ❌ Token detected as honeypot! Transfer is not possible. ]';
            return;
        }

        let tokenName   = 'Unknown Token';
        let tokenSymbol = '???';
        try {
            tokenName   = await tokenContract.name();
            tokenSymbol = await tokenContract.symbol();
        } catch {}

        statusEl.innerText = currentLang === 'id'
            ? '[ ⏳ Menunggu konfirmasi dari kamu... ]'
            : '[ ⏳ Waiting for your confirmation... ]';
        const confirmed = await showBurnConfirmModal({
            tokenName, tokenSymbol, tokenAddress, amount: amountNum, userAddr
        });
        if (!confirmed) {
            statusEl.innerText = t('status.txcancel');
            return;
        }

        statusEl.innerText = t('status.checkallow');
        const currentAllowance = await tokenContract.allowance(userAddr, BURNER_CONTRACT_ADDRESS);
        if (BigInt(currentAllowance) < BigInt(amountFormatted)) {
            statusEl.innerText = t('status.approving');
            const appTx = await tokenContract.approve(BURNER_CONTRACT_ADDRESS, amountFormatted);
            statusEl.innerText = t('status.waitapprove');
            await appTx.wait();
            statusEl.innerText = t('status.approved');
        }

        statusEl.innerText = t('status.burning');
        const burnTx = await burnerContract.burnAndClaim(tokenAddress, amountFormatted);

        statusEl.innerText = t('status.waitburn');
        const receipt = await burnTx.wait();

        localStorage.setItem(LAST_BURN_KEY, Date.now().toString());

        const txHash = receipt?.hash || burnTx?.hash || '';
        const explorerLink = txHash
            ? ` <a href="https://basescan.org/tx/${txHash}" target="_blank" rel="noopener" style="color:var(--fire-inner);text-decoration:underline;">View Tx ↗</a>`
            : '';
        statusEl.innerHTML = t('status.success') + explorerLink;

    } catch (err) {
        console.error(err);
        const msg = err?.reason || err?.shortMessage || err?.message || '';
        if (msg.includes('bad result data') || msg.includes('could not decode')) {
            statusEl.innerText = t('status.notERC20');
        } else if (err?.code === 4001 || err?.code === 'ACTION_REJECTED') {
            statusEl.innerText = t('status.txcancel');
        } else if (msg.includes('transfer amount exceeds balance')) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ❌ Token ini memiliki pajak transfer. ]'
                : '[ ❌ This token has transfer tax. ]';
        } else {
            statusEl.innerText = `[ ❌ Error: ${msg || 'Transaction Failed'} ]`;
        }
    } finally {
        updateBurnBtn();
    }
}

burnBtn.onclick = doBurn;

const PUBLIC_RPC_URL = 'https://mainnet.base.org';
const IB_TOKEN_ADDR  = '0xD733C347BaC49cb55cF9498b5f25FB00BAc3ad59';
const DEAD_ADDR      = '0x000000000000000000000000000000000000dead';
const TRANSFER_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
const ZERO_TOPIC     = '0x0000000000000000000000000000000000000000000000000000000000000000';

let autoRefreshTimer  = null;
let countdownTimer    = null;
let refreshCountdown  = 10;
let lastBurnCount     = null;
let publicEthProvider = null;

function getPublicProvider() {
    if (!publicEthProvider) {
        try {
            publicEthProvider = new ethers.JsonRpcProvider(PUBLIC_RPC_URL);
        } catch(e) {
            console.warn('Failed to create public provider:', e);
        }
    }
    return publicEthProvider;
}

async function fetchLiveBurnCount() {
    try {
        const prov = getPublicProvider();
        if (!prov) return null;
        const ibTokenContract = new ethers.Contract(
            IB_TOKEN_ADDR,
            [
                "function totalSupply() view returns (uint256)",
                "function decimals() view returns (uint8)"
            ],
            prov
        );

        const supply = await ibTokenContract.totalSupply();
        const decimals = await ibTokenContract.decimals();
        
        const totalBurnedCount = Number(ethers.formatUnits(supply, decimals));
        return Math.floor(totalBurnedCount);
        
    } catch(err) {
        console.warn('Live burn count fetch failed:', err);
        return null;
    }
}

function updateBurnCountDisplay(count) {
    const el = document.getElementById('liveBurnCount');
    if (!el) return;

    if (count === null) {
        el.innerHTML = '<span class="stat-loading">🔥</span>';
        return;
    }

    const formatted = count.toLocaleString();
    el.textContent  = formatted;
    if (lastBurnCount !== null && count !== lastBurnCount) {
        el.classList.remove('refreshed');
        void el.offsetWidth;
        el.classList.add('refreshed');
        setTimeout(() => el.classList.remove('refreshed'), 500);
    }
    lastBurnCount = count;
}

function updateRefreshCountdown(seconds) {
    const numEl  = document.getElementById('refreshCountdownNum');
    const progEl = document.getElementById('refreshProgress');

    if (numEl)  numEl.textContent = seconds;
    if (progEl) progEl.style.width = ((seconds / 10) * 100) + '%';
}

async function doRefresh() {
    const labelEl = document.getElementById('refreshLabel');
    const count = await fetchLiveBurnCount();
    updateBurnCountDisplay(count);

    refreshCountdown = 10;
    updateRefreshCountdown(refreshCountdown);
}

function startAutoRefresh() {
    doRefresh();
    countdownTimer = setInterval(() => {
        refreshCountdown--;
        updateRefreshCountdown(Math.max(0, refreshCountdown));

        if (refreshCountdown <= 0) {
            refreshCountdown = 10;
            doRefresh();
        }
    }, 1000);
}

function spawnBurstEmbers(count = 12) {
    for (let i = 0; i < count; i++) {
        const e = document.createElement('div');
        const sz = Math.random() * 5 + 2;
        const colors = ['var(--fire-core)','var(--fire-inner)','var(--fire-mid)','#ffcc55'];
        e.style.cssText = `
            position:fixed;
            width:${sz}px;height:${sz}px;
            background:${colors[Math.floor(Math.random()*colors.length)]};
            border-radius:50%;
            left:${Math.random()*100}%;
            bottom:${Math.random()*15}%;
            pointer-events:none;
            z-index:5;
            animation:blazeRise ${1.5+Math.random()*2}s linear forwards;
            animation-delay:${Math.random()*0.5}s;
        `;
        document.body.appendChild(e);
        setTimeout(() => e.remove(), 4000);
    }
}

(function patchBurnBtn() {
    const origDoBurn = doBurn;
    burnBtn.onclick = async function(...args) {
        await origDoBurn.call(this, ...args);
        setTimeout(async () => {
            if (statusEl.innerHTML.includes('🎉') || statusEl.innerHTML.includes('Success') || statusEl.innerHTML.includes('Berhasil')) {
                spawnBurstEmbers(20);
                doRefresh();
                if (signer) {
                    try {
                        const addr = await signer.getAddress();
                        await fetchWalletTokens(addr);
                    } catch(e) {
                        console.warn('Token picker refresh after burn failed:', e);
                    }
                }
            }
        }, 500);
    };
})();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAutoRefresh);
} else {
    startAutoRefresh();
}

const disconnectWalletBtn = document.getElementById('disconnectWalletBtn');

function disconnectWallet() {
    walletConnected = false;
    provider = null;
    signer = null;
    userSigned = false;

    walletBox.classList.remove('visible');
    connectBtn.style.display = '';
    statusEl.innerText = t('status.waiting');
    
    document.getElementById('tokenAddr').value = '';
    document.getElementById('tokenInfoBadge').style.display = 'none';
    document.getElementById('tokenPickerWrap').style.display = 'none';

    clearSession(); // Clear Session (Anti-Bot)
    updateBurnBtn();
}

if (disconnectWalletBtn) {
    disconnectWalletBtn.addEventListener('click', disconnectWallet);
}

if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            disconnectWallet();
        } else if (walletConnected) {
            disconnectWallet();
            connectWallet('browser'); 
        }
    });

    window.ethereum.on('chainChanged', () => {
        window.location.reload();
    });
}

const btnMax = document.getElementById('btnMax');

if (btnMax) {
    btnMax.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const tokenAddress = document.getElementById('tokenAddr').value.trim();
        
        if (!tokenAddress) {
            statusEl.innerText = t('status.notoken');
            return;
        }
        if (!ethers.isAddress(tokenAddress)) {
            statusEl.innerText = t('status.badaddr');
            return;
        }
        if (!signer) {
            statusEl.innerText = t('status.nosigner');
            return;
        }

        statusEl.innerText = currentLang === 'id' 
            ? "[ ⏳ Mengecek saldo maksimal di blockchain... ]" 
            : "[ ⏳ Checking max balance on blockchain... ]";
            
        try {
            const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
            const userAddr = await signer.getAddress();
            const balancePromise = tokenContract.balanceOf(userAddr);
            const decimalsPromise = tokenContract.decimals().catch(() => 18n);
            const [balance, decimals] = await Promise.all([balancePromise, decimalsPromise]);
            const divisor = 10n ** BigInt(decimals);
            const maxInt = balance / divisor;
            
            if (maxInt < 1n) {
                statusEl.innerText = currentLang === 'id' 
                    ? "[ ❌ Saldo tidak mencukupi (Minimal 1 token bulat) ]" 
                    : "[ ❌ Insufficient balance (Min 1 whole token) ]";
                document.getElementById('amount').value = '';
            } else {
                document.getElementById('amount').value = maxInt.toString();
                statusEl.innerText = currentLang === 'id' 
                    ? `[ ✅ Saldo Max diatur: ${maxInt.toString()} ]` 
                    : `[ ✅ Max balance set: ${maxInt.toString()} ]`;
            }
        } catch (err) {
            console.error(err);
            statusEl.innerText = currentLang === 'id' 
                ? "[ ❌ Gagal mengecek saldo. Pastikan address token benar. ]" 
                : "[ ❌ Failed to check balance. Check token address. ]";
        }
    });
}

function copyCoffeeAddress() {
    const addr = '0x4521226C7d9979CD3f1779E9423488224B4D1222';
    navigator.clipboard.writeText(addr);
    const msg = TRANSLATIONS[currentLang]['footer.copyMsg'];
    alert(msg);
}
