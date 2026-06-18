import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useSubmitContact, contactSchema, type ContactFormValues } from "@/hooks/use-contact";

export function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const mutation = useSubmitContact();

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">LET'S BUILD</span>
            <span className="text-white/20">SOMETHING INTELLIGENT</span>
          </h2>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether it's an AI-powered product, a full-stack platform, or a complex cloud system — I'm ready to ship. Reach out and let's talk.
              </p>
            </div>

            <div className="w-12 h-[1px] bg-primary/40" />

            <div className="space-y-6">
              <div>
                <h3 className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold mb-2">Email</h3>
                <a href="mailto:muhammadumarhassan987@gmail.com" className="text-xl md:text-3xl font-extrabold text-white hover:text-primary transition-colors">
                  muhammadumarhassan987@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold mb-2">Phone</h3>
                <a href="tel:+923180834128" className="text-xl md:text-3xl font-extrabold text-white hover:text-primary transition-colors">
                  +92 318 083 4128
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold mb-2">Social Profiles</h3>
                <div className="flex gap-6">
                  <a href="https://github.com/Umar1-1assan" target="_blank" rel="noreferrer" className="text-base font-bold text-white hover:text-primary transition-colors uppercase tracking-wider">Github</a>
                  <a href="https://www.linkedin.com/in/indigo-hassan-3763a8247" target="_blank" rel="noreferrer" className="text-base font-bold text-white hover:text-primary transition-colors uppercase tracking-wider">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-primary block mb-2 uppercase tracking-wider text-xs">Availability:</strong>
              Currently open to Full Stack AI Engineer, AI/ML Engineer, and Software Engineer roles — remote or Islamabad or Lahore-based. Available for freelance projects and technical collaborations.
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/10 bg-card/40 backdrop-blur-sm"
          >
            {mutation.isSuccess ? (
              <div className="flex flex-col items-start justify-center min-h-[350px]">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(5,150,105,0.4)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black mb-3">Message Sent!</h3>
                <p className="text-base text-muted-foreground mb-8">
                  Thank you for reaching out. I will review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => mutation.reset()}
                  className="uppercase tracking-widest text-xs font-bold border-b-2 border-primary text-primary pb-1 hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1">
                  <input
                    placeholder="YOUR NAME"
                    {...register("name")}
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-lg outline-none transition-colors placeholder:text-muted-foreground text-white uppercase`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                  <input
                    placeholder="YOUR EMAIL"
                    type="email"
                    {...register("email")}
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-lg outline-none transition-colors placeholder:text-muted-foreground text-white uppercase`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-1 relative">
                  <select
                    {...register("subject")}
                    className={`w-full bg-transparent border-b ${errors.subject ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-lg outline-none transition-colors text-white uppercase appearance-none cursor-pointer`}
                  >
                    <option value="" disabled className="bg-zinc-950 text-muted-foreground">SELECT SUBJECT</option>
                    <option value="Job Opportunity" className="bg-zinc-950 text-white">Job Opportunity</option>
                    <option value="Freelance Project" className="bg-zinc-950 text-white">Freelance Project</option>
                    <option value="Collaboration" className="bg-zinc-950 text-white">Collaboration</option>
                    <option value="Other" className="bg-zinc-950 text-white">Other</option>
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <ChevronDown size={18} />
                  </div>
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-1">
                  <textarea
                    placeholder="YOUR MESSAGE"
                    {...register("message")}
                    className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-lg outline-none transition-colors min-h-[120px] resize-none placeholder:text-muted-foreground text-white uppercase`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="group flex items-center gap-4 text-xl font-bold uppercase hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer pt-4"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                  {!mutation.isPending && (
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
