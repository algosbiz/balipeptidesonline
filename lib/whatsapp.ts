// Bali Peptides' WhatsApp number in international format:
// country code (62) followed by the number, with no "+", spaces or dashes.
const WHATSAPP_NUMBER = "6282326300167";

// The same number, formatted for people to read (shown in the footer).
export const WHATSAPP_DISPLAY_NUMBER = "+62 823-2630-0167";

// Pre-written messages. Keeping them here means every button on the
// site can be reworded from one place.
export const DEFAULT_MESSAGE =
  "Hi Bali Peptides, I'd like to ask about your peptide products.";

export const DELIVERY_MESSAGE =
  "Hi Bali Peptides, I'd like to check peptide delivery availability for my area in Bali.";

export function getProductMessage(productName: string) {
  return `Hi Bali Peptides, I'm interested in ${productName}. Could you please provide more information?`;
}

// The message sent when a visitor presses "Proceed to Checkout" in the cart.
export function getCartMessage(items: { name: string; quantity: number }[]) {
  const list = items.map((item) => `• ${item.quantity} × ${item.name}`).join("\n");
  return `Hi Bali Peptides, I'd like to order:\n\n${list}\n\nCould you please confirm availability and delivery?`;
}

// Builds a link that opens WhatsApp with the message already typed in.
export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
