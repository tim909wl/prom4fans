import { guideList, guides, type GuidePage } from '@/lib/guide-pages';
import { extraGuideList, extraGuides } from '@/lib/extra-guide-pages';
import { pillarGuideList, pillarGuides } from '@/lib/pillar-guide-pages';
import { searchDemandGuideList, searchDemandGuides } from '@/lib/search-demand-guide-pages';
import { searchDemandGuideList2, searchDemandGuides2 } from '@/lib/search-demand-guide-pages-2';

export type UnifiedGuidePage = Omit<GuidePage, 'slug' | 'related'> & {
  slug: string;
  related: string[];
  sources?: Array<{ label: string; href: string; note?: string }>;
};

const core = guideList as unknown as UnifiedGuidePage[];
const extras = extraGuideList as UnifiedGuidePage[];
const pillars = pillarGuideList as UnifiedGuidePage[];
const demand = searchDemandGuideList as UnifiedGuidePage[];
const demand2 = searchDemandGuideList2 as UnifiedGuidePage[];

export const allGuideList: UnifiedGuidePage[] = [...core, ...extras, ...pillars, ...demand, ...demand2];
export const allGuideSlugs = allGuideList.map((guide) => guide.slug);

export const allGuides: Record<string, UnifiedGuidePage> = {
  ...(guides as unknown as Record<string, UnifiedGuidePage>),
  ...(extraGuides as unknown as Record<string, UnifiedGuidePage>),
  ...(pillarGuides as unknown as Record<string, UnifiedGuidePage>),
  ...(searchDemandGuides as unknown as Record<string, UnifiedGuidePage>),
  ...(searchDemandGuides2 as unknown as Record<string, UnifiedGuidePage>),
};

export function getGuide(slug: string) {
  return allGuides[slug];
}

export function isGuideSlug(slug: string) {
  return Object.prototype.hasOwnProperty.call(allGuides, slug);
}
