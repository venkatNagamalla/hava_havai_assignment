import "./index.css";

const Headers = () => {
  const renderNav = () => (
    <nav>
      <h2 className="logo">hava havai</h2>
      <img
        className="user"
        src="https://res.cloudinary.com/dkm6rcqj9/image/upload/v1720155620/hava_img_yvgkcc.jpg"
        alt="user"
      />
    </nav>
  );

  return <>{renderNav()}</>;
};

export default Headers;
