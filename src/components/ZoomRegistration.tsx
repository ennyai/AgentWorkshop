import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Video, Calendar, Clock, Users, CheckCircle, X } from "lucide-react";
import { RegistrationData } from "@/types/registration";
import { createWebhookPayload, sendToWebhook } from "@/utils/webhook";

const ZoomRegistration = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    contentType: "",
    marketingConsent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (field: keyof RegistrationData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send to webhook
      const webhookPayload = createWebhookPayload(formData);
      const webhookSuccess = await sendToWebhook(webhookPayload);
      
      if (!webhookSuccess) {
        console.error("Webhook failed");
        setIsLoading(false);
        return;
      }
      
      // Success flow
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Registration error:", error);
      setIsLoading(false);
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.role;

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">Registration Confirmed!</h3>
          <p className="text-gray-600 mb-4">
            You'll receive a Zoom link and webinar materials via email within 30 minutes.
          </p>
          <div className="bg-workshop-lightGray p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700">
              <strong>Webinar:</strong> Content Automation Strategy Session<br />
              <strong>Date:</strong> [Date TBD]<br />
              <strong>Duration:</strong> 1 Hour<br />
              <strong>Format:</strong> Live Online (Zoom)
            </p>
          </div>
          <div className="mb-4 p-3 bg-workshop-purple/5 border border-workshop-purple/20 rounded-lg">
            <p className="text-sm text-workshop-purple font-medium">
              📅 Calendar invite sent to your email<br />
              🎥 Zoom link included in confirmation email<br />
              📝 Pre-webinar materials will be shared 1 hour before
            </p>
          </div>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setShowForm(false);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                role: "",
                contentType: "",
                marketingConsent: false,
              });
            }}
            variant="outline" 
            className="text-workshop-purple border-workshop-purple hover:bg-workshop-purple/5"
          >
            Register Another Person
          </Button>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
        <div className="absolute -top-3 -left-3 bg-green-600 text-white text-sm font-medium py-1 px-3 rounded-full">
          100% Free
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-workshop-blue/10 rounded-lg">
            <Video className="w-6 h-6 text-workshop-blue" />
          </div>
          <h3 className="text-2xl font-semibold">Free Content Automation Webinar</h3>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <Calendar className="w-5 h-5 text-workshop-purple" />
            <span>[Date TBD]</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="w-5 h-5 text-workshop-purple" />
            <span>1 Hour Live Session</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Users className="w-5 h-5 text-workshop-purple" />
            <span>Business Owners, Marketers, Content Creators</span>
          </div>
        </div>

        <div className="bg-workshop-lightGray p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-2 text-gray-900">What You'll Get:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Live demo of content automation in action</li>
            <li>• Step-by-step implementation roadmap</li>
            <li>• Exact tools and platforms you need</li>
            <li>• Q&A session with expert guidance</li>
            <li>• Free downloadable resource guide</li>
            <li>• Optional workshop preview (3-hour paid session)</li>
          </ul>
        </div>

        <Button 
          onClick={() => setShowForm(true)}
          className="w-full btn-primary text-lg flex items-center justify-center gap-2 group"
        >
          <Video className="w-5 h-5" />
          Save My Free Spot
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-workshop-blue/10 rounded-lg">
            <Video className="w-6 h-6 text-workshop-blue" />
          </div>
          <h3 className="text-2xl font-semibold">Free Webinar Registration</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowForm(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name *
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name *
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="mt-1"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company (Optional)
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="mt-1"
            placeholder="Your company or 'Individual Creator'"
          />
        </div>

        <div>
          <Label htmlFor="role" className="text-sm font-medium text-gray-700">
            Your Role *
          </Label>
          <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business-owner">Business Owner</SelectItem>
              <SelectItem value="marketer">Marketer</SelectItem>
              <SelectItem value="content-creator">Content Creator</SelectItem>
              <SelectItem value="coo">COO</SelectItem>
              <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
              <SelectItem value="social-media-manager">Social Media Manager</SelectItem>
              <SelectItem value="freelancer">Freelancer</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="contentType" className="text-sm font-medium text-gray-700">
            Primary Content Type (Optional)
          </Label>
          <Select value={formData.contentType} onValueChange={(value) => handleInputChange("contentType", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="What type of content do you create most?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="social-media">Social Media Posts</SelectItem>
              <SelectItem value="blog-articles">Blog Articles</SelectItem>
              <SelectItem value="email-marketing">Email Marketing</SelectItem>
              <SelectItem value="video-content">Video Content</SelectItem>
              <SelectItem value="product-descriptions">Product Descriptions</SelectItem>
              <SelectItem value="marketing-copy">Marketing Copy</SelectItem>
              <SelectItem value="mixed">Mixed/Multiple Types</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox
            id="marketing"
            checked={formData.marketingConsent}
            onCheckedChange={(checked) => handleInputChange("marketingConsent", checked as boolean)}
          />
          <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed">
            I'd like to receive content automation tips, webinar updates, and workshop announcements. 
            You can unsubscribe at any time.
          </Label>
        </div>

        <Button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full btn-primary text-lg flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Securing Your Spot...
            </>
          ) : (
            <>
              <Video className="w-5 h-5" />
              Reserve My Free Spot
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center mt-3">
          100% Free • No Credit Card Required • Instant Confirmation
        </p>
      </form>
    </div>
  );
};

export default ZoomRegistration; 