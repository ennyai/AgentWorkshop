// Standardized registration data interface for webhook service
export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  company: string; // Optional field
  role: string;
  contentType: string; // Optional field
  marketingConsent: boolean;
}

// Valid role options
export const ROLE_OPTIONS = [
  "business-owner",
  "marketer", 
  "content-creator",
  "coo",
  "marketing-manager",
  "social-media-manager",
  "freelancer",
  "other"
] as const;

// Valid content type options
export const CONTENT_TYPE_OPTIONS = [
  "social-media",
  "blog-articles", 
  "email-marketing",
  "video-content",
  "product-descriptions",
  "marketing-copy",
  "mixed"
] as const;

export type Role = typeof ROLE_OPTIONS[number];
export type ContentType = typeof CONTENT_TYPE_OPTIONS[number];

// Webhook payload structure
export interface WebhookPayload {
  formType: "webinar-registration";
  webinarId: string;
  timestamp: string;
  data: RegistrationData;
} 