import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentType } from "react";
import { describe, expect, it } from "vitest";

import { FlatDesignDemo } from "@/entities/pattern/catalog/flat-design/FlatDesignDemo";
import { MaterialDesignDemo } from "@/entities/pattern/catalog/material-design/MaterialDesignDemo";
import { GlassmorphismDemo } from "@/entities/pattern/catalog/glassmorphism/GlassmorphismDemo";
import { NeumorphismDemo } from "@/entities/pattern/catalog/neumorphism/NeumorphismDemo";
import { SkeuomorphismDemo } from "@/entities/pattern/catalog/skeuomorphism/SkeuomorphismDemo";
import { ClaymorphismDemo } from "@/entities/pattern/catalog/claymorphism/ClaymorphismDemo";
import { BrutalismDemo } from "@/entities/pattern/catalog/brutalism/BrutalismDemo";
import { MinimalismDemo } from "@/entities/pattern/catalog/minimalism/MinimalismDemo";
import { NeoBrutalismDemo } from "@/entities/pattern/catalog/neo-brutalism/NeoBrutalismDemo";
import { ThreeDIconDemo } from "@/entities/pattern/catalog/three-d-icon/ThreeDIconDemo";
import { LiquidGlassDemo } from "@/entities/pattern/catalog/liquid-glass/LiquidGlassDemo";

const DEMOS: readonly (readonly [string, ComponentType])[] = [
  ["플랫", FlatDesignDemo],
  ["머티리얼", MaterialDesignDemo],
  ["글래스모피즘", GlassmorphismDemo],
  ["뉴모피즘", NeumorphismDemo],
  ["스큐어모피즘", SkeuomorphismDemo],
  ["클레이모피즘", ClaymorphismDemo],
  ["브루털리즘", BrutalismDemo],
  ["미니멀리즘", MinimalismDemo],
  ["네오 브루털리즘", NeoBrutalismDemo],
  ["3D 아이콘", ThreeDIconDemo],
  ["리퀴드 글래스", LiquidGlassDemo],
];

describe("design style demos", () => {
  it.each(DEMOS)("draws the same playlist card in %s and keeps it usable", async (name, Demo) => {
    const user = userEvent.setup();
    render(<Demo />);
    expect(screen.getByRole("region", { name: `${name} 스타일` })).toHaveTextContent(
      "오늘의 플레이리스트",
    );
    const play = screen.getByRole("button", { name: "재생" });
    await user.click(play);
    expect(screen.getByRole("button", { name: "일시정지" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    const repeat = screen.getByRole("switch", { name: "반복" });
    expect(repeat).toBeChecked();
    await user.click(repeat);
    expect(repeat).not.toBeChecked();
  });
});
