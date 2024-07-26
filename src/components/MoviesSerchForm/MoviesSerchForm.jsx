import toast, { Toaster } from "react-hot-toast";
import style from "./MoviesSerchForm.module.css";
import { useState } from "react";

function MoviesSerchForm({ setSerchText }) {
  const [disableSerchBtn, setDisableSerchBtn] = useState(false);

  async function serchFilm(e) {
    e.preventDefault();
    setDisableSerchBtn(true);
    const serchText = e.target.elements.serch.value;
    if (serchText.length < 3) {
      toast.error("min 3 letters");
      setDisableSerchBtn(false);
      return;
    }

    setSerchText(serchText);
    e.target.reset();
    setDisableSerchBtn(false);
  }

  return (
    <div className={style.wrapper}>
      <p className={style.title}>Serch film by name</p>
      <form onSubmit={serchFilm} className={style.form}>
        <input type="text" name="serch" className={style.input} />
        <button
          disabled={disableSerchBtn}
          type="submit"
          className={style.btnSerch}
        >
          Serch
        </button>
      </form>

      <Toaster />
    </div>
  );
}

export default MoviesSerchForm;