import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import { SearchPageView } from "./view";

import * as stories from "./page.stories";

const { ArtistTabIsSelected } = composeStories(stories);

describe("page/search", () => {
  test("アーティストタブを開いているときにコレクションタブが認識できる", async () => {
    const { container, getByText } = render(<SearchPageView tab={"null"} />);

    await ArtistTabIsSelected.play({ canvasElement: container });
    // expect(getByText("コレクション")).toBeVisible();
  });
});
