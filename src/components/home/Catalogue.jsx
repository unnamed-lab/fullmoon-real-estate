import styles from "../../styles/css/app.module.css";
function Catalogue({ products }) {
  return (
    <section className={styles.catalogue}>
      <h2 className="section_header">Discover new lands</h2>
      <div className={styles.catalogue_container}>
        <div className={styles.catalogue_controller}>
          <button type="button" className="btn-non">
            Prev
          </button>
          <button type="button" className="btn-non">
            Next
          </button>
        </div>
        <div className={styles.catalogue_menu}>
          {products?.map((el, index) => {
            return (
              <div key={index} className={styles.catalogue_item}>
                Hello World!
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
