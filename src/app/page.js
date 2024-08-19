
import Image from "next/image";
import styles from "./page.module.css";
import natureImage from './/nature.jpg';
import nature2Image from './/nature2.jpg';
import nature3Image from './/nature3.jpg';
import nature4Image from './/nature4.jpg';
import './/globals.css';
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">METHAWEE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
      <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Contact">Contact</Link>
              </li>
              <li class="nav-item">
        <a href="/Signup" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signup</a>
        </li>&nbsp;
        <li class="nav-item">
        <a href="/Signin" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signin</a>
        </li>&nbsp;
      </ul>
      </div>
    </div>
</nav>


      <div className="container">

        <div className="row my-3">
          <div className="col-md-12 text-center bg-danger p-5 border rounded">
            <div id="carouselExampleRided" className="carousel Silde" data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <Image src={nature4Image} className="d-clock w-100" alt="Nature" />
              </div>
              <div className="carousel-item">
              <Image src={nature2Image} className="d-clock w-100" alt="Lake" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
          </div>

  <div className="d-flex flex-row">
  <div className="card" style={{width: '30rem'}}>
    <Image src={natureImage} className="card-img-top" alt="Nature" />
    <div className="card-body">
      <h5 className="card-title">ความหมาย "ปาเวณีปีใหม่" </h5>
      <p className="card-text">เป็นวันที่มีความหมายถึงการขึ้นศักราชใหม่ หรือปีใหม่ตามปฏิทินสุริยคติ โดยคำว่า สงกรานต์ เป็นคำภาษาสันสกฤต แปลว่า ผ่าน หรือ เคลื่อนย้ายไป ในที่นี้คือ การเคลื่อนย้ายของพระอาทิตย์เข้าสู่ราศีเมษ ถือเป็นการเคลื่อนที่สำคัญ จึงเรียกว่า มหาสงกรานต์ ในไทยถิ่นเหนือเรียกวัน สังขานต์ล่อง ซึ่งก็มีความหมายเหมือนคำว่าสงกรานต์</p>
    </div>
  </div>
  <div className="card" style={{width: '30rem'}}>
    <Image src={nature2Image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">ที่มา "ปาเวณีปีใหม่" </h5>
      <p className="card-text">ได้รับอิทธิพลมาจากพราหมณ์ ซึ่งใช้ระบบการขึ้นปีใหม่แบบปฏิทินสุริยคติ</p>
    </div>
  </div>
  <div className="card" style={{width: '30rem'}}>
    <Image src={nature3Image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">ความสำคัญ "ปาเวณีปีใหม่" </h5>
      <p className="card-text"> เป็นประเพณีที่สำคัญของชาวเหนือ หรือชาวล้านนา สืบเนื่องมาจากอดีตกาลที่จะยึดถือเป็นช่วงเปลี่ยนศักราชใหม่ โดยกำหนดจุดที่พระอาทิตย์ย้ายจากราศีมีนเข้าสู่ราศีเมษ ซึ่งมักจะตรงกับวันที่ 13 เมษายน หรือ 14 เมษายนของแต่ละปี และจะกินเวลาประมาณ 4-7 วัน ยาวนานกว่าสงกรานต์ของภาคอื่น ๆ</p>
    </div>
  </div>
</div>

        <div className="row">
        <footer class="bg-danger py-3 my-4 border rounded">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
    <p class="text-center text-body-secondary">© Chiang Mai Technical ollege</p>
  </footer>

            </div>
          </div>

</>
  );
} 
