---
tags: [holiday, packing, app]
---
# Holiday checklist app

A packing and shopping checklist for family holidays ("Holiday Lists" / ReadySetHoliday). It runs in the phone's browser, works offline, and can sync ticks live between phones.

## Where everything lives

| What | Where |
|---|---|
| **The app** (open this on phones) | https://drkarim.github.io/ReadySetHoliday/ |
| Code and published lists | GitHub repo `drkarim/ReadySetHoliday` (public): https://github.com/drkarim/ReadySetHoliday |
| Hosting | GitHub Pages, publishing from the `main` branch (free) |
| Live tick sync | Firebase project `readysetholiday-fcf4b`, Realtime Database in Belgium (europe-west1), on the free **Spark** plan, so no card on file and it can't charge anything. Console: https://console.firebase.google.com |
| Local copy on the Mac | `~/Documents/rashed/Code/holiday-list` |
| Bot instructions | `BOT_GUIDE.md` in the local folder (not on GitHub) |

**Files in the repo:**
- `index.html`: the whole app, with the Barbados 2026 list built in.
- `sw.js`: lets the app open without signal. It must sit next to `index.html`.
- `lists/`: published lists for short links, for example `lists/barbados.csv`, plus `lists/lists.json` with trip details.
- `README.md`: technical notes, including a copy of the Firebase database rules.

> [!important] Where your data is saved
> Lists and ticks are saved **on each phone, in the browser**. There are no accounts. Live sync shares **ticks only**. Added or edited items are shared with a share link.

---

## 1. Put the app on a phone (once per phone)

**iPhone:**
1. Open https://drkarim.github.io/ReadySetHoliday/ in **Safari**.
2. Tap **Share** (the square with an arrow), then **Add to Home Screen**, then **Add**.
3. Open the app from the new icon **once while you have signal**. It then works offline.

**Android:**
1. Open the link in **Chrome**.
2. Tap **⋮**, then **Add to Home screen** (or **Install app**).
3. Open it once while online.

> [!warning] iPhone: the Home Screen app and Safari keep separate data
> Always use the Home Screen icon. When someone sends you a link, **copy it** and paste it into **Paste a shared link or code** on the app's home screen. Tapping the link would open it in Safari's separate copy.

---

## 2. Start a checklist for a new holiday

### Option A: reuse a previous trip's list, all unticked (usual choice)
1. On the app's **home screen** (tap ‹ at the top left if you're inside a trip), tap **＋ New trip**.
2. Fill in:
   - **Trip name**, for example `Lisbon Easter 2027`;
   - **Details** (optional), for example `LGW → LIS · Airbnb · 5 nights`;
   - **First day** and **Last day** (optional; the trip card then shows a countdown).
3. Under **"Or reuse another trip's items (all unticked)"**, pick the old trip, for example **Barbados**, and tap **Copy those items**.
4. The new trip opens with the same items, categories, notes and quantities, all unticked. The old trip stays as it was.

### Option B: start from a CSV file
1. Tap **＋ New trip**, fill in the name and dates, then tap **Upload a CSV file**.
2. Tap **Download a template** for an example file. The columns are described in section 9.

### Option C: start empty
Tap **＋ New trip**, then **Start with an empty list**, then add items with **＋**.

### Then tidy the list for the new destination
Remove or change items that only applied to the last trip, such as:
- the entry form (for Barbados, travelform.gov.bb);
- accommodation deposits, flight numbers and the address;
- destination-specific customs notes. For Barbados these were the camouflage ban, meat and dairy permits, and declaring cash over BDS$10,000.

To edit:
- **Change or delete an item:** in the **List** tab, tap the item, then **✎ Edit**. Use **Save** or **Delete**; Delete shows an **Undo** button for a few seconds.
- **Add an item:** tap **＋** in the header, or **＋ Add an item** at the bottom of the list.
- **Rename the trip or change its dates:** **More → Rename trip / change dates**.

---

## 3. Share the new trip with Tasmia and turn on live sync

The new trip exists only on the phone that made it. Each trip has its own live sync, so do these steps for every new trip.

1. **Send her the list.** On your phone, tap **More → Share this list → Create share link**, then **Share…** (or **Copy**) and send it on WhatsApp.
   - On her phone, she pastes it into **Paste a shared link or code** on the home screen and taps **Add to this phone**.
