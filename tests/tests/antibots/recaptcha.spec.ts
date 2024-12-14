import { expect, test } from '../global-setup';
import { sleep } from '../utils';

test('test reCAPTCHA v3 on antcpt', async ({ page }) => {
    await page.goto('https://antcpt.com/score_detector/');

    let score: number = 0;
    for (let n = 0; n < 3; n++) {
        const yourScoreText = await page
            .locator('text=Your score is:')
            .innerText();
        score = parseFloat(yourScoreText.match(/(0\.\d)/)![0]!);

        if (score < 0.5) {
            await page.locator('text=Refresh score now!').click();
            await sleep(3000);
            continue;
        }

        break;
    }

    expect(score).toBeGreaterThanOrEqual(0.5);
});
