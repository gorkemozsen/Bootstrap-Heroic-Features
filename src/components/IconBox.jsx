import styles from "./IconBox.module.css";

function IconBox({ icon }) {
  return (
    <>
      <div
        className={
          "mt-n4 feature bg-primary bg-gradient text-white rounded-3 mb-4 " +
          styles.feature
        }
      >
        <i className={"bi bi-" + icon}></i>
      </div>
    </>
  );
}

export default IconBox;
