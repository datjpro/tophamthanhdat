"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ABOUT_CARDS,
  BLOG_PREVIEWS,
  EXPERIENCES,
  NAV_LINKS,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
  type ProjectFilter,
  type SkillCategory,
} from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const projectFilters: ProjectFilter[] = ["All", "React", "Next.js", "Node"];
const skillFilters: Array<"All" | SkillCategory> = ["All", "Frontend", "Backend", "Tools"];

export function PortfolioPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState<"All" | SkillCategory>("All");
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("All");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const filteredSkills = useMemo(
    () => SKILLS.filter((skill) => skillFilter === "All" || skill.category === skillFilter),
    [skillFilter],
  );

  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter((project) => projectFilter === "All" || project.tech.includes(projectFilter)),
    [projectFilter],
  );

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("todathanhdev@example.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div className="relative z-10 overflow-clip">
      <div className="grain-overlay" />
      <AnimatedGradient />

      <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(96%,76rem)] rounded-full glass">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <Link href="#home" className="text-sm font-bold uppercase tracking-[0.2em]">
            ToDat.dev
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              className="border border-border/70 bg-card/60 lg:hidden"
              aria-label="Open mobile menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-2 border-t border-border/70 px-4 py-4 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 md:pt-32">
        <section id="home" className="grid gap-8 rounded-[2rem] border border-border/70 bg-card/40 p-6 md:grid-cols-2 md:p-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <Badge className="bg-accent/35 text-accent-foreground">Minimal + Bold Portfolio</Badge>
            <h1 className="section-title text-4xl md:text-6xl">
              Topham Thanh Dat
              <br />
              <span className="text-muted-foreground">Frontend Engineer</span>
            </h1>

            <div className="space-y-2 font-mono text-sm text-muted-foreground">
              {["Build fast.", "Design sharp.", "Ship impact."].map((line, idx) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: [0.35, 1, 0.65], x: 0 }}
                  transition={{
                    duration: 2.4,
                    delay: idx * 0.15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Mình xây sản phẩm web theo hướng trực diện: ít noise, điểm nhấn rõ, trải nghiệm mượt
              trên cả desktop và mobile.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">
                  Xem dự án
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Liên hệ</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto flex w-full max-w-md items-center justify-center"
          >
            <motion.div
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 240, damping: 16 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full overflow-hidden rounded-[2rem] border border-border/70 bg-secondary/30 p-4"
            >
              <Image
                src="/avatar.svg"
                alt="Profile avatar"
                width={560}
                height={560}
                className="h-auto w-full rounded-[1.5rem]"
                priority
              />
              <div className="absolute bottom-6 left-6 rounded-full border border-border/80 bg-card/90 px-4 py-2 text-xs uppercase tracking-[0.22em]">
                Available for work
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="section-title mb-8 text-3xl md:text-4xl"
          >
            About Me
          </motion.h2>

          <div className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-3">
            {ABOUT_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={index === 0 ? "md:col-span-2" : index === 3 ? "md:col-span-2" : ""}
              >
                <Card className="h-full bg-card/65 transition-transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <card.icon className="size-5 text-muted-foreground" />
                      {card.title}
                    </CardTitle>
                    <CardDescription>{card.body}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="section-title mb-8 text-3xl md:text-4xl"
          >
            Skills & Tech Stack
          </motion.h2>

          <div className="mb-6 flex flex-wrap gap-2">
            {skillFilters.map((filter) => (
              <Button
                key={filter}
                variant={skillFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSkillFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.38, delay: idx * 0.04 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Card className="h-full bg-card/65">
                  <CardContent className="flex items-center justify-between p-5">
                    <div>
                      <p className="font-semibold">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">{skill.note}</p>
                    </div>
                    <skill.icon className="size-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="section-title mb-8 text-3xl md:text-4xl"
          >
            Projects / Portfolio
          </motion.h2>

          <div className="mb-6 flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <Button
                key={filter}
                variant={projectFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.42, delay: idx * 0.07 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full overflow-hidden bg-card/65">
                  <div className="relative h-52">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="space-y-3">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-1">
                      <Button asChild size="sm">
                        <Link href={project.github} target="_blank">
                          <Github className="size-4" />
                          GitHub
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="size-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="section-title mb-8 text-3xl md:text-4xl"
          >
            Experience / Timeline
          </motion.h2>

          <div className="relative pl-6 md:pl-8">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
            <div className="space-y-6">
              {EXPERIENCES.map((item, idx) => (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.72rem] top-6 h-3 w-3 rounded-full bg-ring md:-left-[2.2rem]" />
                  <Card className="bg-card/65">
                    <CardHeader>
                      <CardTitle className="flex flex-wrap items-center gap-2">
                        {item.role}
                        <span className="text-muted-foreground">@ {item.company}</span>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        {item.date}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">{item.impact}</p>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="section-title mb-8 text-3xl md:text-4xl"
          >
            Blog
          </motion.h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {BLOG_PREVIEWS.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.42, delay: idx * 0.08 }}
              >
                <Card className="h-full bg-card/65 transition-transform hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <CardTitle className="leading-tight">{post.title}</CardTitle>
                    <CardDescription>{post.summary}</CardDescription>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${post.slug}`}>
                        Đọc full
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="section-title mb-8 text-3xl md:text-4xl"
          >
            Contact
          </motion.h2>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="bg-card/65">
              <CardHeader>
                <CardTitle>Gửi tin nhắn</CardTitle>
                <CardDescription>Điền nhanh form, mình phản hồi trong 24h.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setFormSent(true);
                    setTimeout(() => setFormSent(false), 2200);
                  }}
                >
                  <Input placeholder="Tên của bạn" required />
                  <Input type="email" placeholder="Email" required />
                  <Textarea placeholder="Nội dung cần trao đổi..." required />
                  <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit">Gửi liên hệ</Button>
                    {formSent && (
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4" />
                        Đã gửi tạm (demo UI)
                      </span>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card/65">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Mail className="size-4" />
                    Social & Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {SOCIAL_LINKS.map((social) => (
                    <Button key={social.label} asChild variant="outline" className="w-full justify-start">
                      <Link href={social.href} target="_blank">
                        <social.icon className="size-4" />
                        {social.label}
                      </Link>
                    </Button>
                  ))}

                  <Button variant="secondary" className="w-full justify-start" onClick={onCopyEmail}>
                    <Copy className="size-4" />
                    {copiedEmail ? "Đã copy email" : "Copy email"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden bg-card/65">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <MapPin className="size-4" />
                    Ho Chi Minh City, Vietnam
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-44 rounded-2xl border border-border/70 bg-[radial-gradient(circle_at_20%_30%,rgba(137,165,255,0.35),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(0,216,255,0.3),transparent_32%),linear-gradient(120deg,rgba(38,39,51,0.76),rgba(10,12,20,0.95))]" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-12 w-[min(95%,76rem)] rounded-3xl border border-border/70 bg-card/50 px-6 py-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} To Dat. All rights reserved.</p>
          <p className="font-mono">Made with ❤️ & Next.js</p>
        </div>
      </footer>
    </div>
  );
}

function AnimatedGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, 120, 20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-36 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"
        animate={{ x: [0, -90, -20, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
        animate={{ x: [0, 100, -60, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  );
}
