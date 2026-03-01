import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/safe-image";
import { ABOUT_CARDS, IMAGE_MAP, SKILLS } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="mono-label text-accent">About / Profile Intelligence</p>
        <h1 className="section-title">The Architecture Behind My Work</h1>
      </section>

      <section className="asymmetric-grid gap-5">
        <article className="glass-panel col-span-12 h-fit rounded-2xl p-1 lg:col-span-5 lg:sticky lg:top-28">
          <div className="rounded-xl border border-border bg-background/60">
            <div className="flex items-center justify-between border-b border-border px-4 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              </div>
              <p className="mono-label text-muted-foreground">profile_dump.sh</p>
            </div>
            <div className="space-y-5 p-5">
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                <span className="text-accent">visitor@portfolio:~$</span> whoami
              </p>
              <p className="text-sm text-muted-foreground">
                Senior engineer focused on practical interfaces, resilient architecture and measurable
                product outcomes.
              </p>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
                <SafeImage
                  src={IMAGE_MAP.aboutSticky}
                  fallbackSrc={IMAGE_MAP.fallback}
                  alt="About profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
                <div>
                  <p className="mono-label text-muted-foreground">Location</p>
                  <p className="mt-1 text-sm">Vietnam / Remote</p>
                </div>
                <div>
                  <p className="mono-label text-muted-foreground">Experience</p>
                  <p className="mt-1 text-sm">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="col-span-12 space-y-5 lg:col-span-7">
          <div className="grid gap-5 md:grid-cols-2">
            {ABOUT_CARDS.map((card, index) => (
              <Card
                key={card.title}
                className={index === 0 ? "glass-panel md:col-span-2" : "glass-panel"}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <card.icon className="size-4 text-primary" />
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {IMAGE_MAP.aboutGallery.map((image, idx) => (
              <div key={image} className="glass-panel relative aspect-[3/4] overflow-hidden rounded-2xl p-2">
                <div className="relative h-full overflow-hidden rounded-xl">
                  <SafeImage
                    src={image}
                    fallbackSrc={IMAGE_MAP.fallback}
                    alt={`About gallery ${idx + 1}`}
                    fill
                    className="object-cover grayscale transition duration-500 hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="display-text text-4xl">Skill Nodes</CardTitle>
              <CardDescription>Mind-map inspired clusters for daily work.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="frosted-glass rounded-xl border-l-2 border-l-primary px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {skill.category} / {skill.note}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
