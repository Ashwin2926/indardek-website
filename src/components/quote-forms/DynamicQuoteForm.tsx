// src/components/quote-forms/DynamicQuoteForm.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin, FiCalendar, FiBox, FiCheck,
  FiDroplet, FiTool, FiGlobe, FiTruck, FiHardDrive, FiActivity, FiLayers
} from 'react-icons/fi'; // Expanded icons

import { quoteServices, QuoteService } from '@/lib/quoteServices'; // Import service definitions

// Define a union type for all possible form data structures
type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  // General Supplies specific
  supplyTypes: string[];
  quantities: Record<string, string>;
  deliveryLocation: string; // Ensure this is always present and initialized
  // Borehole Drilling specific
  drillingLocation: string;
  purpose: string;
  estimatedDepth: string;
  waterYield: string;
  geologicalData: string;
  // Meat Supply & Export specific
  meatType: string;
  quantity: string;
  quantityUnit: string;
  frequency: string;
  destinationCountry: string;
  destinationCity: string;
  packagingRequirements: string;
  // Road Construction specific
  projectLocation: string;
  roadType: string;
  roadLength: string;
  roadWidth: string;
  terrainType: string;
  pavingMaterial: string;
  drainageRequirements: string[];
  // Common
  deliveryDate: string;
  additionalNotes: string;
};

interface DynamicQuoteFormProps {
  initialServiceId?: string; // Optional prop to pre-select a service
}

