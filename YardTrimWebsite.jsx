
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, TreePine, LawnMower, Calendar } from "lucide-react";

export default function YardTrimWebsite() {
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted! We will contact you shortly.");
    setQuoteForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-700 text-white p-6 text-center text-3xl font-bold rounded-b-2xl shadow-md">
        YardTrim Lawncare & Tree Services
      </header>

      <main className="p-6 grid gap-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <LawnMower className="mb-2" />
                <h3 className="font-bold text-lg">Lawn Care</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Mowing</li>
                  <li>Edging</li>
                  <li>Weed Eating</li>
                  <li>Trimming Bushes</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <TreePine className="mb-2" />
                <h3 className="font-bold text-lg">Tree Services</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Tree Removal</li>
                  <li>Stump Grinding</li>
                  <li>Lot Clearing</li>
                  <li>Storm Cleanup</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="text-sm">
            YardTrim Lawncare is a locally owned and operated business proudly serving Henry County, GA. With years of experience in lawn maintenance and a recent expansion into tree removal, we are your one-stop-shop for outdoor care.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <p className="text-sm italic">Coming Soon – Photos of our recent work!</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Get a Free Quote</h2>
          <form onSubmit={handleSubmit} className="grid gap-2 max-w-md">
            <Input name="name" placeholder="Your Name" value={quoteForm.name} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Your Email" value={quoteForm.email} onChange={handleChange} required />
            <Input name="phone" placeholder="Your Phone" value={quoteForm.phone} onChange={handleChange} required />
            <Textarea name="message" placeholder="Describe your needs..." value={quoteForm.message} onChange={handleChange} required />
            <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white">Submit Quote Request</Button>
          </form>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <div className="text-sm">
            <p className="flex items-center gap-2"><Mail size={16} /> yardtrim@gmail.com</p>
            <p className="flex items-center gap-2"><Phone size={16} /> (555) 123-4567</p>
            <p className="flex items-center gap-2"><Calendar size={16} /> Serving Henry County, GA</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-center text-xs text-gray-500 p-4 mt-10">
        &copy; {new Date().getFullYear()} YardTrim Lawncare. All rights reserved.
      </footer>
    </div>
  );
}
