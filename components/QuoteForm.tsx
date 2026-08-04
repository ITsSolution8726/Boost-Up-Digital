"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
    Building2,
    User,
    Mail,
    Phone,
    Globe,
    MapPin,
    Briefcase,
    Target,
    Check,
    Loader2,
    Send,
    BadgeIndianRupee,
    CalendarClock,
    Megaphone,
    Users,
    FileText,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const services = [
    "SEO",
    "Social Media Marketing",
    "Meta Ads",
    "Google Ads",
    "Website Design & Development",
    "Branding",
    "Ad Film Production",
    "Complete Digital Marketing",
];

const budgets = [
    "Under ₹10,000",
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "Above ₹1,00,000",
];

const timelines = [
    "Immediately",
    "Within 2 Weeks",
    "Within 1 Month",
    "2-3 Months",
    "Flexible",
];

const goals = [
    "Generate More Leads",
    "Increase Website Traffic",
    "Brand Awareness",
    "Increase Sales",
    "Launch New Product",
    "Grow Social Media",
];

export default function QuoteForm({
    plan,
}: {
    plan?: string | null;
}) {

    const [loading, setLoading] = useState(false);

    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
    const [budget, setBudget] = useState("");
    const [timeline, setTimeline] = useState("");

    const toggleService = (item: string) => {
        setSelectedServices(prev =>
            prev.includes(item)
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    }

    const toggleGoal = (item: string) => {
        setSelectedGoals(prev =>
            prev.includes(item)
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (selectedServices.length === 0) {
            toast.error("Please select at least one service.");
            return;
        }

        if (!budget) {
            toast.error("Please select your budget.");
            return;
        }

        if (!timeline) {
            toast.error("Please select timeline.");
            return;
        }

        setLoading(true);

        const form = e.currentTarget;

        const formData = new FormData(form);

        formData.append("selectedPackage", plan || "Custom");
        formData.append("services", JSON.stringify(selectedServices));
        formData.append("goals", JSON.stringify(selectedGoals));
        formData.append("budget", budget);
        formData.append("timeline", timeline);

        try {

            const res = await fetch("/api/quote", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            toast.success("Requirement Form Submitted Successfully.");

            form.reset();

            setSelectedServices([]);
            setSelectedGoals([]);
            setBudget("");
            setTimeline("");

        } catch (err) {
            toast.error("Something went wrong.");
        }

        setLoading(false);

    }

    return (

        <section className="py-20">

            <div className="mx-auto max-w-6xl px-4">

                <Reveal>

                    <div className="text-center">

                        <div className="inline-flex rounded-full bg-brand-cyan/15 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cyan">

                            Client Requirement Form

                        </div>

                        <h1 className="mt-6 text-5xl font-bold">

                            Let's Build Your

                            <span className="text-gradient-brand"> Growth Strategy</span>

                        </h1>

                        <p className="mt-5 max-w-3xl mx-auto text-muted-foreground">

                            Fill this form carefully. Our strategy team will analyse your business and prepare a custom proposal before contacting you.

                        </p>

                        {plan && (

                            <div className="mt-8 inline-flex rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground">

                                Selected Package : {plan}

                            </div>

                        )}

                    </div>

                </Reveal>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-10 mt-14"
                >

                    {/* BUSINESS INFORMATION */}

                    <Reveal>

                        <div className="glass rounded-3xl p-8">

                            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">

                                <Building2 className="h-6 w-6 text-brand-cyan" />

                                Business Information

                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>

                                    <label className="block mb-2">Business Name *</label>

                                    <input
                                        required
                                        name="businessName"
                                        placeholder="ABC Pvt Ltd"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">Owner Name *</label>

                                    <input
                                        required
                                        name="ownerName"
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">Email *</label>

                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="company@email.com"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">Phone *</label>

                                    <input
                                        required
                                        name="phone"
                                        placeholder="+91 9876543210"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">Website</label>

                                    <input
                                        name="website"
                                        placeholder="https://"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">

                                        Business Address

                                    </label>

                                    <input
                                        name="address"
                                        placeholder="City, State"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                            </div>

                        </div>

                    </Reveal>
                    {/* BUSINESS DETAILS */}

                    <Reveal>
                        <div className="glass rounded-3xl p-8">

                            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
                                <Briefcase className="h-6 w-6 text-brand-magenta" />
                                Business Details
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block mb-2">Industry</label>
                                    <select
                                        name="industry"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    >
                                        <option>Fashion</option>
                                        <option>Healthcare</option>
                                        <option>Restaurant</option>
                                        <option>Education</option>
                                        <option>Manufacturing</option>
                                        <option>Real Estate</option>
                                        <option>E-Commerce</option>
                                        <option>Finance</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2">Business Age</label>
                                    <select
                                        name="businessAge"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    >
                                        <option>Startup</option>
                                        <option>1-3 Years</option>
                                        <option>3-5 Years</option>
                                        <option>5+ Years</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2">Monthly Revenue</label>
                                    <select
                                        name="revenue"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    >
                                        <option>Below ₹1L</option>
                                        <option>₹1L - ₹5L</option>
                                        <option>₹5L - ₹20L</option>
                                        <option>₹20L+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2">Target Location</label>
                                    <input
                                        name="targetLocation"
                                        placeholder="India / Kolkata / PAN India"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />
                                </div>

                            </div>

                            <div className="mt-6">
                                <label className="block mb-2">
                                    Tell us about your business
                                </label>

                                <textarea
                                    rows={4}
                                    name="businessDescription"
                                    placeholder="What do you sell? Who are your customers?"
                                    className="w-full rounded-xl border border-border bg-input px-5 py-3 resize-none"
                                />
                            </div>

                        </div>
                    </Reveal>

                    {/* SERVICES */}

                    <Reveal>
                        <div className="glass rounded-3xl p-8">

                            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
                                <Target className="h-6 w-6 text-brand-yellow" />
                                Services Required
                            </h2>

                            <div className="grid md:grid-cols-2 gap-5">

                                {services.map((service) => {

                                    const active = selectedServices.includes(service);

                                    return (

                                        <motion.button
                                            key={service}
                                            type="button"
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => toggleService(service)}
                                            className={`rounded-2xl border p-5 flex justify-between items-center transition-all ${active
                                                    ? "border-brand-cyan bg-brand-cyan/10"
                                                    : "border-border hover:border-brand-cyan"
                                                }`}
                                        >

                                            <span>{service}</span>

                                            {active && (
                                                <Check className="h-5 w-5 text-brand-cyan" />
                                            )}

                                        </motion.button>

                                    )

                                })}

                            </div>

                        </div>
                    </Reveal>

                    {/* MARKETING GOALS */}

                    <Reveal>

                        <div className="glass rounded-3xl p-8">

                            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">

                                <Megaphone className="h-6 w-6 text-brand-orange" />

                                Marketing Goals

                            </h2>

                            <div className="grid md:grid-cols-3 gap-5">

                                {goals.map(goal => {

                                    const active = selectedGoals.includes(goal);

                                    return (

                                        <motion.button
                                            key={goal}
                                            type="button"
                                            whileTap={{ scale: .98 }}
                                            onClick={() => toggleGoal(goal)}
                                            className={`rounded-xl border p-5 transition-all ${active
                                                    ? "border-brand-orange bg-brand-orange/10"
                                                    : "border-border hover:border-brand-orange"
                                                }`}
                                        >

                                            <div className="flex justify-between items-center">

                                                <span>{goal}</span>

                                                {active && (
                                                    <Check className="h-5 w-5 text-brand-orange" />
                                                )}

                                            </div>

                                        </motion.button>

                                    )

                                })}

                            </div>

                        </div>

                    </Reveal>
                    {/* BUDGET & TIMELINE */}

                    <Reveal>
                        <div className="glass rounded-3xl p-8">

                            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">
                                <BadgeIndianRupee className="h-6 w-6 text-brand-green" />
                                Budget & Timeline
                            </h2>

                            <div className="grid lg:grid-cols-2 gap-8">

                                {/* Budget */}

                                <div>

                                    <label className="block font-medium mb-4">
                                        Monthly Marketing Budget *
                                    </label>

                                    <div className="grid gap-4">

                                        {budgets.map((item) => (

                                            <motion.button
                                                key={item}
                                                type="button"
                                                whileTap={{ scale: .98 }}
                                                onClick={() => setBudget(item)}
                                                className={`rounded-xl border px-5 py-4 text-left transition-all ${budget === item
                                                        ? "border-brand-cyan bg-brand-cyan/10"
                                                        : "border-border hover:border-brand-cyan"
                                                    }`}
                                            >
                                                {item}
                                            </motion.button>

                                        ))}

                                    </div>

                                </div>

                                {/* Timeline */}

                                <div>

                                    <label className="block font-medium mb-4">
                                        Project Timeline *
                                    </label>

                                    <div className="grid gap-4">

                                        {timelines.map((item) => (

                                            <motion.button
                                                key={item}
                                                type="button"
                                                whileTap={{ scale: .98 }}
                                                onClick={() => setTimeline(item)}
                                                className={`rounded-xl border px-5 py-4 text-left transition-all ${timeline === item
                                                        ? "border-brand-magenta bg-brand-magenta/10"
                                                        : "border-border hover:border-brand-magenta"
                                                    }`}
                                            >
                                                {item}
                                            </motion.button>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>
                    </Reveal>

                    {/* EXISTING MARKETING */}

                    <Reveal>

                        <div className="glass rounded-3xl p-8">

                            <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">

                                <Users className="h-6 w-6 text-brand-cyan" />

                                Current Marketing

                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>

                                    <label className="block mb-2">
                                        Facebook Page
                                    </label>

                                    <input
                                        name="facebook"
                                        placeholder="Facebook page link"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">
                                        Instagram Page
                                    </label>

                                    <input
                                        name="instagram"
                                        placeholder="Instagram profile"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">
                                        LinkedIn
                                    </label>

                                    <input
                                        name="linkedin"
                                        placeholder="LinkedIn page"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                                <div>

                                    <label className="block mb-2">
                                        Current Website
                                    </label>

                                    <input
                                        name="currentWebsite"
                                        placeholder="Website URL"
                                        className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                    />

                                </div>

                            </div>

                            <div className="mt-6">

                                <label className="block mb-2">

                                    What marketing are you currently doing?

                                </label>

                                <textarea
                                    rows={4}
                                    name="currentMarketing"
                                    placeholder="Facebook Ads, Google Ads, SEO, Newspaper, Offline Marketing etc."
                                    className="w-full rounded-xl border border-border bg-input px-5 py-3 resize-none"
                                />

                            </div>

                        </div>

                    </Reveal>

                    {/* COMPETITORS */}

                    <Reveal>

                        <div className="glass rounded-3xl p-8">

                            <h2 className="text-2xl font-bold mb-8">

                                Competitor Information

                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <input
                                    name="competitor1"
                                    placeholder="Competitor Website 1"
                                    className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                />

                                <input
                                    name="competitor2"
                                    placeholder="Competitor Website 2"
                                    className="w-full rounded-xl border border-border bg-input px-5 py-3"
                                />

                            </div>

                        </div>

                    </Reveal>

                    {/* ADDITIONAL NOTES */}

                    <Reveal>

                        <div className="glass rounded-3xl p-8">

                            <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">

                                <FileText className="h-6 w-6 text-brand-yellow" />

                                Additional Notes

                            </h2>

                            <textarea
                                rows={7}
                                name="notes"
                                placeholder="Anything else you want our team to know..."
                                className="w-full rounded-xl border border-border bg-input px-5 py-3 resize-none"
                            />

                        </div>

                    </Reveal>

                    <input
                        type="hidden"
                        name="package"
                        value={plan || "Custom"}
                    />

                    <div className="text-center">

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center gap-3 rounded-full bg-gradient-brand px-10 py-4 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform disabled:opacity-60"
                        >

                            {loading ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="h-5 w-5" />
                                    Submit Requirement Form
                                </>
                            )}

                        </button>

                        <p className="mt-5 text-sm text-muted-foreground max-w-xl mx-auto">

                            After submission our strategy team will review your requirements,
                            prepare a personalized proposal and contact you within 24 hours.

                        </p>
                    </div>
                </form>
            </div>
        </section>

    );

}