export const DynamicQuoteForm = ({ initialServiceId }: DynamicQuoteFormProps) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || '');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => {
    // Initialize with common fields and empty specific fields, including deliveryLocation
    return {
      name: '', email: '', phone: '', company: '',
      supplyTypes: [], quantities: {},
      deliveryLocation: '', // INITIALIZED HERE
      drillingLocation: '', purpose: '', estimatedDepth: '', waterYield: '', geologicalData: '',
      meatType: '', quantity: '', quantityUnit: 'kg', frequency: '', destinationCountry: '', destinationCity: '', packagingRequirements: '',
      projectLocation: '', roadType: '', roadLength: '', roadWidth: '', terrainType: '', pavingMaterial: '', drainageRequirements: [],
      deliveryDate: '', additionalNotes: '',
    };
  });

  // --- Common Form Data Options ---
  const generalSupplyOptions = [
    'Office equipment and stationery', 'Construction materials', 'Safety gear and PPE',
    'Electrical and plumbing supplies', 'Household and institutional consumables',
    'Industrial chemicals and lubricants', 'IT hardware and peripherals',
  ];

  const boreholePurposeOptions = [
    { value: 'domestic', label: 'Domestic Use (Household)' },
    { value: 'agricultural', label: 'Agricultural (Irrigation/Livestock)' },
    { value: 'commercial', label: 'Commercial/Industrial' },
    { value: 'community', label: 'Community Water Supply' },
    { value: 'other', label: 'Other' },
  ];

  const meatTypeOptions = [
    { value: 'beef', label: 'Beef' }, { value: 'goat', label: 'Goat' },
    { value: 'lamb', label: 'Lamb' }, { value: 'chicken', label: 'Chicken' },
    { value: 'other', label: 'Other' },
  ];

  const quantityUnitOptions = [
    { value: 'kg', label: 'Kilograms (kg)' }, { value: 'lbs', label: 'Pounds (lbs)' },
    { value: 'tonnes', label: 'Tonnes' }, { value: 'pieces', label: 'Pieces' },
  ];

  const frequencyOptions = [
    { value: 'one-time', label: 'One-time purchase' }, { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi-weekly' }, { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' }, { value: 'other', label: 'Other' },
  ];

  const roadTypeOptions = [
    { value: 'asphalt', label: 'Asphalt Road' }, { value: 'concrete', label: 'Concrete Road' },
    { value: 'gravel', label: 'Gravel Road' }, { value: 'access', label: 'Access Road/Driveway' },
    { value: 'other', label: 'Other' },
  ];

  const terrainTypeOptions = [
    { value: 'flat', label: 'Flat/Even' }, { value: 'undulating', label: 'Undulating/Hilly' },
    { value: 'rocky', label: 'Rocky' }, { value: 'swampy', label: 'Swampy/Wet' },
    { value: 'mixed', label: 'Mixed' },
  ];

  const drainageOptions = [
    'Culvert installation', 'Side drains', 'Stormwater management', 'No specific drainage required',
  ];

  // --- Effect to reset form when service changes ---
  useEffect(() => {
    // Reset current step and form data (except common contact info) when service changes
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormData(prev => ({
      name: prev.name, email: prev.email, phone: prev.phone, company: prev.company,
      // Reset all service-specific fields
      supplyTypes: [], quantities: {},
      deliveryLocation: '', // RESET HERE
      drillingLocation: '', purpose: '', estimatedDepth: '', waterYield: '', geologicalData: '',
      meatType: '', quantity: '', quantityUnit: 'kg', frequency: '', destinationCountry: '', destinationCity: '', packagingRequirements: '',
      projectLocation: '', roadType: '', roadLength: '', roadWidth: '', terrainType: '', pavingMaterial: '', drainageRequirements: [],
      deliveryDate: '', additionalNotes: '',
    }));
  }, [selectedServiceId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (field: 'supplyTypes' | 'drainageRequirements', id: string, checked: boolean) => {
    setFormData(prev => {
      const newArray = checked
        ? [...(prev[field] as string[]), id]
        : (prev[field] as string[]).filter((type: string) => type !== id);

      const newQuantities = { ...prev.quantities };
      if (field === 'supplyTypes' && !checked) {
        delete newQuantities[id];
      }

      return { ...prev, [field]: newArray, quantities: newQuantities };
    });
  };

  const handleQuantityChange = (type: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      quantities: {
        ...prev.quantities,
        [type]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitting for ${selectedServiceId}:`, formData);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    // In a real app, you'd send this to an API
  };

  const getStepsForService = (serviceId: string) => {
    switch (serviceId) {
      case 'general-supplies':
        return ['Contact Information', 'Supply & Delivery Details', 'Additional Notes'];
      case 'borehole-drilling':
        return ['Contact Information', 'Project Details', 'Additional Information'];
      case 'meat-supply-export':
        return ['Contact Information', 'Meat Product Details', 'Delivery & Additional Info'];
      case 'road-construction':
        return ['Contact Information', 'Project Specifics', 'Drainage & Additional Info'];
      default:
        return ['Contact Information', 'Details', 'Final Notes'];
    }
  };

  const currentServiceSteps = getStepsForService(selectedServiceId);

  // --- Render Success Message ---
  if (isSubmitted) {
    const selectedService = quoteServices.find(s => s.id === selectedServiceId);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-8 md:p-12 text-center bg-gradient-to-br from-green-50 to-white flex flex-col justify-center items-center min-h-[400px] rounded-2xl "
      >
        <FiCheck className="mx-auto text-green-600 text-7xl mb-6 animate-bounce" />
        <h2 className="text-4xl font-extrabold text-green-800 mb-4 leading-tight">🎉 Thank You!</h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Your quote request for **{selectedService?.name || 'the selected service'}** has been successfully submitted. Our team will get back to you with a personalized quote within 24 hours.
        </p>
        <div className="space-y-3">
          <p className="text-blue-700 font-semibold text-xl leading-normal">
            For urgent inquiries, please contact us directly:
          </p>
          <p className="text-blue-600 font-semibold text-lg flex items-center justify-center leading-normal">
            <FiMail className="mr-2 text-blue-500" /> Email: indark2025@gmail.com
          </p>
          <p className="text-blue-600 font-semibold text-lg flex items-center justify-center leading-normal">
            <FiPhone className="mr-2 text-blue-500" /> Phone: 0720 976 397
          </p>
        </div>
      </motion.div>
    );
  }

  // --- Main Form Render ---
  return (
    <div className="p-8 md:p-10 bg-white rounded-2xl">
      <CardHeader className="text-center pb-6 mb-8 border-b border-gray-200">
        <CardTitle className="text-4xl font-bold text-gray-900 mb-2 leading-tight">Request a Quote</CardTitle>
        <CardDescription className="text-xl text-gray-600 leading-normal">
          {selectedServiceId ? (
            `Step ${currentStep} of ${currentServiceSteps.length}: `
          ) : (
            'Please select a service to get started.'
          )}
          <span className="font-semibold text-indigo-700">
            {selectedServiceId ? currentServiceSteps[currentStep - 1] : ''}
          </span>
        </CardDescription>
        {selectedServiceId && (
          <div className="flex justify-center mt-6 space-x-3">
            {currentServiceSteps.map((_, i) => (
              <div
                key={i}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  i + 1 === currentStep ? 'bg-indigo-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="space-y-8">
          <AnimatePresence mode="wait">
            {!selectedServiceId && (
              <motion.div
                key="service-select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center"
              >
                <Label htmlFor="service-type" className="text-2xl font-semibold text-gray-800 mb-4 block">
                  Which service are you interested in?
                </Label>
                <Select onValueChange={setSelectedServiceId} value={selectedServiceId}>
                  <SelectTrigger className="w-full max-w-md mx-auto h-12 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {quoteServices.map(service => (
                      <SelectItem key={service.id} value={service.id} className="text-lg">
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-gray-500 text-sm mt-2">
                  {selectedServiceId ? quoteServices.find(s => s.id === selectedServiceId)?.description : 'Choose a service to reveal relevant fields.'}
                </p>
              </motion.div>
            )}

            {selectedServiceId && currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-7"
              >
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="name" value={formData.name} onChange={handleChange} required className="pl-12 py-2 text-base leading-normal" placeholder="Your Full Name" />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="pl-12 py-2 text-base leading-normal" placeholder="Email Address" />
                </div>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="phone" value={formData.phone} onChange={handleChange} className="pl-12 py-2 text-base leading-normal" placeholder="Phone Number (optional)" />
                </div>
                <div className="relative">
                  <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="company" value={formData.company} onChange={handleChange} className="pl-12 py-2 text-base leading-normal" placeholder="Company Name (optional)" />
                </div>
              </motion.div>
            )}

            {selectedServiceId === 'general-supplies' && currentStep === 2 && (
              <motion.div
                key="gs-step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">What types of supplies do you need?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {generalSupplyOptions.map(option => (
                    <div key={option} className="flex flex-col space-y-2 p-3 bg-gray-50 rounded-md border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={option}
                          checked={formData.supplyTypes.includes(option)}
                          onCheckedChange={(checked: boolean) => handleCheckboxChange('supplyTypes', option, checked)}
                          className="w-5 h-5"
                        />
                        <Label htmlFor={option} className="text-lg font-medium text-gray-700 cursor-pointer leading-normal">{option}</Label>
                      </div>
                      {formData.supplyTypes.includes(option) && (
                        <Input
                          type="text"
                          placeholder="Specify Quantity/Details (e.g., 500 units, Brand X)"
                          value={formData.quantities[option] || ''}
                          onChange={(e) => handleQuantityChange(option, e.target.value)}
                          className="ml-8 mt-2 py-2 text-base leading-normal"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="relative mt-6">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="deliveryLocation" placeholder="Preferred Delivery Location (e.g., Dubai, Jebel Ali)" value={formData.deliveryLocation} onChange={handleChange} required className="pl-12 py-2 text-base leading-normal" />
                </div>
                <div className="relative">
                  <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="deliveryDate" type="date" value={formData.deliveryDate} onChange={handleChange} className="pl-12 py-2 text-base leading-normal" />
                </div>
              </motion.div>
            )}

            {selectedServiceId === 'borehole-drilling' && currentStep === 2 && (
              <motion.div
                key="bd-step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">Project Details</h3>
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="drillingLocation" type="text" value={formData.drillingLocation} onChange={handleChange} required className="pl-12 py-2 text-base leading-normal" placeholder="Drilling Location" />
                </div>
                <div>
                  <Label htmlFor="purpose" className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Purpose of Borehole</Label>
                  <Select onValueChange={(value) => handleSelectChange('purpose', value)} value={formData.purpose}>
                    <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      {boreholePurposeOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="text-base">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <FiDroplet className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="estimatedDepth" type="number" value={formData.estimatedDepth} onChange={handleChange} placeholder="Estimated Depth (meters)" className="pl-12 py-2 text-base leading-normal" />
                </div>
                <div className="relative">
                  <FiActivity className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="waterYield" type="text" value={formData.waterYield} onChange={handleChange} placeholder="Desired Water Yield (liters/hour)" className="pl-12 py-2 text-base leading-normal" />
                </div>
              </motion.div>
            )}

            {selectedServiceId === 'meat-supply-export' && currentStep === 2 && (
              <motion.div
                key="ms-step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">Meat Product Details</h3>
                <div>
                  <Label htmlFor="meatType" className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Type of Meat</Label>
                  <Select onValueChange={(value) => handleSelectChange('meatType', value)} value={formData.meatType}>
                    <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select meat type" />
                    </SelectTrigger>
                    <SelectContent>
                      {meatTypeOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="text-base">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <FiBox className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <Input id="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required className="pl-12 py-2 text-base leading-normal" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="quantityUnit" className="sr-only">Unit</Label>
                    <Select onValueChange={(value) => handleSelectChange('quantityUnit', value)} value={formData.quantityUnit}>
                      <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                    <SelectContent>
                        {quantityUnitOptions.map(opt => (
                          <SelectItem key={opt.value} value={opt.value} className="text-base">{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="frequency" className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Supply Frequency</Label>
                  <Select onValueChange={(value) => handleSelectChange('frequency', value)} value={formData.frequency}>
                    <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencyOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="text-base">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}

            {selectedServiceId === 'road-construction' && currentStep === 2 && (
              <motion.div
                key="rc-step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">Project Specifics</h3>
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="projectLocation" type="text" value={formData.projectLocation} onChange={handleChange} required className="pl-12 py-2 text-base leading-normal" placeholder="Project Location" />
                </div>
                <div>
                  <Label htmlFor="roadType" className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Type of Road</Label>
                  <Select onValueChange={(value) => handleSelectChange('roadType', value)} value={formData.roadType}>
                    <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select road type" />
                    </SelectTrigger>
                    <SelectContent>
                      {roadTypeOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="text-base">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <FiLayers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <Input id="roadLength" type="text" value={formData.roadLength} onChange={handleChange} placeholder="Estimated Length (meters/km)" className="pl-12 py-2 text-base leading-normal" />
                  </div>
                  <div className="flex-1 relative">
                    <FiLayers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <Input id="roadWidth" type="text" value={formData.roadWidth} onChange={handleChange} placeholder="Estimated Width (meters)" className="pl-12 py-2 text-base leading-normal" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="terrainType" className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Terrain Type</Label>
                  <Select onValueChange={(value) => handleSelectChange('terrainType', value)} value={formData.terrainType}>
                    <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select terrain type" />
                    </SelectTrigger>
                    <SelectContent>
                      {terrainTypeOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="text-base">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <FiTool className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <Input id="pavingMaterial" type="text" value={formData.pavingMaterial} onChange={handleChange} placeholder="Preferred Paving Material (Optional)" className="pl-12 py-2 text-base leading-normal" />
                </div>
              </motion.div>
            )}

            {/* Common Step 3 / Service-specific Step 3 */}
            {selectedServiceId && currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">Additional Information</h3>

                {selectedServiceId === 'borehole-drilling' && (
                  <>
                    <div>
                      <Label htmlFor="geologicalData" className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Existing Geological Data / Reports (Optional)</Label>
                      <Textarea id="geologicalData" value={formData.geologicalData} onChange={handleChange} rows={3} className="text-base p-4 leading-normal" placeholder="e.g., 'Previous survey indicated water at 80m' or 'None'" />
                    </div>
                  </>
                )}

                {selectedServiceId === 'meat-supply-export' && (
                  <>
                    <div className="flex space-x-4">
                      <div className="flex-1 relative">
                        <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <Input id="destinationCountry" type="text" value={formData.destinationCountry} onChange={handleChange} required className="pl-12 py-2 text-base leading-normal" placeholder="Destination Country" />
                      </div>
                      <div className="flex-1 relative">
                        <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <Input id="destinationCity" type="text" value={formData.destinationCity} onChange={handleChange} className="pl-12 py-2 text-base leading-normal" placeholder="Destination City (Optional)" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="packagingRequirements" className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Packaging Requirements (Optional)</Label>
                      <Textarea id="packagingRequirements" value={formData.packagingRequirements} onChange={handleChange} rows={3} className="text-base p-4 leading-normal" placeholder="e.g., 'Vacuum-sealed packs', 'Bulk crates', 'Halal certified packaging'" />
                    </div>
                  </>
                )}

                {selectedServiceId === 'road-construction' && (
                  <div>
                    <Label className="text-lg font-medium text-gray-700 mb-2 block leading-normal">Drainage Requirements</Label>
                    <div className="space-y-2">
                      {drainageOptions.map(option => (
                        <div key={option} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-md border border-gray-200">
                          <Checkbox
                            id={option}
                            checked={formData.drainageRequirements.includes(option)}
                            onCheckedChange={(checked: boolean) => handleCheckboxChange('drainageRequirements', option, checked)}
                            className="w-5 h-5"
                          />
                          <Label htmlFor={option} className="text-lg font-medium text-gray-700 cursor-pointer leading-normal">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Common additional notes and delivery date for all services, if not already covered */}
                {/* Note: deliveryDate is only used by General Supplies and Meat Supply */}
                {(selectedServiceId === 'general-supplies' || selectedServiceId === 'meat-supply-export') && (
                  <div className="relative">
                    <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <Input id="deliveryDate" type="date" value={formData.deliveryDate} onChange={handleChange} className="pl-12 py-2 text-base leading-normal" placeholder="Preferred Delivery Date (Optional)" />
                  </div>
                )}
                <div>
                  <Label htmlFor="additionalNotes" className="text-lg font-semibold text-gray-800 mb-3 block leading-normal">Additional Notes or Specific Requirements</Label>
                  <Textarea id="additionalNotes" rows={6} value={formData.additionalNotes} onChange={handleChange} className="text-base p-4 leading-normal" placeholder="e.g., specific brands, certifications needed, preferred delivery times, budget constraints, etc." />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </CardContent>

      {selectedServiceId && (
        <CardFooter className="flex justify-between p-6 bg-gray-50 border-t border-gray-200 rounded-b-2xl mt-8">
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(s => s - 1)}
              className="px-6 py-3 text-lg border-blue-400 text-blue-700 hover:bg-blue-50 hover:border-blue-500 transition-all duration-200 font-semibold"
            >
              Previous
            </Button>
          )}
          {currentStep < currentServiceSteps.length && (
            <Button
              onClick={() => setCurrentStep(s => s + 1)}
              className="ml-auto px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 font-bold"
            >
              Next
            </Button>
          )}
          {currentStep === currentServiceSteps.length && (
            <Button
              onClick={handleSubmit}
              className="ml-auto px-8 py-3 text-lg bg-green-600 hover:bg-green-700 transition-all duration-200 font-bold"
            >
              Submit Request
            </Button>
          )}
        </CardFooter>
      )}
    </div>
  );
};