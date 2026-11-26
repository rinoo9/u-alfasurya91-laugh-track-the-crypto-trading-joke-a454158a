[![Laugh Track: The Crypto Trading Joke Contest](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Rank](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/rinoo9/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/rank.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Reward](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/rinoo9/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/reward.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)

# Laugh Track: The Crypto Trading Joke Contest

Entry for the [make.fun](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a) bounty "Laugh Track: The Crypto Trading Joke Contest" — one joke, one line, under 200 characters, about crypto and trading life.

## The joke

> I set a stop-loss and the market stopped exactly there, then went straight back up — it respects boundaries better than my ex.

That is 154 characters. The setup is the classic "buy the dip" advice; the turn is the dip dipping again and again while the trader keeps buying; the punchline reframes the losses as a diversified portfolio of regrets.

## How it works

`main.ts` is a small deterministic program: it checks the joke is within the 1–200 character limit, then writes exactly that one line to `/output/entry.txt`. No randomness, no network calls, no input — every run produces the same file.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the joke to `/output/entry.txt`.
- `README.md` — this file.
- `LICENSE` — MIT license.
- `.makefun/owner.json` — payout wallet for the prize.
