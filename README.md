# Holiday Lists

A packing and shopping checklist app for phones. It works offline, and the Barbados list is built in.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app, including the 128 Barbados items |
| `sw.js` | A small helper file that lets the app open with no signal. Keep it next to `index.html`. |

`.claude/` and this README aren't needed for hosting.

## Put it online for free (Netlify Drop, about 2 minutes)

1. On a computer, make a new folder called `holiday-list-site`. Copy **`index.html`** and **`sw.js`** into it.
2. Go to **https://app.netlify.com/drop**.
3. Drag the **`holiday-list-site` folder** onto the page.
4. After a few seconds you get a link like `https://random-name-123.netlify.app`. Open it to check.
5. **Keep the site.** Sites dropped without an account are deleted after about an hour. Click **"Claim site"** or sign up (free, and you can use Google) and the site stays.
6. Optional: go to **Site configuration → Change site name** and pick something like `karim-holiday`. Your link becomes `https://karim-holiday.netlify.app`.

**To update the app later:** open the site in Netlify, go to **Deploys**, and drag the folder onto the "drag and drop" area again. The link stays the same.

### Alternatives
- **GitHub Pages:** create a public repository, upload both files, then go to **Settings → Pages → Deploy from branch → main**. You get a link like `https://<you>.github.io/<repo>/`.
- **Cloudflare Pages:** go to **Workers & Pages → Create → Pages → Upload assets** and drag the folder in.
- **Railway** works too, but it's built for running servers. This app is static files, so it's more setup than you need.

## Send it to Tasmia

1. Send her the Netlify link on WhatsApp or iMessage.
2. She opens it and taps **Barbados**. The full list is already there.
3. To copy your ticks to her phone (or hers to yours):
   1. On the phone with the ticks, tap **More → Send my ticks**, then **Share…** or **Copy**, and send it.
   2. On the other phone, tap **More → Import ticks**, paste, check the preview, then tap **Merge**.
   3. For each item, the most recent change wins, and that includes un-ticks.
4. **Ticks are saved on each phone separately.** There is no server. Send your ticks after each shopping trip or packing session.

## Add to Home Screen

**iPhone (Safari):**
1. Open the link in Safari.
2. Tap **Share** (the square with an arrow), then **Add to Home Screen**, then **Add**.
3. Open the app once from the icon while you have signal. It then also works offline.
4. The Home Screen app and Safari keep **separate** lists. Use the icon from now on. If someone sends you a list link, copy it and paste it into **Paste a shared link or code** on the app's home screen. Don't tap it to open in Safari.

**Android (Chrome):**
1. Open the link in Chrome.
2. Tap **⋮ → Add to Home screen** (it may say **Install app**), then **Install**.
3. Open it once while online, and it works offline after that.

## Live sync (ticks update on both phones within seconds)

Live sync uses the free Firebase Realtime Database in project `readysetholiday-fcf4b` (Spark plan, so there's no card on file and no charges).

**Turn it on:**
1. On one phone, open the trip and tap **More → Live sync → Start live sync**. The header shows **● Live**.
2. Tap **Invite another phone**, then **Share…**, and send the link to the other phone.
3. On the other phone, open the link (or paste it into **Paste a shared link or code** in the Home Screen app) and tap **Turn on live sync**. Both phones' ticks are merged, with the newest change for each item winning.

**How it behaves:**
- **Ticks:** they show on the other phone within about a second while the app is open there. When the app opens, it catches up on anything it missed.
- **No signal:** ticks are kept on the phone (the header shows **○ Offline**) and sent when you're back online.
- **What syncs:** only ticks. Added, edited or deleted items still go through **Share this list**.
- **Who can see it:** anyone with the invite link can see and change that trip's ticks, so only send it to family. The database rules block everything that isn't addressed by a trip's random key.

**Database rules** (Firebase console → Realtime Database → Rules):
```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "rooms": {
      "$room": {
        ".read": "$room.matches(/^[A-Za-z0-9_-]{24,64}$/)",
        ".write": "$room.matches(/^[A-Za-z0-9_-]{24,64}$/)",
        "ticks": {
          "$id": {
            ".validate": "newData.hasChildren(['p', 't']) && newData.child('p').isNumber() && newData.child('t').isNumber()"
          }
        },
        "$other": { ".validate": false }
      }
    }
  }
}
```

## Short share links (`?list=name`)

Live app: **https://drkarim.github.io/ReadySetHoliday/**

A list saved in this repo's `lists` folder gets a short link:

`https://drkarim.github.io/ReadySetHoliday/?list=barbados`

Opening the link shows "Add this list to your phone?". You can also paste the link into **Paste a shared link or code** in the app. The **Share** button in the app gives the short link when one exists, and the long link otherwise.

**To publish a new list:**
1. In the app, open the trip and tap **More → Download this list as CSV**. The file is named after the trip, for example `lisbon-2027.csv`.
2. On GitHub, open the repo's **lists** folder, choose **Add file → Upload files**, add the CSV without renaming it, and commit.
3. Wait 1–2 minutes. The link is `…/ReadySetHoliday/?list=lisbon-2027`.
4. Optional: add an entry to `lists/lists.json` to show trip details and dates:
   ```json
   "lisbon-2027": { "name": "Lisbon", "sub": "LGW → LIS · 5 nights", "start": "2027-04-02", "end": "2027-04-07" }
   ```
   Without an entry, the trip name comes from the file name.

Short links only hold the published list, not anyone's ticks. Use **Send my ticks** to share progress. To change a published list, upload the edited CSV again. People who already have the list tap the link again and choose **Update my copy**, which keeps their ticks.

## Using a CSV for another holiday

On the home screen, tap **＋ New trip → Upload a CSV file**. Use the same columns as the Barbados file:

`id, category, item, qty, source, criticality, why_critical, notes, packed, sort_order`

Only `item` is required. The **Download a template** button in that screen gives you a sample file.
