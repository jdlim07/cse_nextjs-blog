import Image from "next/image";
import styles from "../../styles/page.module.css";

export default function First() {
  return (
    <div
      style={{
        backgroundColor: "rgb(220, 245, 230)",
        //transform: "translateY(%)",
      }}
    >
      <header
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 10,
          backgroundColor: "rgba(10,30,20, 0.9)",
        }}
      >
        {" "}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            width: "100%",
            height: "180px",
            padding: "0 4px",
            maxWidth: "1240px",
            margin: "auto",
          }}
        >
          {" "}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: 6,
              listStyleType: "none",
            }}
          >
            <li>
              <a
                style={{
                  padding: "3px 6px",
                  fontSize: "35px",
                  fontWeight: "medium",
                  color: "white",
                  borderRadius: "20px",
                  textDecoration: "none",
                }}
                href="#hobby1"
              >
                喜
              </a>
            </li>
            <li>
              <a
                style={{
                  padding: "3px 1000px",
                  fontSize: "35px",
                  fontWeight: "medium",
                  color: "white",
                  borderRadius: "20px",
                  textDecoration: "none",
                }}
                href="#hobby2"
              >
                嬉
              </a>
            </li>
          </ul>
          <a
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            href="/"
          >
            <h3 className={styles.title}>HELLO WORLD</h3>
          </a>
        </nav>
      </header>
      <div>
        <section className={styles.section2}>
          <p className={`${styles.font35_2} ${styles.start}`}>
            Name : jadelim <br></br>Birth : 20040108<br></br>Favorite : blue,
            listening music, vegging out<br></br> Now : fresher of dep. of
            information systems of hanyang univ.
          </p>
        </section>
      </div>
      <p
        style={{
          marginLeft: "12%",
          marginTop: "0px",
          color: "rgb(220, 245, 230)",
        }}
      >
        .
      </p>
      <p style={{ marginLeft: "12%", marginTop: "260px" }}>
        <MyImage />{" "}
      </p>

      <div>
        <section className={styles.section1}>
          <p id="hobby1" className={styles.font50}>
            #climbing
          </p>
          <p>
            <MyImage2 />
          </p>
        </section>
      </div>
      <section className={styles.sectionP1}>
        <P1 />
      </section>
      <div>
        <section className={styles.section3}>
          <p id="hobby2" className={styles.font50}>
            #piano
          </p>
          <p>
            <MyImage1 />
          </p>
        </section>
      </div>
      <section className={styles.sectionP2}>
        <P2 />
      </section>
      <section className={styles.section4}>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "50",
            letterSpacing: "4px",
            lineHeight: "45px",
            color: "rgb(230, 245, 245)",
            fontFamily: "Segoe UI",
          }}
        >
          made : 20240415<br></br>
          music recommend : 샴푸의 요정_ 빛과 소금<br></br>
          more on : _
          <a
            style={{
              fontSize: "25px",
              fontWeight: "50",

              letterSpacing: "4px",
              lineHeight: "45px",
              color: "rgb(230, 245, 245)",
              fontFamily: "Segoe UI",
            }}
            href="https://www.instagram.com/blue0365/"
          >
            https://www.instagram.com/blue0365/
          </a>
        </p>
        <a className={styles.font35} href="/">
          back to home
        </a>
      </section>
      <footer
        style={{
          minHeight: "2550px",
          position: "realtive",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          // marginLeft: "-1%",
          // marginRight: "-5%%",
          height: "130px",
          padding: "10px 0",
          // maxWidth: "1240px",
          // margin: "auto",
          //backgroundColor: " #367DA9",
          borderBottom: "320px solid rgba(10,30,20, 0.9)",
        }}
      ></footer>
    </div>
  );
}
const MyImage = () => {
  return (
    <Image
      src="/images/profile1.jpg"
      height={800} // Desired size with correct aspect ratio
      width={600} // Desired size with correct aspect ratio
      alt="upload profile"
    />
  );
};

const P1 = () => {
  return (
    <Image
      src="/images/wall1.jpg"
      height={818} // Desired size with correct aspect ratio
      width={1154} // Desired size with correct aspect ratio
      alt="upload profile"
    />
  );
};

const P2 = () => {
  return (
    <Image
      src="/images/wall2.jpg"
      height={818} // Desired size with correct aspect ratio
      width={1154} // Desired size with correct aspect ratio
      alt="upload profile"
    />
  );
};

const MyImage1 = () => {
  return (
    <Image
      src="/images/P1.jpg"
      height={900} // Desired size with correct aspect ratio
      width={600} // Desired size with correct aspect ratio
      alt="upload profile"
    />
  );
};
const MyImage2 = () => {
  return (
    <Image
      src="/images/c1.jpg"
      height={800} // Desired size with correct aspect ratio
      width={600} // Desired size with correct aspect ratio
      alt="upload profile"
    />
  );
};
