import { ABOUT_CARDS, SKILLS } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">About</p>
        <h1 className="section-title text-4xl md:text-5xl">About Me</h1>
        <p className="max-w-3xl text-muted-foreground">
          Trang nay gom thong tin ca nhan + ky nang de ban de sua tung khoi noi dung trong
          `lib/data.ts`.
        </p>
      </section>

      <section className="grid auto-rows-[minmax(170px,auto)] gap-4 md:grid-cols-3">
        {ABOUT_CARDS.map((card, index) => (
          <Card key={card.title} className={index === 0 || index === 3 ? "md:col-span-2" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <card.icon className="size-5 text-muted-foreground" />
                {card.title}
              </CardTitle>
              <CardDescription>{card.body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="section-title text-2xl md:text-3xl">Skills Snapshot</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <Card key={skill.name}>
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <p className="font-semibold">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {skill.category} · {skill.note}
                  </p>
                </div>
                <skill.icon className="size-5 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
