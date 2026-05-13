const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://omtspsynentiqeyrikrml.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdHNwc3llbnRpcWV5cmlrcm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4OTMxNTIsImV4cCI6MjA5MzQ2OTE1Mn0.O087ZPPPCRf4z3vyVLPOyaaB4FmxNO-DrwcgNWGH8Fw'
);
const posts = [
  {
    title:"7 Tips Makeup Pernikahan yang Tahan Lama Seharian",
    slug:"tips-makeup-pernikahan-tahan-lama",
    category:"Tips & Trik",
    tags:["makeup pernikahan","tips MUA","riasan tahan lama"],
    excerpt:"Makeup pernikahan harus tahan dari akad hingga resepsi malam. Berikut 7 tips dari MUA profesional Cacalovas agar riasanmu tetap flawless seharian.",
    content:`<h2>Mengapa Makeup Pernikahan Harus Tahan Lama?</h2>
<p>Hari pernikahan adalah momen paling bersejarah dalam hidup. Dari prosesi akad di pagi hari hingga resepsi malam yang bisa berlangsung lebih dari 8 jam, riasan wajahmu harus tetap sempurna di setiap momen. Tidak ada yang ingin tampil kusam di foto-foto kenangan itu.</p>
<p>Sebagai MUA profesional yang telah menangani ratusan pengantin di Purwokerto, Banjarnegara, dan Wonosobo, Cacalovas memahami betapa pentingnya makeup yang <strong>tahan lama, tahan keringat, dan tahan air mata haru</strong>.</p>
<h2>1. Persiapkan Kulit 2-4 Minggu Sebelum Hari H</h2>
<p>Makeup sebagus apapun tidak akan maksimal di atas kulit yang tidak terawat. Mulailah rutinitas skincare intensif setidaknya 2-4 minggu sebelum hari pernikahan. Fokus pada hidrasi kulit dengan moisturizer dan serum hyaluronic acid. Hindari mencoba produk baru yang berisiko menimbulkan iritasi atau jerawat mendadak.</p>
<p>Lakukan facial ringan (bukan chemical peeling) minimal 2 minggu sebelum hari H. Tidur cukup agar kulit tidak terlihat kusam dan bengkak di area mata.</p>
<h2>2. Gunakan Primer yang Tepat</h2>
<p>Primer adalah fondasi dari makeup tahan lama. Pilih primer sesuai jenis kulit: silicone-based primer untuk kulit berminyak agar pori-pori tersamarkan, dan hydrating primer untuk kulit kering agar tidak pecah-pecah. Aplikasikan primer tipis-tipis dan tunggu 3-5 menit sebelum mengaplikasikan foundation.</p>
<h2>3. Pilih Foundation dengan Coverage Tinggi dan Formula Tahan Air</h2>
<p>Untuk riasan pernikahan, pilih full-coverage foundation yang memiliki formula tahan air (waterproof). Foundation yang tepat akan menutupi noda, bekas jerawat, dan ketidakrataan warna kulit tanpa terlihat seperti topeng. Di Cacalovas, kami menggunakan produk-produk profesional grade yang khusus dirancang untuk ketahanan jangka panjang.</p>
<h2>4. Setting Powder dan Setting Spray adalah Kunci</h2>
<p>Setelah foundation, gunakan loose setting powder untuk "mengunci" riasan. Fokuskan pada area T-zone yang cenderung lebih berminyak. Setelah seluruh riasan selesai, semprotkan setting spray dari jarak 30cm secara merata. Ini adalah langkah yang sering dilewatkan namun sangat krusial untuk ketahanan makeup hingga 12 jam.</p>
<h2>5. Teknik Baking untuk Area Mata dan Bawah Mata</h2>
<p>Teknik baking (membiarkan loose powder diam di wajah selama 5-10 menit) sangat efektif untuk area concealer di bawah mata. Teknik ini membantu concealer menyerap dengan baik dan mencegah creasing yang membuat area bawah mata terlihat berkerut dan tua dalam foto.</p>
<h2>6. Gunakan Produk Waterproof untuk Mata</h2>
<p>Eyeliner, mascara, dan eye shadow primer harus waterproof tanpa kompromi. Pengantin seringkali menangis haru saat prosesi akad, dan produk mata yang tidak waterproof akan luntur dan merusak seluruh tampilan. Pilih eyeliner gel waterproof yang presisi dan mascara waterproof tubing formula yang tidak smudge meski terkena air mata.</p>
<h2>7. Touch-Up Kit Wajib Dibawa</h2>
<p>Siapkan touch-up kit kecil yang dibawa oleh bridesmaid atau wedding organizer. Isinya: loose powder, blotting paper, lipstik atau lip tint, dan setting spray mini. Lakukan touch-up ringan setiap 2-3 jam, terutama di area hidung, dahi, dan bibir. Dengan touch-up yang tepat, makeup pernikahanmu akan terlihat segar dari pagi hingga malam.</p>
<h2>Konsultasi dengan MUA Profesional</h2>
<p>Setiap wajah memiliki karakteristik yang berbeda. Jenis kulit, undertone, dan fitur wajah yang unik memerlukan pendekatan makeup yang personal. Di Cacalovas, kami menyediakan sesi konsultasi gratis untuk membahas konsep riasan yang paling sesuai dengan karakteristik wajah dan konsep pernikahanmu.</p>
<p>Hubungi kami melalui WhatsApp untuk informasi lebih lanjut dan jadwalkan sesi konsultasimu sekarang.</p>`,
    published:true,
    published_at:new Date('2026-04-01').toISOString()
  },
  {
    title:"Perbedaan Riasan Akad dan Resepsi yang Wajib Kamu Tahu",
    slug:"perbedaan-riasan-akad-dan-resepsi",
    category:"Tips & Trik",
    tags:["riasan akad","riasan resepsi","makeup pernikahan"],
    excerpt:"Banyak calon pengantin bingung: apakah riasan akad dan resepsi harus berbeda? Jawabannya ya! Simak panduan lengkapnya dari Cacalovas MUA.",
    content:`<h2>Apakah Riasan Akad dan Resepsi Harus Berbeda?</h2>
<p>Pertanyaan ini sangat sering kami terima dari calon pengantin. Jawabannya adalah <strong>ya, sebaiknya berbeda</strong>. Meski keduanya adalah bagian dari rangkaian pernikahan yang sama, akad dan resepsi memiliki nuansa, pencahayaan, dan durasi yang sangat berbeda. Memahami perbedaan ini akan membantu kamu tampil optimal di kedua momen.</p>
<h2>Riasan Akad: Suci, Anggun, dan Natural</h2>
<p>Prosesi akad nikah adalah momen sakral dan penuh haru. Umumnya dilaksanakan di pagi atau siang hari dengan pencahayaan alami yang lebih terang. Riasan untuk akad idealnya lebih <strong>natural, bersih, dan anggun</strong>.</p>
<p>Ciri khas riasan akad yang baik adalah coverage foundation yang merata namun tidak berlebihan, eye makeup yang lembut (soft smokey atau cut crease ringan), bibir dengan warna nude hingga rose yang elegan, serta riasan yang terlihat "hidup" di bawah cahaya matahari.</p>
<p>Di Purwokerto dan sekitarnya, banyak prosesi akad yang dilakukan di masjid atau pendopo dengan pencahayaan campur antara lampu dan cahaya alami. Riasan harus mampu terlihat sempurna di kedua kondisi tersebut.</p>
<h2>Riasan Resepsi: Glamor, Dramatis, dan Berkesan</h2>
<p>Resepsi pernikahan biasanya dilaksanakan pada sore hingga malam hari di dalam gedung dengan pencahayaan lampu yang lebih kompleks. Ini adalah waktunya tampil <strong>lebih bold dan glamor</strong>.</p>
<p>Karakteristik riasan resepsi meliputi eye makeup yang lebih dramatis (smokey eye yang lebih dalam, glitter, atau eyeliner yang lebih tegas), highlight dan contouring yang lebih tegas untuk terlihat dimensi di bawah lampu gedung, bibir dengan warna yang lebih berani seperti nude kecokelatan, mauve, atau bold red, serta blush yang lebih vivid untuk memberi kesan segar di bawah cahaya lampu.</p>
<h2>Ganti Makeup atau Touch-Up?</h2>
<p>Ada dua opsi yang bisa dipilih: <strong>ganti makeup sepenuhnya</strong> atau <strong>touch-up dan modifikasi</strong>. Ganti makeup penuh memberikan hasil terbaik namun membutuhkan waktu lebih lama (45-90 menit). Touch-up dan modifikasi lebih efisien—MUA akan memperdalam eye makeup, mengganti warna bibir, dan menambahkan highlight untuk transformasi yang signifikan dalam 20-30 menit.</p>
<h2>Tips Memilih Konsep Riasan yang Kohesif</h2>
<p>Meski berbeda, riasan akad dan resepsi sebaiknya tetap memiliki benang merah yang menyatukan keduanya. Misalnya, jika riasan akad menggunakan tone warna cokelat hangat, riasan resepsi bisa menggunakan tone yang sama namun lebih intense dan dramatis.</p>
<p>Diskusikan konsep ini bersama MUA-mu sejak awal. Di Cacalovas, kami selalu menyediakan waktu konsultasi khusus untuk merencanakan kedua tampilan sekaligus, memastikan keduanya tetap kohesif namun tetap memberikan kesan berbeda yang berkesan.</p>
<h2>Waktu yang Tepat untuk Setiap Riasan</h2>
<p>Untuk riasan akad pagi hari, proses riasan biasanya dimulai 2-3 jam sebelum prosesi dimulai. Sedangkan jika ada pergantian riasan untuk resepsi sore/malam, pastikan ada jeda waktu minimal 1,5 jam antara akhir akad dan mulainya resepsi.</p>
<p>Komunikasikan jadwal ini dengan detail kepada wedding organizer dan keluarga agar tidak ada yang terburu-buru di hari H.</p>`,
    published:true,
    published_at:new Date('2026-04-05').toISOString()
  },
  {
    title:"Tren Makeup 2026: Thai Look, Douyin Beauty, dan Glass Skin",
    slug:"tren-makeup-2026",
    category:"Trend Makeup",
    tags:["tren makeup 2026","thai look","douyin beauty","glass skin"],
    excerpt:"Dunia makeup terus berkembang. Di 2026, tiga tren ini mendominasi: Thai Look, Douyin Beauty, dan Glass Skin. Simak penjelasan lengkap dan cara mengadaptasinya untuk pengantin Indonesia.",
    content:`<h2>Tren Makeup 2026 yang Paling Diminati</h2>
<p>Industri kecantikan selalu bergerak dinamis mengikuti tren global yang semakin cepat menyebar berkat media sosial. Di tahun 2026, tiga estetika makeup mendominasi feeds Instagram dan TikTok di seluruh Asia, termasuk Indonesia. Sebagai MUA profesional di Purwokerto, kami di Cacalovas terus mengikuti perkembangan ini untuk memberikan tampilan yang paling relevan dan diinginkan klien.</p>
<h2>1. Thai Look: Elegan, Dramatis, dan Flawless</h2>
<p>Thai beauty aesthetic atau yang sering disebut "Thai Look" telah mencuri perhatian dunia. Estetika ini ditandai dengan kulit yang sangat mulus dan flawless, eye makeup dramatis dengan double eyelid effect yang tegas, alis yang natural namun tersisir sempurna, bibir dengan warna bold namun tetap elegan, dan overall tampilan yang terkesan "high-end" dan tidak berlebihan.</p>
<p>Yang menarik dari Thai Look adalah kemampuannya untuk terlihat glamor sekaligus natural. Rahasia utamanya adalah teknik skin preparation yang sangat matang—kulit harus benar-benar terlihat sempurna sebelum makeup warna apapun diaplikasikan.</p>
<p>Untuk pengantin Indonesia, Thai Look sangat cocok diaplikasikan untuk riasan resepsi. Estetikanya yang dramatis namun elegan akan terlihat menawan di bawah lampu gedung dan memukau di setiap foto.</p>
<h2>2. Douyin Beauty: Fresh, Youthful, dan Glowing</h2>
<p>Douyin (TikTok versi China) telah melahirkan estetika kecantikan sendiri yang kini menjadi global. Ciri khas Douyin Beauty adalah kulit yang terlihat sehat dan glowing dari dalam (bukan glossy berlebihan), blush yang di-apply tinggi di hidung dan bawah mata untuk efek "flushed" yang imut, eye makeup yang fokus pada bagian bawah mata dengan teknik aegyo sal atau undereye blush, dan overall kesan muda, segar, dan playful.</p>
<p>Tren ini sangat populer di kalangan pengantin yang menginginkan tampilan yang lebih sweet dan youthful. Cocok untuk konsep pernikahan outdoor atau garden party di pagi hingga sore hari.</p>
<h2>3. Glass Skin: Teknik, Bukan Produk</h2>
<p>Glass skin adalah estetika yang berasal dari K-beauty dan semakin populer di 2026. Konsepnya sederhana namun eksekusinya menuntut teknik tinggi: kulit harus terlihat setransparan dan sejernih kaca—tidak ada pori-pori, tidak ada tekstur, hanya kilau sehat yang memancar dari dalam.</p>
<p>Mencapai glass skin memerlukan skincare routine yang konsisten selama berminggu-minggu, teknik layering produk yang tepat (toner, essence, serum, moisturizer), pemilihan foundation yang ringan namun buildable, dan highlight placement yang sangat strategis.</p>
<p>Glass skin paling cocok untuk riasan akad yang menginginkan tampilan bersih dan sacred. Efek kulitnya yang mulus dan bercahaya akan terlihat indah dalam foto-foto prosesi yang lebih intim.</p>
<h2>Mengadaptasi Tren untuk Pengantin Indonesia</h2>
<p>Tidak semua tren global bisa langsung diaplikasikan tanpa adaptasi. Cuaca tropis Indonesia, jenis kulit orang Indonesia yang cenderung berminyak di T-zone, dan lighting berbagai venue pernikahan lokal memerlukan penyesuaian. Di Cacalovas, kami mengkombinasikan teknik-teknik dari tren terkini dengan pemahaman mendalam tentang karakteristik kulit lokal untuk menghasilkan tampilan yang trending namun tetap cocok dan nyaman dipakai seharian.</p>`,
    published:true,
    published_at:new Date('2026-04-10').toISOString()
  },
  {
    title:"Cara Merawat Kulit Sebelum Hari H agar Makeup Lebih Flawless",
    slug:"perawatan-kulit-sebelum-hari-pernikahan",
    category:"Skincare",
    tags:["skincare pernikahan","perawatan kulit","tips kecantikan","flawless makeup"],
    excerpt:"Makeup terbaik sekalipun tidak akan maksimal di atas kulit yang tidak terawat. Ikuti panduan perawatan kulit 30 hari sebelum hari H dari Cacalovas.",
    content:`<h2>Kulit adalah Kanvas Terbaik untuk Makeup</h2>
<p>Para MUA profesional sering mengatakan: "Makeup yang baik dimulai dari kulit yang sehat." Pernyataan ini bukan klise—ini adalah fakta yang kami saksikan setiap hari di studio Cacalovas. Pengantin yang datang dengan kulit yang terawat akan mendapatkan hasil riasan yang jauh lebih flawless dibanding mereka yang baru memulai perawatan seminggu sebelum hari H.</p>
<h2>Timeline Perawatan 30 Hari Sebelum Hari H</h2>
<p><strong>30-21 Hari Sebelumnya:</strong> Ini adalah waktu untuk memulai atau mengintensifkan rutinitas dasar. Gunakan pembersih wajah yang lembut dua kali sehari, toner yang menyeimbangkan pH kulit, serum vitamin C di pagi hari untuk mencerahkan dan melindungi dari radikal bebas, moisturizer yang sesuai jenis kulit, dan sunscreen SPF 30+ di siang hari. Ini adalah fondasi yang tidak boleh dilangkahi.</p>
<p><strong>21-14 Hari Sebelumnya:</strong> Tambahkan exfoliasi lembut 2-3 kali seminggu. Gunakan chemical exfoliant seperti AHA (untuk tekstur kulit dan warna tidak merata) atau BHA (untuk pori-pori dan jerawat). Hindari physical scrub yang terlalu kasar. Lakukan facial peeling atau treatment di salon terpercaya pada periode ini—masih cukup waktu untuk kulit memulihkan diri jika ada sedikit kemerahan.</p>
<p><strong>14-7 Hari Sebelumnya:</strong> Tingkatkan hidrasi. Tambahkan hyaluronic acid serum atau ampoule ke rutinitas. Kurangi frekuensi exfoliasi menjadi 1 kali seminggu saja. Mulai menggunakan sheet mask 2-3 kali seminggu untuk boost hidrasi ekstra. Perhatikan pola makan—kurangi makanan berminyak, pedas, dan tinggi gula yang bisa memicu breakout.</p>
<p><strong>7-3 Hari Sebelumnya:</strong> Masuk ke fase maintenance. Tidak ada produk baru, tidak ada treatment yang agresif. Fokus pada hidrasi dan perlindungan. Tidur minimal 7-8 jam setiap malam. Minum air putih minimal 2 liter per hari. Kurangi stres dengan aktivitas relaksasi seperti meditasi atau yoga ringan.</p>
<p><strong>2-1 Hari Sebelumnya:</strong> Double moisturizing—gunakan essence/toner setelah pembersih, lalu moisturizer seperti biasa, dan tambahkan sleeping mask di malam hari sebelum hari H. Tidur lebih awal dan pastikan kualitas tidur baik.</p>
<h2>Jangan Lakukan Ini Menjelang Hari H</h2>
<p>Ada beberapa pantangan keras yang harus dihindari menjelang hari pernikahan. Jangan mencoba produk skincare baru dalam 2 minggu terakhir—risiko iritasi atau purging tidak sebanding. Jangan melakukan facial dengan bahan yang agresif dalam seminggu terakhir. Jangan mengonsumsi makanan yang kamu ketahui memicumu berjerawat. Jangan tidur terlalu malam atau kurang tidur karena akan membuat kulit tampak kusam dan area bawah mata bengkak.</p>
<h2>Peran MUA dalam Skincare Pre-Wedding</h2>
<p>Saat sesi konsultasi di Cacalovas, kami tidak hanya membahas konsep riasan. Kami juga memberikan panduan skincare yang personal berdasarkan kondisi kulit kamu saat ini. Kami percaya bahwa kolaborasi antara perawatan kulit yang baik dan teknik makeup profesional adalah kunci untuk hasil riasan yang benar-benar memukau di hari pernikahanmu.</p>`,
    published:true,
    published_at:new Date('2026-04-15').toISOString()
  },
  {
    title:"8 Hal Penting yang Harus Dicek Sebelum Memilih MUA Pernikahan",
    slug:"cara-memilih-mua-pernikahan",
    category:"Tips & Trik",
    tags:["pilih MUA","tips pernikahan","MUA Purwokerto","makeup artist"],
    excerpt:"Memilih MUA untuk hari pernikahan adalah keputusan penting. Jangan terburu-buru! Berikut 8 hal yang harus kamu verifikasi sebelum tanda tangan kontrak.",
    content:`<h2>Mengapa Pemilihan MUA Sangat Krusial?</h2>
<p>Memilih gaun pernikahan dan dekorasi venue mungkin terasa lebih menyenangkan, tapi memilih MUA (Make Up Artist) adalah salah satu keputusan paling berdampak yang akan kamu buat. Riasan yang tepat bisa membuat penampilan fotografimu abadi dan indah selama puluhan tahun. Riasan yang salah, sebaliknya, akan terlihat dalam setiap foto dan video yang tersimpan seumur hidup.</p>
<p>Setelah menangani ratusan pengantin di wilayah Purwokerto, Banjarnegara, dan Wonosobo, Cacalovas ingin membagikan panduan praktis untuk membantu calon pengantin membuat keputusan terbaik.</p>
<h2>1. Periksa Portofolio yang Relevan</h2>
<p>Lihat portofolio MUA dengan mata kritis. Yang paling penting: apakah ada foto pengantin dengan karakteristik serupa denganmu? Jenis kulit, warna kulit, dan bentuk wajah yang berbeda memerlukan pendekatan yang berbeda. Pastikan MUA yang kamu pilih memiliki pengalaman dengan kulit dan fitur wajah yang mirip denganmu.</p>
<h2>2. Cek Konsistensi Hasil Kerja</h2>
<p>Satu foto bagus bisa kebetulan. Puluhan foto yang konsisten adalah bukti kemampuan sejati. Scroll seluruh portofolio dan perhatikan apakah kualitasnya konsisten di berbagai klien, berbagai kondisi pencahayaan, dan berbagai gaya makeup. MUA yang handal akan menunjukkan hasil yang selalu baik, bukan hanya di momen-momen tertentu.</p>
<h2>3. Baca Testimoni dengan Seksama</h2>
<p>Jangan hanya melihat rating bintang. Baca isi testimoni secara detail. Perhatikan apakah klien menyebut ketepatan waktu, profesionalisme, kemampuan mendengarkan keinginan klien, dan ketahanan makeup sepanjang hari. Testimoni yang spesifik dan detail jauh lebih berharga daripada yang generik.</p>
<h2>4. Lakukan Trial Makeup</h2>
<p>Trial makeup adalah investasi wajib, bukan opsional. Jadwalkan trial minimal 1-2 bulan sebelum hari H. Ini adalah kesempatan untuk melihat bagaimana MUA bekerja, apakah ia mendengarkan keinginanmu, apakah hasilnya sesuai ekspektasi, dan seberapa tahan makeup tersebut di kulitmu sepanjang hari. Foto hasil trial di berbagai kondisi cahaya untuk evaluasi.</p>
<h2>5. Tanyakan Produk yang Digunakan</h2>
<p>MUA profesional menggunakan produk-produk berkualitas yang aman dan teruji. Jangan ragu untuk menanyakan brand dan produk apa yang digunakan. Jika kamu memiliki alergi atau sensitivitas tertentu, informasikan sejak awal. MUA yang baik akan mengakomodasi kebutuhan ini dan menyesuaikan produk yang digunakan.</p>
<h2>6. Klarifikasi Layanan yang Termasuk dalam Paket</h2>
<p>Pastikan kamu memahami dengan jelas apa saja yang termasuk dalam paket: apakah ada trial, apakah termasuk bridesmaid, berapa orang yang bisa dilayani, apakah ada biaya tambahan untuk lokasi yang jauh, dan apakah MUA menyediakan touch-up kit. Kejelasan ini mencegah kesalahpahaman di kemudian hari.</p>
<h2>7. Perhatikan Komunikasi dan Responsivitas</h2>
<p>Cara MUA merespons pertanyaanmu sebelum booking adalah indikator bagaimana mereka akan bekerja di hari H. MUA yang responsif, sabar dalam menjawab pertanyaan, dan proaktif memberikan informasi adalah tanda profesionalisme yang baik. Sebaliknya, MUA yang lambat membalas dan tidak jelas dalam berkomunikasi perlu menjadi perhatian.</p>
<h2>8. Cocokkan Kepribadian</h2>
<p>Kamu akan menghabiskan waktu yang cukup panjang bersama MUA di hari pernikahanmu. Pastikan kepribadiannya cocok denganmu. MUA yang menenangkan, penuh empati, dan bisa membuat suasana nyaman akan membantu mengurangi kegugupan di hari H. Ini adalah faktor yang sering diremehkan namun sangat berdampak pada pengalaman keseluruhan.</p>
<p>Di Cacalovas, kami berkomitmen untuk menjadi mitra terpercaya di hari spesialmu, bukan sekadar penyedia jasa makeup. Hubungi kami untuk konsultasi gratis dan temukan sendiri mengapa ratusan pengantin di Purwokerto, Banjarnegara, dan Wonosobo mempercayakan riasan mereka kepada kami.</p>`,
    published:true,
    published_at:new Date('2026-04-20').toISOString()
  }
];
async function seed() {
  for (const p of posts) {
    const { error } = await sb.from('blog_posts').upsert({ ...p, updated_at: new Date().toISOString() }, { onConflict: 'slug' });
    if (error) console.log('ERROR', p.slug, error.message);
    else console.log('OK', p.slug);
  }
  console.log('Done part 1');
}
seed();
