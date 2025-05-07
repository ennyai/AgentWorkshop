
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Registration submitted",
        description: "We'll contact you with further details within 24 hours.",
      });
    }, 1500);
  };
  
  return (
    <section className="section-padding bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Register</span> for the Workshop
            </h2>
            <p className="text-gray-600">
              Secure your spot in our upcoming AI Agents workshop and take the first step
              toward implementing practical AI solutions for your business.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john.smith@company.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Corporation" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="CTO" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">10-49 employees</SelectItem>
                    <SelectItem value="medium">50-249 employees</SelectItem>
                    <SelectItem value="large">250-999 employees</SelectItem>
                    <SelectItem value="enterprise">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goals">What are your goals for implementing AI agents?</Label>
                <Textarea 
                  id="goals" 
                  placeholder="Please share your specific use cases or challenges..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm text-gray-500">
                  I agree to the privacy policy and understand that my information will be used
                  to contact me about the workshop.
                </Label>
              </div>
              
              <Button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Processing..." : "Reserve Your Spot"}
              </Button>
              
              <p className="text-center text-sm text-gray-500">
                Limited to 25 participants per workshop to ensure quality instruction.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
