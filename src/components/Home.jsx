import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <Link to="/login"
        className="btn btn-primary mt-2">Bejelentkezés</Link>
      </div>
      <h1>Informáló</h1>

      <p>
        Dolgozói informáló
      </p>
      <p>
        Egy hozzáférés: eros:titok
      </p>
      <p>
        Egy admin hozzáférés: admin:admin
      </p>
    </>
  )
}

export default Home