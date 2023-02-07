import { expect } from "@storybook/jest";
import { StoryObj, Meta } from "@storybook/react";
import { within } from "@storybook/testing-library";
import React from "react";

import RootLayout from "@/app/layout";

import { SearchPageView } from "./view";

const meta: Meta<typeof SearchPageView> = {
  title: "pages/SearchPage",
  component: SearchPageView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchPageView>;

export const Default: Story = {
  args: {},
};

export const CollectionTabIsSelected: Story = {
  args: { tab: "collection" },
};

export const ArtistTabIsSelected: Story = {
  args: { tab: "artist" },
};

ArtistTabIsSelected.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(canvas.getByText("コレクション")).toBeVisible();
};
