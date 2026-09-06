import { guideList, guides, type GuidePage } from '@/lib/guide-pages';
import { extraGuideList, extraGuides } from '@/lib/extra-guide-pages';
import { pillarGuideList, pillarGuides } from '@/lib/pillar-guide-pages';

export type UnifiedGuidePage = Omit<GuidePage, 'slug' | 'related'> & {
  slug: string;
  related: string[];
};

const core = guideList as unknown as UnifiedGuidePage[];
const extras = extraGuideList as UnifiedGuidePage[];
const pillars = pillarGuideList as UnifiedGuidePage[];

export const allGuideList: UnifiedGuidePage[] = [...core, ...extras, ...pillars];
export const allGuideSlugs = allGuideList.map((guide) => guide.slug);

export const allGuides: Record<string, UnifiedGuidePage> = {
  ...(guides as unknown as Record<string, UnifiedGuidePage>),
  ...(extraGuides as unknown as Record<string, UnifiedGuidePage>),
  ...(pillarGuides as unknown as Record<string, UnifiedGuidePage>),
};

export function getGuide(slug: string) {
  return allGuides[slug];
}

export function isGuideSlug(slug: string) {
  return Object.prototype.hasOwnProperty.call(allGuides, slug);
}
