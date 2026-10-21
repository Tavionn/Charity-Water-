# Flow Quest — a charity: water game

*Water for a Brighter Tomorrow*

A browser game prototype built with HTML, CSS, and JavaScript for the charity: water game project. It works on desktop and mobile.

## Play

Open `index.html` in any web browser. No installs or build steps are needed.

## Two roles

**Villager:** living without clean water nearby
- Catch clean rain drops to fill your jerry can (10 max).
- Avoid polluted drops (−20 points and a heart).
- Take your can to the biosand filter on the bridge to purify it and fill the village tank.
- Pick up litter for a cleanup bonus.
- Stay out of the Restricted Area (−25 points and a heart).
- Fill the tank to 100 to level up. Clear level 5 to win.

**Warehouse Volunteer:** packing water for delivery
- Grab cases from the conveyor belt (carry up to 3).
- Load the truck before its timer runs out.
- Put leaking cases in the recycling bin. Loading one costs 30 points.
- Jump over the forklift (−25 points, and you drop your cases).
- Mop up spills that slow you down.
- Send 5 full trucks to win.

## Controls

| Action | Keyboard | Touch / mouse |
|---|---|---|
| Move | ← → or A D | ← → buttons |
| Jump | ↑, W, or Space | ↑ button |
| Interact | E or Enter | Hand button |
| Pause | P or Esc | Menu (☰) |
| Restart | — | Reset button in the header |

## Extra credit (LevelUp)

- **Challenge that reduces score:** polluted drops, the Restricted Area, the forklift, and leaking cases all cost points.
- **Game reset:** a Reset button in the header restarts the current game at any time.
- **Celebrate wins:** a confetti burst plays when you win, with smaller bursts on level-ups.

## Files

- `index.html`: page layout (header, game area, control panels, menus)
- `style.css`: styling and the responsive layout for desktop and mobile
- `script.js`: game logic and canvas drawing

Learn more about clean water at [charitywater.org](https://www.charitywater.org).
