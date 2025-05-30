import { WebhookPayload, RegistrationData } from "@/types/registration";

// Configuration for webhook endpoint
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || "";

/**
 * Sends registration data to the configured webhook endpoint
 * @param payload The webhook payload containing registration data
 * @returns Promise that resolves to true if successful, false otherwise
 */
export const sendToWebhook = async (payload: WebhookPayload): Promise<boolean> => {
  if (!WEBHOOK_URL) {
    console.warn("Webhook URL not configured. Set VITE_WEBHOOK_URL environment variable.");
    return false;
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed with status ${response.status}`);
    }

    console.log("Successfully sent registration data to webhook");
    return true;
  } catch (error) {
    console.error("Failed to send registration data to webhook:", error);
    return false;
  }
};

/**
 * Creates a standardized webhook payload from registration data
 * @param data The registration data
 * @returns WebhookPayload ready to send
 */
export const createWebhookPayload = (data: RegistrationData): WebhookPayload => {
  return {
    formType: "webinar-registration",
    timestamp: new Date().toISOString(),
    data,
  };
}; 