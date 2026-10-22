export const WHATSAPP_NUMBER = "918302430391";
export const PHONE_DISPLAY = "+91 83024 30391";
export const TEL = `tel:+${WHATSAPP_NUMBER}`;
export const EMAIL = "tanishcreation16@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/tanishcreation.co";
export const GST = "08JVCPD4798C1ZD";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailLink(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const designAsk = (designName: string, designId: string) =>
  `Hi Tanish Creation! I'm interested in ${designName} (${designId}). Please share the price and the minimum order.`;

export function designInquiry(designName: string, designId: string, imagePath: string) {
  const absoluteImageUrl = `https://tanishcreation.com${imagePath}`;
  return waLink(`${designAsk(designName, designId)}\n\nReference: ${absoluteImageUrl}`);
}

export function designMail(designName: string, designId: string, imagePath: string) {
  return mailLink(
    `Enquiry: ${designName} (${designId})`,
    `${designAsk(designName, designId)}\n\nReference: https://tanishcreation.com${imagePath}`,
  );
}
