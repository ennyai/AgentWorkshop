# Webhook Integration Guide

## Overview

Both registration forms (`RegistrationForm` and `ZoomRegistration`) now collect identical data and automatically send this information to a configured webhook endpoint. This allows you to integrate with email marketing services, CRM systems, or custom APIs.

**🚀 Webhook integration is now ENABLED by default!** Just set your `VITE_WEBHOOK_URL` environment variable.

## Data Structure

All registration forms collect the following standardized data:

```typescript
interface RegistrationData {
  firstName: string;         // Required
  lastName: string;          // Required  
  email: string;            // Required
  company: string;          // Optional
  role: string;             // Required - see valid options below
  contentType: string;      // Optional - see valid options below
  marketingConsent: boolean; // Required
}
```

### Valid Role Options
- `business-owner`
- `marketer`
- `content-creator`
- `coo`
- `marketing-manager`
- `social-media-manager`
- `freelancer`
- `other`

### Valid Content Type Options
- `social-media`
- `blog-articles`
- `email-marketing`
- `video-content`
- `product-descriptions`
- `marketing-copy`
- `mixed`

## Webhook Payload

The webhook receives data in this format:

```json
{
  "formType": "webinar-registration",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "data": {
    "firstName": "John",
    "lastName": "Smith", 
    "email": "john@example.com",
    "company": "Example Corp",
    "role": "marketer",
    "contentType": "social-media",
    "marketingConsent": true
  }
}
```

## Setup Instructions

### 1. Environment Configuration

**Create a `.env.local` file in your project root:**

```bash
# Your webhook endpoint URL
VITE_WEBHOOK_URL=https://your-webhook-endpoint.com/api/registrations
```

**That's it!** The webhook integration is already enabled in both forms.

### 2. No Code Changes Needed

Unlike before, webhook integration is now active by default. Both forms will:
- ✅ Automatically send data to your webhook URL
- ✅ Handle errors gracefully (show error messages to users)
- ✅ Log success/failure to console for debugging

## Popular Webhook Services

### Zapier
1. Create a new Zap
2. Choose "Webhooks by Zapier" as trigger
3. Copy the webhook URL and add it to your `.env.local` file
4. Connect to your desired service (MailChimp, HubSpot, etc.)

### Make (Integromat)
1. Create a new scenario
2. Add a webhook trigger
3. Copy the webhook URL and add it to your `.env.local` file
4. Add modules for your target services

### n8n (Self-hosted)
1. Create a webhook node
2. Configure the endpoint
3. Copy the webhook URL and add it to your `.env.local` file
4. Add nodes for data processing and forwarding

### Custom API
Create an endpoint that accepts POST requests with the webhook payload structure.

**Example webhook endpoint structure:**
```javascript
// Node.js/Express example
app.post('/api/registrations', (req, res) => {
  const { formType, timestamp, data } = req.body;
  
  // Process the registration data
  console.log('New webinar registration:', data);
  
  // Save to database, send to email service, etc.
  
  res.status(200).json({ success: true });
});
```

## Testing

1. Set up a test webhook using services like [webhook.site](https://webhook.site)
2. Copy the test URL to your `.env.local` file:
   ```bash
   VITE_WEBHOOK_URL=https://webhook.site/unique-url-here
   ```
3. Fill out and submit a registration form
4. Check webhook.site to verify the data is received correctly

## Error Handling

The webhook utility includes comprehensive error handling:
- ✅ Logs warnings if webhook URL is not configured
- ✅ Catches and logs network errors
- ✅ Shows user-friendly error messages if webhook fails
- ✅ Does not break the form if webhook is unavailable
- ✅ Graceful fallback behavior

## Security Considerations

- Use HTTPS endpoints only
- Consider adding authentication headers if needed
- Validate data on the receiving end
- Set up rate limiting on your webhook endpoint
- Monitor for unusual activity

## Troubleshooting

### Webhook not firing
- Check that `VITE_WEBHOOK_URL` is set in `.env.local`
- Restart your development server after adding the environment variable
- Check browser console for error messages

### Data not reaching destination
- Test the webhook URL manually with a tool like Postman
- Verify the endpoint is accepting POST requests
- Check your webhook service logs

### CORS issues
- Ensure your webhook endpoint includes proper CORS headers
- Consider using a proxy if needed for development

### Environment Variable Not Loading
- Make sure the file is named `.env.local` (not `.env`)
- Restart your development server
- Check that the variable starts with `VITE_`

## Production Deployment

For production, set the environment variable in your hosting platform:

**Railway:**
```bash
railway variables set VITE_WEBHOOK_URL=https://your-production-webhook.com/api/registrations
```

**Vercel:**
```bash
vercel env add VITE_WEBHOOK_URL
```

**Netlify:**
Add in the Netlify dashboard under Site settings > Environment variables 