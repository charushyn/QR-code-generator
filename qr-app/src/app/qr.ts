import QRCode from "qrcode";

// With async/await
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const generateQR = async (text: string) => {
  try {
    const url: string = await QRCode.toDataURL(text);
    return url;
  } catch (err) {
    console.error(err);
  }
};

export default generateQR;
