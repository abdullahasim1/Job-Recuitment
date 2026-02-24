"use client";

import { useState } from "react";
import { HelpCircle, Mail, ChevronDown, ChevronUp, Send } from "lucide-react";

const faqs = [
  {
    question: "How do I change my profile picture?",
    answer: "Go to Settings > My Profile and click on the camera icon.",
  },
  {
    question: "Can I edit my application after submitting?",
    answer: "No, once submitted, applications cannot be edited. Please contact support.",
  },
  {
    question: "How do I reset my password?",
    answer: "Go to Settings > Security and enter a new password.",
  },
  {
    question: "Why is my application status 'Pending'?",
    answer:
      "Our team is currently reviewing your application. This usually takes 3-5 business days.",
  },
];

const UserSupportPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [sending, setSending] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 1500);
  };

  return (
    <div className="space-y-6 p-1">
      {/* Header */}
      <div>
        <h1 className="text-heading text-[24px] font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted text-[14px]">Find answers to common questions or contact us.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: FAQs (Accordion) */}
        <div className="space-y-4">
          <h2 className="text-heading flex items-center gap-2 text-[16px] font-semibold">
            <HelpCircle size={18} className="text-primary" /> Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`cursor-pointer overflow-hidden rounded-[14px] border transition-all ${
                  openIndex === index
                    ? "border-primary/30 bg-primary/5"
                    : "border-(--table-border) bg-white hover:border-gray-300"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-heading text-[13px] font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp size={16} className="text-primary" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-400" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="text-muted border-primary/10 border-t px-4 pt-2 pb-4 text-[13px] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="shadow-card rounded-[14px] border border-(--table-border) bg-white p-6">
          <h2 className="text-heading mb-4 flex items-center gap-2 text-[16px] font-semibold">
            <Mail size={18} className="text-primary" /> Contact Support
          </h2>

          <form onSubmit={handleSend} className="space-y-4">
            <div>
              <label className="text-heading mb-1.5 block text-[12px] font-semibold">Subject</label>
              <select className="text-heading focus:border-primary h-[42px] w-full rounded-[10px] border border-(--table-border) bg-white px-3 text-[13px] outline-none">
                <option>Technical Issue</option>
                <option>Account Problem</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-heading mb-1.5 block text-[12px] font-semibold">Message</label>
              <textarea
                className="text-heading focus:border-primary min-h-[120px] w-full resize-none rounded-[10px] border border-(--table-border) p-3 text-[13px] outline-none"
                placeholder="Describe your issue..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="bg-primary hover:bg-primary-hover flex h-10 w-full items-center justify-center gap-2 rounded-lg text-[13px] font-semibold text-white shadow-sm transition-all disabled:opacity-70"
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>

          {/* Direct Email Info */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-muted text-[12px]">Or email us directly at</p>
            <p className="text-heading text-[13px] font-semibold">support@recruitment.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSupportPage;
