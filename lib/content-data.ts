import {
  IMAGE_MAP,
  PROJECT_LAYOUT_META,
  SITE_THEME,
  getAboutCards as baseGetAboutCards,
  getAchievements as baseGetAchievements,
  getContactInfo as baseGetContactInfo,
  getExperiences as baseGetExperiences,
  getFooterCopy as baseGetFooterCopy,
  getNavLinks as baseGetNavLinks,
  getProfile as baseGetProfile,
  getProjectFilters as baseGetProjectFilters,
  getProjects as baseGetProjects,
  getSiteThemeCopy as baseGetSiteThemeCopy,
  getSkills as baseGetSkills,
  getSocialLinks as baseGetSocialLinks,
  type AchievementItem,
  type ContactInfo,
  type ExperienceItem,
  type NavLink,
  type ProfileInfo,
  type ProjectFilter,
  type ProjectFilterOption,
  type ProjectItem,
  type SkillCategory,
  type SkillItem,
  type TimelineVariant,
} from "@/lib/data";
import type { Locale } from "@/lib/i18n";
import { readContentOverrides } from "@/lib/content-storage";

type FooterCopy = ReturnType<typeof baseGetFooterCopy>;
type SiteThemeCopy = ReturnType<typeof baseGetSiteThemeCopy>;

type AboutCardEditable = {
  title: string;
  body: string;
};

type SkillEditable = {
  name: string;
  category: SkillCategory;
  note: string;
};

type SocialEditable = {
  label: string;
  href: string;
};

type ImageMapEditable = {
  homeHero: string;
  aboutSticky: string;
  resumeProfile: string;
  aboutGallery: string[];
  achievementHero: string;
  fallback: string;
};

type LocaleContentEditable = {
  navLinks: NavLink[];
  siteThemeCopy: SiteThemeCopy;
  profile: ProfileInfo;
  aboutCards: AboutCardEditable[];
  skills: SkillEditable[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  achievements: AchievementItem[];
  contactInfo: ContactInfo;
  projectFilters: ProjectFilterOption[];
  footerCopy: FooterCopy;
};

export type ManagedContent = {
  imageMap: ImageMapEditable;
  locales: Record<Locale, LocaleContentEditable>;
  socialLinks: SocialEditable[];
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function cloneProjects(projects: ProjectItem[]) {
  return projects.map((project) => ({
    ...project,
    tech: [...project.tech],
    results: [...project.results],
  }));
}

function buildLocaleContent(locale: Locale): LocaleContentEditable {
  return {
    navLinks: baseGetNavLinks(locale).map((item) => ({ ...item })),
    siteThemeCopy: { ...baseGetSiteThemeCopy(locale) },
    profile: { ...baseGetProfile(locale) },
    aboutCards: baseGetAboutCards(locale).map((card) => ({
      title: card.title,
      body: card.body,
    })),
    skills: baseGetSkills(locale).map((skill) => ({
      name: skill.name,
      category: skill.category,
      note: skill.note,
    })),
    projects: cloneProjects(baseGetProjects(locale)),
    experiences: baseGetExperiences(locale).map((item) => ({ ...item })),
    achievements: baseGetAchievements(locale).map((item) => ({ ...item })),
    contactInfo: { ...baseGetContactInfo(locale) },
    projectFilters: baseGetProjectFilters(locale).map((item) => ({ ...item })),
    footerCopy: { ...baseGetFooterCopy(locale) },
  };
}

export function getDefaultManagedContent(): ManagedContent {
  return {
    imageMap: {
      homeHero: IMAGE_MAP.homeHero,
      aboutSticky: IMAGE_MAP.aboutSticky,
      resumeProfile: IMAGE_MAP.resumeProfile,
      aboutGallery: [...IMAGE_MAP.aboutGallery],
      achievementHero: IMAGE_MAP.achievementHero,
      fallback: IMAGE_MAP.fallback,
    },
    locales: {
      vi: buildLocaleContent("vi"),
      en: buildLocaleContent("en"),
    },
    socialLinks: baseGetSocialLinks().map((item) => ({
      label: item.label,
      href: item.href,
    })),
  };
}

export function isManagedContent(value: unknown): value is ManagedContent {
  if (!value || typeof value !== "object") return false;
  const content = value as Partial<ManagedContent>;
  if (!content.imageMap || !content.locales || !content.socialLinks) return false;
  if (!content.locales.vi || !content.locales.en) return false;
  return true;
}

export function getManagedContent(): ManagedContent {
  const defaults = getDefaultManagedContent();
  const overrides = readContentOverrides();
  if (!isManagedContent(overrides)) return defaults;
  return clone(overrides);
}

function getLocaleContent(locale: Locale) {
  return getManagedContent().locales[locale];
}

export function getImageMap() {
  const defaults = getDefaultManagedContent().imageMap;
  const imageMap = getManagedContent().imageMap;
  const aboutGallery = Array.isArray(imageMap.aboutGallery) ? imageMap.aboutGallery : defaults.aboutGallery;
  return {
    ...defaults,
    ...imageMap,
    aboutGallery: [...aboutGallery],
  };
}

export function getSiteThemeCopy(locale: Locale) {
  return getLocaleContent(locale).siteThemeCopy;
}

export function getNavLinks(locale: Locale) {
  return getLocaleContent(locale).navLinks.map((item) => ({ ...item }));
}

export function getProfile(locale: Locale) {
  return { ...getLocaleContent(locale).profile };
}

export function getAboutCards(locale: Locale) {
  const baseCards = baseGetAboutCards(locale);
  const editableCards = getLocaleContent(locale).aboutCards;
  return baseCards.map((card, index) => ({
    ...card,
    title: editableCards[index]?.title ?? card.title,
    body: editableCards[index]?.body ?? card.body,
  }));
}

export function getSkills(locale: Locale): SkillItem[] {
  const baseSkills = baseGetSkills(locale);
  const editableSkills = getLocaleContent(locale).skills;
  return baseSkills.map((skill, index) => ({
    ...skill,
    name: editableSkills[index]?.name ?? skill.name,
    category: editableSkills[index]?.category ?? skill.category,
    note: editableSkills[index]?.note ?? skill.note,
  }));
}

export function getProjects(locale: Locale) {
  return cloneProjects(getLocaleContent(locale).projects);
}

export function getExperiences(locale: Locale) {
  return getLocaleContent(locale).experiences.map((item) => ({ ...item }));
}

export function getAchievements(locale: Locale) {
  return getLocaleContent(locale).achievements.map((item) => ({ ...item }));
}

export function getContactInfo(locale: Locale) {
  return { ...getLocaleContent(locale).contactInfo };
}

export function getProjectFilters(locale: Locale) {
  return getLocaleContent(locale).projectFilters.map((item) => ({ ...item }));
}

export function getFooterCopy(locale: Locale) {
  return { ...getLocaleContent(locale).footerCopy };
}

export function getSocialLinks() {
  const baseLinks = baseGetSocialLinks();
  const editableLinks = getManagedContent().socialLinks;
  return baseLinks.map((link, index) => ({
    ...link,
    label: editableLinks[index]?.label ?? link.label,
    href: editableLinks[index]?.href ?? link.href,
  }));
}

export function getProjectBySlug(slug: string, locale: Locale = "en") {
  return getProjects(locale).find((project) => project.slug === slug);
}

export { PROJECT_LAYOUT_META, SITE_THEME };
export type { ProjectFilter, ProjectItem, TimelineVariant };
