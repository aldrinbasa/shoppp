import previewStyles from "./ItemPreview.module.css";

const ItemPreview = () => {
  return (
    <div className={previewStyles.itemPrev}>
      <div className={previewStyles.imgThumbnail}>
        <img src="/" alt="thumbnail" />
      </div>
      <div className={previewStyles.quickDetailsDiv}>
        <div className={previewStyles.quickDetails}>
          <span>
            Item title | Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua
          </span>
          <span className={previewStyles.price}>$$</span>
        </div>
        <div className={previewStyles.itemBtns}>
          <svg
            width="43"
            height="40"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="21.0526" cy="20" rx="21.0526" ry="20" fill="#D9D9D9" />
            <line x1="11" y1="19.5" x2="32" y2="19.5" stroke="black" />
          </svg>
          <svg
            width="43"
            height="40"
            viewBox="0 0 43 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="21.0526" cy="20" rx="21.0526" ry="20" fill="#D9D9D9" />
            <path d="M11 22L16.5715 29L32 10" stroke="black" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ItemPreview;
