"use client";

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Check,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Loader2,
  Mail,
  MessageCircle,
  Send,
  Upload,
} from "lucide-react";

// ─── ─── Config ─── ───
const WHATSAPP_NUMBER = "447512281222";

const SERVICE_OPTIONS = [
  "WordPress Website",
  "GoHighLevel Setup",
  "AI Automation",
  "React / Next.js App",
  "WooCommerce Store",
  "Something Else",
];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
];

// Thin orange scrollbar
const DROPDOWN_SCROLLBAR_CSS = `
  .form-dropdown-panel::-webkit-scrollbar { width: 4px; }
  .form-dropdown-panel::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 999px; }
  .form-dropdown-panel::-webkit-scrollbar-track { background: transparent; }
`;

// ─── ─── Custom dropdown ─── ───
function FormDropdown({ value, onChange, options, placeholder, icon: Icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    }
    function handleKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center gap-3 rounded-lg border bg-[var(--bg-base)] px-4 py-3 text-left text-sm transition-colors focus:outline-none ${
          open ? "border-[var(--primary)]" : "border-[var(--border-default)]"
        }`}
      >
        <Icon className="h-4 w-4 shrink-0 text-[var(--primary)]" />
        <span className={value ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-[var(--primary)] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="form-dropdown-panel absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-[264px] overflow-y-auto rounded-xl border border-[var(--border-default)] bg-[var(--bg-base)] p-1.5 shadow-xl">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-colors hover:bg-[var(--bg-elevated)]"
              >
                <span
                  className={
                    value === option ? "text-[var(--primary)]" : "text-[var(--text-primary)]"
                  }
                >
                  {option}
                </span>
                {value === option && <Check className="h-4 w-4 shrink-0 text-[var(--primary)]" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── ─── Contact section ─── ───
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [serviceError, setServiceError] = useState(false);
  const [budgetError, setBudgetError] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const fileInputRef = useRef(null);

  function updateField(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function handleFileChange(event) {
    const selected = event.target.files?.[0];
    if (!selected) return;
    if (selected.size > 10 * 1024 * 1024) {
      setFileError("File must be under 10MB.");
      setFile(null);
      event.target.value = "";
      return;
    }
    setFileError("");
    setFile(selected);
  }

  function clearFile() {
    setFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let valid = true;
    if (!form.service) {
      setServiceError(true);
      valid = false;
    }
    if (!form.budget) {
      setBudgetError(true);
      valid = false;
    }
    if (!valid) return;
    setStatus("sending");
    try {
      // FormData for file upload
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("company", form.company);
      formData.append("website", form.website);
      formData.append("service", form.service);
      formData.append("budget", form.budget);
      formData.append("message", form.message);
      if (file) formData.append("attachment", file);
      // Post to own API route
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  function resetForm() {
    setForm({ name: "", email: "", company: "", website: "", service: "", budget: "", message: "" });
    clearFile();
    setStatus("idle");
  }

  // Prefilled WhatsApp message
  const detailsLines = [
    "Hi Sohail, I just sent you a message from your website.",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    ...(form.company ? [`Company: ${form.company}`] : []),
    ...(form.website ? [`Website: ${form.website}`] : []),
    `Service: ${form.service}`,
    `Budget: ${form.budget}`,
    "",
    form.message,
  ];
  const whatsappDetailsUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    detailsLines.join("\n")
  )}`;

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      <style>{DROPDOWN_SCROLLBAR_CSS}</style>

      {/* ── Section header ── */}
      <div className="mb-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-orange-500">
          <Mail className="h-3.5 w-3.5" />
          Get in Touch
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
          Let's Work{" "}
          <span className="bg-gradient-brand bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--text-secondary)]">
          Available for freelance projects, GHL setups, and consulting. Let's discuss your next project.
        </p>
      </div>

      {/* ── Form only, centered ── */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 md:p-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6E73BE]/40 bg-[#6E73BE]/10 px-3 py-1 text-xs font-medium text-[#6E73BE]">
            <Mail className="h-3.5 w-3.5" />
            Send a Message
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold text-[var(--text-primary)]">
            Let&apos;s share details of your project. So that we can start working on it.
          </h3>

          {status === "success" ? (
            <div className="mt-6 flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
              <h4 className="mt-4 font-display text-xl font-bold text-[var(--text-primary)]">
                Message sent!
              </h4>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
                Thanks for reaching out — I'll get back to you within 2 hours.
              </p>
              <a
                href={whatsappDetailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-600 transition-colors hover:bg-green-500/20 dark:text-green-400"
              >
                <MessageCircle className="h-4 w-4" />
                Send the same details on WhatsApp too
              </a>
              <button
                type="button"
                onClick={resetForm}
                className="mt-4 text-sm text-[var(--text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Name <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={updateField("name")}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-base)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Email <span className="text-[var(--primary)]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={updateField("email")}
                    placeholder="Your business email"
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-base)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Company / Business Name{" "}
                    <span className="font-normal text-[var(--text-muted)]">(optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={form.company}
                    onChange={updateField("company")}
                    placeholder="Company name"
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-base)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-website"
                    className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Website{" "}
                    <span className="font-normal text-[var(--text-muted)]">(optional)</span>
                  </label>
                  <input
                    id="contact-website"
                    type="text"
                    inputMode="url"
                    value={form.website}
                    onChange={updateField("website")}
                    placeholder="https://yourwebsite.com"
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-base)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  What are you looking to build? <span className="text-[var(--primary)]">*</span>
                </label>
                <FormDropdown
                  value={form.service}
                  onChange={(option) => {
                    setForm((prev) => ({ ...prev, service: option }));
                    setServiceError(false);
                  }}
                  options={SERVICE_OPTIONS}
                  placeholder="Select an option"
                  icon={Briefcase}
                />
                {serviceError && (
                  <p className="mt-1.5 text-xs text-red-500">Please choose an option.</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Estimated Budget <span className="text-[var(--primary)]">*</span>
                </label>
                <FormDropdown
                  value={form.budget}
                  onChange={(option) => {
                    setForm((prev) => ({ ...prev, budget: option }));
                    setBudgetError(false);
                  }}
                  options={BUDGET_OPTIONS}
                  placeholder="Select a range"
                  icon={DollarSign}
                />
                {budgetError && (
                  <p className="mt-1.5 text-xs text-red-500">Please choose a budget range.</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                  Upload Document{" "}
                  <span className="font-normal text-[var(--text-muted)]">(optional)</span>
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex w-full items-center gap-3 rounded-lg border border-dashed border-[var(--border-default)] bg-[var(--bg-base)] px-4 py-3 text-left text-sm transition-colors hover:border-[var(--primary)]"
                >
                  <Upload className="h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span
                    className={`truncate ${
                      file ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {file ? file.name : "Choose a PDF or Word document"}
                  </span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <p className="mt-1.5 text-xs text-[var(--text-muted)]">PDF or Word, max 10MB.</p>
                {fileError && <p className="mt-1 text-xs text-red-500">{fileError}</p>}
                {file && (
                  <button
                    type="button"
                    onClick={clearFile}
                    className="mt-1 text-xs text-[var(--text-muted)] underline underline-offset-4 transition-colors hover:text-[var(--text-primary)]"
                  >
                    Remove file
                  </button>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Tell us about your project <span className="text-[var(--primary)]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={updateField("message")}
                  placeholder="What are you looking to build, improve, or automate?"
                  className="w-full resize-y rounded-lg border border-[var(--border-default)] bg-[var(--bg-base)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-brand px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-center text-xs text-red-500">
                  Something went wrong — please try again or message me on WhatsApp.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
