import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSubmitContact, contactSchema, type ContactFormValues } from "@/hooks/use-contact";

export function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
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
    <section id="contact" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-massive-sm font-black uppercase flex flex-col">
            <span className="text-foreground">LET'S WORK</span>
            <span className="text-white/20">TOGETHER</span>
          </h2>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Email</h3>
              <a href="mailto:muhammadumarhassan476@gmail.com" className="text-2xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors">
                muhammadumarhassan476<br />@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Phone</h3>
              <a href="tel:+923167747800" className="text-2xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors">
                +92 316 7747800
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Socials</h3>
              <div className="flex gap-6">
                <a href="https://github.com/Umar1-1assan" target="_blank" rel="noreferrer" className="text-xl font-bold text-foreground hover:text-primary transition-colors uppercase">Github</a>
                <a href="https://www.linkedin.com/in/umar-hassan-3763a8247" target="_blank" rel="noreferrer" className="text-xl font-bold text-foreground hover:text-primary transition-colors uppercase">LinkedIn</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {mutation.isSuccess ? (
              <div className="flex flex-col items-start justify-center h-full min-h-[300px]">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button 
                  onClick={() => mutation.reset()}
                  className="uppercase tracking-widest text-sm font-bold border-b-2 border-primary text-primary pb-1 hover:text-white hover:border-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                  <input 
                    placeholder="YOUR NAME" 
                    {...register("name")} 
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-xl outline-none transition-colors placeholder:text-muted-foreground text-foreground uppercase`}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <input 
                    placeholder="YOUR EMAIL" 
                    type="email" 
                    {...register("email")} 
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-xl outline-none transition-colors placeholder:text-muted-foreground text-foreground uppercase`}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <input 
                    placeholder="SUBJECT" 
                    {...register("subject")} 
                    className={`w-full bg-transparent border-b ${errors.subject ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-xl outline-none transition-colors placeholder:text-muted-foreground text-foreground uppercase`}
                  />
                  {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <textarea 
                    placeholder="YOUR MESSAGE" 
                    {...register("message")} 
                    className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-white/20 focus:border-primary'} py-4 text-xl outline-none transition-colors min-h-[150px] resize-none placeholder:text-muted-foreground text-foreground uppercase`}
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="group flex items-center gap-4 text-2xl font-bold uppercase hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? "Sending..." : "Submit Message"} 
                  {!mutation.isPending && (
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ArrowRight size={24} />
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
