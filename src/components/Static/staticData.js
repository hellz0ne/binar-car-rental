import iconComplete from "./../../asset/icon_complete.png";
import iconPrice from "./../../asset/icon_price.png";
import icon24hrs from "./../../asset/icon_24hrs.png";
import iconProfessional from "./../../asset/icon_professional.png";
import profPic1 from "./../../asset/profPic1.png";
import profPic2 from "./../../asset/profPic2.png";
import iconStars from "./../../asset/stars.png";

const strList = ["Sewa Mobil Dengan Supir di Bali 12 Jam", "Sewa Mobil Lepas Kunci di Bali 24 Jam", "Sewa Mobil Jangka Panjang Bulanan", "Gratis Antar - Jemput Mobil di Bandara", "Layanan Airport Transfer / Drop In Out"];

const whyUs = [
  {
    icon: iconComplete,
    title: "Mobil Lengkap",
    desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: iconPrice,
    title: "Harga Murah",
    desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: icon24hrs,
    title: "Layanan 24 Jam",
    desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: iconProfessional,
    title: "Sopir Profesional",
    desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const testiList = [
  {
    userPic: profPic1,
    star: iconStars,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    Date: "John Dee 32, Bromo",
  },
  {
    userPic: profPic2,
    star: iconStars,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    Date: "John Dee 32, Bromo",
  },
  {
    userPic: profPic1,
    star: iconStars,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    Date: "John Dee 32, Bromo",
  },
];

const faqList = [
  {
    question: "Apa saja syarat yang dibutuhkan?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    question: "Berapa hari minimal sewa mobil lepas kunci?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    question: "Apakah Ada biaya antar-jemput?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    question: "Bagaimana jika terjadi kecelakaan",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];

const include = ["Apa saja yang termasuk dalam paket misal durasi max 12 jam", "Sudah termasuk bensin selama 12 jam", "Sudah termasuk Tiket Wisata", "Sudah termasuk pajak"];

const exclude = ["Tidak termasuk biaya makan sopir Rp 75.000/hari", "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam", "Tidak termasuk akomodasi penginapan"];

const refund = [
  " Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
  "Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
  "Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
];

export { whyUs, strList, testiList, faqList, include, exclude, refund };