2. **Start live sync.** On your phone, tap **More → Live sync → Start live sync**. The header shows **● Live**.
3. **Invite her phone.** Tap **Invite another phone**, then **Share…**, and send her that link too.
   - On her phone, she pastes it into **Paste a shared link or code** and taps **Turn on live sync**.
   - Both phones' ticks are merged, with the newest change for each item winning. From then on, ticks appear on the other phone within about a second.
4. **Optional, for one link instead of two:** publish the list first (section 7). The invite link then also adds the list, so she only needs the invite.

> [!tip] Live sync status in the header
> - **● Live**: connected.
> - **○ Sync…**: connecting.
> - **○ Offline**: ticks are saved on the phone and sent when you're back online.
> - **⚠ Sync**: not working. Turn live sync off and join again (section 10).

Anyone with the invite link can see and change that trip's ticks, so only send it to family.

---

## 4. Everyday use

The four tabs at the bottom are **Dashboard**, **List**, **Focus** and **More**.

### Dashboard
- Overall progress (percentage, and packed out of the total).
- Three quick buttons: **🛒 Need to buy**, **▲ Critical only** and **☐ Not packed yet**. Each one opens the List with that filter on.
- **Critical still waiting**: the most important list. You can tick items here directly.
- Progress by criticality, by source (buy, home, host) and by category. Tap any bar to see those items.

### List
- Items are grouped by category. Tap a category heading to collapse it.
- **Tick** with the box on the right of each row.
- **Tap a row** to see the full name, the reason it's critical and the notes:
  - customs or legal notes appear in an amber **⚠ Customs / legal note** box;
  - the word **UNVERIFIED** is highlighted.
- The **search box** searches item names, notes and categories.
- The **filter buttons**: Not packed, ▲ Critical, ● Important, ◇ Nice to have, Need to buy, Have at home, Provided by host.
- The **category buttons** show "packed/total" for each category.

**Row labels:**
- Criticality: **▲C** Critical, **●I** Important, **◇N** Nice to have. Critical rows also have a red bar on the left.
- Source: **BUY**, **HOME**, **HOST**.
- **⚠** before a name means the item has a customs or legal note.

### Focus (one item at a time)
- Shows the items still to pack, using the current filters, search and category. Use it for packing at the suitcase, or shopping one aisle at a time.
- **Done ✓**, or swipe right, packs the item. **Skip**, or swipe left, moves on. **‹ Back** goes back one item.
- At the end, **Go through the skipped items** runs through what's left.

### More
- **Share this list**, **Live sync**, **Sync ticks by message**, **Edit**, **Appearance** (follow phone, light or dark) and **Reset**.

---

## 5. Sharing and syncing: which to use

| Need | Use |
|---|---|
| Give someone the list | **More → Share this list** (short link if the list is published, otherwise the full link) |
| Ticks updating live between phones | **More → Live sync** (the invite link) |
| Merge ticks without live sync | **More → Sync ticks by message**: one phone taps **Send my ticks**, the other taps **Import ticks** and pastes it in |
| Someone else's list changed (items added or edited) | They send the share link again; you tap **Update my copy** (your ticks are kept) |

How merging works: for each item, the **most recent change wins**, including un-ticks.

---

## 6. The holiday bot (Grok)

The bot can read progress and tick items through the database. To use it for a new trip:
1. Start live sync for the new trip (section 3).
2. Give the bot the new **sync key**: the part of the invite link after `live=`, up to the next `&`.
3. Tell it the new trip's name and dates. Its guide (`BOT_GUIDE.md`) is written for Barbados and reads item names from `lists/barbados.csv`, so either:
   - publish the new list (section 7) and tell the bot its address, for example `https://drkarim.github.io/ReadySetHoliday/lists/lisbon-easter-2027.csv`; or
   - expect ticks on new or renamed items to show as "unknown item #id".

Database address used by the bot:
```
https://readysetholiday-fcf4b-default-rtdb.europe-west1.firebasedatabase.app/rooms/<SYNC_KEY>/ticks.json
```
- Reading: GET.
- Ticking: PATCH `{"i<id>": {"p": 1, "t": <current time in ms>}}`. Use `"p": 0` to untick.
- Never PUT or DELETE, because that wipes everyone's ticks.

