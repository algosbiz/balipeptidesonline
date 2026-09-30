// Bali Peptides' WhatsApp number in international format:
// country code (62) followed by the number, with no "+", spaces or dashes.
const WHATSAPP_NUMBER = "6282326300167";

// The same number, formatted for people to read (shown in the footer).
export const WHATSAPP_DISPLAY_NUMBER = "+62 823-2630-0167";

// Every WhatsApp message from this website starts with this line, so the team
// can see which website the customer came from (the same number serves more
// than one site). It is added automatically by getWhatsAppUrl() below.
const OPENING_LINE = "Hi Bali Peptides, I'm contacting you from balipeptides.online.";

// Pre-written messages. Keeping them here means every button on the
// site can be reworded from one place. The opening line above is added
// in front of each one, so they don't need their own greeting.
export const DEFAULT_MESSAGE = "I'd like to ask about your peptide products.";

export const DELIVERY_MESSAGE = "I'd like to check peptide delivery availability for my area in Bali.";

export function getProductMessage(productName: string) {
  return `I'm interested in ${productName}. Could you please provide more information?`;
}

// The message sent when a visitor presses "Proceed to Checkout" in the cart.
export function getCartMessage(items: { name: string; quantity: number }[]) {
  const list = items.map((item) => `• ${item.quantity} × ${item.name}`).join("\n");
  return `I'd like to order:\n\n${list}\n\nCould you please confirm availability and delivery?`;
}

// Builds a link that opens WhatsApp with the message already typed in.
export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  const fullMessage = `${OPENING_LINE}\n\n${message}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
}
