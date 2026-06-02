import type { ReactNode } from "react";
import { guideContentsPart01 } from "./kaigo_part_01";
import { guideContentsPart02 } from "./kaigo_part_02";
import { guideContentsPart03 } from "./kaigo_part_03";
import { guideContentsPart04 } from "./kaigo_part_04";
import { guideContentsPart05 } from "./kaigo_part_05";
import { guideContentsPart06 } from "./kaigo_part_06";
import { guideContentsP107Override } from "./kaigo_p107_override";
import { guideContentsP108Override } from "./kaigo_p108_override";

export const guideContents: Record<string, ReactNode> = {
  ...guideContentsPart01,
  ...guideContentsPart02,
  ...guideContentsPart03,
  ...guideContentsPart04,
  ...guideContentsPart05,
  ...guideContentsPart06,
  ...guideContentsP107Override,
  ...guideContentsP108Override,
};
