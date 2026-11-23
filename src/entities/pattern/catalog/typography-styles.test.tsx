import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentType } from "react";
import { describe, expect, it } from "vitest";

import { AcidGraphicDemo } from "@/entities/pattern/catalog/acid-graphic/AcidGraphicDemo";
import { ArtDecoDemo } from "@/entities/pattern/catalog/art-deco/ArtDecoDemo";
import { BauhausDemo } from "@/entities/pattern/catalog/bauhaus/BauhausDemo";
import { BlackletterDemo } from "@/entities/pattern/catalog/blackletter/BlackletterDemo";
import { BrutalistTypographyDemo } from "@/entities/pattern/catalog/brutalist-typography/BrutalistTypographyDemo";
import { Y2KChromeDemo } from "@/entities/pattern/catalog/chrome-typography/Y2KChromeDemo";
import { ChunkyDemo } from "@/entities/pattern/catalog/chunky/ChunkyDemo";
import { ComicPopArtDemo } from "@/entities/pattern/catalog/comic-pop-art/ComicPopArtDemo";
import { CutoutCollageDemo } from "@/entities/pattern/catalog/cutout-collage/CutoutCollageDemo";
import { EditorialTypographyDemo } from "@/entities/pattern/catalog/editorial-typography/EditorialTypographyDemo";
import { EmbossDemo } from "@/entities/pattern/catalog/emboss/EmbossDemo";
import { GlitchDemo } from "@/entities/pattern/catalog/glitch/GlitchDemo";
import { GradientTypographyDemo } from "@/entities/pattern/catalog/gradient-typography/GradientTypographyDemo";
import { GraffitiDemo } from "@/entities/pattern/catalog/graffiti/GraffitiDemo";
import { HandLetteringDemo } from "@/entities/pattern/catalog/hand-lettering/HandLetteringDemo";
import { Inflated3DDemo } from "@/entities/pattern/catalog/inflated-three-d/Inflated3DDemo";
import { KineticTypographyDemo } from "@/entities/pattern/catalog/kinetic-typography/KineticTypographyDemo";
import { MinimalTypographyDemo } from "@/entities/pattern/catalog/minimal-typography/MinimalTypographyDemo";
import { MonospaceTypeDemo } from "@/entities/pattern/catalog/monospace/MonospaceTypeDemo";
import { NeoBrutalistTypographyDemo } from "@/entities/pattern/catalog/neo-brutalist-typography/NeoBrutalistTypographyDemo";
import { NeonSignDemo } from "@/entities/pattern/catalog/neon-sign/NeonSignDemo";
import { OutlineTypeDemo } from "@/entities/pattern/catalog/outline/OutlineTypeDemo";
import { PixelTypographyDemo } from "@/entities/pattern/catalog/pixel-typography/PixelTypographyDemo";
import { RetroGroovyDemo } from "@/entities/pattern/catalog/retro-groovy/RetroGroovyDemo";
import { StencilDemo } from "@/entities/pattern/catalog/stencil/StencilDemo";
import { SwissStyleDemo } from "@/entities/pattern/catalog/swiss-style/SwissStyleDemo";
import { ThreeDExtrudeDemo } from "@/entities/pattern/catalog/three-d-extrude/ThreeDExtrudeDemo";

const DEMOS: readonly (readonly [string, ComponentType])[] = [
  ["Acid Graphic", AcidGraphicDemo],
  ["Glitch", GlitchDemo],
  ["Bauhaus", BauhausDemo],
  ["Art Deco", ArtDecoDemo],
  ["Outline", OutlineTypeDemo],
  ["Monospace", MonospaceTypeDemo],
  ["Hand Lettering", HandLetteringDemo],
  ["Minimal Typography", MinimalTypographyDemo],
  ["Brutalist Typography", BrutalistTypographyDemo],
  ["Neo-brutalist Typography", NeoBrutalistTypographyDemo],
  ["Swiss Style", SwissStyleDemo],
  ["Editorial Typography", EditorialTypographyDemo],
  ["Chunky", ChunkyDemo],
  ["Retro Groovy", RetroGroovyDemo],
  ["Pixel Typography", PixelTypographyDemo],
  ["Kinetic Typography", KineticTypographyDemo],
  ["Neon Sign", NeonSignDemo],
  ["Graffiti", GraffitiDemo],
  ["Blackletter", BlackletterDemo],
  ["Stencil", StencilDemo],
  ["Comic Pop Art", ComicPopArtDemo],
  ["Cutout Collage", CutoutCollageDemo],
  ["3D Extrude", ThreeDExtrudeDemo],
  ["Gradient Typography", GradientTypographyDemo],
  ["Emboss", EmbossDemo],
  ["Inflated 3D", Inflated3DDemo],
  ["Y2K Chrome", Y2KChromeDemo],
];

describe("typography style demos", () => {
  it.each(DEMOS)(
    "%s sets the shared phrase and compares it with plain text",
    async (_name, Demo) => {
      const user = userEvent.setup();
      const { container } = render(<Demo />);
      const labelled = container.querySelector(
        '[aria-label="주말 마켓"], [aria-label="Weekend Market"]',
      );
      expect(labelled ?? container).toBeTruthy();
      if (!labelled) expect(container.textContent).toMatch(/주말\s*마켓/);
      expect(screen.getByText("11월 29일 서울숲")).toBeInTheDocument();
      await user.click(screen.getByRole("radio", { name: "기본 글자" }));
      expect(screen.getByText("주말 마켓", { selector: "p" })).toHaveClass("text-5xl");
      await user.click(screen.getByRole("radio", { name: "이 스타일" }));
      expect(screen.getByRole("radio", { name: "이 스타일" })).toBeChecked();
    },
  );
});
