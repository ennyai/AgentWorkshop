import { WebhookPayload, RegistrationData } from "@/types/registration";

// Configuration for webhook endpoint
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || "";

// Current webinar ID | this can be changed to the webinar ID of the webinar you want to send the registration data to
const CURRENT_WEBINAR_ID = "1047865790"


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
      // Handle specific error cases
      if (response.status === 404) {
        const errorText = await response.text();
        if (errorText.includes("webhook") && errorText.includes("not registered")) {
          console.error("Webhook Error: n8n webhook is in test mode. Please activate your workflow or click 'Execute workflow' in n8n.");
        } else {
          console.error("Webhook Error: Endpoint not found (404). Please check your webhook URL.");
        }
      } else {
        console.error(`Webhook Error: HTTP ${response.status} - ${response.statusText}`);
      }
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
 * @param webinarId The webinar ID (defaults to current webinar)
 * @returns WebhookPayload ready to send
 */
export const createWebhookPayload = (
  data: RegistrationData, 
  webinarId: string = CURRENT_WEBINAR_ID
): WebhookPayload => {
  return {
    formType: "webinar-registration",
    webinarId,
    timestamp: new Date().toISOString(),
    data,
  };
}; 