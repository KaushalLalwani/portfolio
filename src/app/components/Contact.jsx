import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }

  setLoading(false);
};

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kaushallalwani007@gmail.com",
      href: "mailto:kaushallalwani007@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+919839310294",
      href: "tel:+919839310294",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi NCR, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/KaushalLalwani",
      username: "KaushalLalwani",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kaushal-lalwani-06348831b/",
      username: "kaushal lalwani",
    },
    {
      icon: Mail,
      label: "LeetCode",
      href: "https://leetcode.com/u/Kaushallalwani/",
      username: "Kaushallalwani",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or opportunity. I'm always open to new challenges!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
  placeholder="Your Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
  required
/>
                  </div>
                  <div>
                    <Input
  type="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  required
/>
                  </div>
                  <div>
                    <Input
  placeholder="Subject"
  value={formData.subject}
  onChange={(e) =>
    setFormData({ ...formData, subject: e.target.value })
  }
  required
/>
                  </div>
                  <div>
                    <Textarea
  rows={5}
  placeholder="Your Message"
  value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
  required
/>
                  </div>
                  <Button
  type="submit"
  className="w-full"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </div>
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
