export const background = (image, filter = null) => {
	return `
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100vmax;
  background-size: cover;
  background-position: center;
  background-image: url("${image}");
  filter: ${filter};
  z-index: -100;
  `;
};