---

## 7. Publish a list for a short link (optional)

Short link format: `https://drkarim.github.io/ReadySetHoliday/?list=<name>`

1. In the app, open the trip and tap **More → Download this list as CSV**. The file is named after the trip, for example `lisbon-easter-2027.csv`.
2. On GitHub, open the repo, then the **lists** folder, then **Add file → Upload files**. Upload the CSV **without renaming it** and tap **Commit changes**.
3. Wait 1–2 minutes. **More → Share this list** now gives the short link.
4. Optional: to show the trip's details and dates when someone opens the link, edit `lists/lists.json` on GitHub and add an entry:
   ```json
   "lisbon-easter-2027": {
     "name": "Lisbon Easter 2027",
     "sub": "LGW → LIS · Airbnb · 5 nights",
     "start": "2027-04-02",
     "end": "2027-04-07"
   }
   ```
   Keep the commas between entries correct. Without an entry, the trip name comes from the file name.

Notes:
- **No ticks:** short links hold the published list, not ticks.
- **Changing a published list:** upload the edited CSV again. People who already have it open the link again and tap **Update my copy**.
- **Public:** the repo is public, so published lists can be seen by anyone who finds them. Don't put private details in a published list.

---

## 8. After the trip

- **Keep the old trip** as a record and a template. It stays until you delete it.
- **Remove it from a phone:** **More → Delete this trip from this phone**. Other phones keep their copies.
- **Turn off live sync** for an old trip with **More → Turn off live sync on this phone**.
- **Reset options** (each asks you to confirm):
  - **Untick everything:** with live sync on, this also unticks the other phones.
  - **Restore the original list:** removes edits and ticks on this phone.

> [!warning] Don't reuse a finished trip by unticking it
> Use **＋ New trip → Copy those items** instead. Unticking the old trip loses its record and, with live sync, unticks everyone else too.

---

## 9. CSV format

Header row (only `item` is required):
```
id,category,item,qty,source,criticality,why_critical,notes,packed,sort_order
```
- `source`: `Need to buy`, `Have at home` or `Provided - check with host`.
- `criticality`: `Critical`, `Important` or `Nice to have`.
- `packed`: `yes` or `no` (the starting state).
- `sort_order`: the order within the category. Put Critical items first.
- Text containing commas must be in double quotes.

---

## 10. Troubleshooting

| Problem | Fix |
|---|---|
| App looks old or a new feature is missing | Open the app while online, close it, then open it again. The first open downloads the update, and the second uses it. |
| Opens blank with no signal | It needs one open with signal after it's installed. |
| A link opened in Safari, not the app (iPhone) | Copy the link and paste it into **Paste a shared link or code** in the Home Screen app. |
| Header shows **⚠ Sync** | The invite link was wrong or incomplete. Use **More → Turn off live sync**, then join again with a fresh invite link. |
| Ticks not reaching the other phone | Check both phones show **● Live** for the **same trip**. The other phone gets them when its app is open. |
| "No list called … has been published yet" | Check the CSV is in the repo's `lists` folder with exactly that name, then wait 1–2 minutes. |
| Phone storage was cleared | Trips on that phone are gone. Get the list again from a share link, then rejoin live sync to get the ticks back. |

---

## 11. Updating the app itself (on the Mac)

- **Where it is:** the app is in `~/Documents/rashed/Code/holiday-list`, connected to the GitHub repo.
- **Deploying:** after changing files, commit and push to `main`. GitHub Pages republishes in about a minute.
  ```bash
  git -C ~/Documents/rashed/Code/holiday-list commit -am "Update" && git -C ~/Documents/rashed/Code/holiday-list push
  ```
- **Built-in Barbados list:** this list is embedded in `index.html`. To change the built-in list, it's easiest to ask Claude Code to rebuild it from a new CSV.
- **Firebase database rules:** these are in `README.md` (also in Firebase console → Realtime Database → Rules). They only allow reading and writing a trip's ticks with its exact random key.
- **Cost:**
  - GitHub Pages is free.
  - Firebase is on the free Spark plan. If its limits were ever reached, sync would pause; there's no bill.
