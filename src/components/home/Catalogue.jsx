import styles from "../../styles/css/app.module.css";
import { numberToText } from "../../utils/utils";
function Catalogue({ products, customStyles, header = true }) {
  return (
    <section className={styles.catalogue}>
      {header ? <h2 className="section_header">Discover new lands</h2> : ""}
      <div className={styles.catalogue_container}>
        {header ? (
          <div className={styles.catalogue_controller}>
            <button type="button" className="btn-non">
              Prev
            </button>
            <button type="button" className="btn-non">
              Next
            </button>
          </div>
        ) : (
          ""
        )}
        <div className={styles.catalogue_menu} style={customStyles}>
          {products?.map((el, index) => {
            return (
              <div key={index} className={styles.catalogue_item}>
                <div className={styles.thumbnail}>
                  <div className={styles.badge}>
                    {el.isAvailable ? <span>For sale</span> : ""}
                    {el.hotOffer ? (
                      <span className={styles.hot}>Hot offer</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <img
                    src={el?.thumbnail}
                    width={"200px"}
                    height={"200px"}
                    loading="lazy"
                    alt={el.title}
                    title={el.title}
                  />
                </div>
                <div style={{ padding: ".5rem 1.25rem" }}>
                  <h3>{el.title}</h3>
                  <div className={styles.catalogue_item_title}>
                    <span>
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 10.6875C8.91284 10.6875 8.33886 10.5134 7.85065 10.1872C7.36244 9.86097 6.98193 9.39731 6.75723 8.85484C6.53254 8.31237 6.47375 7.71546 6.5883 7.13958C6.70284 6.5637 6.98559 6.03472 7.40078 5.61953C7.81597 5.20434 8.34495 4.92159 8.92083 4.80705C9.49671 4.6925 10.0936 4.75129 10.6361 4.97598C11.1786 5.20068 11.6422 5.58119 11.9684 6.0694C12.2946 6.55761 12.4688 7.13159 12.4688 7.71875C12.4678 8.50582 12.1547 9.26039 11.5982 9.81693C11.0416 10.3735 10.2871 10.6866 9.5 10.6875ZM9.5 5.9375C9.1477 5.9375 8.80332 6.04197 8.51039 6.2377C8.21747 6.43342 7.98916 6.71162 7.85434 7.0371C7.71952 7.36258 7.68425 7.72073 7.75298 8.06626C7.82171 8.41178 7.99136 8.72917 8.24047 8.97829C8.48958 9.2274 8.80697 9.39705 9.1525 9.46578C9.49803 9.53451 9.85618 9.49923 10.1817 9.36441C10.5071 9.22959 10.7853 9.00129 10.9811 8.70836C11.1768 8.41544 11.2813 8.07105 11.2813 7.71875C11.2808 7.24648 11.093 6.79369 10.759 6.45974C10.4251 6.12579 9.97227 5.93797 9.5 5.9375Z"
                          fill="black"
                        />
                        <path
                          d="M9.50001 17.8125L4.49113 11.9053C4.42153 11.8166 4.35266 11.7273 4.28451 11.6375C3.4289 10.5104 2.96668 9.13379 2.96876 7.71875C2.96876 5.98656 3.65687 4.32531 4.88172 3.10046C6.10656 1.87561 7.76781 1.1875 9.50001 1.1875C11.2322 1.1875 12.8935 1.87561 14.1183 3.10046C15.3431 4.32531 16.0313 5.98656 16.0313 7.71875C16.0333 9.13315 15.5713 10.5092 14.7161 11.6357L14.7155 11.6375C14.7155 11.6375 14.5374 11.8714 14.5107 11.9029L9.50001 17.8125ZM5.23273 10.922C5.23273 10.922 5.37107 11.1049 5.40254 11.1441L9.50001 15.9766L13.6028 11.1376C13.6289 11.1049 13.7679 10.9208 13.7685 10.9202C14.4674 9.99941 14.8451 8.8748 14.8438 7.71875C14.8438 6.3015 14.2808 4.9423 13.2786 3.94015C12.2765 2.938 10.9173 2.375 9.50001 2.375C8.08276 2.375 6.72355 2.938 5.72141 3.94015C4.71926 4.9423 4.15626 6.3015 4.15626 7.71875C4.15501 8.87552 4.53316 10.0008 5.23273 10.922Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    {el.location}
                  </div>
                  <p>{el.description}</p>
                  <div className={styles.catalogue_item_detail}>
                    <span>land size : {el.size}</span>
                    <span>N{numberToText(el.price)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
