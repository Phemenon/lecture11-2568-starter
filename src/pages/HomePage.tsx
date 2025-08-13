import ModalRegister from "../components/ModalRegister";
export default function HomePage() {
  return (
    <div className="col-12 mt-4 p-0">
      <div className="container text-center">
        <h2> Wellcome To CMU Marathon</h2>
        <div>
          <img src="/src/assets/marathonrun.png" alt="Logo CMU Marathon" />
        </div>
        <button
          type="button"
          className="m-4 btn btn-primary"
          data-bs-toggle="modal" //data-bs-toggle="modal": บอก Bootstrap ว่าปุ่มนี้จะ เปิด modal
          data-bs-target="#modalregister" // data-bs-target="#modalregister": เชื่อมกับ modal ที่มี id="modalregister"
          //(เป็น target ของ modal ที่จะเปิด)
        >
          Register
        </button>
      </div>
      <ModalRegister />
    </div>
  );
}
