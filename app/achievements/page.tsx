import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ACHIEVEMENTS, EXPERIENCES } from "@/lib/data";

export default function AchievementsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Achievements
        </p>
        <h1 className="section-title text-4xl md:text-5xl">Wins and Timeline</h1>
        <p className="max-w-3xl text-muted-foreground">
          Trang nay tach rieng de ban de cap nhat milestone, ket qua va kinh nghiem.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {ACHIEVEMENTS.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="font-mono text-xs uppercase tracking-[0.2em]">
                {item.period}
              </CardDescription>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="section-title text-2xl md:text-3xl">Experience Timeline</h2>
        <div className="relative pl-6 md:pl-8">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
          <div className="space-y-4">
            {EXPERIENCES.map((item) => (
              <Card key={`${item.company}-${item.role}`} className="relative">
                <span className="absolute -left-[1.72rem] top-6 h-3 w-3 rounded-full bg-ring md:-left-[2.2rem]" />
                <CardHeader>
                  <CardTitle>
                    {item.role} <span className="text-muted-foreground">@ {item.company}</span>
                  </CardTitle>
                  <CardDescription>{item.date}</CardDescription>
                  <p className="text-sm text-muted-foreground">{item.impact}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
