import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Video, Calendar, Clock, Users, CheckCircle, X } from "lucide-react";

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  experience: string;
  sessionType: string;
  marketingConsent: boolean;
}

const ZoomRegistration = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    experience: "",
    sessionType: "",
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
    
    // Simulate API call to register for Zoom
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.company && formData.sessionType;

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">Registration Confirmed!</h3>
          <p className="text-gray-600 mb-4">
            You'll receive a Zoom link and workshop materials via email within 24 hours.
          </p>
          <div className="bg-workshop-lightGray p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700">
              <strong>Workshop:</strong> AI Agents for Enterprise<br />
              <strong>Date:</strong> June 15-16, 2025<br />
              <strong>Format:</strong> {formData.sessionType}
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
                jobTitle: "",
                experience: "",
                sessionType: "",
                marketingConsent: false,
              });
            }}
            variant="outline" 
            className="text-workshop-purple border-workshop-purple hover:bg-workshop-purple/5"
          >
            Register Another Attendee
          </Button>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
        <div className="absolute -top-3 -left-3 bg-workshop-teal text-white text-sm font-medium py-1 px-3 rounded-full">
          Virtual Access
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-workshop-blue/10 rounded-lg">
            <Video className="w-6 h-6 text-workshop-blue" />
          </div>
          <h3 className="text-2xl font-semibold">Join Virtually via Zoom</h3>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <Calendar className="w-5 h-5 text-workshop-purple" />
            <span>June 15-16, 2025</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="w-5 h-5 text-workshop-purple" />
            <span>9:00 AM - 5:00 PM PST (Both Days)</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Users className="w-5 h-5 text-workshop-purple" />
            <span>Limited to 25 Virtual Participants</span>
          </div>
        </div>

        <div className="bg-workshop-lightGray p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-2 text-gray-900">Virtual Session Includes:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Interactive breakout rooms for hands-on development</li>
            <li>• Real-time Q&A with expert instructors</li>
            <li>• Digital workshop materials and code templates</li>
            <li>• 30-day access to recorded sessions</li>
            <li>• Private Slack community for ongoing support</li>
          </ul>
        </div>

        <Button 
          onClick={() => setShowForm(true)}
          className="w-full btn-primary text-lg flex items-center justify-center gap-2 group"
        >
          <Video className="w-5 h-5" />
          Register for Virtual Session
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
          <h3 className="text-2xl font-semibold">Virtual Registration</h3>
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
            Business Email *
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
            Company *
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700">
            Job Title
          </Label>
          <Input
            id="jobTitle"
            value={formData.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
            AI/ML Experience Level
          </Label>
          <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner - New to AI/ML</SelectItem>
              <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
              <SelectItem value="advanced">Advanced - Experienced practitioner</SelectItem>
              <SelectItem value="expert">Expert - Industry specialist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sessionType" className="text-sm font-medium text-gray-700">
            Session Preference *
          </Label>
          <Select value={formData.sessionType} onValueChange={(value) => handleInputChange("sessionType", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choose your preferred session type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="virtual-only">Virtual Only - Full Zoom Experience</SelectItem>
              <SelectItem value="hybrid">Hybrid - Virtual with In-Person Networking</SelectItem>
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
            I agree to receive workshop updates, resources, and relevant AI insights via email. 
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
              Processing Registration...
            </>
          ) : (
            <>
              <Video className="w-5 h-5" />
              Secure My Virtual Spot
            </>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Secure registration • 25 virtual spots remaining • No payment required
        </p>
      </form>
    </div>
  );
};

export default ZoomRegistration; 