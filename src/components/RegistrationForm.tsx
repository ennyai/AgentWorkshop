import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Video, CheckCircle } from "lucide-react";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    marketingConsent: false
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setIsRegistered(true);
      toast({
        title: "Registration successful!",
        description: "Check your email for the Zoom link and calendar invite.",
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.role;

  if (isRegistered) {
    return (
      <section className="section-padding bg-gradient-to-r from-workshop-purple/5 to-workshop-blue/5 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎉 You're Registered!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Check your email for the Zoom link and calendar invite. We'll send you pre-webinar 
              materials 1 hour before the session starts.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <h3 className="font-semibold mb-3">What's Next:</h3>
              <div className="text-left space-y-2 text-sm text-gray-700">
                <div>📧 Confirmation email sent</div>
                <div>📅 Calendar invite included</div>
                <div>📝 Pre-webinar materials coming</div>
                <div>🎥 Join the live session</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="section-padding bg-gradient-to-r from-workshop-purple/5 to-workshop-blue/5 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Automate Your Content?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Join our free 1-hour webinar and see exactly how to transform your content creation process. 
              No technical experience required!
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="p-2 bg-workshop-blue/10 rounded-lg">
                <Video className="w-6 h-6 text-workshop-blue" />
              </div>
              <h3 className="text-2xl font-semibold">Reserve Your Free Spot</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Smith" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Your Role *</Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger>
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
                    <SelectItem value="consultant">Consultant</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox 
                  id="marketing"
                  checked={formData.marketingConsent}
                  onCheckedChange={(checked) => handleInputChange("marketingConsent", checked as boolean)}
                />
                <Label htmlFor="marketing" className="text-sm text-gray-500">
                  I'd like to receive content automation tips and webinar updates. You can unsubscribe anytime.
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full text-lg flex items-center justify-center gap-2" 
                disabled={loading || !isFormValid}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Securing Your Spot...
                  </>
                ) : (
                  <>
                    <Video className="w-5 h-5" />
                    Register for Free Webinar
                  </>
                )}
              </Button>
              
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  100% Free • No Credit Card Required • Instant Confirmation
                </p>
                <p className="text-xs text-gray-400">
                  Perfect for business owners, marketers, and creators who want to scale without technical complexity
                </p>
              </div>
            </form>

            {/* Benefits Reminder */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-semibold mb-3 text-center text-gray-800">What You'll Learn:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-workshop-purple rounded-full"></div>
                  <span>Live content automation demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-workshop-purple rounded-full"></div>
                  <span>Exact tools and platforms needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-workshop-purple rounded-full"></div>
                  <span>Step-by-step implementation plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-workshop-purple rounded-full"></div>
                  <span>How to cut content costs by 80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
