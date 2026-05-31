import type { ReactNode } from "react";
import { guideContentsPart01 } from "./kaigo_part_01";
import { guideContentsPart02 } from "./kaigo_part_02";
import { guideContentsPart03 } from "./kaigo_part_03";
import { guideContentsPart04 } from "./kaigo_part_04";
import { guideContentsPart05 } from "./kaigo_part_05";
import { guideContentsPart06 } from "./kaigo_part_06";

export const guideContents: Record<string, ReactNode> = {
  ...guideContentsPart01,
  ...guideContentsPart02,
  ...guideContentsPart03,
  ...guideContentsPart04,
  ...guideContentsPart05,
  ...guideContentsPart06,
};
