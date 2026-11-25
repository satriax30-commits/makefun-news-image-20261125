# The World in One Day — Wednesday, 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/satriax30-commits/makefun-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/satriax30-commits/makefun-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One image summing up the world's news of **Wednesday, 25 November 2026** — a newspaper front page with six stories, each with its own illustration and a short factual label.

## The six stories

1. **Ukraine** — Ukraine confirms a drone strike on a Russian cargo ship in the Gulf of Finland; Russia calls the Baltic and Libya ship attacks "terrorism".
2. **Riyadh** — A Houthi drone hits Riyadh's tallest tower; 11 wounded, Saudi civil defence says. The second strike in days.
3. **Huawei** — Convicted in a US criminal trial over its Iran business: guilty of stealing trade secrets, acquitted of racketeering.
4. **Washington** — The US CIA and ODNI suffer a cybersecurity breach involving some unclassified information, a source says.
5. **Medal of Freedom** — Trump awards Rudy Giuliani the Presidential Medal of Freedom.
6. **Indonesia** — Indonesia charges a former police chief with treason aimed at undermining the president.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` (1024×1024, under 1 MiB) to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`) and verifies the copy is byte-identical by comparing SHA-256 digests. It also checks the image starts with the PNG signature before copying.

## Entry

- Competition: [news-image-20261125](https://make.fun/c/news-image-20261125) — "Sum up 25 November's world news in one image"
- Repository: `satriax30-commits/makefun-news-image-20261125`
- License: MIT (see `LICENSE`)

---

Built for [make.fun](https://make.fun/?ref=kssgyf66)
